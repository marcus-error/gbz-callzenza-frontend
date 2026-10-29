"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Settings, Network, Server, PhoneCall, ShieldCheck, Activity } from "lucide-react";
import { carrierService, SIPCarrier, SIPTrunk, DIDNumber } from "@/lib/services/carrier.service";
import { sipAccountService, SIPAccount } from "@/lib/services/sip-account.service";
import { SipAccountAssignmentCard } from "./SipAccountAssignmentCard";

interface CallingConfigStepProps {
  callingMode: string;
  setCallingMode: (v: string) => void;
  twilioNumber: string;
  setTwilioNumber: (v: string) => void;
  carrierId?: string;
  setCarrierId?: (v: string) => void;
  trunkId?: string;
  setTrunkId?: (v: string) => void;
  callerDidId?: string;
  setCallerDidId?: (v: string) => void;
  sipAccountId?: string;
  setSipAccountId?: (v: string) => void;
  campaignName?: string;
  agentType?: "AI" | "VOICE";
  callingHours: string;
  setCallingHours: (v: string) => void;
  timezone: string;
  setTimezone: (v: string) => void;
  maxAttempts: string;
  setMaxAttempts: (v: string) => void;
  retryDelay: string;
  setRetryDelay: (v: string) => void;
  concurrency: string;
  setConcurrency: (v: string) => void;
}

