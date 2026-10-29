"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { integrationService, Integration } from "@/lib/services/integration.service";

export function IntegrationsTab() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [elevenlabsKey, setElevenlabsKey] = useState("");
  const [geminiKey, setGeminiKey] = useState("");
  
  // SIP States
  const [sipHost, setSipHost] = useState("");
  const [sipProxy, setSipProxy] = useState("");
  const [sipDomain, setSipDomain] = useState("");
  const [sipUsername, setSipUsername] = useState("");
  const [sipLogin, setSipLogin] = useState("");
  const [sipPassword, setSipPassword] = useState("");
  const [sipPort, setSipPort] = useState("5060");
  const [sipDialingPrefix, setSipDialingPrefix] = useState("");
  const [sipTransport, setSipTransport] = useState("UDP");

  // Twilio States
  const [twilioSid, setTwilioSid] = useState("");
  const [twilioToken, setTwilioToken] = useState("");
  const [twilioPhone, setTwilioPhone] = useState("");

  useEffect(() => {
    integrationService.list()
      .then((data) => {
        setIntegrations(data);
        const elevenlabs = data.find((i) => i.provider === "elevenlabs");
        if (elevenlabs) setElevenlabsKey(elevenlabs.config.api_key || "");
        
        const sip = data.find((i) => i.provider === "sip");
        if (sip) {
          setSipHost(sip.config.host || sip.config.server || "");
          setSipProxy(sip.config.proxy || "");
          setSipDomain(sip.config.domain || "");
          setSipUsername(sip.config.username || "");
          setSipLogin(sip.config.login || "");
          setSipPassword(sip.config.password || "");
          setSipPort(sip.config.port || "5060");
          setSipDialingPrefix(sip.config.dialing_prefix || "");
          setSipTransport(sip.config.transport || "UDP");
        }
        
        const gemini = data.find((i) => i.provider === "gemini");
        if (gemini) setGeminiKey(gemini.config.api_key || "");

        const twilio = data.find((i) => i.provider === "twilio");
        if (twilio) {
          setTwilioSid(twilio.config.account_sid || "");
          setTwilioToken(twilio.config.auth_token || "");
          setTwilioPhone(twilio.config.phone_number || "");
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  const handleSave = async (provider: string, config: Record<string, any>) => {
    setError(null);
    setSuccess(null);
    try {
      await integrationService.save({ provider, config });
      setSuccess(`${provider.toUpperCase()} credentials saved successfully!`);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="animate-in fade-in duration-300">
      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
      {success && <p className="text-sm text-green-600 mb-4">{success}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SIP Telephony */}
        <Card className="p-6 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded">📞</div>
            <div>
              <h2 className="font-semibold text-lg">SIP Telephony</h2>
              <p className="text-xs text-gray-500">Outbound calling via SIP trunk</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-600">SIP Host / Server</label>
                <Input type="text" value={sipHost} onChange={(e) => setSipHost(e.target.value)} placeholder="sip.carrier.com" className="h-10 bg-slate-50" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-600">SIP Proxy</label>
                <Input type="text" value={sipProxy} onChange={(e) => setSipProxy(e.target.value)} placeholder="sip.carrier.com" className="h-10 bg-slate-50" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-600">Domain</label>
                <Input type="text" value={sipDomain} onChange={(e) => setSipDomain(e.target.value)} placeholder="sip.carrier.com" className="h-10 bg-slate-50" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-600">Dialing Prefix</label>
                <Input type="text" value={sipDialingPrefix} onChange={(e) => setSipDialingPrefix(e.target.value)} placeholder="e.g. 9 or 00" className="h-10 bg-slate-50 font-mono" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-600">Username / Extension</label>
                <Input type="text" value={sipUsername} onChange={(e) => setSipUsername(e.target.value)} placeholder="e.g. 1001" className="h-10 bg-slate-50" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-600">Login</label>
                <Input type="text" value={sipLogin} onChange={(e) => setSipLogin(e.target.value)} placeholder="e.g. 1001" className="h-10 bg-slate-50" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-xs font-semibold mb-1 text-gray-600">Password</label>
                <Input type="password" value={sipPassword} onChange={(e) => setSipPassword(e.target.value)} placeholder="••••••••••••" className="h-10 bg-slate-50" />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-600">Port / Transport</label>
                <div className="flex gap-1">
                  <Input type="text" value={sipPort} onChange={(e) => setSipPort(e.target.value)} placeholder="5060" className="h-10 bg-slate-50 w-20" />
                  <select
                    value={sipTransport}
                    onChange={(e) => setSipTransport(e.target.value)}
                    className="h-10 bg-slate-50 border border-slate-200 rounded-lg text-xs px-2 font-bold focus:outline-none"
                  >
                    <option value="UDP">UDP</option>
                    <option value="TCP">TCP</option>
                  </select>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => handleSave("sip", {
                host: sipHost,
                server: sipHost,
                proxy: sipProxy,
                domain: sipDomain,
                username: sipUsername,
                login: sipLogin,
                password: sipPassword,
                port: sipPort,
                dialing_prefix: sipDialingPrefix,
                transport: sipTransport,
              })}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl cursor-pointer"
            >
              Save SIP Credentials
            </Button>
          </div>
        </Card>

        {/* ElevenLabs */}
        <Card className="p-6 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-50 text-green-600 rounded">🗣️</div>
            <div>
              <h2 className="font-semibold text-lg">ElevenLabs Speech</h2>
              <p className="text-xs text-gray-500">Expressive voice synthesis</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-gray-600">API Key</label>
              <Input type="password" value={elevenlabsKey} onChange={(e) => setElevenlabsKey(e.target.value)} placeholder="sk_..." autoComplete="new-password" className="h-12 bg-slate-50" />
            </div>
            <Button size="sm" onClick={() => handleSave("elevenlabs", { api_key: elevenlabsKey })} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
              Save ElevenLabs Key
            </Button>
          </div>
        </Card>

        {/* Gemini */}
        <Card className="p-6 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-50 text-purple-600 rounded">🤖</div>
            <div>
              <h2 className="font-semibold text-lg">Google Gemini</h2>
              <p className="text-xs text-gray-500">AI reasoning and prompts</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-gray-600">API Key</label>
              <Input type="password" value={geminiKey} onChange={(e) => setGeminiKey(e.target.value)} placeholder="AIzaSy..." autoComplete="new-password" className="h-12 bg-slate-50" />
            </div>
            <Button size="sm" onClick={() => handleSave("gemini", { api_key: geminiKey })} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
              Save Gemini Key
            </Button>
          </div>
        </Card>

        {/* Twilio */}
        <Card className="p-6 space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-50 text-red-600 rounded">💬</div>
            <div>
              <h2 className="font-semibold text-lg">Twilio Telephony</h2>
              <p className="text-xs text-gray-500">Outbound calling and SMS via Twilio</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-gray-600">Account SID</label>
              <Input type="text" value={twilioSid} onChange={(e) => setTwilioSid(e.target.value)} placeholder="AC..." className="h-12 bg-slate-50" />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-gray-600">Auth Token</label>
              <Input type="password" value={twilioToken} onChange={(e) => setTwilioToken(e.target.value)} placeholder="••••••••••••" className="h-12 bg-slate-50" />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-gray-600">Twilio Phone Number</label>
              <Input type="text" value={twilioPhone} onChange={(e) => setTwilioPhone(e.target.value)} placeholder="+1234567890" className="h-12 bg-slate-50" />
            </div>
            <Button size="sm" onClick={() => handleSave("twilio", { account_sid: twilioSid, auth_token: twilioToken, phone_number: twilioPhone })} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
              Save Twilio Credentials
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