export function CallingConfigStep({
  callingMode,
  setCallingMode,
  twilioNumber,
  setTwilioNumber,
  carrierId = "",
  setCarrierId,
  trunkId = "",
  setTrunkId,
  callerDidId = "",
  setCallerDidId,
  sipAccountId = "",
  setSipAccountId,
  campaignName = "",
  agentType = "AI",
  callingHours,
  setCallingHours,
  timezone,
  setTimezone,
  maxAttempts,
  setMaxAttempts,
  retryDelay,
  setRetryDelay,
  concurrency,
  setConcurrency,
}: CallingConfigStepProps) {
  const [carriers, setCarriers] = useState<SIPCarrier[]>([]);
  const [trunks, setTrunks] = useState<SIPTrunk[]>([]);
  const [dids, setDids] = useState<DIDNumber[]>([]);
  const [sipAccounts, setSipAccounts] = useState<SIPAccount[]>([]);
  const [loadingSIP, setLoadingSIP] = useState(false);

  useEffect(() => {
    if (callingMode === "sip") {
      setLoadingSIP(true);
      Promise.all([
        carrierService.getCarriers("ACTIVE").catch(() => []),
        carrierService.getTrunks(undefined, "ACTIVE").catch(() => []),
        carrierService.getDIDs().catch(() => []),
        sipAccountService.list().catch(() => []),
      ]).then(([cList, tList, dList, sList]) => {
        setCarriers(cList || []);
        setTrunks(tList || []);
        setDids(dList || []);
        setSipAccounts(sList || []);

        const activeCarrierId = carrierId || (cList && cList.length > 0 ? cList[0].id : "");
        if (!carrierId && activeCarrierId && setCarrierId) {
          setCarrierId(activeCarrierId);
        }

        // Auto-select trunk for active carrier
        const matchingTrunk = (tList || []).find((t: any) => !activeCarrierId || t.carrier_id === activeCarrierId) || (tList || [])[0];
        if (matchingTrunk && (!trunkId || !(tList || []).some((t: any) => t.id === trunkId))) {
          if (setTrunkId) setTrunkId(matchingTrunk.id);
        }

        // Auto-select SIP Account matching active carrier or first eligible
        let currentSipAccId = sipAccountId;
        if (!currentSipAccId && sList && sList.length > 0) {
          const matchedAcc = sList.find((a: any) => a.settings?.carrier_id === activeCarrierId) || sList.find((a: any) => a.enabled) || sList[0];
          if (matchedAcc) {
            currentSipAccId = matchedAcc.id;
            if (setSipAccountId) setSipAccountId(matchedAcc.id);
          }
        }

        // Auto-select DID strictly belonging to the active SIP account
        const accountDids = (dList || []).filter((d: any) => currentSipAccId && d.sip_account_id === currentSipAccId);
        if (accountDids.length > 0) {
          if (setCallerDidId) setCallerDidId(accountDids[0].id);
          setTwilioNumber(accountDids[0].phone_number);
        } else {
          const matchedAcc = (sList || []).find((a: any) => a.id === currentSipAccId);
          if (matchedAcc?.caller_id) {
            if (setCallerDidId) setCallerDidId("");
            setTwilioNumber(matchedAcc.caller_id);
          }
        }
        setLoadingSIP(false);
      });
    }
  }, [callingMode]);

  // Find currently selected SIP account
  const selectedSipAccount = sipAccounts.find((a) => a.id === sipAccountId);

  // Available DIDs strictly scoped to the assigned SIP configuration
  const availableDids = React.useMemo(() => {
    if (sipAccountId) {
      // 1. DIDs explicitly associated with this SIP account
      const directDids = dids.filter((d: any) => d.sip_account_id === sipAccountId);
      if (directDids.length > 0) return directDids;
      // 2. DIDs embedded in SIPAccount object
      if (selectedSipAccount?.dids && selectedSipAccount.dids.length > 0) {
        return selectedSipAccount.dids as any[];
      }
      // 3. Fallback to carrier-linked DIDs if unassigned to any SIP account
      const carrierIdForAcc = selectedSipAccount?.settings?.carrier_id || carrierId;
      if (carrierIdForAcc) {
        const carrierDids = dids.filter((d: any) => d.carrier_id === carrierIdForAcc && !d.sip_account_id);
        if (carrierDids.length > 0) return carrierDids;
      }
      // 4. Synthesize option from SIP account default caller_id
      if (selectedSipAccount?.caller_id) {
        return [{
          id: `sip-acc-${selectedSipAccount.id}`,
          phone_number: selectedSipAccount.caller_id,
          name: `${selectedSipAccount.name} Default Caller ID`,
          sip_account_id: selectedSipAccount.id,
        }];
      }
      return [];
    }
    if (carrierId) {
      return dids.filter((d) => d.carrier_id === carrierId);
    }
    return dids;
  }, [sipAccountId, selectedSipAccount, dids, carrierId]);

  // Keep callerDidId and twilioNumber aligned strictly with the selected SIP account DIDs
  useEffect(() => {
    if (callingMode === "sip") {
      if (availableDids.length > 0) {
        const isCurrentValid = availableDids.some((d) => d.id === callerDidId || d.phone_number === twilioNumber);
        if (!isCurrentValid || !callerDidId) {
          const firstDid = availableDids[0];
          if (firstDid) {
            if (setCallerDidId) setCallerDidId(firstDid.id.startsWith("sip-acc-") ? "" : firstDid.id);
            setTwilioNumber(firstDid.phone_number);
          }
        }
      } else {
        if (selectedSipAccount?.caller_id) {
          if (setCallerDidId) setCallerDidId("");
          setTwilioNumber(selectedSipAccount.caller_id);
        } else {
          if (setCallerDidId) setCallerDidId("");
          setTwilioNumber("");
        }
      }
    }
  }, [callingMode, sipAccountId, availableDids]);

  const handleCarrierChange = (newCarrierId: string) => {
    if (setCarrierId) setCarrierId(newCarrierId);
    
    // Auto-select corresponding trunk
    const matchingTrunk = trunks.find((t) => t.carrier_id === newCarrierId) || trunks[0];
    if (matchingTrunk && setTrunkId) {
      setTrunkId(matchingTrunk.id);
    } else if (setTrunkId) {
      setTrunkId("");
    }

    // Auto-select matching SIP account
    const matchedAcc = sipAccounts.find((a) => a.settings?.carrier_id === newCarrierId) || sipAccounts[0];
    if (matchedAcc && setSipAccountId) {
      setSipAccountId(matchedAcc.id);
    }
  };

  const handleDidSelect = (didId: string) => {
    if (setCallerDidId) setCallerDidId(didId.startsWith("sip-acc-") ? "" : didId);
    const selDid = availableDids.find((d) => d.id === didId);
    if (selDid) {
      setTwilioNumber(selDid.phone_number);
    }
  };

  const selectedCarrier = carriers.find((c) => c.id === carrierId) || carriers[0];

  return (
    <Card className="p-6 space-y-5 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Settings className="h-5 w-5 text-indigo-500" /> Step 5: Calling Configuration
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Configure telephony delivery route, caller identification, and dialing pacing.
          </p>
        </div>
        {callingMode === "sip" && selectedCarrier && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            SIP Carrier Route: {selectedCarrier.name}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium">
            Calling Mode & Telephony Engine
          </label>
          <select
            value={callingMode}
            onChange={(e) => setCallingMode(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer focus:ring-2 focus:ring-indigo-500"
          >
            <option value="twilio">Twilio Outbound (Cloud Voice API)</option>
            <option value="sip">SIP Carrier (Asterisk / Tata / Airtel / Jio Trunk)</option>
            <option value="local">Local Test Mode (Simulated Audio)</option>
          </select>
        </div>

        {/* SIP Mode Carrier Select */}
        {callingMode === "sip" && (
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5 text-indigo-500" />
              Assigned SIP Carrier
            </label>
            <select
              value={carrierId}
              onChange={(e) => handleCarrierChange(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer"
              disabled={loadingSIP || carriers.length === 0}
            >
              {carriers.length === 0 ? (
                <option value="">No Active Carriers Available</option>
              ) : (
                carriers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.sip_host}:{c.sip_port}) - {c.provider_type}
                  </option>
                ))
              )}
            </select>
          </div>
        )}

        {/* SIP Mode Trunk Select */}
        {callingMode === "sip" && (
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-indigo-500" />
              SIP Trunk Route
            </label>
            <select
              value={trunkId}
              onChange={(e) => setTrunkId && setTrunkId(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer"
            >
              {trunks
                .filter((t) => !carrierId || t.carrier_id === carrierId)
                .map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} (Max {t.max_concurrency} lines) - {t.direction}
                  </option>
                ))}
              {trunks.filter((t) => !carrierId || t.carrier_id === carrierId).length === 0 && (
                <option value="">Default Primary Outbound Trunk</option>
              )}
            </select>
          </div>
        )}

        {/* Caller ID / DID Select */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-indigo-500" />
            {callingMode === "sip" ? "Outbound Caller DID" : "Twilio Caller ID / Number"}
          </label>
          {callingMode === "sip" ? (
            <select
              value={callerDidId}
              onChange={(e) => handleDidSelect(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer"
            >
              {availableDids.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.phone_number} {d.name ? `(${d.name})` : ""}
                </option>
              ))}
              {availableDids.length === 0 && (
                <option value="">
                  {selectedCarrier?.username ? `${selectedCarrier.username} (Trunk Default Route)` : "Default Route"}
                </option>
              )}
            </select>
          ) : (
            <Input
              value={callingMode === "local" ? "LOCAL_TEST" : twilioNumber}
              onChange={(e) => setTwilioNumber(e.target.value)}
              disabled={callingMode === "local"}
              placeholder="e.g. +1234567890"
              className="font-medium disabled:opacity-50 disabled:bg-gray-50"
            />
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium">
            Allowed calling hours
          </label>
          <Input
            value={callingHours}
            onChange={(e) => setCallingHours(e.target.value)}
            placeholder="e.g. 09:00-18:00"
            className="font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium">
            Timezone Offset
          </label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer"
          >
            <option value="Local">Local (Lead's timezone)</option>
            <option value="UTC">UTC</option>
            <option value="EST">EST / America New York</option>
            <option value="IST">IST / Asia Kolkata</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium">
            Max attempts per lead
          </label>
          <Input
            type="number"
            min="1"
            value={maxAttempts}
            onChange={(e) => setMaxAttempts(e.target.value)}
            className="font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium">
            Retry delay (Minutes)
          </label>
          <Input
            type="number"
            min="1"
            value={retryDelay}
            onChange={(e) => setRetryDelay(e.target.value)}
            className="font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium">
            Concurrency (Parallel lines)
          </label>
          <Input
            type="number"
            min="1"
            value={concurrency}
            onChange={(e) => setConcurrency(e.target.value)}
            className="font-medium"
          />
        </div>
      </div>

      {callingMode === "sip" && (
        <div className="pt-4 border-t border-slate-200/80">
          <SipAccountAssignmentCard
            campaignName={campaignName}
            agentType={agentType}
            direction="OUTBOUND"
            selectedSipAccountId={sipAccountId}
            onSelectSipAccount={(id: string, acc: any) => {
              if (setSipAccountId) setSipAccountId(id);
              const accDids = acc?.dids || dids.filter((d: any) => d.sip_account_id === id);
              if (accDids.length > 0) {
                if (setCallerDidId) setCallerDidId(accDids[0].id);
                if (setTwilioNumber) setTwilioNumber(accDids[0].phone_number);
              } else if (acc?.caller_id) {
                if (setCallerDidId) setCallerDidId("");
                if (setTwilioNumber) setTwilioNumber(acc.caller_id);
              } else {
                if (setCallerDidId) setCallerDidId("");
                if (setTwilioNumber) setTwilioNumber("");
              }
              const s = acc?.settings;
              if (s?.carrier_id && setCarrierId) {
                setCarrierId(s.carrier_id);
              }
              if (s?.trunk_id && setTrunkId) {
                setTrunkId(s.trunk_id);
              }
            }}
          />
        </div>
      )}
    </Card>
  );
}
