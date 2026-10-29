(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/campaigns/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminCampaignsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/admin.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/campaign.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$lead$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/lead.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/agent.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$voice$2d$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/voice-agent.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$LocalVoiceTestModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/LocalVoiceTestModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$incoming$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIncoming$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-incoming.js [app-client] (ecmascript) <export default as PhoneIncoming>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$outgoing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOutgoing$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-outgoing.js [app-client] (ecmascript) <export default as PhoneOutgoing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// @ts-nocheck
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function AdminCampaignsContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("campaigns");
    const [campaigns, setCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leads, setLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [calls, setCalls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leadGroups, setLeadGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voiceAgents, setVoiceAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeVoiceTestingCampaign, setActiveVoiceTestingCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Edit Campaign State
    const [editingCampaign, setEditingCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editTwilioNumber, setEditTwilioNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editStatus, setEditStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("IDLE");
    // View Campaign Details State
    const [viewingCampaign, setViewingCampaign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewingCampaignLeads, setViewingCampaignLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCampaignDetails, setLoadingCampaignDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminCampaignsContent.useEffect": ()=>{
            const runTestingCampaignId = searchParams.get("run_testing");
            if (runTestingCampaignId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].get(runTestingCampaignId).then({
                    "AdminCampaignsContent.useEffect": (campaign)=>{
                        if (campaign) {
                            window.history.replaceState({}, "", "/admin/campaigns");
                            setActiveVoiceTestingCampaign(campaign);
                        }
                    }
                }["AdminCampaignsContent.useEffect"]).catch({
                    "AdminCampaignsContent.useEffect": (err)=>{
                        console.warn("Failed to load testing campaign by ID:", err);
                    }
                }["AdminCampaignsContent.useEffect"]);
            }
        }
    }["AdminCampaignsContent.useEffect"], [
        searchParams
    ]);
    // New Campaign Form State
    const [showCreateForm, setShowCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [campaignForm, setCampaignForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        objective: "",
        agent_type: "AI_AGENT",
        agent_id: "",
        voice_agent_id: "",
        twilio_number: "",
        selected_lead_ids: [],
        default_language: "auto"
    });
    const loadData = async ()=>{
        setLoading(true);
        setError(null);
        try {
            if (activeTab === "campaigns") {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getCampaigns();
                setCampaigns(data);
                const agentData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentService"].list().catch(()=>[]);
                setAgents(agentData);
                const voiceData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$voice$2d$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceAgentService"].list().catch(()=>[]);
                setVoiceAgents(voiceData);
                const leadData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getLeads();
                setLeads(leadData);
                // Default Twilio phone number configuration
                try {
                    const twilioData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getTwilioNumber();
                    if (twilioData?.twilio_phone_number) {
                        setCampaignForm((f)=>({
                                ...f,
                                twilio_number: twilioData.twilio_phone_number
                            }));
                    }
                } catch (e) {}
            } else if (activeTab === "leads") {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getLeads();
                setLeads(data);
            } else if (activeTab === "calls") {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getCalls();
                setCalls(data);
            } else if (activeTab === "uploads") {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getLeadUploads();
                setLeadGroups(data);
            }
        } catch (err) {
            setError(err.message || "Failed to retrieve logs");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminCampaignsContent.useEffect": ()=>{
            loadData();
        }
    }["AdminCampaignsContent.useEffect"], [
        activeTab
    ]);
    const handleStartCampaign = async (id, name)=>{
        setError(null);
        setSuccess(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].start(id);
            setSuccess(`Campaign "${name}" has been started`);
            loadData();
        } catch (err) {
            setError(err.message || "Failed to start campaign");
        }
    };
    const handlePauseCampaign = async (id, name)=>{
        setError(null);
        setSuccess(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].pause(id);
            setSuccess(`Campaign "${name}" has been paused`);
            loadData();
        } catch (err) {
            setError(err.message || "Failed to pause campaign");
        }
    };
    const handleOpenEdit = (c)=>{
        router.push(`/admin/campaigns/create?edit=${c.id}`);
    };
    const handleSaveEdit = async ()=>{
        if (!editingCampaign) return;
        setError(null);
        setSuccess(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].update(editingCampaign.id, {
                name: editName,
                twilio_number: editTwilioNumber,
                status: editStatus
            });
            setSuccess(`Campaign "${editName}" updated successfully`);
            setEditingCampaign(null);
            loadData();
        } catch (err) {
            setError(err.message || "Failed to update campaign");
        }
    };
    const handleOpenView = async (c)=>{
        setViewingCampaign(c);
        setViewingCampaignLeads([]);
        setLoadingCampaignDetails(true);
        try {
            const details = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].get(c.id);
            setViewingCampaign(details);
            const leadsList = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getLeads(c.id).catch(()=>[]);
            setViewingCampaignLeads(leadsList);
        } catch (err) {
            console.warn("Failed to load details:", err);
        } finally{
            setLoadingCampaignDetails(false);
        }
    };
    const handleDeleteCampaign = async (id, name)=>{
        if (!confirm(`Are you sure you want to delete campaign "${name}"?`)) return;
        setError(null);
        setSuccess(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].remove(id);
            setSuccess(`Campaign "${name}" deleted successfully`);
            loadData();
        } catch (err) {
            setError(err.message || "Failed to delete campaign");
        }
    };
    const handleDeleteLead = async (id, name)=>{
        if (!confirm(`Are you sure you want to delete lead "${name}"?`)) return;
        setError(null);
        setSuccess(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$lead$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadService"].remove(id);
            setSuccess(`Lead "${name}" deleted successfully`);
            loadData();
        } catch (err) {
            setError(err.message || "Failed to delete lead");
        }
    };
    const handleCreateCampaignSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        setSuccess(null);
        if (!campaignForm.name || !campaignForm.twilio_number || !campaignForm.agent_type) {
            setError("Please fill out Campaign Name, Agent Type, and Twilio Number");
            return;
        }
        if (campaignForm.agent_type === "AI_AGENT" && !campaignForm.agent_id) {
            setError("Please select an AI Agent");
            return;
        }
        if (campaignForm.agent_type === "VOICE_AGENT" && !campaignForm.voice_agent_id) {
            setError("Please select a Voice Agent");
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].create({
                name: campaignForm.name,
                calling_mode: campaignForm.agent_type === "VOICE_AGENT" ? "VOICE" : "AI",
                agent_id: campaignForm.agent_type === "AI_AGENT" ? campaignForm.agent_id : undefined,
                voice_agent_id: campaignForm.agent_type === "VOICE_AGENT" ? campaignForm.voice_agent_id : undefined,
                twilio_number: campaignForm.twilio_number,
                lead_ids: campaignForm.selected_lead_ids,
                schedule: {
                    default_language: campaignForm.default_language
                }
            });
            setSuccess(`Campaign "${campaignForm.name}" created successfully`);
            setShowCreateForm(false);
            setCampaignForm({
                name: "",
                description: "",
                objective: "",
                agent_type: "AI_AGENT",
                agent_id: "",
                voice_agent_id: "",
                twilio_number: "",
                selected_lead_ids: [],
                default_language: "auto"
            });
            loadData();
        } catch (err) {
            setError(err.message || "Failed to create campaign");
        }
    };
    const handleSelectLeadToggle = (id)=>{
        setCampaignForm((f)=>{
            const ids = f.selected_lead_ids.includes(id) ? f.selected_lead_ids.filter((x)=>x !== id) : [
                ...f.selected_lead_ids,
                id
            ];
            return {
                ...f,
                selected_lead_ids: ids
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-8 animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "h-6.5 w-6.5 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-extrabold tracking-tight text-slate-900",
                                                children: "Overall System Operations"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500 mt-1",
                                                children: "outbound campaigns, lead registers, and calls overview"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            activeTab === "campaigns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>router.push("/admin/campaigns/create"),
                                className: "bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 rounded-xl self-start sm:self-center cursor-pointer font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    " New Campaign"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/campaigns/page.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 self-start w-full sm:w-auto overflow-x-auto gap-1",
                        children: [
                            {
                                id: "campaigns",
                                label: "All Campaigns",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
                            },
                            {
                                id: "leads",
                                label: "All Leads",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                            },
                            {
                                id: "calls",
                                label: "All Calls",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
                            },
                            {
                                id: "uploads",
                                label: "Uploaded Files",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
                            }
                        ].map(({ id, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(id),
                                className: `flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${activeTab === id ? "bg-white text-indigo-600 shadow-sm border border-slate-200/10 font-bold" : "text-slate-500 hover:text-slate-700"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    label
                                ]
                            }, id, true, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/campaigns/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl p-4 flex items-center gap-3 text-sm font-semibold animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "h-5 w-5 shrink-0 text-emerald-600"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: success
                            }, void 0, false, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/campaigns/page.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-rose-50 border border-rose-100 text-rose-800 rounded-2xl p-4 flex items-center gap-3 text-sm font-semibold animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-5 w-5 shrink-0 text-rose-600"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/campaigns/page.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this),
                    showCreateForm && activeTab === "campaigns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "p-6 border border-slate-100 shadow-lg rounded-2xl bg-white max-w-4xl animate-in fade-in slide-in-from-top-4 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-md font-bold text-slate-900 flex items-center gap-2",
                                        children: "🚀 Create & Launch New Global Outbound Campaign"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowCreateForm(false),
                                        className: "text-slate-400 hover:text-slate-600 transition-premium p-1 hover:bg-slate-50 rounded-lg cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleCreateCampaignSubmit,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                        children: "Campaign Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Sales campaign",
                                                        value: campaignForm.name,
                                                        onChange: (e)=>setCampaignForm({
                                                                ...campaignForm,
                                                                name: e.target.value
                                                            }),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                        children: "Agent Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer",
                                                        value: campaignForm.agent_type,
                                                        onChange: (e)=>{
                                                            const type = e.target.value;
                                                            setCampaignForm((prev)=>({
                                                                    ...prev,
                                                                    agent_type: type,
                                                                    agent_id: "",
                                                                    voice_agent_id: ""
                                                                }));
                                                        },
                                                        required: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "AI_AGENT",
                                                                children: "AI Agent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "VOICE_AGENT",
                                                                children: "Voice Agent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this),
                                            campaignForm.agent_type === "AI_AGENT" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                        children: "SELECT AI AGENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer",
                                                        value: campaignForm.agent_id,
                                                        onChange: (e)=>setCampaignForm({
                                                                ...campaignForm,
                                                                agent_id: e.target.value
                                                            }),
                                                        required: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select AI Agent..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 23
                                                            }, this),
                                                            agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: agent.id,
                                                                    children: [
                                                                        agent.name,
                                                                        " (",
                                                                        agent.type || "SALES",
                                                                        ")"
                                                                    ]
                                                                }, agent.id, true, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 21
                                                    }, this),
                                                    agents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-bold text-rose-500 mt-1",
                                                        children: "No AI Agents available. Please create an AI Agent first."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, this) : campaignForm.agent_type === "VOICE_AGENT" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                        children: "SELECT VOICE AGENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer",
                                                        value: campaignForm.voice_agent_id,
                                                        onChange: (e)=>setCampaignForm({
                                                                ...campaignForm,
                                                                voice_agent_id: e.target.value
                                                            }),
                                                        required: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select Voice Agent..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 23
                                                            }, this),
                                                            voiceAgents.map((expert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: expert.id,
                                                                    children: [
                                                                        expert.name,
                                                                        " — ",
                                                                        expert.status || "AVAILABLE"
                                                                    ]
                                                                }, expert.id, true, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 410,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 21
                                                    }, this),
                                                    voiceAgents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-bold text-rose-500 mt-1",
                                                        children: "No Voice Agents available. Please create a Voice Agent first."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 opacity-60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                        children: "SELECT AGENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        disabled: true,
                                                        className: "w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm h-11 bg-slate-100 font-semibold text-slate-400 cursor-not-allowed",
                                                        value: "",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select Agent Type First..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                        children: "Twilio Caller Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "+18392615369",
                                                        value: campaignForm.twilio_number,
                                                        onChange: (e)=>setCampaignForm({
                                                                ...campaignForm,
                                                                twilio_number: e.target.value
                                                            }),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                        children: "Regional Language"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer",
                                                        value: campaignForm.default_language,
                                                        onChange: (e)=>setCampaignForm({
                                                                ...campaignForm,
                                                                default_language: e.target.value
                                                            }),
                                                        required: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "auto",
                                                                children: "Auto Detect"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "en",
                                                                children: "English"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ta",
                                                                children: "Tamil"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "te",
                                                                children: "Telugu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ml",
                                                                children: "Malayalam"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "kn",
                                                                children: "Kannada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "hi",
                                                                children: "Hindi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "bn",
                                                                children: "Bengali"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "mr",
                                                                children: "Marathi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "gu",
                                                                children: "Gujarati"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "pa",
                                                                children: "Punjabi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 460,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ur",
                                                                children: "Urdu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "or",
                                                                children: "Odia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-500 uppercase tracking-wider block",
                                                children: [
                                                    "Select Campaign Leads (",
                                                    campaignForm.selected_lead_ids.length,
                                                    " selected)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-slate-100 rounded-2xl overflow-y-auto max-h-48 p-4 divide-y divide-slate-50 bg-slate-50/50",
                                                children: [
                                                    leads.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3.5 py-2.5 text-sm select-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: campaignForm.selected_lead_ids.includes(l.id),
                                                                    onChange: ()=>handleSelectLeadToggle(l.id),
                                                                    className: "h-4.5 w-4.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-slate-800",
                                                                            children: [
                                                                                l.first_name,
                                                                                " ",
                                                                                l.last_name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                            lineNumber: 481,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-semibold text-slate-400 mt-0.5",
                                                                            children: [
                                                                                l.company,
                                                                                " · ",
                                                                                l.phone
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                            lineNumber: 482,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, l.id, true, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 21
                                                        }, this)),
                                                    leads.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400 text-center py-4",
                                                        children: "No leads available — create leads first."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3 border-t border-slate-50 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: ()=>setShowCreateForm(false),
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "bg-indigo-600 hover:bg-indigo-500 text-white",
                                                children: "Launch Campaign"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/campaigns/page.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-3xl border border-slate-100 shadow-sm p-6 overflow-hidden",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-16 flex flex-col justify-center items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-400 font-semibold uppercase tracking-wider",
                                    children: "Fetching operations log..."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 507,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                activeTab === "campaigns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto font-medium text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Campaign Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Target Client"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Lead List"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Assigned Agent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Twilio Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Created Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4 text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 517,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-50 text-sm",
                                                children: [
                                                    campaigns.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-slate-50/50 transition-premium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition-colors",
                                                                    onClick: ()=>router.push(`/admin/campaigns/create?edit=${c.id}&step=6`),
                                                                    title: "Click to Review Campaign",
                                                                    children: c.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 font-bold text-indigo-700",
                                                                    children: c.client_name || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 539,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 font-semibold text-slate-700",
                                                                    children: c.lead_group_name || "Lead Library"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 540,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 font-bold text-emerald-700",
                                                                    children: (c.agent_type || "").toUpperCase() === "HUMAN" || (c.agent_type || "").toUpperCase() === "VOICE" || (c.agent_type || "").toUpperCase() === "VOICE_AGENT" || !c.agent_id && Boolean(c.voice_agent_id) ? "Voice Agent" : "AI Agent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 font-mono text-xs text-slate-400",
                                                                    children: c.twilio_number
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold ${c.status === "RUNNING" ? "bg-indigo-50 text-indigo-700 border border-indigo-100" : c.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : c.status === "PAUSED" ? "bg-amber-50 text-amber-700 border border-amber-100" : "bg-slate-100 text-slate-500 border border-slate-200"}`,
                                                                        children: c.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                        lineNumber: 551,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-xs text-slate-400",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(c.created_at)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-right",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-end gap-2",
                                                                        children: [
                                                                            c.status === "RUNNING" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handlePauseCampaign(c.id, c.name),
                                                                                className: "p-1.5 rounded-lg hover:bg-slate-50 text-amber-600 transition-premium cursor-pointer",
                                                                                title: "Pause Campaign",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                                                    className: "h-4.5 w-4.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                    lineNumber: 571,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 566,
                                                                                columnNumber: 33
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleStartCampaign(c.id, c.name),
                                                                                className: "p-1.5 rounded-lg hover:bg-slate-50 text-indigo-600 transition-premium cursor-pointer",
                                                                                title: "Start Campaign",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                    className: "h-4.5 w-4.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                    lineNumber: 579,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 574,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>router.push(`/admin/campaigns/create?edit=${c.id}&step=6`),
                                                                                className: "p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-premium cursor-pointer",
                                                                                title: "Review Campaign Details",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                    className: "h-4.5 w-4.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                    lineNumber: 587,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 582,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>router.push(`/admin/campaigns/create?edit=${c.id}&step=6`),
                                                                                className: "p-1.5 rounded-lg hover:bg-slate-100 text-indigo-600 transition-premium cursor-pointer",
                                                                                title: "Review & Edit Campaign",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                    className: "h-4.5 w-4.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                    lineNumber: 594,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 589,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setActiveVoiceTestingCampaign(c),
                                                                                className: "p-1.5 rounded-lg hover:bg-indigo-50 text-indigo-600 transition-premium cursor-pointer",
                                                                                title: "Local Voice Test",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                    className: "h-4.5 w-4.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                    lineNumber: 601,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 596,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteCampaign(c.id, c.name),
                                                                                className: "p-1.5 rounded-lg hover:bg-slate-50 text-rose-500 hover:text-rose-600 transition-premium cursor-pointer",
                                                                                title: "Delete Campaign",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "h-4.5 w-4.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                    lineNumber: 608,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 603,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                        lineNumber: 564,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, c.id, true, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 25
                                                        }, this)),
                                                    campaigns.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 6,
                                                            className: "py-12 text-center text-slate-400",
                                                            children: "No campaigns found in the system."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 17
                                }, this),
                                activeTab === "leads" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto font-medium text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Lead Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Associated Business"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Company"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Imported Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4 text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 630,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-50 text-sm",
                                                children: [
                                                    leads.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-slate-50/50 transition-premium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-slate-900",
                                                                            children: [
                                                                                l.first_name,
                                                                                " ",
                                                                                l.last_name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                            lineNumber: 644,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-400 mt-1 font-semibold",
                                                                            children: [
                                                                                l.phone,
                                                                                " · ",
                                                                                l.email
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                            lineNumber: 645,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-slate-500",
                                                                    children: l.business_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 647,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-slate-600",
                                                                    children: l.company
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        className: "font-bold",
                                                                        children: l.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                        lineNumber: 650,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-xs text-slate-400",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(l.created_at)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-right",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-end gap-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDeleteLead(l.id, `${l.first_name} ${l.last_name}`),
                                                                            className: "p-1.5 rounded-lg hover:bg-slate-50 text-rose-500 hover:text-rose-600 transition-premium cursor-pointer",
                                                                            title: "Delete Lead",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "h-4.5 w-4.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 662,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                            lineNumber: 657,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                        lineNumber: 656,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 655,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, l.id, true, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 25
                                                        }, this)),
                                                    leads.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 6,
                                                            className: "py-12 text-center text-slate-400",
                                                            children: "No leads found in the system."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 670,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 17
                                }, this),
                                activeTab === "calls" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto font-medium text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Direction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Associated Business"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "From / To"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Duration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Timestamp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-50 text-sm",
                                                children: [
                                                    calls.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-slate-50/50 transition-premium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            c.direction === "OUTBOUND" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$outgoing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOutgoing$3e$__["PhoneOutgoing"], {
                                                                                className: "h-4.5 w-4.5 text-indigo-500 shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 700,
                                                                                columnNumber: 33
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$incoming$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIncoming$3e$__["PhoneIncoming"], {
                                                                                className: "h-4.5 w-4.5 text-emerald-500 shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 702,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-bold text-slate-900",
                                                                                children: c.direction
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                                lineNumber: 704,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                        lineNumber: 698,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 697,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-slate-500",
                                                                    children: c.business_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 707,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-slate-900 font-semibold",
                                                                            children: [
                                                                                "To: ",
                                                                                c.to_number
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                            lineNumber: 709,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-slate-450 mt-1 font-mono",
                                                                            children: [
                                                                                "From: ",
                                                                                c.from_number
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                            lineNumber: 710,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 708,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-slate-700 font-bold font-mono",
                                                                    children: [
                                                                        Math.floor((c.duration_seconds || 0) / 60),
                                                                        "m ",
                                                                        (c.duration_seconds || 0) % 60,
                                                                        "s"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 712,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold ${c.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : c.status === "FAILED" ? "bg-rose-50 text-rose-700 border border-rose-100" : "bg-slate-100 text-slate-500 border border-slate-200"}`,
                                                                        children: c.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                        lineNumber: 716,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 715,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-xs text-slate-400",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(c.created_at)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 724,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, c.id, true, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 696,
                                                            columnNumber: 25
                                                        }, this)),
                                                    calls.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 6,
                                                            className: "py-12 text-center text-slate-400",
                                                            children: "No voice calls logged in the system."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 730,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 694,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 683,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 682,
                                    columnNumber: 17
                                }, this),
                                activeTab === "uploads" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto font-medium text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left border-collapse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "File Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Associated Business"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Lead Count"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "pb-4",
                                                            children: "Uploaded Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 746,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 745,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-50 text-sm",
                                                children: [
                                                    leadGroups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-slate-50/50 transition-premium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 font-bold text-slate-900",
                                                                    children: g.filename
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-slate-500",
                                                                    children: g.business_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 758,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-slate-900 font-bold",
                                                                    children: g.lead_count
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold ${g.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : g.status === "PROCESSING" ? "bg-indigo-50 text-indigo-700 border border-indigo-100" : g.status === "FAILED" ? "bg-rose-50 text-rose-700 border border-rose-100" : "bg-slate-100 text-slate-500 border border-slate-200"}`,
                                                                        children: g.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                        lineNumber: 761,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-4 text-xs text-slate-400",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(g.created_at)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, g.id, true, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 25
                                                        }, this)),
                                                    leadGroups.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 5,
                                                            className: "py-12 text-center text-slate-400",
                                                            children: "No uploaded file records found."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                                lineNumber: 754,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 743,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 512,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/campaigns/page.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/campaigns/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            activeVoiceTestingCampaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$LocalVoiceTestModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalVoiceTestModal"], {
                campaignId: activeVoiceTestingCampaign.id,
                campaignName: activeVoiceTestingCampaign.name,
                agentId: activeVoiceTestingCampaign.agent_id,
                onClose: ()=>setActiveVoiceTestingCampaign(null)
            }, void 0, false, {
                fileName: "[project]/app/admin/campaigns/page.tsx",
                lineNumber: 792,
                columnNumber: 9
            }, this),
            viewingCampaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-2xl w-full max-w-xl border border-slate-100 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-extrabold text-xl text-slate-900",
                                                    children: viewingCampaign.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase",
                                                    children: viewingCampaign.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 806,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400 font-mono mt-0.5",
                                            children: [
                                                "ID: ",
                                                viewingCampaign.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 812,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 805,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>setViewingCampaign(null),
                                    className: "rounded-full h-8 w-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 815,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 814,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 804,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold text-indigo-600 block uppercase text-[10px]",
                                            children: "Target Client"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 821,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-indigo-950 text-sm",
                                            children: viewingCampaign.client_name || "—"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 822,
                                            columnNumber: 17
                                        }, this),
                                        viewingCampaign.client_phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-slate-500 text-[11px] block mt-0.5",
                                            children: viewingCampaign.client_phone
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 824,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 820,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold text-emerald-600 block uppercase text-[10px]",
                                            children: "Assigned Agent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-emerald-950 text-sm",
                                            children: (viewingCampaign.agent_type || "").toUpperCase() === "HUMAN" || (viewingCampaign.agent_type || "").toUpperCase() === "VOICE" || (viewingCampaign.agent_type || "").toUpperCase() === "VOICE_AGENT" || !viewingCampaign.agent_id && Boolean(viewingCampaign.voice_agent_id) ? "Voice Agent" : "AI Agent"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 827,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 p-3.5 rounded-2xl border border-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-400 block uppercase text-[10px]",
                                            children: "Lead List"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 839,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-800 text-sm",
                                            children: viewingCampaign.lead_group_name || "Lead Library"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 840,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 838,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 p-3.5 rounded-2xl border border-slate-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-400 block uppercase text-[10px]",
                                            children: "Total Leads"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 843,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-800 text-sm",
                                            children: [
                                                viewingCampaignLeads.length,
                                                " lead(s)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 844,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 842,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 819,
                            columnNumber: 13
                        }, this),
                        viewingCampaign.schedule?.script && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-50 p-4 rounded-2xl border border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-slate-400 uppercase text-[10px] block mb-1",
                                    children: "Campaign Script"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 850,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-700 font-medium whitespace-pre-wrap max-h-36 overflow-y-auto leading-relaxed",
                                    children: viewingCampaign.schedule.script
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 851,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 849,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setViewingCampaign(null),
                                className: "bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/campaigns/page.tsx",
                                lineNumber: 858,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 857,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/campaigns/page.tsx",
                    lineNumber: 803,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/campaigns/page.tsx",
                lineNumber: 802,
                columnNumber: 9
            }, this),
            editingCampaign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl shadow-2xl w-full max-w-md border border-slate-100 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-slate-100 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-extrabold text-xl text-slate-900",
                                    children: "Edit Campaign"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 871,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>setEditingCampaign(null),
                                    className: "rounded-full h-8 w-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/campaigns/page.tsx",
                                        lineNumber: 873,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 872,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 870,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-xs font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-500 font-bold uppercase text-[10px] tracking-wider block mb-1",
                                            children: "Campaign Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 879,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: editName,
                                            onChange: (e)=>setEditName(e.target.value),
                                            placeholder: "Campaign Name",
                                            className: "text-xs font-semibold"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 880,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 878,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-500 font-bold uppercase text-[10px] tracking-wider block mb-1",
                                            children: "Twilio Caller Number"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 889,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: editTwilioNumber,
                                            onChange: (e)=>setEditTwilioNumber(e.target.value),
                                            placeholder: "+18392615369",
                                            className: "text-xs font-semibold font-mono"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 890,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 888,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-slate-500 font-bold uppercase text-[10px] tracking-wider block mb-1",
                                            children: "Campaign Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 899,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editStatus,
                                            onChange: (e)=>setEditStatus(e.target.value),
                                            className: "w-full border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "IDLE",
                                                    children: "IDLE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "RUNNING",
                                                    children: "RUNNING"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 906,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PAUSED",
                                                    children: "PAUSED"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 907,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "COMPLETED",
                                                    children: "COMPLETED"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/campaigns/page.tsx",
                                            lineNumber: 900,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 898,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 877,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setEditingCampaign(null),
                                    className: "text-xs font-bold px-4",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 914,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSaveEdit,
                                    className: "bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5",
                                    children: "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/campaigns/page.tsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/campaigns/page.tsx",
                            lineNumber: 913,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/campaigns/page.tsx",
                    lineNumber: 869,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/campaigns/page.tsx",
                lineNumber: 868,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/campaigns/page.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s(AdminCampaignsContent, "2b9WKY0CmGXOJl8FpehbcCBJDhg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = AdminCampaignsContent;
function AdminCampaignsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-xs text-slate-400 font-semibold",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/admin/campaigns/page.tsx",
            lineNumber: 930,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminCampaignsContent, {}, void 0, false, {
            fileName: "[project]/app/admin/campaigns/page.tsx",
            lineNumber: 931,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/campaigns/page.tsx",
        lineNumber: 930,
        columnNumber: 5
    }, this);
}
_c1 = AdminCampaignsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdminCampaignsContent");
__turbopack_context__.k.register(_c1, "AdminCampaignsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/auth.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inbound$2f$InboundCallPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inbound/InboundCallPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chatbot$2f$GlobalChatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chatbot/GlobalChatbot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLiveClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useLiveClock.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// Ambient Animated Background for the entire platform
const GlobalAnimatedBackground = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ],
                    opacity: [
                        0.5,
                        0.8,
                        0.5
                    ],
                    x: [
                        0,
                        -50,
                        0
                    ],
                    y: [
                        0,
                        50,
                        0
                    ]
                },
                transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-purple-500/10 blur-[120px]",
                animate: {
                    scale: [
                        1,
                        1.3,
                        1
                    ],
                    opacity: [
                        0.3,
                        0.6,
                        0.3
                    ],
                    x: [
                        0,
                        50,
                        0
                    ],
                    y: [
                        0,
                        -50,
                        0
                    ]
                },
                transition: {
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }
            }, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            [
                ...Array(12)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute w-1.5 h-1.5 rounded-full bg-indigo-400/30",
                    initial: {
                        x: Math.random() * (("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable"),
                        y: Math.random() * (("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable"),
                        opacity: Math.random() * 0.5 + 0.2
                    },
                    animate: {
                        y: [
                            null,
                            Math.random() * -500
                        ],
                        opacity: [
                            null,
                            0
                        ]
                    },
                    transition: {
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }, i, false, {
                    fileName: "[project]/components/AppShell.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/components/AppShell.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = GlobalAnimatedBackground;
function AppShell({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "AppShell.useAuthStore[token]": (s)=>s.token
    }["AppShell.useAuthStore[token]"]);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "AppShell.useAuthStore[user]": (s)=>s.user
    }["AppShell.useAuthStore[user]"]);
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "AppShell.useAuthStore[setUser]": (s)=>s.setUser
    }["AppShell.useAuthStore[setUser]"]);
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { mounted: clockMounted, timeStr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLiveClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveClock"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].persist.onFinishHydration({
                "AppShell.useEffect.unsub": ()=>setHydrated(true)
            }["AppShell.useEffect.unsub"]);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].persist.hasHydrated()) {
                setHydrated(true);
            }
            return ({
                "AppShell.useEffect": ()=>unsub()
            })["AppShell.useEffect"];
        }
    }["AppShell.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            if (hydrated) {
                if (!token) {
                    router.replace("/");
                } else if (user && ("TURBOPACK compile-time value", "object") !== "undefined") {
                    const path = window.location.pathname;
                    if (user.role === "VOICE_AGENT" && !path.startsWith("/voice-agent")) {
                        router.replace("/voice-agent/dashboard");
                    } else if (user.role === "SUPERVISOR" && !path.startsWith("/supervisor") && !path.startsWith("/live-calls") && !path.startsWith("/inbound") && !path.startsWith("/user-groups") && !path.startsWith("/reports") && !path.startsWith("/campaigns") && !path.startsWith("/leads") && !path.startsWith("/chatbot") && !path.startsWith("/settings")) {
                        router.replace("/supervisor/dashboard");
                    } else if (![
                        "ADMIN",
                        "SUPER_ADMIN",
                        "SUPERVISOR"
                    ].includes(user.role) && (path.startsWith("/supervisor") || path.startsWith("/admin"))) {
                        router.replace("/dashboard");
                    } else if (user.role === "SUPERVISOR" && path.startsWith("/admin")) {
                        router.replace("/supervisor/dashboard");
                    }
                }
            }
        }
    }["AppShell.useEffect"], [
        hydrated,
        token,
        user,
        router
    ]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "AppShell.useAuthStore[logout]": (s)=>s.logout
    }["AppShell.useAuthStore[logout]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            if (hydrated && token) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].me(token).then({
                    "AppShell.useEffect": (userData)=>{
                        setUser(userData);
                    }
                }["AppShell.useEffect"]).catch({
                    "AppShell.useEffect": (e)=>{
                        console.warn("User profile not found or session invalid. Logging out...", e);
                        logout();
                        router.replace("/");
                    }
                }["AppShell.useEffect"]);
            }
        }
    }["AppShell.useEffect"], [
        hydrated,
        token,
        setUser,
        logout,
        router
    ]);
    if (!hydrated || !token) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col lg:flex-row text-slate-900 font-sans relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalAnimatedBackground, {}, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block z-10 relative bg-slate-950/90 backdrop-blur-2xl border-r border-indigo-500/20 shadow-[4px_0_24px_rgba(0,0,0,0.2)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                    fileName: "[project]/components/AppShell.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex lg:hidden items-center justify-between px-6 py-4 bg-white border-b border-slate-100 sticky top-0 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 bg-indigo-500 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4.5 h-4.5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/AppShell.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AppShell.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-extrabold text-slate-950 tracking-tight text-sm",
                                children: "CallZenza"
                            }, void 0, false, {
                                fileName: "[project]/components/AppShell.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-mono text-[10px] font-bold",
                                children: clockMounted ? timeStr : ""
                            }, void 0, false, {
                                fileName: "[project]/components/AppShell.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppShell.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        className: "p-2 hover:bg-slate-50 text-slate-600 rounded-xl transition-premium cursor-pointer",
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.tsx",
                            lineNumber: 142,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.tsx",
                            lineNumber: 142,
                            columnNumber: 53
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AppShell.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 flex lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setMobileOpen(false),
                        className: "fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
                    }, void 0, false, {
                        fileName: "[project]/components/AppShell.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex w-full max-w-xs flex-1 flex-col bg-white shadow-xl animate-in slide-in-from-left duration-250",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                            onCloseMobile: ()=>setMobileOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AppShell.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-6 lg:p-10 min-h-0 overflow-y-auto z-10 relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inbound$2f$InboundCallPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InboundCallPopup"], {}, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chatbot$2f$GlobalChatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalChatbot"], {}, void 0, false, {
                fileName: "[project]/components/AppShell.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AppShell.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(AppShell, "Su1f6oKJ2k25R310JPxJAnZetZ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLiveClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveClock"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c1 = AppShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlobalAnimatedBackground");
__turbopack_context__.k.register(_c1, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-forwarded.js [app-client] (ecmascript) <export default as PhoneForwarded>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLiveClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useLiveClock.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
let savedSidebarScrollTop = 0;
function Sidebar({ onCloseMobile }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { mounted, timeWithSecondsStr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLiveClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveClock"])();
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScroll = (e)=>{
        const top = e.currentTarget.scrollTop;
        savedSidebarScrollTop = top;
        try {
            sessionStorage.setItem("sidebar_scroll_position", top.toString());
        } catch  {
        // ignore
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const restoreScroll = {
                "Sidebar.useEffect.restoreScroll": ()=>{
                    const container = scrollContainerRef.current;
                    if (!container) return;
                    let targetScroll = savedSidebarScrollTop;
                    try {
                        const stored = sessionStorage.getItem("sidebar_scroll_position");
                        if (stored !== null) {
                            const val = parseFloat(stored);
                            if (!isNaN(val)) targetScroll = val;
                        }
                    } catch  {
                    // ignore
                    }
                    if (targetScroll > 0) {
                        container.scrollTop = targetScroll;
                    }
                    if (activeItemRef.current && container) {
                        const itemRect = activeItemRef.current.getBoundingClientRect();
                        const containerRect = container.getBoundingClientRect();
                        if (itemRect.top < containerRect.top || itemRect.bottom > containerRect.bottom) {
                            activeItemRef.current.scrollIntoView({
                                block: "nearest",
                                behavior: "auto"
                            });
                            savedSidebarScrollTop = container.scrollTop;
                            try {
                                sessionStorage.setItem("sidebar_scroll_position", container.scrollTop.toString());
                            } catch  {
                            // ignore
                            }
                        }
                    }
                }
            }["Sidebar.useEffect.restoreScroll"];
            restoreScroll();
            const raf = requestAnimationFrame(restoreScroll);
            const timer = setTimeout(restoreScroll, 60);
            return ({
                "Sidebar.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    clearTimeout(timer);
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], [
        pathname
    ]);
    const isSuperAdmin = user?.role === "SUPER_ADMIN" || user?.email === "admin@callzenza.com";
    const isBusinessOwner = user?.role === "BUSINESS_OWNER";
    const isAdmin = user?.role === "ADMIN" || isSuperAdmin || isBusinessOwner;
    const isVoiceAgent = user?.role === "VOICE_AGENT";
    const isSupervisor = user?.role === "SUPERVISOR";
    const isNormalUser = user?.role === "USER";
    const hasPerm = (key)=>{
        if (isSuperAdmin) return true;
        if (!user?.permissions || Object.keys(user.permissions).length === 0) return true;
        if (user.permissions[key] !== undefined) return !!user.permissions[key];
        if (isAdmin || isBusinessOwner) return true;
        return false;
    };
    let workspaceGroup = [];
    let managementGroup = [];
    let systemGroup = [];
    if (isSupervisor) {
        const perms = user?.permissions || {};
        // Default to true for core modules if permissions are null (backward compatibility)
        if (perms.dashboard !== false) {
            workspaceGroup.push({
                href: "/supervisor/dashboard",
                label: "Dashboard",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
            });
        }
        if (perms.user_management !== false) {
            workspaceGroup.push({
                href: "/supervisor/users",
                label: "User Management",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            });
        }
        if (perms.voice_agent !== false) {
            workspaceGroup.push({
                href: "/supervisor/voice-agents",
                label: "Voice Agent",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
            });
        }
        if (perms.reports) {
            workspaceGroup.push({
                href: "/reports",
                label: "Reports",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
            });
        }
        if (perms.live_calls !== false) {
            workspaceGroup.push({
                href: "/live-calls",
                label: "Live Calls",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
            });
            workspaceGroup.push({
                href: "/calls",
                label: "Call History",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__["PhoneForwarded"]
            });
        }
        if (perms.campaigns) {
            workspaceGroup.push({
                href: "/campaigns",
                label: "Campaigns",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
            });
        }
        if (perms.lists) {
            workspaceGroup.push({
                href: "/leads",
                label: "Lists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            });
        }
        workspaceGroup.push({
            href: "/inbound",
            label: "Inbound",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
        });
        workspaceGroup.push({
            href: "/user-groups",
            label: "User Groups",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        });
        workspaceGroup.push({
            href: "/chatbot",
            label: "AI Chatbot",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
        });
    } else if (isNormalUser) {
        const perms = user?.permissions || {};
        workspaceGroup.push({
            href: "/dashboard",
            label: "Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        });
        workspaceGroup.push({
            href: "/chatbot",
            label: "AI Chatbot",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
        });
        if (perms.viewAnalytics) {
            workspaceGroup.push({
                href: "/reports",
                label: "Reports",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
            });
            workspaceGroup.push({
                href: "/analytics",
                label: "Analytics",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
            });
        }
        if (perms.runCampaigns) {
            workspaceGroup.push({
                href: "/campaigns",
                label: "Campaigns",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
            });
            workspaceGroup.push({
                href: "/leads",
                label: "Lists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            });
        }
        if (perms.viewRecordings) {
            workspaceGroup.push({
                href: "/live-calls",
                label: "Live Calls",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
            });
            workspaceGroup.push({
                href: "/calls",
                label: "Call History",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__["PhoneForwarded"]
            });
        }
        if (perms.manageBilling) {
            workspaceGroup.push({
                href: "/admin/billing",
                label: "Billing",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
            });
        }
        systemGroup = [
            {
                href: "/settings",
                label: "Settings",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
            }
        ];
    } else if (isBusinessOwner || isAdmin && !isSuperAdmin) {
        // Dedicated streamlined navigation for Tenant Admin accounts
        workspaceGroup = [
            hasPerm("dashboard") ? {
                href: "/dashboard",
                label: "Dashboard",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
            } : null,
            hasPerm("users") ? {
                href: "/admin/users",
                label: "Users",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            } : null,
            hasPerm("clients") ? {
                href: "/admin/clients",
                label: "Clients",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
            } : null,
            hasPerm("live_calls") ? {
                href: "/live-calls",
                label: "Live Calls",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
            } : null,
            hasPerm("live_calls") ? {
                href: "/calls",
                label: "Call History",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__["PhoneForwarded"]
            } : null,
            hasPerm("campaigns") ? {
                href: "/admin/campaigns",
                label: "Campaigns",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
            } : null,
            hasPerm("leads") || hasPerm("lists") ? {
                href: "/leads",
                label: "Lists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            } : null,
            hasPerm("leads") || hasPerm("lists") ? {
                href: "/leads/recycle",
                label: "Lead Recycle",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"]
            } : null,
            hasPerm("leads") || hasPerm("lists") ? {
                href: "/leads/hopper",
                label: "Lead Hopper",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__["PhoneForwarded"]
            } : null,
            hasPerm("supervisors") ? {
                href: "/admin/supervisors",
                label: "Quality Control",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
            } : null,
            hasPerm("chatbot") ? {
                href: "/admin/ai-chatbot",
                label: "AI Chatbot (RAG)",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
            } : null,
            hasPerm("scripts") ? {
                href: "/admin/knowledge",
                label: "Scripts",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
            } : null,
            hasPerm("reports") ? {
                href: "/reports",
                label: "Reports",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
            } : null,
            hasPerm("reports") ? {
                href: "/analytics",
                label: "Analytics",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            } : null,
            hasPerm("inbound") ? {
                href: "/inbound",
                label: "Inbound",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
            } : null,
            hasPerm("user_groups") ? {
                href: "/user-groups",
                label: "User Groups",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            } : null,
            hasPerm("agents") ? {
                href: "/agents",
                label: "Remote Agents (AI)",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
            } : null,
            hasPerm("voice_agents") ? {
                href: "/experts/portal",
                label: "Remote Agents (Voice)",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
            } : null,
            hasPerm("admin") ? {
                href: "/admin",
                label: "Admin",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
            } : null
        ].filter(Boolean);
        managementGroup = [];
        systemGroup = [
            hasPerm("settings") ? {
                href: "/settings",
                label: "Settings",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
            } : null
        ].filter(Boolean);
    } else {
        // Full system flow preserved for Super Admin (and direct voice agents)
        workspaceGroup = [
            hasPerm("dashboard") ? {
                href: isVoiceAgent ? "/voice-agent/dashboard" : "/dashboard",
                label: "Dashboard",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
            } : null,
            hasPerm("chatbot") ? {
                href: "/chatbot",
                label: "AI Chatbot",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
            } : null,
            hasPerm("reports") ? {
                href: "/reports",
                label: "Reports",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
            } : null,
            isAdmin && hasPerm("users") ? {
                href: "/admin/users",
                label: "Users",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            } : null,
            isAdmin && hasPerm("clients") ? {
                href: "/admin/clients",
                label: "Clients",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
            } : null,
            isAdmin && hasPerm("live_calls") ? {
                href: "/live-calls",
                label: "Live Calls",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
            } : null,
            isAdmin && hasPerm("live_calls") ? {
                href: "/calls",
                label: "Call History",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__["PhoneForwarded"]
            } : null,
            isAdmin && hasPerm("campaigns") ? {
                href: "/admin/campaigns",
                label: "Campaigns",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
            } : hasPerm("campaigns") ? {
                href: "/campaigns",
                label: "Campaigns",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
            } : null,
            hasPerm("leads") ? {
                href: "/leads",
                label: "Lists",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            } : null,
            hasPerm("leads") ? {
                href: "/leads/recycle",
                label: "Lead Recycle",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"]
            } : null,
            hasPerm("leads") ? {
                href: "/leads/hopper",
                label: "Lead Hopper",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__["PhoneForwarded"]
            } : null,
            isAdmin && hasPerm("supervisors") ? {
                href: "/admin/supervisors",
                label: "Quality Control",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
            } : null,
            isAdmin && hasPerm("chatbot") ? {
                href: "/admin/ai-chatbot",
                label: "AI Chatbot (RAG)",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
            } : null,
            isAdmin && hasPerm("scripts") ? {
                href: "/admin/knowledge",
                label: "Scripts",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
            } : null,
            hasPerm("reports") ? {
                href: "/analytics",
                label: "Analytics",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
            } : null,
            hasPerm("inbound") ? {
                href: "/inbound",
                label: "Inbound",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
            } : null,
            hasPerm("user_groups") ? {
                href: "/user-groups",
                label: "User Groups",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            } : null,
            hasPerm("agents") ? {
                href: "/agents",
                label: "Remote Agents (AI)",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
            } : null,
            (isVoiceAgent || isAdmin) && hasPerm("voice_agents") ? {
                href: "/experts/portal",
                label: "Remote Agents (Voice)",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
            } : null,
            hasPerm("admin") ? {
                href: "/admin",
                label: "Admin",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
            } : null
        ].filter(Boolean);
        managementGroup = [];
        systemGroup = [
            hasPerm("settings") ? {
                href: "/settings",
                label: "Settings",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
            } : null
        ].filter(Boolean);
    }
    const renderNavList = (items)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1.5",
            children: items.map(({ href, label, icon: Icon })=>{
                const isActive = pathname === href || href !== "/dashboard" && href !== "/admin" && pathname.startsWith(href + "/");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    ref: isActive ? activeItemRef : undefined,
                    onClick: ()=>{
                        if (scrollContainerRef.current) {
                            const top = scrollContainerRef.current.scrollTop;
                            savedSidebarScrollTop = top;
                            try {
                                sessionStorage.setItem("sidebar_scroll_position", top.toString());
                            } catch  {
                            // ignore
                            }
                        }
                        onCloseMobile?.();
                    },
                    className: `group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition-all duration-300 overflow-hidden ${isActive ? "text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-indigo-500/50" : "text-slate-400 hover:text-slate-100 border border-transparent hover:bg-white/5"}`,
                    children: [
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: "activeTab",
                            className: "absolute inset-0 bg-gradient-to-r from-indigo-600/40 to-purple-600/40 opacity-50",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative z-10 p-1.5 rounded-lg transition-colors ${isActive ? 'bg-indigo-500 shadow-md shadow-indigo-500/50' : 'bg-transparent group-hover:bg-white/10'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: `h-4 w-4 shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "truncate relative z-10 tracking-wide",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this),
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,1)] animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 263,
                            columnNumber: 15
                        }, this)
                    ]
                }, href, true, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 222,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 shrink-0 h-screen sticky top-0 flex flex-col bg-transparent text-white overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] -z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-white/5 flex items-center gap-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[1px] relative shadow-[0_0_20px_rgba(99,102,241,0.4)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-slate-950 rounded-xl flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "w-5 h-5 text-indigo-400"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-black text-white tracking-tight text-xl leading-none",
                                children: "CallZenza"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.8)]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] uppercase font-bold tracking-widest text-emerald-400 leading-none",
                                        children: [
                                            "Live ",
                                            mounted ? timeWithSecondsStr : "Online"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollContainerRef,
                onScroll: handleScroll,
                className: "flex-1 overflow-y-auto px-4 py-6 space-y-8 scrollbar-hide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black text-indigo-400/70 uppercase tracking-widest px-3 mb-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-[1px] bg-indigo-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    " Workspace"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            renderNavList(workspaceGroup)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    managementGroup.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black text-indigo-400/70 uppercase tracking-widest px-3 mb-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-[1px] bg-indigo-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    " Management"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            renderNavList(managementGroup)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this),
                    systemGroup.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black text-indigo-400/70 uppercase tracking-widest px-3 mb-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-[1px] bg-indigo-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this),
                                    " System"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            renderNavList(systemGroup)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-white/5 bg-black/20 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-3 py-2 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group",
                        children: (()=>{
                            const rawName = user?.full_name || user?.email?.split("@")[0] || "User Account";
                            const displayName = rawName.toLowerCase() === "super admin" ? "System Admin" : rawName;
                            const initial = ("TURBOPACK compile-time truthy", 1) ? displayName[0].toUpperCase() : "TURBOPACK unreachable";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white shadow-inner",
                                        children: initial
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-white truncate group-hover:text-indigo-200 transition-colors",
                                                children: displayName
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-indigo-300 truncate flex items-center gap-1.5 font-bold uppercase tracking-wider mt-0.5",
                                                children: isSuperAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-3 h-3 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Sidebar.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Admin"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Sidebar.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 23
                                                }, this) : isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-3 h-3 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Sidebar.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Admin"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Sidebar.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 23
                                                }, this) : "Member"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 336,
                                columnNumber: 15
                            }, this);
                        })()
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            logout();
                            router.push("/");
                        },
                        className: "mt-3 flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 border border-transparent hover:border-rose-500/20 transition-all w-full cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "h-4.5 w-4.5 shrink-0 group-hover:-translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Log out secure"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.tsx",
        lineNumber: 272,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "L7SoVldDHInv1vnwzsxPPIyHnTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLiveClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveClock"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/LocalVoiceTestModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalVoiceTestModal",
    ()=>LocalVoiceTestModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$local$2d$voice$2d$test$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/local-voice-test.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/campaign.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/useWebSocketSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function LocalVoiceTestModal({ campaignId, campaignName, agentId, onClose }) {
    _s();
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("INITIALIZING");
    const [voiceStatus, setVoiceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [voiceTranscript, setVoiceTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voiceSessionId, setVoiceSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [currentScriptStep, setCurrentScriptStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1. Greeting");
    const [scriptSteps, setScriptSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [collectedData, setCollectedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [qualificationStatus, setQualificationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("IN_PROGRESS");
    const [typedInputMessage, setTypedInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [transferStatus, setTransferStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTransferring, setIsTransferring] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elapsedMs, setElapsedMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastTurnLatencyMs, setLastTurnLatencyMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [micLanguage, setMicLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("en-IN");
    const [interimText, setInterimText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Customer Lead Management
    const [assignedLeads, setAssignedLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedLeadId, setSelectedLeadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [activeCustomer, setActiveCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingLeads, setLoadingLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Component Refs
    const activeSessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const voiceSessionIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const pauseTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeLanguageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("en-IN");
    const micLanguageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("en-IN");
    const accumulatedSpeechRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const vadSilenceTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sessionStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeCallIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callPollIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingGreetingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Format elapsed call duration in MM:SS
    const formatDuration = (ms)=>{
        const totalSecs = Math.floor(ms / 1000);
        const mins = Math.floor(totalSecs / 60).toString().padStart(2, '0');
        const secs = (totalSecs % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };
    // Start the call timer in milliseconds
    const startTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalVoiceTestModal.useCallback[startTimer]": ()=>{
            if (timerIntervalRef.current) return; // already running
            sessionStartTimeRef.current = Date.now();
            setElapsedMs(0);
            timerIntervalRef.current = setInterval({
                "LocalVoiceTestModal.useCallback[startTimer]": ()=>{
                    if (sessionStartTimeRef.current) {
                        setElapsedMs(Date.now() - sessionStartTimeRef.current);
                    }
                }
            }["LocalVoiceTestModal.useCallback[startTimer]"], 50);
        }
    }["LocalVoiceTestModal.useCallback[startTimer]"], []);
    // Stop the call timer and return elapsed milliseconds
    const stopTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LocalVoiceTestModal.useCallback[stopTimer]": ()=>{
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
                timerIntervalRef.current = null;
            }
            if (sessionStartTimeRef.current) {
                return Date.now() - sessionStartTimeRef.current;
            }
            return 0;
        }
    }["LocalVoiceTestModal.useCallback[stopTimer]"], []);
    // Markdown & special character stripping for clean speech synthesis
    const cleanSpeechText = (text)=>{
        if (!text) return "";
        return text.replace(/<[^>]+>/g, " ") // XML / HTML tags (<emotion...>, <Calls Script>, etc.)
        .replace(/\*\*(.*?)\*\*/g, "$1") // **bold** -> bold
        .replace(/\*(.*?)\*/g, "$1") // *italic* -> italic
        .replace(/__(.*?)__/g, "$1") // __bold__ -> bold
        .replace(/_(.*?)_/g, "$1") // _italic_ -> italic
        .replace(/~~(.*?)~~/g, "$1") // ~~strikethrough~~ -> strikethrough
        .replace(/`{1,3}(.*?)`{1,3}/g, "$1") // `code` -> code
        .replace(/#{1,6}\s+/g, "") // # Header -> Header
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [text](url) -> text
        .replace(/^[*-]\s+/gm, "") // bullet points
        .replace(/[*_#`~]/g, "") // stray markdown symbols
        .replace(/\s+/g, " ") // normalize spaces
        .trim();
    };
    const changeMicLanguage = (langCode)=>{
        setMicLanguage(langCode);
        micLanguageRef.current = langCode;
        activeLanguageRef.current = langCode;
        if (recognitionRef.current) {
            try {
                recognitionRef.current.abort();
            } catch (e) {}
        }
        setTimeout(()=>{
            if (activeSessionRef.current && ("TURBOPACK compile-time value", "object") !== "undefined" && !window.speechSynthesis.speaking) {
                initiateListening();
            }
        }, 200);
    };
    // Speech synthesis helper supporting physical <break time="Xs" /> pause gaps, emotions and markdown stripping
    const playVoiceResponse = (text, onEndCallback)=>{
        if (("TURBOPACK compile-time value", "object") === "undefined" || !window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        if (pauseTimerRef.current) {
            clearTimeout(pauseTimerRef.current);
            pauseTimerRef.current = null;
        }
        if (recognitionRef.current) {
            try {
                recognitionRef.current.abort();
            } catch (e) {}
        }
        const EMOTION_VOICE_MODULATION = {
            happy: {
                pitch: 1.02,
                rate: 1.0
            },
            sad: {
                pitch: 0.98,
                rate: 0.92
            },
            fearful: {
                pitch: 1.02,
                rate: 1.02
            },
            disgusted: {
                pitch: 0.98,
                rate: 0.95
            },
            surprised: {
                pitch: 1.02,
                rate: 1.02
            },
            neutral: {
                pitch: 1.0,
                rate: 1.0
            },
            fluent: {
                pitch: 1.0,
                rate: 1.02
            }
        };
        // Split speech into chunks separated by pause tags like <break time="0.5s" /> or [pause: 1s] and <emotion type="..." />
        const combinedRegex = /(<emotion\s+type=["']?([a-zA-Z]+)["']?\s*\/?>)|(<break\s+time=["']?(\d*\.?\d+)s?["']?\s*\/?>|\[pause:?\s*(\d*\.?\d+)s?\])/gi;
        const segments = [];
        let currentEmotion = "neutral";
        let lastIdx = 0;
        let match;
        while((match = combinedRegex.exec(text)) !== null){
            const rawChunk = text.substring(lastIdx, match.index).replace(/<[^>]+>/g, "").trim();
            const chunkText = cleanSpeechText(rawChunk);
            const emotionTag = match[2];
            const pauseSec = parseFloat(match[4] || match[5] || "0");
            const pauseMs = Math.max(0, Math.round(pauseSec * 1000));
            if (emotionTag) {
                if (chunkText) {
                    segments.push({
                        text: chunkText,
                        emotion: currentEmotion,
                        pauseAfterMs: 0
                    });
                }
                currentEmotion = emotionTag.toLowerCase();
            } else if (pauseMs > 0 || match[3]) {
                if (chunkText) {
                    segments.push({
                        text: chunkText,
                        emotion: currentEmotion,
                        pauseAfterMs: pauseMs
                    });
                } else if (segments.length > 0) {
                    segments[segments.length - 1].pauseAfterMs += pauseMs;
                } else if (pauseMs > 0) {
                    segments.push({
                        text: "",
                        emotion: currentEmotion,
                        pauseAfterMs: pauseMs
                    });
                }
            }
            lastIdx = combinedRegex.lastIndex;
        }
        const trailingRaw = text.substring(lastIdx).replace(/<[^>]+>/g, "").trim();
        const trailingText = cleanSpeechText(trailingRaw);
        if (trailingText) {
            segments.push({
                text: trailingText,
                emotion: currentEmotion,
                pauseAfterMs: 0
            });
        }
        if (segments.length === 0) {
            const cleanAll = cleanSpeechText(text.replace(/<[^>]+>/g, "").trim());
            segments.push({
                text: cleanAll,
                emotion: "neutral",
                pauseAfterMs: 0
            });
        }
        let segmentIndex = 0;
        const playNext = ()=>{
            if (!activeSessionRef.current) return;
            if (segmentIndex >= segments.length) {
                setVoiceStatus("listening");
                setTimeout(onEndCallback, 400);
                return;
            }
            const segment = segments[segmentIndex];
            segmentIndex++;
            // If segment text is empty (leading pause gap), delay and proceed
            if (!segment.text) {
                if (segment.pauseAfterMs > 0) {
                    setVoiceStatus("speaking");
                    pauseTimerRef.current = setTimeout(()=>{
                        playNext();
                    }, segment.pauseAfterMs);
                } else {
                    playNext();
                }
                return;
            }
            setVoiceStatus("speaking");
            const utterance = new SpeechSynthesisUtterance(segment.text);
            const mod = EMOTION_VOICE_MODULATION[segment.emotion] || EMOTION_VOICE_MODULATION.neutral;
            utterance.pitch = mod.pitch;
            utterance.rate = mod.rate;
            const isTamilUnicode = /[\u0B80-\u0BFF]/.test(segment.text);
            const isTanglish = /\b(irukken|irukan|solla|panradhu|pandrathu|aagum|unga|ungaloda|dhaan|nalla|vanakkam|pathi|pesalaam|thavavai|saaptinagala|machan|keetturuka|therinjukanum|mudiyadhu|epdi|eppadi|yeppadi|paarkka|kudukkang|pesa|sariyaana|ennodu|namaskaram)\b/i.test(segment.text);
            const isHindiUnicode = /[\u0900-\u097F]/.test(segment.text);
            const isHinglish = /\b(kaise|kya|nahi|karna|kar|raha|hai|samjh|bataya|apka|aapse|hoga|batao|apne|namaste)\b/i.test(segment.text);
            let detectedLangCode = "en-IN";
            if (isTamilUnicode || isTanglish) {
                utterance.lang = "ta-IN";
                detectedLangCode = "ta-IN";
            } else if (isHindiUnicode || isHinglish) {
                utterance.lang = "hi-IN";
                detectedLangCode = "hi-IN";
            } else if (/[\u0C00-\u0C7F]/.test(segment.text)) {
                utterance.lang = "te-IN";
                detectedLangCode = "te-IN";
            } else if (/[\u0D00-\u0D7F]/.test(segment.text)) {
                utterance.lang = "ml-IN";
                detectedLangCode = "ml-IN";
            } else if (/[\u0C80-\u0CFF]/.test(segment.text)) {
                utterance.lang = "kn-IN";
                detectedLangCode = "kn-IN";
            } else if (/[\u0980-\u09FF]/.test(segment.text)) {
                utterance.lang = "bn-IN";
                detectedLangCode = "bn-IN";
            } else if (/[\u0600-\u06FF]/.test(segment.text)) {
                utterance.lang = "ur-IN";
                detectedLangCode = "ur-IN";
            } else {
                utterance.lang = "en-IN";
                detectedLangCode = "en-US";
            }
            if (activeSessionRef.current) {
                activeLanguageRef.current = detectedLangCode;
            }
            // Prioritize natural, neural, and studio-grade online voices over legacy robotic voices
            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis) {
                const voices = window.speechSynthesis.getVoices();
                if (voices && voices.length > 0) {
                    const langCodeLower = detectedLangCode.toLowerCase();
                    const langPrefix = detectedLangCode.split("-")[0].toLowerCase();
                    const getVoiceScore = (v)=>{
                        const vLang = (v.lang || "").toLowerCase();
                        const vName = (v.name || "").toLowerCase();
                        let score = 0;
                        if (vLang === langCodeLower) score += 100;
                        else if (vLang.startsWith(langPrefix)) score += 60;
                        else if (vLang.startsWith("en") && langPrefix === "en") score += 40;
                        if (vName.includes("natural") || vName.includes("online") || vName.includes("neural")) score += 50;
                        if (vName.includes("google")) score += 40;
                        if (vName.includes("premium")) score += 30;
                        if (vName.includes("microsoft") && !vName.includes("david") && !vName.includes("desktop")) score += 20;
                        return score;
                    };
                    const scored = [
                        ...voices
                    ].map((v)=>({
                            v,
                            score: getVoiceScore(v)
                        })).sort((a, b)=>b.score - a.score);
                    if (scored.length > 0 && scored[0].score > 0) {
                        utterance.voice = scored[0].v;
                    }
                }
            }
            utterance.onend = ()=>{
                if (!activeSessionRef.current) return;
                if (segment.pauseAfterMs > 0) {
                    // PHYSICAL PAUSE GAP: Wait the exact duration before speaking next segment
                    setVoiceStatus("speaking");
                    pauseTimerRef.current = setTimeout(()=>{
                        playNext();
                    }, segment.pauseAfterMs);
                } else {
                    playNext();
                }
            };
            utterance.onerror = (e)=>{
                if (!activeSessionRef.current) return;
                if (segment.pauseAfterMs > 0) {
                    pauseTimerRef.current = setTimeout(()=>{
                        playNext();
                    }, segment.pauseAfterMs);
                } else {
                    playNext();
                }
            };
            window.speechSynthesis.speak(utterance);
        };
        playNext();
    };
    // Speech recognition listener
    const processFinalSpeechUtterance = (rawText)=>{
        if (vadSilenceTimerRef.current) {
            clearTimeout(vadSilenceTimerRef.current);
            vadSilenceTimerRef.current = null;
        }
        const cleanText = rawText.trim();
        if (!cleanText || !activeSessionRef.current) return;
        accumulatedSpeechRef.current = "";
        setInterimText("");
        if (recognitionRef.current) {
            try {
                recognitionRef.current.abort();
            } catch (e) {}
        }
        handleSendMessage(cleanText);
    };
    const initiateListening = ()=>{
        if (!activeSessionRef.current) return;
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis && window.speechSynthesis.speaking) return;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setErrorMessage("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
            return;
        }
        try {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.abort();
                } catch (e) {}
            }
            const recognition = new SpeechRecognition();
            recognitionRef.current = recognition;
            recognition.continuous = false;
            recognition.interimResults = true;
            recognition.lang = micLanguageRef.current || activeLanguageRef.current || "en-IN";
            recognition.onstart = ()=>{
                if (activeSessionRef.current) {
                    setVoiceStatus("listening");
                }
            };
            recognition.onerror = (event)=>{
                if (!activeSessionRef.current) return;
                if (event.error === "not-allowed" || event.error === "service-not-allowed") {
                    setErrorMessage("⚠️ Microphone access is blocked. Please allow microphone permission in your browser.");
                } else if (event.error === "audio-capture") {
                    setErrorMessage("⚠️ No microphone was found. Please check your mic connection.");
                }
                setTimeout(()=>{
                    if (activeSessionRef.current && ("TURBOPACK compile-time value", "object") !== "undefined" && !window.speechSynthesis.speaking) {
                        initiateListening();
                    }
                }, 500);
            };
            recognition.onend = ()=>{
                if (!activeSessionRef.current) return;
                if (accumulatedSpeechRef.current && accumulatedSpeechRef.current.trim()) {
                    const textToSend = accumulatedSpeechRef.current.trim();
                    accumulatedSpeechRef.current = "";
                    processFinalSpeechUtterance(textToSend);
                    return;
                }
                setTimeout(()=>{
                    if (activeSessionRef.current && ("TURBOPACK compile-time value", "object") !== "undefined" && !window.speechSynthesis.speaking) {
                        initiateListening();
                    }
                }, 300);
            };
            recognition.onresult = (event)=>{
                if (!activeSessionRef.current) return;
                let finalTranscript = "";
                let interim = "";
                for(let i = event.resultIndex; i < event.results.length; ++i){
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interim += event.results[i][0].transcript;
                    }
                }
                const currentSpeech = (finalTranscript || interim || "").trim();
                if (currentSpeech) {
                    accumulatedSpeechRef.current = currentSpeech;
                    setInterimText(currentSpeech);
                    // Fast VAD Silence Endpointing: 500ms natural silence threshold triggers final utterance
                    if (vadSilenceTimerRef.current) {
                        clearTimeout(vadSilenceTimerRef.current);
                    }
                    vadSilenceTimerRef.current = setTimeout(()=>{
                        if (activeSessionRef.current && accumulatedSpeechRef.current.trim()) {
                            processFinalSpeechUtterance(accumulatedSpeechRef.current);
                        }
                    }, 500);
                }
                if (finalTranscript && finalTranscript.trim()) {
                    processFinalSpeechUtterance(finalTranscript.trim());
                }
            };
            recognition.start();
        } catch (e) {}
    };
    const handleSendMessage = async (textToSend)=>{
        if (!textToSend.trim() || !voiceSessionIdRef.current || !activeSessionRef.current) return;
        setVoiceTranscript((prev)=>[
                ...prev,
                {
                    sender: "user",
                    text: textToSend
                }
            ]);
        setVoiceStatus("thinking");
        setConnectionState("PROCESSING");
        setErrorMessage(null);
        const sendStartTime = Date.now();
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$local$2d$voice$2d$test$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localVoiceTestService"].sendMessage(voiceSessionIdRef.current, textToSend);
            if (!activeSessionRef.current) return;
            const latency = data.latency_ms || Date.now() - sendStartTime;
            setLastTurnLatencyMs(latency);
            setConnectionState("CONNECTED");
            setCurrentScriptStep(data.current_step || "1. Greeting");
            setScriptSteps(data.script_steps || []);
            setCollectedData(data.collected_data || {});
            setQualificationStatus(data.qualification_status || "IN_PROGRESS");
            const reply = data.response;
            setVoiceTranscript((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: reply
                    }
                ]);
            if (data.transfer_status === "ASSIGNED") {
                const agentName = data.assigned_expert?.name || "Voice Agent";
                setTransferStatus(`✅ Transferred! Assigned to human agent: ${agentName}`);
            } else if (data.transfer_status === "QUEUED") {
                setTransferStatus(`⏳ All human agents busy. Lead placed in assignment queue.`);
            }
            const rawAudioUrl = data.audio_url;
            const playableUrl = rawAudioUrl && rawAudioUrl.includes("/static/audio/") ? rawAudioUrl.substring(rawAudioUrl.indexOf("/static/audio/")) : rawAudioUrl;
            if (playableUrl) {
                setVoiceStatus("speaking");
                if (recognitionRef.current) {
                    try {
                        recognitionRef.current.abort();
                    } catch (e) {}
                }
                const audio = new Audio(playableUrl);
                audio.preload = "auto";
                audio.onended = ()=>{
                    if (activeSessionRef.current) {
                        setVoiceStatus("listening");
                        setTimeout(initiateListening, 300);
                    }
                };
                audio.onerror = ()=>{
                    playVoiceResponse(reply, ()=>{
                        if (activeSessionRef.current) initiateListening();
                    });
                };
                audio.play().catch(()=>{
                    playVoiceResponse(reply, ()=>{
                        if (activeSessionRef.current) initiateListening();
                    });
                });
            } else {
                playVoiceResponse(reply, ()=>{
                    if (activeSessionRef.current) {
                        initiateListening();
                    }
                });
            }
        } catch (err) {
            console.warn("Error processing local voice test message:", err);
            const errMsg = err.message || "Failed to communicate with backend server";
            setConnectionState("ERROR");
            setErrorMessage(errMsg);
            setVoiceTranscript((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: `⚠️ Error receiving AI response: ${errMsg}`
                    }
                ]);
            if (activeSessionRef.current) {
                setVoiceStatus("listening");
            }
        }
    };
    const onCallAnsweredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketSync"])({
        "LocalVoiceTestModal.useWebSocketSync": (msg)=>{
            const evt = (msg.event || msg.type || "").toUpperCase();
            const cId = msg.call_id;
            if (activeCallIdRef.current && (!cId || cId === activeCallIdRef.current)) {
                if (evt === "CALL_CONNECTED" || evt === "CALL_ATTENDED" || evt === "INCOMING_CALL_ANSWERED") {
                    if (onCallAnsweredRef.current) {
                        onCallAnsweredRef.current();
                    }
                } else if (evt === "CALL_ENDED" || evt === "CALL_COMPLETED" || evt === "CALL_FAILED") {
                    if (callPollIntervalRef.current) {
                        clearInterval(callPollIntervalRef.current);
                        callPollIntervalRef.current = null;
                    }
                    setConnectionState("DISCONNECTED");
                    stopTimer();
                }
            }
        }
    }["LocalVoiceTestModal.useWebSocketSync"]);
    const startSession = async (leadIdOverride)=>{
        // End previous session if running
        if (voiceSessionIdRef.current) {
            const prevDurationMs = stopTimer();
            const prevDurationSeconds = Math.max(1, Math.floor(prevDurationMs / 1000));
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$local$2d$voice$2d$test$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localVoiceTestService"].end(voiceSessionIdRef.current, prevDurationSeconds).catch(()=>{});
            voiceSessionIdRef.current = undefined;
        }
        if (callPollIntervalRef.current) {
            clearInterval(callPollIntervalRef.current);
            callPollIntervalRef.current = null;
        }
        onCallAnsweredRef.current = null;
        pendingGreetingRef.current = null;
        activeCallIdRef.current = null;
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        if (pauseTimerRef.current) {
            clearTimeout(pauseTimerRef.current);
            pauseTimerRef.current = null;
        }
        activeSessionRef.current = true;
        setConnectionState("INITIALIZING");
        setVoiceStatus("thinking");
        setErrorMessage(null);
        setVoiceTranscript([
            {
                sender: "ai",
                text: "Initializing AI Voice Session & Loading Campaign Context..."
            }
        ]);
        const targetLeadId = leadIdOverride !== undefined ? leadIdOverride : selectedLeadId;
        try {
            setConnectionState("CONNECTING");
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$local$2d$voice$2d$test$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localVoiceTestService"].start(campaignId, targetLeadId);
            if (!activeSessionRef.current) return;
            const callId = data.call_id;
            const isRinging = data.telephony_status === "RINGING" || data.status === "RINGING";
            if (callId) {
                activeCallIdRef.current = callId;
            }
            setVoiceSessionId(data.session_id);
            voiceSessionIdRef.current = data.session_id;
            setCurrentScriptStep(data.current_step || "1. Greeting");
            setScriptSteps(data.script_steps || []);
            setCollectedData(data.collected_data || {});
            setQualificationStatus(data.qualification_status || "IN_PROGRESS");
            if (data.lead_id) {
                setSelectedLeadId(data.lead_id);
            }
            setActiveCustomer({
                id: data.lead_id,
                name: data.customer_name || "Customer",
                phone: data.customer_phone || "",
                company: data.customer_company || "",
                status: isRinging ? "RINGING" : "CONNECTED"
            });
            const greeting = data.greeting || data.initial_message || "Hi! My name is Alex. How are you today?";
            const isPhoneCall = Boolean(data.is_phone_call || data.telephony_status);
            const handleCallAnswered = ()=>{
                if (!activeSessionRef.current) return;
                if (callPollIntervalRef.current) {
                    clearInterval(callPollIntervalRef.current);
                    callPollIntervalRef.current = null;
                }
                onCallAnsweredRef.current = null;
                setConnectionState("CONNECTED");
                startTimer();
                setActiveCustomer((prev)=>prev ? {
                        ...prev,
                        status: "CONNECTED"
                    } : null);
                const toSpeak = pendingGreetingRef.current?.greeting || greeting;
                const rawAudioToPlay = pendingGreetingRef.current ? pendingGreetingRef.current.audioUrl : data.audio_url;
                const audioToPlay = rawAudioToPlay && rawAudioToPlay.includes("/static/audio/") ? rawAudioToPlay.substring(rawAudioToPlay.indexOf("/static/audio/")) : rawAudioToPlay;
                pendingGreetingRef.current = null;
                setVoiceTranscript([
                    {
                        sender: "ai",
                        text: toSpeak
                    }
                ]);
                if (isPhoneCall) {
                    // Real Phone Call: Audio & voice input stream over SIP/RTP directly to/from phone handset
                    setVoiceStatus("speaking");
                    if (recognitionRef.current) {
                        try {
                            recognitionRef.current.abort();
                        } catch (e) {}
                    }
                    return;
                }
                if (audioToPlay) {
                    setVoiceStatus("speaking");
                    if (recognitionRef.current) {
                        try {
                            recognitionRef.current.abort();
                        } catch (e) {}
                    }
                    const audio = new Audio(audioToPlay);
                    audio.preload = "auto";
                    audio.onended = ()=>{
                        if (activeSessionRef.current) initiateListening();
                    };
                    audio.onerror = ()=>{
                        playVoiceResponse(toSpeak, ()=>{
                            if (activeSessionRef.current) initiateListening();
                        });
                    };
                    audio.play().catch(()=>{
                        playVoiceResponse(toSpeak, ()=>{
                            if (activeSessionRef.current) initiateListening();
                        });
                    });
                } else {
                    playVoiceResponse(toSpeak, ()=>{
                        if (activeSessionRef.current) initiateListening();
                    });
                }
            };
            onCallAnsweredRef.current = handleCallAnswered;
            if (data.telephony_status === "FAILED") {
                setConnectionState("DISCONNECTED");
                setVoiceStatus("idle");
                const failureReason = data.telephony_error || "SIP trunk network unreachable or timed out.";
                setVoiceTranscript([
                    {
                        sender: "ai",
                        text: `⚠️ Call could not be placed to ${data.customer_name || "Lead"} (${data.customer_phone || ""}): ${failureReason}`
                    }
                ]);
                return;
            }
            if (isRinging) {
                // CALL IS RINGING ON LEAD'S PHONE — WAIT FOR ANSWER BEFORE SPEAKING!
                setConnectionState("RINGING");
                setVoiceStatus("idle");
                pendingGreetingRef.current = {
                    greeting,
                    audioUrl: data.audio_url
                };
                setVoiceTranscript([
                    {
                        sender: "ai",
                        text: `📞 Calling ${data.customer_name || "Lead"} (${data.customer_phone || ""})... Ringing... Waiting for customer to answer.`
                    }
                ]);
                // Ensure previous polling is completely cleared before starting
                if (callPollIntervalRef.current) {
                    clearInterval(callPollIntervalRef.current);
                    callPollIntervalRef.current = null;
                }
                // Start fallback polling every 1200ms
                if (callId) {
                    callPollIntervalRef.current = setInterval(async ()=>{
                        if (!activeSessionRef.current || activeCallIdRef.current !== callId) {
                            if (callPollIntervalRef.current) {
                                clearInterval(callPollIntervalRef.current);
                                callPollIntervalRef.current = null;
                            }
                            return;
                        }
                        try {
                            const callInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/calls/${callId}`);
                            if (callInfo && activeCallIdRef.current === callId) {
                                if (callInfo.status === "CONNECTED" || callInfo.status === "IN_CALL") {
                                    handleCallAnswered();
                                } else if (callInfo.status === "COMPLETED" || callInfo.status === "FAILED") {
                                    if (callPollIntervalRef.current) {
                                        clearInterval(callPollIntervalRef.current);
                                        callPollIntervalRef.current = null;
                                    }
                                    setConnectionState("DISCONNECTED");
                                    setVoiceTranscript((prev)=>{
                                        const last = prev[prev.length - 1];
                                        if (last && last.text.includes("Call ended or was not answered")) {
                                            return prev;
                                        }
                                        return [
                                            ...prev,
                                            {
                                                sender: "ai",
                                                text: `⚠️ Call ended or was not answered by ${data.customer_name || "lead"}.`
                                            }
                                        ];
                                    });
                                }
                            }
                        } catch (_) {}
                    }, 1200);
                }
            } else {
                handleCallAnswered();
            }
        } catch (err) {
            console.warn("Failed to start session:", err);
            const errMsg = err.message || "Could not connect to backend server.";
            setConnectionState("ERROR");
            setErrorMessage(errMsg);
            setVoiceStatus("idle");
            setVoiceTranscript([
                {
                    sender: "ai",
                    text: `⚠️ Error initializing voice session: ${errMsg}`
                }
            ]);
        }
    };
    const handleTalkToAgent = async ()=>{
        if (isTransferring || !activeSessionRef.current) return;
        setIsTransferring(true);
        setTransferStatus("Initiating transfer to human agent...");
        try {
            const transferSpeech = "I understand. I am transferring you to an available human specialist right now. Please hold on a moment.";
            setVoiceTranscript((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: `🎧 Transferring call to a human specialist...`
                    }
                ]);
            setVoiceStatus("speaking");
            playVoiceResponse(transferSpeech, ()=>{
                setVoiceStatus("idle");
                setTransferStatus("Call transferred to human specialist queue.");
                setIsTransferring(false);
            });
        } catch (err) {
            console.warn("Transfer failed:", err);
            setTransferStatus("Transfer request queued.");
            setIsTransferring(false);
        }
    };
    // Download Call Report as CSV
    const handleDownloadCallCsv = ()=>{
        try {
            const customerName = activeCustomer?.name || "Customer";
            const customerPhone = activeCustomer?.phone || "";
            const customerCompany = activeCustomer?.company || "";
            const durationStr = formatDuration(elapsedMs);
            const sessionDate = new Date().toLocaleString();
            const collectedAnswersStr = Object.entries(collectedData).map(([k, v])=>`${k}: ${v}`).join("; ");
            const csvRows = [
                [
                    "Call Report - CallZenza AI Voice Agent",
                    ""
                ],
                [
                    "Date & Time",
                    `"${sessionDate}"`
                ],
                [
                    "Campaign Name",
                    `"${(campaignName || "Campaign").replace(/"/g, '""')}"`
                ],
                [
                    "Customer / Lead Name",
                    `"${customerName.replace(/"/g, '""')}"`
                ],
                [
                    "Phone Number",
                    `"${customerPhone}"`
                ],
                [
                    "Company",
                    `"${customerCompany.replace(/"/g, '""')}"`
                ],
                [
                    "Call Duration",
                    `"${durationStr}"`
                ],
                [
                    "Qualification Status",
                    `"${qualificationStatus}"`
                ],
                [
                    "Script Stage",
                    `"${currentScriptStep}"`
                ],
                [
                    "Captured Qualification Data",
                    `"${collectedAnswersStr.replace(/"/g, '""')}"`
                ],
                [
                    "",
                    ""
                ],
                [
                    "--- CONVERSATION TRANSCRIPT ---",
                    ""
                ],
                [
                    "Speaker",
                    "Message"
                ],
                ...voiceTranscript.map((m)=>[
                        m.sender === "ai" ? "AI Agent" : "Customer",
                        `"${(m.text || "").replace(/"/g, '""')}"`
                    ])
            ];
            const csvContent = "\uFEFF" + csvRows.map((r)=>r.join(",")).join("\n");
            const blob = new Blob([
                csvContent
            ], {
                type: "text/csv;charset=utf-8;"
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            const cleanName = customerName.toLowerCase().replace(/[^a-z0-9]/g, "_");
            link.setAttribute("href", url);
            link.setAttribute("download", `${cleanName}_call_report.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (e) {
            console.error("Failed to download call report CSV:", e);
        }
    };
    // Download All Assigned Leads Report as CSV
    const handleDownloadAllLeadsCsv = ()=>{
        try {
            const headers = [
                "Lead ID",
                "Customer Name",
                "Phone",
                "Company",
                "Call Status",
                "Campaign Name"
            ];
            const rows = (assignedLeads || []).map((l)=>[
                    l.id || "",
                    `"${(l.name || "Customer").replace(/"/g, '""')}"`,
                    `"${l.phone || ""}"`,
                    `"${(l.company || "").replace(/"/g, '""')}"`,
                    `"${l.call_status || "PENDING"}"`,
                    `"${(campaignName || "Campaign").replace(/"/g, '""')}"`
                ]);
            const csvContent = "\uFEFF" + [
                headers.join(","),
                ...rows.map((r)=>r.join(","))
            ].join("\n");
            const blob = new Blob([
                csvContent
            ], {
                type: "text/csv;charset=utf-8;"
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            const cleanCamp = (campaignName || "campaign").toLowerCase().replace(/[^a-z0-9]/g, "_");
            link.setAttribute("href", url);
            link.setAttribute("download", `${cleanCamp}_assigned_leads_report.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (e) {
            console.error("Failed to download campaign leads report CSV:", e);
        }
    };
    // Print or Download PDF Report
    const handlePrintPdfReport = ()=>{
        try {
            const customerName = activeCustomer?.name || "Customer";
            const customerPhone = activeCustomer?.phone || "—";
            const customerCompany = activeCustomer?.company || "—";
            const durationStr = formatDuration(elapsedMs);
            const sessionDate = new Date().toLocaleString();
            const printWindow = window.open("", "_blank", "width=850,height=900");
            if (!printWindow) return;
            const transcriptHtml = voiceTranscript.map((m)=>`
          <div style="margin-bottom: 12px; display: flex; flex-direction: column; align-items: ${m.sender === 'ai' ? 'flex-start' : 'flex-end'};">
            <div style="font-size: 11px; font-weight: 700; color: ${m.sender === 'ai' ? '#4f46e5' : '#059669'}; margin-bottom: 3px;">
              ${m.sender === 'ai' ? '🤖 CallZenza AI Agent' : '👤 Customer (' + customerName + ')'}
            </div>
            <div style="max-width: 80%; padding: 10px 14px; border-radius: 10px; font-size: 13px; line-height: 1.5; background: ${m.sender === 'ai' ? '#f3f4f6' : '#eff6ff'}; color: #1f2937; border: 1px solid ${m.sender === 'ai' ? '#e5e7eb' : '#bfdbfe'};">
              ${(m.text || "").replace(/\n/g, '<br/>')}
            </div>
          </div>
        `).join("");
            const collectedEntriesHtml = Object.entries(collectedData).map(([k, v])=>`<tr><td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600; text-transform: capitalize; background: #f8fafc;">${k}</td><td style="padding: 6px 10px; border: 1px solid #e2e8f0;">${v}</td></tr>`).join("");
            const htmlContent = [
                "<!DOCTYPE html>",
                "<html>",
                "<head>",
                `  <title>Call Report - ${customerName}</title>`,
                "  <style>",
                '    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 30px; color: #1e293b; }',
                "    h1 { font-size: 20px; font-weight: 800; color: #1e1b4b; margin: 0 0 4px 0; }",
                "    .header-box { border-bottom: 2px solid #6366f1; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start; }",
                "    .badge { display: inline-block; padding: 3px 8px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; }",
                "    .badge-qual { background: #dcfce7; color: #166534; border: 1px solid #86efac; }",
                "    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }",
                "    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 12px; }",
                "    .card strong { color: #0f172a; font-size: 13px; }",
                "    table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 20px; }",
                "    .transcript-box { border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #ffffff; }",
                "    @media print { body { padding: 15px; } button { display: none; } }",
                "  </style>",
                "</head>",
                "<body>",
                '  <div class="header-box">',
                "    <div>",
                "      <h1>CallZenza AI Voice Agent — Call Report</h1>",
                `      <div style="font-size: 12px; color: #64748b;">Campaign: <strong>${campaignName}</strong> • Generated: ${sessionDate}</div>`,
                "    </div>",
                '    <div style="text-align: right;">',
                `      <span class="badge badge-qual">${qualificationStatus}</span>`,
                `      <div style="font-size: 13px; font-weight: 700; color: #4f46e5; margin-top: 5px;">⏱ Duration: ${durationStr}</div>`,
                "    </div>",
                "  </div>",
                '  <div class="grid">',
                '    <div class="card">',
                '      <div style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">Customer Details</div>',
                `      <div>Customer: <strong>${customerName}</strong></div>`,
                `      <div>Phone: <strong>${customerPhone}</strong></div>`,
                `      <div>Company: <strong>${customerCompany}</strong></div>`,
                "    </div>",
                '    <div class="card">',
                '      <div style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">Call Metrics</div>',
                `      <div>Stage: <strong>${currentScriptStep}</strong></div>`,
                `      <div>Call Status: <strong>${qualificationStatus}</strong></div>`,
                `      <div>Duration: <strong>${durationStr}</strong></div>`,
                "    </div>",
                "  </div>",
                collectedEntriesHtml ? [
                    '  <div style="margin-bottom: 20px;">',
                    '    <div style="font-size: 13px; font-weight: 700; margin-bottom: 8px; color: #1e1b4b;">Captured Lead Information</div>',
                    "    <table>",
                    `      <tbody>${collectedEntriesHtml}</tbody>`,
                    "    </table>",
                    "  </div>"
                ].join("\n") : "",
                "  <div>",
                '    <div style="font-size: 13px; font-weight: 700; margin-bottom: 10px; color: #1e1b4b;">Conversation Transcript</div>',
                '    <div class="transcript-box">',
                `      ${transcriptHtml || '<p style="color: #94a3b8; font-size: 13px;">No conversation messages recorded.</p>'}`,
                "    </div>",
                "  </div>",
                "  <script>",
                "    window.onload = function() { window.print(); }",
                "  </script>",
                "</body>",
                "</html>"
            ].join("\n");
            printWindow.document.write(htmlContent);
            printWindow.document.close();
        } catch (e) {
            console.error("Failed to open print PDF report:", e);
        }
    };
    const handleClose = ()=>{
        activeSessionRef.current = false;
        setConnectionState("DISCONNECTED");
        if (callPollIntervalRef.current) {
            clearInterval(callPollIntervalRef.current);
            callPollIntervalRef.current = null;
        }
        const durationMs = stopTimer();
        const durationSeconds = Math.max(1, Math.floor(durationMs / 1000));
        const currentCallId = activeCallIdRef.current;
        if (currentCallId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/calls/${currentCallId}/end`, {
                method: "POST",
                body: JSON.stringify({
                    duration_seconds: durationSeconds,
                    outcome: "COMPLETED"
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).catch(()=>{});
        }
        if (voiceSessionIdRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$local$2d$voice$2d$test$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localVoiceTestService"].end(voiceSessionIdRef.current, durationSeconds).catch(()=>{});
        }
        if (recognitionRef.current) {
            try {
                recognitionRef.current.abort();
            } catch (e) {}
        }
        if (pauseTimerRef.current) {
            clearTimeout(pauseTimerRef.current);
            pauseTimerRef.current = null;
        }
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        onClose();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalVoiceTestModal.useEffect": ()=>{
            let isMounted = true;
            setLoadingLeads(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getAiAgentLeads(campaignId, {
                limit: 100
            }).then({
                "LocalVoiceTestModal.useEffect": (res)=>{
                    if (isMounted && res.leads && res.leads.length > 0) {
                        setAssignedLeads(res.leads);
                        const firstPending = res.leads.find({
                            "LocalVoiceTestModal.useEffect": (l)=>l.call_status === "PENDING"
                        }["LocalVoiceTestModal.useEffect"]) || res.leads[0];
                        setSelectedLeadId(firstPending.id);
                        setActiveCustomer({
                            id: firstPending.id,
                            name: firstPending.name,
                            phone: firstPending.phone,
                            company: firstPending.company,
                            status: firstPending.call_status
                        });
                        startSession(firstPending.id);
                    } else {
                        startSession();
                    }
                }
            }["LocalVoiceTestModal.useEffect"]).catch({
                "LocalVoiceTestModal.useEffect": (err)=>{
                    console.warn("Failed to load campaign leads:", err);
                    if (isMounted) startSession();
                }
            }["LocalVoiceTestModal.useEffect"]).finally({
                "LocalVoiceTestModal.useEffect": ()=>{
                    if (isMounted) setLoadingLeads(false);
                }
            }["LocalVoiceTestModal.useEffect"]);
            return ({
                "LocalVoiceTestModal.useEffect": ()=>{
                    isMounted = false;
                    activeSessionRef.current = false;
                    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
                    if (callPollIntervalRef.current) clearInterval(callPollIntervalRef.current);
                    if (pauseTimerRef.current) {
                        clearTimeout(pauseTimerRef.current);
                        pauseTimerRef.current = null;
                    }
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis) {
                        window.speechSynthesis.cancel();
                    }
                }
            })["LocalVoiceTestModal.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LocalVoiceTestModal.useEffect"], [
        campaignId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-gray-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-3xl shadow-2xl w-full max-w-5xl xl:max-w-6xl border border-gray-100 overflow-hidden flex flex-col h-[86vh] min-h-[680px] max-h-[900px] animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-indigo-50/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2.5 bg-indigo-100 text-indigo-600 rounded-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1079,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-900 text-lg",
                                                    children: "CallZenza Voice Agent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1083,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${connectionState === "CONNECTED" ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : connectionState === "RINGING" ? "bg-purple-100 text-purple-800 border border-purple-300 animate-pulse" : connectionState === "PROCESSING" ? "bg-amber-100 text-amber-800 border border-amber-300 animate-pulse" : connectionState === "CONNECTING" || connectionState === "INITIALIZING" ? "bg-blue-100 text-blue-800 border border-blue-300" : connectionState === "ERROR" ? "bg-rose-100 text-rose-800 border border-rose-300" : "bg-gray-100 text-gray-800 border border-gray-300"}`,
                                                    children: [
                                                        "● ",
                                                        connectionState === "RINGING" ? "RINGING..." : connectionState
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1085,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${qualificationStatus === "QUALIFIED" ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : qualificationStatus === "UNQUALIFIED" ? "bg-rose-100 text-rose-800 border border-rose-300" : "bg-amber-100 text-amber-800 border border-amber-300"}`,
                                                    children: qualificationStatus
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1096,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-0.5 text-xs text-gray-500 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "Campaign: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: campaignName
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                            lineNumber: 1104,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1104,
                                                    columnNumber: 17
                                                }, this),
                                                activeCustomer?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline-flex items-center gap-1 bg-indigo-100/70 text-indigo-800 px-2 py-0.5 rounded font-semibold text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                            lineNumber: 1107,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Calling: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: activeCustomer.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                            lineNumber: 1107,
                                                            columnNumber: 59
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1106,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1103,
                                            columnNumber: 15
                                        }, this),
                                        connectionState === "CONNECTED" || connectionState === "PROCESSING" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-mono font-bold text-indigo-600 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                            lineNumber: 1114,
                                                            columnNumber: 21
                                                        }, this),
                                                        formatDuration(elapsedMs)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 19
                                                }, this),
                                                lastTurnLatencyMs !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200",
                                                    children: [
                                                        "⚡ Turn: ",
                                                        lastTurnLatencyMs,
                                                        "ms"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1081,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1077,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleDownloadCallCsv,
                                    className: "gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 cursor-pointer shadow-2xs",
                                    title: "Download call transcript and lead report as CSV",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-3.5 w-3.5 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1136,
                                            columnNumber: 15
                                        }, this),
                                        "Download Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handlePrintPdfReport,
                                    className: "gap-1.5 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 cursor-pointer shadow-2xs",
                                    title: "Print or Save Report as PDF",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            className: "h-3.5 w-3.5 text-slate-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 15
                                        }, this),
                                        "Print / PDF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: handleClose,
                                    className: "rounded-full h-8 w-8 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1151,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1076,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 text-white px-6 py-2.5 flex items-center justify-between gap-3 border-b border-slate-800 shadow-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-extrabold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-3.5 w-3.5 text-emerald-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1160,
                                            columnNumber: 15
                                        }, this),
                                        "Target Customer:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1159,
                                    columnNumber: 13
                                }, this),
                                assignedLeads.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedLeadId || "",
                                            onChange: (e)=>{
                                                const newId = e.target.value;
                                                setSelectedLeadId(newId);
                                                const lead = assignedLeads.find((l)=>l.id === newId);
                                                if (lead) {
                                                    setActiveCustomer({
                                                        id: lead.id,
                                                        name: lead.name,
                                                        phone: lead.phone,
                                                        company: lead.company,
                                                        status: lead.call_status
                                                    });
                                                }
                                                startSession(newId);
                                            },
                                            className: "bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-3 py-1 rounded-lg border border-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-400 cursor-pointer max-w-xs md:max-w-md lg:max-w-lg truncate shadow-xs",
                                            children: assignedLeads.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: l.id,
                                                    className: "bg-slate-900 text-white",
                                                    children: [
                                                        l.name,
                                                        " (",
                                                        l.phone || "No phone",
                                                        ") — ",
                                                        l.call_status
                                                    ]
                                                }, l.id, true, {
                                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 17
                                        }, this),
                                        activeCustomer?.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border shrink-0 ${activeCustomer.status === "QUALIFIED" ? "bg-emerald-950 text-emerald-300 border-emerald-700" : activeCustomer.status === "CALLED" ? "bg-blue-950 text-blue-300 border-blue-700" : "bg-amber-950 text-amber-300 border-amber-700"}`,
                                            children: activeCustomer.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1191,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1164,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700",
                                        children: activeCustomer?.name ? `${activeCustomer.name} (${activeCustomer.phone || "Lead"})` : "Dialing Assigned Lead..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1202,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1201,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 shrink-0",
                            children: [
                                activeCustomer?.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline-flex items-center gap-1 text-[11px] text-slate-300 bg-slate-800 px-2.5 py-1 rounded border border-slate-700 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                            className: "h-3 w-3 text-indigo-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        activeCustomer.company
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    size: "sm",
                                    onClick: ()=>{
                                        if (selectedLeadId) {
                                            startSession(selectedLeadId);
                                        }
                                    },
                                    className: "bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer border border-indigo-400/40",
                                    title: "Call this lead again with AI Voice Agent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1226,
                                            columnNumber: 15
                                        }, this),
                                        " Re-dial"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 13
                                }, this),
                                assignedLeads.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    size: "sm",
                                    onClick: ()=>{
                                        const currentIndex = assignedLeads.findIndex((l)=>l.id === selectedLeadId);
                                        const nextIndex = (currentIndex + 1) % assignedLeads.length;
                                        const nextLead = assignedLeads[nextIndex];
                                        if (nextLead) {
                                            setSelectedLeadId(nextLead.id);
                                            setActiveCustomer({
                                                id: nextLead.id,
                                                name: nextLead.name,
                                                phone: nextLead.phone,
                                                company: nextLead.company,
                                                status: nextLead.call_status
                                            });
                                            startSession(nextLead.id);
                                        }
                                    },
                                    className: "bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer border border-emerald-400/40",
                                    title: "Dial next lead in this campaign",
                                    children: [
                                        "Call Next Lead ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    size: "sm",
                                    onClick: handleDownloadCallCsv,
                                    className: "bg-indigo-700 hover:bg-indigo-600 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer border border-indigo-500/40",
                                    title: "Download call report for this lead as CSV",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-3 w-3 text-indigo-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 15
                                        }, this),
                                        " Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1254,
                                    columnNumber: 13
                                }, this),
                                assignedLeads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    size: "sm",
                                    onClick: handleDownloadAllLeadsCsv,
                                    className: "bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-[11px] h-7 px-2.5 rounded-lg shadow-sm transition-all flex items-center gap-1 cursor-pointer border border-slate-700",
                                    title: "Download all leads in this campaign as CSV",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-3 w-3 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1271,
                                            columnNumber: 17
                                        }, this),
                                        " All Leads"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1264,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-50 border-b border-slate-200/60 px-6 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "h-3.5 w-3.5 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1281,
                                            columnNumber: 15
                                        }, this),
                                        " Qualification Stage Progress"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-indigo-700",
                                    children: [
                                        "Active: ",
                                        currentScriptStep || "1. Greeting"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1283,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 overflow-x-auto pb-1",
                            children: (scriptSteps || []).map((stepItem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-semibold shrink-0 transition-all ${stepItem.status === "DONE" ? "bg-emerald-100 text-emerald-800 border border-emerald-200" : stepItem.status === "CURRENT" ? "bg-indigo-600 text-white font-bold shadow-sm" : "bg-white text-slate-400 border border-slate-200"}`,
                                    children: [
                                        stepItem.status === "DONE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3 w-3 text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1299,
                                            columnNumber: 48
                                        }, this),
                                        stepItem.status === "CURRENT" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-3 w-3 text-white animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 51
                                        }, this),
                                        stepItem.status === "PENDING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                            className: "h-2.5 w-2.5 text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: stepItem.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1302,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1289,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1278,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-indigo-900/95 text-white px-6 py-2.5 flex items-center justify-between gap-2 overflow-x-auto text-[11px] font-medium border-b border-indigo-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-3 w-3 text-indigo-300"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1312,
                                        columnNumber: 15
                                    }, this),
                                    "Customer: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-white font-bold",
                                        children: activeCustomer?.name || "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1313,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                lineNumber: 1311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "h-3 w-3 text-emerald-300"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1316,
                                        columnNumber: 15
                                    }, this),
                                    "Phone: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-200 font-mono",
                                        children: activeCustomer?.phone || "—"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1317,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                lineNumber: 1315,
                                columnNumber: 13
                            }, this),
                            activeCustomer?.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                        className: "h-3 w-3 text-amber-300"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1321,
                                        columnNumber: 17
                                    }, this),
                                    "Company: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-200",
                                        children: activeCustomer.company
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1322,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                lineNumber: 1320,
                                columnNumber: 15
                            }, this),
                            Object.entries(collectedData).filter(([k])=>![
                                    "leadId",
                                    "lead_id",
                                    "first_name",
                                    "last_name",
                                    "customer_name",
                                    "phone",
                                    "email",
                                    "company"
                                ].includes(k)).slice(0, 4).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-700/60 text-indigo-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "capitalize",
                                            children: [
                                                k.replace(/([A-Z])/g, ' $1').trim(),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-emerald-400 font-bold",
                                            children: String(v)
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, k, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1330,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                        lineNumber: 1310,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1309,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 flex items-center justify-between gap-3 border-b border-gray-100 bg-gradient-to-r from-indigo-50/20 via-white to-indigo-50/20 px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-7 h-7 rounded-full flex items-center justify-center text-white shadow transition-all ${connectionState === "ERROR" ? "bg-rose-600" : connectionState === "DISCONNECTED" ? "bg-gray-500" : voiceStatus === "listening" ? "bg-indigo-600 scale-105" : voiceStatus === "speaking" ? "bg-emerald-600" : voiceStatus === "thinking" || connectionState === "PROCESSING" ? "bg-amber-500 animate-bounce" : "bg-blue-600"}`,
                                    children: connectionState === "ERROR" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 46
                                    }, this) : connectionState === "DISCONNECTED" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 53
                                    }, this) : voiceStatus === "listening" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1350,
                                        columnNumber: 46
                                    }, this) : voiceStatus === "speaking" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1351,
                                        columnNumber: 45
                                    }, this) : voiceStatus === "thinking" || connectionState === "PROCESSING" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-3.5 w-3.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 81
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 132
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1341,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-gray-800",
                                            children: connectionState === "ERROR" ? `Error: ${errorMessage || "Connection failure"}` : connectionState === "DISCONNECTED" ? "Session Disconnected" : connectionState === "RINGING" ? `📞 Ringing ${activeCustomer?.name || "Lead"} (${activeCustomer?.phone || ""})... Waiting for answer` : connectionState === "INITIALIZING" || connectionState === "CONNECTING" ? "Connecting to Backend & Gemini AI..." : connectionState === "PROCESSING" || voiceStatus === "thinking" ? "Gemini LLM reasoning & matching campaign script..." : voiceStatus === "speaking" ? "AI Voice Speaking..." : voiceStatus === "listening" ? "Connected — Listening to customer..." : "Connected & Ready"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1355,
                                            columnNumber: 15
                                        }, this),
                                        interimText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-indigo-600 font-semibold animate-pulse mt-0.5",
                                            children: [
                                                "🎙️ Hearing: “",
                                                interimText,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                            lineNumber: 1365,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-slate-500 uppercase px-1.5",
                                    children: "Mic:"
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1374,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        code: "en-IN",
                                        label: "EN (India)"
                                    },
                                    {
                                        code: "ta-IN",
                                        label: "Tamil"
                                    },
                                    {
                                        code: "en-US",
                                        label: "EN (US)"
                                    },
                                    {
                                        code: "hi-IN",
                                        label: "Hindi"
                                    }
                                ].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>changeMicLanguage(lang.code),
                                        className: `text-[10px] font-bold px-2 py-0.5 rounded-lg transition-all cursor-pointer ${micLanguage === lang.code ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"}`,
                                        title: `Switch microphone recognition language to ${lang.label}`,
                                        children: lang.label
                                    }, lang.code, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1381,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1373,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1339,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50",
                    children: voiceTranscript.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex gap-2.5 items-start ${msg.sender === "user" ? "flex-row-reverse" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-2 rounded-full border ${msg.sender === "user" ? "bg-indigo-600 border-indigo-700" : "bg-white border-gray-200"}`,
                                    children: msg.sender === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-3.5 w-3.5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1403,
                                        columnNumber: 42
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "h-3.5 w-3.5 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1403,
                                        columnNumber: 88
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1402,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-3.5 rounded-2xl text-xs max-w-[80%] leading-relaxed ${msg.sender === "user" ? "bg-indigo-600 text-white font-medium rounded-tr-none shadow-sm" : "bg-white text-gray-800 rounded-tl-none border border-gray-150 shadow-sm"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "whitespace-pre-wrap",
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                        lineNumber: 1410,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1405,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1401,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1399,
                    columnNumber: 9
                }, this),
                transferStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-2 bg-indigo-50 border-t border-indigo-100 text-indigo-900 text-xs font-bold flex items-center justify-between animate-in fade-in duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: transferStatus
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1419,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTransferStatus(null),
                            className: "text-indigo-400 hover:text-indigo-600 cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1420,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1418,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-white border-t border-gray-100 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: typedInputMessage,
                            onChange: (e)=>setTypedInputMessage(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter" && typedInputMessage.trim()) {
                                    const msg = typedInputMessage;
                                    setTypedInputMessage("");
                                    handleSendMessage(msg);
                                }
                            },
                            placeholder: "Type customer reply or speak into mic...",
                            className: "text-xs font-medium"
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1426,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            disabled: !typedInputMessage.trim() || connectionState === "PROCESSING",
                            onClick: ()=>{
                                const msg = typedInputMessage;
                                setTypedInputMessage("");
                                handleSendMessage(msg);
                            },
                            className: "bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "h-3.5 w-3.5 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1449,
                                    columnNumber: 13
                                }, this),
                                " Send"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1439,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            disabled: isTransferring,
                            onClick: handleTalkToAgent,
                            className: "bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-4 shrink-0 cursor-pointer shadow-sm flex items-center gap-1.5",
                            title: "Transfer live call to an available human voice agent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1458,
                                    columnNumber: 13
                                }, this),
                                isTransferring ? "Transferring..." : "Talk to Agent"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1451,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: handleDownloadCallCsv,
                            className: "text-xs font-bold text-slate-700 hover:text-indigo-600 border border-slate-200 cursor-pointer shadow-2xs gap-1.5",
                            title: "Export call transcript and report",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                                    lineNumber: 1468,
                                    columnNumber: 13
                                }, this),
                                " Export Report"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1461,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleClose,
                            className: "bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-5 shrink-0 cursor-pointer",
                            children: "End Session"
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                            lineNumber: 1470,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
                    lineNumber: 1425,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
            lineNumber: 1074,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/campaign/LocalVoiceTestModal.tsx",
        lineNumber: 1073,
        columnNumber: 5
    }, this);
}
_s(LocalVoiceTestModal, "wxKqJ1/BADLXRXtXq10LRUR+iow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketSync"]
    ];
});
_c = LocalVoiceTestModal;
var _c;
__turbopack_context__.k.register(_c, "LocalVoiceTestModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/chatbot/GlobalChatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalChatbot",
    ()=>GlobalChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/chatbot.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MarkdownText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/MarkdownText.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GlobalChatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [conversationId, setConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalChatbot.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["GlobalChatbot.useEffect"], [
        messages
    ]);
    const handleSend = async ()=>{
        if (!input.trim() || loading) return;
        const userMessage = {
            id: Date.now().toString(),
            sender: "user",
            text: input
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].sendMessage(userMessage.text, conversationId || undefined, null, true);
            if (!conversationId && response.conversation_id) {
                setConversationId(response.conversation_id);
            }
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now().toString(),
                        sender: "assistant",
                        text: response.message
                    }
                ]);
        } catch (err) {
            console.error("Chatbot error:", err);
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now().toString(),
                        sender: "assistant",
                        text: "Sorry, I encountered an error. Please try again."
                    }
                ]);
        } finally{
            setLoading(false);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 z-[9999]",
            children: [
                !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsOpen(true),
                    className: "flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-300",
                    "aria-label": "Open AI Chatbot",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                        size: 28
                    }, void 0, false, {
                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden absolute bottom-0 right-0 origin-bottom-right transition-transform",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-indigo-600 text-white px-4 py-3 flex items-center justify-between shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold leading-tight",
                                                    children: "CallZenza AI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-indigo-100",
                                                    children: "Global Assistant"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-indigo-100 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scrollbar-thin scrollbar-thumb-gray-200",
                            children: [
                                messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col items-center justify-center text-center space-y-3 opacity-60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            size: 48,
                                            className: "text-indigo-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 max-w-[200px]",
                                            children: "Hello! I am CallZenza AI. I can answer questions and perform actions across the platform."
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this) : messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-end space-x-2 max-w-[85%]",
                                            children: [
                                                msg.sender === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        size: 14,
                                                        className: "text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `px-4 py-2 rounded-2xl text-sm ${msg.sender === "user" ? "bg-indigo-600 text-white rounded-br-none" : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MarkdownText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownText"], {
                                                        content: msg.text,
                                                        isUser: msg.sender === "user"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this)
                                    }, msg.id, false, {
                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)),
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 max-w-[85%]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    size: 14,
                                                    className: "text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 rounded-2xl bg-white border border-gray-200 rounded-bl-none shadow-sm flex space-x-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: "0.2s"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: "0.4s"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-white border-t border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center bg-gray-50 rounded-xl border border-gray-200 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        onKeyDown: handleKeyDown,
                                        placeholder: "Ask CallZenza AI...",
                                        className: "w-full bg-transparent text-sm py-3 pl-4 pr-12 outline-none resize-none h-[48px] max-h-[120px] scrollbar-thin",
                                        rows: 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSend,
                                        disabled: !input.trim() || loading,
                                        className: "absolute right-2 bottom-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-500 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chatbot/GlobalChatbot.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(GlobalChatbot, "Sv5y1O0+BkPtWSCRu7/eJmZnJwE=");
_c = GlobalChatbot;
var _c;
__turbopack_context__.k.register(_c, "GlobalChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/inbound/InboundCallPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InboundCallPopup",
    ()=>InboundCallPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$inbound$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/inbound.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$telephony$2d$audio$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/telephony-audio.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/useWebSocketSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const InboundCallPopup = ({ onAttend, onDecline, inline = false })=>{
    _s();
    const [incomingCall, setIncomingCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [callStatus, setCallStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("RINGING");
    const [ringSeconds, setRingSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [connectedSeconds, setConnectedSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAttending, setIsAttending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeclining, setIsDeclining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMicMuted, setIsMicMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeOsc1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeOsc2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeGainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connectedTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dismissedCallsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Immediate and complete sound cutoff
    const stopRingtone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InboundCallPopup.useCallback[stopRingtone]": ()=>{
            if (ringIntervalRef.current) {
                clearInterval(ringIntervalRef.current);
                ringIntervalRef.current = null;
            }
            if (ringTimerRef.current) {
                clearInterval(ringTimerRef.current);
                ringTimerRef.current = null;
            }
            try {
                if (activeGainRef.current && audioContextRef.current) {
                    const now = audioContextRef.current.currentTime;
                    activeGainRef.current.gain.cancelScheduledValues(now);
                    activeGainRef.current.gain.setValueAtTime(0.00001, now);
                }
            } catch (_) {}
            try {
                if (activeOsc1Ref.current) {
                    activeOsc1Ref.current.stop();
                    activeOsc1Ref.current.disconnect();
                    activeOsc1Ref.current = null;
                }
            } catch (_) {}
            try {
                if (activeOsc2Ref.current) {
                    activeOsc2Ref.current.stop();
                    activeOsc2Ref.current.disconnect();
                    activeOsc2Ref.current = null;
                }
            } catch (_) {}
            try {
                if (activeGainRef.current) {
                    activeGainRef.current.disconnect();
                    activeGainRef.current = null;
                }
            } catch (_) {}
            if (audioContextRef.current && audioContextRef.current.state !== "closed") {
                audioContextRef.current.close().catch({
                    "InboundCallPopup.useCallback[stopRingtone]": ()=>{}
                }["InboundCallPopup.useCallback[stopRingtone]"]);
                audioContextRef.current = null;
            }
        }
    }["InboundCallPopup.useCallback[stopRingtone]"], []);
    // Web Audio chime for incoming call ring tone
    const playRingChime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InboundCallPopup.useCallback[playRingChime]": ()=>{
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                if (!audioContextRef.current || audioContextRef.current.state === "closed") {
                    audioContextRef.current = new AudioCtx();
                }
                const ctx = audioContextRef.current;
                if (ctx.state === "suspended") {
                    ctx.resume().catch({
                        "InboundCallPopup.useCallback[playRingChime]": ()=>{}
                    }["InboundCallPopup.useCallback[playRingChime]"]);
                }
                const now = ctx.currentTime;
                const osc1 = ctx.createOscillator();
                const osc2 = ctx.createOscillator();
                const gain = ctx.createGain();
                activeOsc1Ref.current = osc1;
                activeOsc2Ref.current = osc2;
                activeGainRef.current = gain;
                osc1.type = "sine";
                osc2.type = "sine";
                osc1.frequency.setValueAtTime(440, now);
                osc2.frequency.setValueAtTime(480, now);
                gain.gain.setValueAtTime(0.0001, now);
                gain.gain.exponentialRampToValueAtTime(0.04, now + 0.08);
                gain.gain.setValueAtTime(0.04, now + 1.2);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);
                osc1.connect(gain);
                osc2.connect(gain);
                gain.connect(ctx.destination);
                osc1.start(now);
                osc2.start(now);
                osc1.stop(now + 1.4);
                osc2.stop(now + 1.4);
            } catch (_) {}
        }
    }["InboundCallPopup.useCallback[playRingChime]"], []);
    const startRingtone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InboundCallPopup.useCallback[startRingtone]": ()=>{
            stopRingtone();
            playRingChime();
            ringIntervalRef.current = setInterval({
                "InboundCallPopup.useCallback[startRingtone]": ()=>{
                    playRingChime();
                }
            }["InboundCallPopup.useCallback[startRingtone]"], 2800);
        }
    }["InboundCallPopup.useCallback[startRingtone]"], [
        playRingChime,
        stopRingtone
    ]);
    // Check active incoming call on initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InboundCallPopup.useEffect": ()=>{
            let mounted = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$inbound$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inboundService"].getActiveIncomingCall().then({
                "InboundCallPopup.useEffect": (res)=>{
                    if (mounted && res && res.active_call && res.active_call.status === "RINGING") {
                        const cId = res.active_call.call_id;
                        if (dismissedCallsRef.current.has(cId)) return;
                        try {
                            if (sessionStorage.getItem(`callzenza_declined_${cId}`)) return;
                        } catch (_) {}
                        setIncomingCall(res.active_call);
                        setCallStatus("RINGING");
                    }
                }
            }["InboundCallPopup.useEffect"]).catch({
                "InboundCallPopup.useEffect": ()=>{}
            }["InboundCallPopup.useEffect"]);
            return ({
                "InboundCallPopup.useEffect": ()=>{
                    mounted = false;
                    stopRingtone();
                }
            })["InboundCallPopup.useEffect"];
        }
    }["InboundCallPopup.useEffect"], [
        stopRingtone
    ]);
    // WebSocket sync listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketSync"])({
        "InboundCallPopup.useWebSocketSync": (msg)=>{
            const evt = (msg.event || "").toUpperCase();
            if (evt === "INCOMING_CALL" || evt === "INBOUND_CALL_RECEIVED") {
                const cId = msg.call_id || String(Date.now());
                if (dismissedCallsRef.current.has(cId)) return;
                try {
                    if (sessionStorage.getItem(`callzenza_declined_${cId}`)) return;
                } catch (_) {}
                // If already on a call, don't clobber
                if (incomingCall && callStatus === "CONNECTED") return;
                const callData = {
                    call_id: cId,
                    caller_name: msg.caller_name || msg.client_name || "Incoming Customer",
                    caller_phone: msg.caller_phone || msg.client_phone || msg.from_number || "+91 98765 43210",
                    to_number: msg.to_number || "09410697548",
                    agent_type: msg.agent_type || "VOICE",
                    status: "RINGING",
                    notes: msg.notes,
                    created_at: msg.initiated_at || msg.created_at || new Date().toISOString()
                };
                setIncomingCall(callData);
                setCallStatus("RINGING");
                setRingSeconds(0);
                setConnectedSeconds(0);
            } else if (evt === "CALL_CONNECTED" || evt === "INCOMING_CALL_ANSWERED") {
                if (incomingCall && msg.call_id === incomingCall.call_id) {
                    stopRingtone();
                    setCallStatus("CONNECTED");
                }
            } else if (evt === "INCOMING_CALL_DECLINED" || evt === "CALL_REJECTED" || evt === "CALL_ENDED" || evt === "CALL_COMPLETED" || evt === "CALL_FAILED") {
                if (incomingCall && (msg.call_id === incomingCall.call_id || !msg.call_id)) {
                    stopRingtone();
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$telephony$2d$audio$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telephonyAudioManager"]?.stopSession();
                    } catch (_) {}
                    setCallStatus("ENDED");
                    // Immediately reset global call store so header LIVE CALL timer stops
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveCallStore"].getState().resetCall();
                    setTimeout({
                        "InboundCallPopup.useWebSocketSync": ()=>{
                            setIncomingCall(null);
                            setCallStatus("RINGING");
                        }
                    }["InboundCallPopup.useWebSocketSync"], 1200);
                }
            }
        }
    }["InboundCallPopup.useWebSocketSync"]);
    // Ring timer (auto-decline after 35s if unattended)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InboundCallPopup.useEffect": ()=>{
            if (incomingCall && callStatus === "RINGING") {
                startRingtone();
                setRingSeconds(0);
                ringTimerRef.current = setInterval({
                    "InboundCallPopup.useEffect": ()=>{
                        setRingSeconds({
                            "InboundCallPopup.useEffect": (prev)=>{
                                if (prev >= 35) {
                                    handleDecline();
                                    return 0;
                                }
                                return prev + 1;
                            }
                        }["InboundCallPopup.useEffect"]);
                    }
                }["InboundCallPopup.useEffect"], 1000);
            } else {
                stopRingtone();
                if (ringTimerRef.current) {
                    clearInterval(ringTimerRef.current);
                    ringTimerRef.current = null;
                }
            }
            return ({
                "InboundCallPopup.useEffect": ()=>{
                    stopRingtone();
                    if (ringTimerRef.current) {
                        clearInterval(ringTimerRef.current);
                        ringTimerRef.current = null;
                    }
                }
            })["InboundCallPopup.useEffect"];
        }
    }["InboundCallPopup.useEffect"], [
        incomingCall,
        callStatus,
        startRingtone,
        stopRingtone
    ]);
    // Connected call timer (increments every second while call is connected)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InboundCallPopup.useEffect": ()=>{
            if (callStatus === "CONNECTED") {
                setConnectedSeconds(0);
                connectedTimerRef.current = setInterval({
                    "InboundCallPopup.useEffect": ()=>{
                        setConnectedSeconds({
                            "InboundCallPopup.useEffect": (prev)=>prev + 1
                        }["InboundCallPopup.useEffect"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveCallStore"].getState().tickDuration();
                    }
                }["InboundCallPopup.useEffect"], 1000);
            } else {
                if (connectedTimerRef.current) {
                    clearInterval(connectedTimerRef.current);
                    connectedTimerRef.current = null;
                }
            }
            return ({
                "InboundCallPopup.useEffect": ()=>{
                    if (connectedTimerRef.current) {
                        clearInterval(connectedTimerRef.current);
                        connectedTimerRef.current = null;
                    }
                }
            })["InboundCallPopup.useEffect"];
        }
    }["InboundCallPopup.useEffect"], [
        callStatus
    ]);
    const handleAttend = async ()=>{
        if (!incomingCall) return;
        const callId = incomingCall.call_id;
        stopRingtone();
        setIsAttending(true);
        setCallStatus("CONNECTED");
        setConnectedSeconds(0);
        // Update global active call store for live indicators
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveCallStore"].getState().setCallState({
            callActive: true,
            activeCallId: callId,
            telephonyStatus: "IN_PROGRESS",
            leadName: incomingCall.caller_name || "Inbound Caller",
            leadPhone: incomingCall.caller_phone || "",
            customerConnectedAt: new Date().toISOString(),
            callDuration: 0
        });
        try {
            // 1. Tell backend to answer the SIP trunk with 200 OK
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$inbound$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inboundService"].attendInboundCall(callId);
            // 2. Open bidirectional browser audio bridge (mic & speaker)
            if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$telephony$2d$audio$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telephonyAudioManager"]) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$telephony$2d$audio$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telephonyAudioManager"].startBargeIn(callId);
                } catch (audioErr) {
                    console.warn("[InboundCallPopup] Audio bridge connect:", audioErr);
                }
            }
            if (onAttend) {
                onAttend(incomingCall);
            }
        } catch (err) {
            console.error("Failed to attend inbound call:", err);
        } finally{
            setIsAttending(false);
        }
    };
    const handleDecline = async ()=>{
        if (!incomingCall) return;
        const callId = incomingCall.call_id;
        dismissedCallsRef.current.add(callId);
        try {
            sessionStorage.setItem(`callzenza_declined_${callId}`, "true");
        } catch (_) {}
        stopRingtone();
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$telephony$2d$audio$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telephonyAudioManager"]?.stopSession();
        } catch (_) {}
        const currentCall = {
            ...incomingCall
        };
        setIsDeclining(true);
        setCallStatus("ENDED");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$inbound$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inboundService"].declineInboundCall(callId);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveCallStore"].getState().resetCall();
            if (onDecline) {
                onDecline(currentCall);
            }
        } catch (err) {
            console.error("Failed to decline inbound call:", err);
        } finally{
            setIsDeclining(false);
            setTimeout(()=>{
                setIncomingCall(null);
                setCallStatus("RINGING");
            }, 500);
        }
    };
    const toggleMicMute = ()=>{
        const next = !isMicMuted;
        setIsMicMuted(next);
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$telephony$2d$audio$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telephonyAudioManager"]?.setMicMute(next);
        } catch (_) {}
    };
    const formatTimer = (totalSeconds)=>{
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
    if (!incomingCall) return null;
    const isVoiceAgent = (incomingCall.agent_type || "").toUpperCase().includes("VOICE") || (incomingCall.agent_type || "").toUpperCase().includes("HUMAN");
    const targetLabel = isVoiceAgent ? "Voice Agent" : "AI Agent";
    // --------------------------------------------------------------------------
    // MINIMIZED FLOATING PILL (when user minimizes an active in-progress call)
    // --------------------------------------------------------------------------
    if (isMinimized && callStatus === "CONNECTED") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 z-[99999] flex items-center gap-3 bg-slate-900 border-2 border-emerald-500/80 rounded-full px-5 py-3 shadow-2xl shadow-emerald-500/30 text-white animate-scale-up font-sans",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative flex h-3 w-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                        }, void 0, false, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500"
                        }, void 0, false, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 380,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-slate-300 font-mono",
                            children: incomingCall.caller_phone
                        }, void 0, false, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-mono font-black text-emerald-400",
                            children: formatTimer(connectedSeconds)
                        }, void 0, false, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleMicMute,
                    className: `p-2 rounded-full transition cursor-pointer ${isMicMuted ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-200"}`,
                    title: isMicMuted ? "Unmute Mic" : "Mute Mic",
                    children: isMicMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 397,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 397,
                        columnNumber: 58
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDecline,
                    className: "p-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white transition cursor-pointer shadow-lg shadow-rose-600/40",
                    title: "End Call",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsMinimized(false),
                    className: "p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer",
                    title: "Expand Call Screen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
            lineNumber: 379,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // --------------------------------------------------------------------------
    // ACTIVE CONNECTED CALL SCREEN
    // --------------------------------------------------------------------------
    if (callStatus === "CONNECTED") {
        if (inline) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-3 bg-slate-900/98 backdrop-blur-xl border-2 border-emerald-500/90 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/30 overflow-hidden font-sans animate-scale-up text-white shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-emerald-600 to-indigo-600 px-3.5 py-2.5 flex items-center justify-between shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2.5 w-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 427,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm",
                                        children: "Live Inbound Call"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2.5 py-0.5 rounded-full bg-black/35 text-[10px] font-mono font-bold text-emerald-300 border border-emerald-400/30",
                                children: formatTimer(connectedSeconds)
                            }, void 0, false, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 space-y-2.5 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 bg-slate-950/85 border border-slate-800 rounded-xl p-2.5 text-left shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 442,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-white truncate",
                                                children: incomingCall.caller_name || "Customer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-mono font-bold text-emerald-400",
                                                children: incomingCall.caller_phone
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-2.5 py-1.5 bg-slate-950/60 border border-emerald-500/20 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 h-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s] h-2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s] h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-emerald-300 rounded-full animate-bounce [animation-delay:-0.45s] h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-teal-300 rounded-full animate-bounce [animation-delay:-0.2s] h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 459,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.35s] h-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 460,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-bold text-emerald-400 uppercase tracking-wider",
                                        children: "Two-Way Audio Live"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 454,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2 pt-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleMicMute,
                                        className: `py-2 px-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer border ${isMicMuted ? "bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                                        children: [
                                            isMicMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                className: "w-3.5 h-3.5 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 476,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "w-3.5 h-3.5 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 476,
                                                columnNumber: 83
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isMicMuted ? "Unmute" : "Mute"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 468,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDecline,
                                        disabled: isDeclining,
                                        className: "py-2 px-2 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-rose-950/60 hover:scale-[1.02] cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 485,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isDeclining ? "..." : "End Call"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 480,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 467,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-5 right-5 z-[99999] pointer-events-auto w-96 max-w-[calc(100vw-2.5rem)] animate-slide-up font-sans",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border-2 border-emerald-500/80 rounded-2xl shadow-2xl shadow-emerald-950/80 overflow-hidden relative text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 497,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 px-4 py-3 flex items-center justify-between shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2.5 w-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm",
                                        children: "Connected • Live Audio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-0.5 rounded-full bg-black/30 text-xs font-mono font-black tracking-wider text-emerald-300 border border-emerald-400/30",
                                        children: formatTimer(connectedSeconds)
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMinimized(true),
                                        className: "w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer",
                                        title: "Minimize Call Screen",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 499,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 525,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-black tracking-tight text-white truncate",
                                                children: incomingCall.caller_name || "Customer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 529,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-emerald-400 font-mono font-bold text-xs",
                                                children: incomingCall.caller_phone
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 532,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-slate-950/80 border border-emerald-500/30 rounded-xl p-3 mb-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 h-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s] h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s] h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 541,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-emerald-300 rounded-full animate-bounce [animation-delay:-0.45s] h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 542,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-teal-300 rounded-full animate-bounce [animation-delay:-0.2s] h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.35s] h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold text-emerald-300 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Two-Way Audio Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 546,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 538,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2.5 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleMicMute,
                                        className: `py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${isMicMuted ? "bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30" : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"}`,
                                        children: [
                                            isMicMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                className: "w-3.5 h-3.5 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 561,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "w-3.5 h-3.5 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 561,
                                                columnNumber: 83
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isMicMuted ? "Unmute" : "Mute"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 553,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDecline,
                                        disabled: isDeclining,
                                        className: "py-2.5 px-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-600/40 hover:scale-[1.02] cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isDeclining ? "Ending..." : "End Call"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                lineNumber: 496,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
            lineNumber: 495,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // --------------------------------------------------------------------------
    // CALL ENDED NOTICE
    // --------------------------------------------------------------------------
    if (callStatus === "ENDED") {
        if (inline) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-3 bg-slate-900/98 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-3.5 text-center text-white shadow-lg ring-1 ring-slate-700 font-sans animate-scale-up shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-bold text-rose-400 flex items-center justify-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Call Ended"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 587,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-mono text-slate-300 mt-1",
                        children: incomingCall.caller_phone
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 590,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] text-slate-400 mt-0.5",
                        children: [
                            "Duration: ",
                            formatTimer(connectedSeconds)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 591,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                lineNumber: 586,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-5 right-5 z-[99999] pointer-events-auto w-80 max-w-[calc(100vw-2.5rem)] animate-slide-up font-sans",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border-2 border-slate-700 rounded-2xl p-4 text-center text-white shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto mb-2 text-rose-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 600,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 599,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-bold mb-0.5",
                        children: "Call Ended"
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 602,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400 font-mono mb-1.5",
                        children: incomingCall.caller_phone
                    }, void 0, false, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 603,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-slate-500",
                        children: [
                            "Duration: ",
                            formatTimer(connectedSeconds)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                        lineNumber: 604,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                lineNumber: 598,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
            lineNumber: 597,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // --------------------------------------------------------------------------
    // INCOMING CALL RINGING SCREEN (Inline or Docked)
    // --------------------------------------------------------------------------
    if (inline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "m-3 bg-slate-900/98 backdrop-blur-xl border-2 border-emerald-500 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.3)] ring-1 ring-emerald-500/30 overflow-hidden font-sans animate-scale-up text-white shrink-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 617,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 px-3.5 py-2.5 flex items-center justify-between shadow-md relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative flex h-2.5 w-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 623,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 624,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm",
                                    children: "Incoming Call"
                                }, void 0, false, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 626,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 621,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded-full bg-black/35 text-[10px] font-mono font-bold text-emerald-200 border border-emerald-400/20",
                                    children: [
                                        "00:",
                                        String(ringSeconds).padStart(2, "0")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 631,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDecline,
                                    className: "w-5 h-5 rounded-full bg-black/25 hover:bg-black/50 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer",
                                    title: "Close & Dismiss Call",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 639,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 630,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 620,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3.5 space-y-2.5 text-center relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 bg-slate-950/85 border border-slate-800 rounded-xl p-2.5 text-left shadow-inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-4 h-4 animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 651,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-bold text-white truncate",
                                            children: incomingCall.caller_name || "Customer Calling"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 654,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-mono font-bold text-emerald-400",
                                            children: incomingCall.caller_phone
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 646,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center px-2.5 py-1.5 bg-slate-950/60 rounded-lg text-[10px] text-slate-400 border border-slate-800/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Route: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "text-slate-200 font-mono",
                                            children: incomingCall.to_number || "09410697548"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 664,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-400 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            className: "w-3 h-3 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 666,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Ringing..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 665,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 pt-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDecline,
                                    disabled: isDeclining || isAttending,
                                    className: "py-2.5 px-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-950/60 hover:scale-[1.02] cursor-pointer disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 677,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isDeclining ? "..." : "Decline"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 672,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAttend,
                                    disabled: isDeclining || isAttending,
                                    className: "py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/60 hover:scale-[1.02] cursor-pointer disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isAttending ? "..." : "Attend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 671,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 645,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
            lineNumber: 615,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-5 right-5 z-[99999] pointer-events-auto w-96 max-w-[calc(100vw-2.5rem)] animate-slide-up font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-900 border-2 border-indigo-500/80 rounded-2xl shadow-2xl shadow-indigo-950/80 overflow-hidden relative text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 698,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 px-4 py-3 flex items-center justify-between shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative flex h-2.5 w-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 703,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 702,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm",
                                    children: "Incoming Call"
                                }, void 0, false, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 706,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 701,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded-full bg-black/25 text-[10px] font-mono font-bold tracking-wider text-white",
                                    children: [
                                        "00:",
                                        String(ringSeconds).padStart(2, "0")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDecline,
                                    className: "w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer",
                                    title: "Close & Dismiss Call",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 719,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 714,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 710,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 700,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-3 flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-16 h-16 rounded-full border-2 border-emerald-400/40 animate-ping pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 726,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-6 h-6 animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                        lineNumber: 728,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 727,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 725,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-black tracking-tight text-white mb-0.5",
                            children: incomingCall.caller_name || "Customer Calling"
                        }, void 0, false, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 732,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-emerald-400 font-mono font-bold text-sm mb-3",
                            children: incomingCall.caller_phone
                        }, void 0, false, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 735,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-slate-950/70 border border-slate-800 rounded-xl p-2.5 space-y-1.5 mb-4 text-xs text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 font-bold uppercase tracking-wider text-[9px]",
                                            children: "Inbound Route:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-200 text-[11px]",
                                            children: incomingCall.to_number || "09410697548"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 742,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 740,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center border-t border-slate-800/80 pt-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 font-bold uppercase tracking-wider text-[9px]",
                                            children: "Destination:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 745,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40",
                                            children: [
                                                isVoiceAgent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                    className: "w-2.5 h-2.5 text-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "w-2.5 h-2.5 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 83
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                targetLabel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 744,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                incomingCall.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start border-t border-slate-800/80 pt-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-400 font-bold uppercase tracking-wider text-[9px]",
                                            children: "Notes:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 753,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-300 font-medium text-right line-clamp-1 max-w-[180px] text-[10px]",
                                            children: incomingCall.notes
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 754,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 752,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 739,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2.5 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDecline,
                                    disabled: isDeclining || isAttending,
                                    className: "py-2.5 px-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-600/30 cursor-pointer disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 765,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isDeclining ? "Declining..." : "Decline"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 760,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAttend,
                                    disabled: isDeclining || isAttending,
                                    className: "py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/40 hover:scale-[1.02] cursor-pointer disabled:opacity-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                            lineNumber: 774,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isAttending ? "Attending..." : "Attend"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 769,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 759,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] text-slate-400 mt-2.5 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-3 h-3 text-emerald-400 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                                    lineNumber: 780,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Ringing active session..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                            lineNumber: 779,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/inbound/InboundCallPopup.tsx",
                    lineNumber: 724,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/inbound/InboundCallPopup.tsx",
            lineNumber: 697,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/inbound/InboundCallPopup.tsx",
        lineNumber: 696,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InboundCallPopup, "qj/4J4Oye9n9p+nLhitTwnMOEEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocketSync"]
    ];
});
_c = InboundCallPopup;
var _c;
__turbopack_context__.k.register(_c, "InboundCallPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/MarkdownText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownText",
    ()=>MarkdownText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MarkdownText({ content, className = "", isUser = false }) {
    if (!content) return null;
    // Split content by lines to process block elements (headers, lists, paragraphs)
    const lines = content.split("\n");
    const renderInline = (text)=>{
        // Regex matching **bold**, *italic*, and `code`
        const parts = [];
        let remaining = text;
        let keyIdx = 0;
        // Helper regex pattern for inline tokens: **bold**, `code`, *italic*
        const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g;
        const splitTokens = text.split(tokenRegex);
        return splitTokens.map((segment, idx)=>{
            if (!segment) return null;
            // Check **bold**
            if (segment.startsWith("**") && segment.endsWith("**") && segment.length > 4) {
                const inner = segment.slice(2, -2);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: isUser ? "font-bold text-white underline decoration-white/30" : "font-bold text-slate-900",
                    children: inner
                }, idx, false, {
                    fileName: "[project]/components/ui/MarkdownText.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this);
            }
            // Check `code`
            if (segment.startsWith("`") && segment.endsWith("`") && segment.length > 2) {
                const inner = segment.slice(1, -1);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: isUser ? "bg-indigo-700 text-indigo-100 px-1 py-0.5 rounded font-mono text-[0.88em]" : "bg-slate-100 text-indigo-600 px-1 py-0.5 rounded font-mono text-[0.88em]",
                    children: inner
                }, idx, false, {
                    fileName: "[project]/components/ui/MarkdownText.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this);
            }
            // Check *italic*
            if (segment.startsWith("*") && segment.endsWith("*") && segment.length > 2) {
                const inner = segment.slice(1, -1);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    className: "italic",
                    children: inner
                }, idx, false, {
                    fileName: "[project]/components/ui/MarkdownText.tsx",
                    lineNumber: 57,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: segment
            }, idx, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 60,
                columnNumber: 14
            }, this);
        });
    };
    const renderedBlocks = [];
    let inList = false;
    let listItems = [];
    const flushList = ()=>{
        if (listItems.length > 0) {
            renderedBlocks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc list-inside my-1.5 space-y-0.5",
                children: listItems
            }, `ul-${renderedBlocks.length}`, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this));
            listItems = [];
        }
        inList = false;
    };
    lines.forEach((line, lineIdx)=>{
        const trimmed = line.trim();
        // Check header
        if (trimmed.startsWith("### ")) {
            flushList();
            renderedBlocks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: isUser ? "font-bold text-sm text-white mt-2 mb-1" : "font-bold text-sm text-slate-900 mt-2 mb-1",
                children: renderInline(trimmed.slice(4))
            }, lineIdx, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this));
            return;
        }
        if (trimmed.startsWith("## ")) {
            flushList();
            renderedBlocks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: isUser ? "font-extrabold text-sm text-white mt-2.5 mb-1" : "font-extrabold text-sm text-slate-900 mt-2.5 mb-1",
                children: renderInline(trimmed.slice(3))
            }, lineIdx, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this));
            return;
        }
        if (trimmed.startsWith("# ")) {
            flushList();
            renderedBlocks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: isUser ? "font-extrabold text-base text-white mt-3 mb-1" : "font-extrabold text-base text-slate-900 mt-3 mb-1",
                children: renderInline(trimmed.slice(2))
            }, lineIdx, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this));
            return;
        }
        // Check bullet items (- or * or •)
        const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);
        if (bulletMatch) {
            inList = true;
            listItems.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "ml-1 leading-relaxed",
                children: renderInline(bulletMatch[1])
            }, lineIdx, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this));
            return;
        }
        // Check numbered list (1. 2. etc)
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
            flushList();
            renderedBlocks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-1.5 my-0.5 pl-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isUser ? "font-bold text-indigo-200 text-[0.9em]" : "font-bold text-indigo-600 text-[0.9em]",
                        children: [
                            numMatch[1],
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/MarkdownText.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 leading-relaxed",
                        children: renderInline(numMatch[2])
                    }, void 0, false, {
                        fileName: "[project]/components/ui/MarkdownText.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, lineIdx, true, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this));
            return;
        }
        // Regular line
        flushList();
        if (trimmed === "") {
            renderedBlocks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5"
            }, lineIdx, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 145,
                columnNumber: 27
            }, this));
        } else {
            renderedBlocks.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "leading-relaxed",
                children: renderInline(line)
            }, lineIdx, false, {
                fileName: "[project]/components/ui/MarkdownText.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this));
        }
    });
    flushList();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `space-y-0.5 ${className}`,
        children: renderedBlocks
    }, void 0, false, {
        fileName: "[project]/components/ui/MarkdownText.tsx",
        lineNumber: 157,
        columnNumber: 10
    }, this);
}
_c = MarkdownText;
var _c;
__turbopack_context__.k.register(_c, "MarkdownText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
const COLORS = {
    NEW: "bg-slate-50 text-slate-700 border-slate-200",
    ENGAGED: "bg-blue-50 text-blue-700 border-blue-100",
    QUALIFYING: "bg-amber-50 text-amber-700 border-amber-200",
    QUALIFIED: "bg-emerald-50 text-emerald-700 border-emerald-200",
    UNQUALIFIED: "bg-rose-50 text-rose-700 border-rose-200",
    NURTURE: "bg-purple-50 text-purple-700 border-purple-200",
    ASSIGNED: "bg-indigo-50 text-indigo-700 border-indigo-200",
    WON: "bg-emerald-50 text-emerald-700 border-emerald-200",
    LOST: "bg-rose-50 text-rose-700 border-rose-200",
    ACTIVE: "bg-emerald-50 text-emerald-700 border-emerald-200",
    INACTIVE: "bg-slate-100 text-slate-500 border-slate-200",
    HANDED_OFF: "bg-indigo-50 text-indigo-700 border-indigo-200"
};
function Badge({ className, children, variant, ...props }) {
    const label = String(children ?? "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border", COLORS[label] ?? "bg-slate-50 text-slate-700 border-slate-200", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant = "default", size, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        suppressHydrationWarning: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("inline-flex items-center justify-center text-sm font-semibold tracking-wide transition-premium disabled:opacity-50 disabled:pointer-events-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 whitespace-nowrap", variant === "default" && "bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/40 hover:-translate-y-0.5", variant === "outline" && "border-2 border-slate-200 bg-white hover:border-indigo-600 hover:-translate-y-0.5 text-slate-700 hover:text-indigo-600", variant === "ghost" && "hover:bg-slate-50 text-slate-600 hover:text-slate-900", variant === "destructive" && "bg-rose-600 text-white hover:bg-rose-700 shadow-sm shadow-rose-600/10", variant === "secondary" && "bg-slate-100 text-slate-800 hover:bg-slate-200 hover:-translate-y-0.5", variant === "link" && "text-primary underline-offset-4 hover:underline", size === "sm" && "h-8 px-3.5 text-xs rounded-[10px]", size === "lg" && "h-12 px-7 rounded-[14px] text-base", size === "icon" && "h-9 w-9 p-0 rounded-xl", !size && "h-[48px] px-[28px] rounded-[12px] text-[0.95rem]", className)),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardTitle",
    ()=>CardTitle,
    "CardValue",
    ()=>CardValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("rounded-[20px] border border-slate-100 bg-white/70 backdrop-blur-[18px] shadow-[0_4px_18px_rgba(16,19,42,0.06)] hover:shadow-[0_20px_50px_rgba(16,19,42,0.09)] transition-premium p-6 flex flex-col justify-between", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-xs font-semibold tracking-wider text-slate-500 uppercase", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = CardTitle;
function CardValue({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("text-2xl font-bold tracking-tight mt-1.5 text-slate-900", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_c2 = CardValue;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardTitle");
__turbopack_context__.k.register(_c2, "CardValue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        ref: ref,
        suppressHydrationWarning: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("border border-slate-200 rounded-[10px] px-4 py-2.5 text-[0.85rem] w-full bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-premium disabled:opacity-50 disabled:bg-slate-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Input;
Input.displayName = "Input";
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "apiFetch",
    ()=>apiFetch,
    "apiUpload",
    ()=>apiUpload,
    "getTenantSubdomain",
    ()=>getTenantSubdomain,
    "setTenantSubdomain",
    ()=>setTenantSubdomain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
;
const IS_BROWSER = ("TURBOPACK compile-time value", "object") !== "undefined";
const API_URL = ("TURBOPACK compile-time truthy", 1) ? "" : "TURBOPACK unreachable";
class ApiError extends Error {
    errorCode;
    status;
    constructor(message, status, errorCode){
        super(message);
        this.status = status;
        this.errorCode = errorCode;
    }
}
// Module-level stable tenant cache
let cachedTenantSubdomain = null;
let isTenantResolved = false;
function getTenantSubdomain() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (isTenantResolved) {
        return cachedTenantSubdomain || undefined;
    }
    let resolved = undefined;
    try {
        const hostname = window.location.hostname;
        if (hostname.endsWith(".localhost")) {
            const sub = hostname.replace(".localhost", "");
            if (sub && ![
                "www",
                "api",
                "app",
                "admin"
            ].includes(sub)) {
                resolved = sub;
            }
        } else {
            const parts = hostname.split(".");
            if (parts.length >= 3) {
                const candidate = parts[0];
                if (![
                    "www",
                    "api",
                    "app",
                    "admin",
                    "localhost",
                    "127"
                ].includes(candidate)) {
                    resolved = candidate;
                }
            }
        }
        if (!resolved) {
            const urlParams = new URLSearchParams(window.location.search);
            const qSub = urlParams.get("tenant_subdomain") || urlParams.get("tenant");
            if (qSub) resolved = qSub;
        }
    } catch (_) {}
    cachedTenantSubdomain = resolved || "";
    isTenantResolved = true;
    return resolved;
}
function setTenantSubdomain(subdomain) {
    cachedTenantSubdomain = subdomain || "";
    isTenantResolved = true;
}
// In-flight GET request deduplication map
const inFlightGetRequests = new Map();
async function apiFetch(path, options = {}) {
    const { token, skipAuth, headers, method = "GET", ...rest } = options;
    const isGet = !method || method.toUpperCase() === "GET";
    let authToken = token ?? (skipAuth ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().token ?? undefined);
    if (!authToken && IS_BROWSER && !skipAuth) {
        try {
            const tabData = sessionStorage.getItem("callzenza-auth") || localStorage.getItem("callzenza-auth-SUPER_ADMIN") || localStorage.getItem("callzenza-auth-ADMIN") || localStorage.getItem("callzenza-auth-VOICE_AGENT") || localStorage.getItem("callzenza-auth");
            if (tabData) {
                const parsed = JSON.parse(tabData);
                authToken = parsed?.state?.token || undefined;
            }
        } catch (_) {}
    }
    const tenantSubdomain = getTenantSubdomain();
    const url = `${API_URL}${path}`;
    // Deduplicate identical concurrent in-flight GET requests
    const dedupKey = isGet ? `${url}::${tenantSubdomain || ""}::${authToken || ""}` : null;
    if (dedupKey && inFlightGetRequests.has(dedupKey)) {
        return inFlightGetRequests.get(dedupKey);
    }
    const executeFetch = async ()=>{
        let res;
        try {
            res = await fetch(url, {
                method,
                ...rest,
                headers: {
                    "Content-Type": "application/json",
                    ...authToken ? {
                        Authorization: `Bearer ${authToken}`
                    } : {},
                    ...tenantSubdomain ? {
                        "X-Tenant-Subdomain": tenantSubdomain
                    } : {},
                    ...headers
                }
            });
        } catch (err) {
            console.warn(`[API] Network request to ${path} failed:`, err.message || err);
            throw new ApiError(`Backend server unavailable. Please ensure the backend server is running on ${API_URL}.`, 503, "SERVER_UNAVAILABLE");
        }
        if (res.status === 204) {
            return undefined;
        }
        const body = await res.json().catch(()=>({}));
        if (!res.ok) {
            if (res.status === 401) {
                const isIntegrationPath = path.includes("/email") || path.includes("/gmail") || path.includes("/messages/") || path.includes("/integrations/");
                if (!skipAuth && !path.startsWith("/api/auth/") && !isIntegrationPath) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && !window.location.pathname.includes("/login")) {
                        if (window.location.pathname.startsWith("/super-admin")) {
                            window.location.href = "/super-admin/login";
                        } else {
                            window.location.href = "/login";
                        }
                    }
                    return new Promise(()=>{});
                }
            }
            const errDetail = typeof body.detail === "object" ? JSON.stringify(body.detail) : body.detail;
            let fallbackMsg = `Request failed (${res.status})`;
            if (res.status === 500 && !body.message && !errDetail) {
                fallbackMsg = "Backend server connection error (port 8000). Please check if backend is running.";
            }
            const msgStr = typeof body.message === "string" ? body.message : errDetail ?? fallbackMsg;
            throw new ApiError(msgStr, res.status, body.error_code);
        }
        return body;
    };
    if (dedupKey) {
        const fetchPromise = executeFetch().finally(()=>{
            inFlightGetRequests.delete(dedupKey);
        });
        inFlightGetRequests.set(dedupKey, fetchPromise);
        return fetchPromise;
    }
    return executeFetch();
}
async function apiUpload(path, formData) {
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().token ?? undefined;
    const tenantSubdomain = getTenantSubdomain();
    const url = `${API_URL}${path}`;
    let res;
    try {
        res = await fetch(url, {
            method: "POST",
            headers: {
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {},
                ...tenantSubdomain ? {
                    "X-Tenant-Subdomain": tenantSubdomain
                } : {}
            },
            body: formData
        });
    } catch (err) {
        console.warn(`[API] Upload request to ${path} failed:`, err.message || err);
        throw new ApiError(`Backend server unavailable. Please ensure the backend server is running on ${API_URL}.`, 503, "SERVER_UNAVAILABLE");
    }
    const body = await res.json().catch(()=>({}));
    if (!res.ok) {
        if (res.status === 401) {
            if (!path.startsWith("/api/auth/")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
                if (("TURBOPACK compile-time value", "object") !== "undefined" && !window.location.pathname.includes("/login")) {
                    window.location.href = "/login";
                }
                return new Promise(()=>{});
            }
        }
        const errDetail = typeof body.detail === "object" ? JSON.stringify(body.detail) : body.detail;
        const msgStr = typeof body.message === "string" ? body.message : errDetail ?? `Request failed (${res.status})`;
        throw new ApiError(msgStr, res.status, body.error_code);
    }
    return body;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/date-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Comprehensive Timezone and Date formatting utilities for CallZenza.
 * Primary Timezone: Asia/Kolkata (IST, UTC+05:30).
 */ __turbopack_context__.s([
    "APP_TIMEZONE",
    ()=>APP_TIMEZONE,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "formatDurationMS",
    ()=>formatDurationMS,
    "formatDurationVerbalMS",
    ()=>formatDurationVerbalMS,
    "formatISTDate",
    ()=>formatISTDate,
    "formatISTDateTime",
    ()=>formatISTDateTime,
    "formatISTTime",
    ()=>formatISTTime,
    "formatTime",
    ()=>formatTime,
    "getTodayISTDateString",
    ()=>getTodayISTDateString,
    "parseAsUTC",
    ()=>parseAsUTC
]);
const APP_TIMEZONE = "Asia/Kolkata";
function getTodayISTDateString(date = new Date()) {
    try {
        const formatter = new Intl.DateTimeFormat("en-CA", {
            timeZone: APP_TIMEZONE,
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
        return formatter.format(date);
    } catch  {
        return new Date().toISOString().split("T")[0];
    }
}
function parseAsUTC(val) {
    if (!val) return null;
    let str = val.toString().trim();
    if (!str) return null;
    if (str.includes(" ") && !str.includes("T")) {
        str = str.replace(" ", "T");
    }
    // If missing timezone indicator, append Z to ensure standard UTC parsing
    if (!str.endsWith("Z") && !str.includes("+") && !/-\d{2}:\d{2}$/.test(str)) {
        str += "Z";
    }
    const d = new Date(str);
    return isNaN(d.getTime()) ? null : d;
}
function formatISTTime(val, options = {
    hour: "2-digit",
    minute: "2-digit"
}) {
    if (!val) return "—";
    const dateObj = val instanceof Date ? val : parseAsUTC(val);
    if (!dateObj) return "—";
    try {
        return dateObj.toLocaleTimeString("en-US", {
            timeZone: APP_TIMEZONE,
            ...options
        });
    } catch  {
        return dateObj.toLocaleTimeString([], options);
    }
}
function formatISTDate(val, options = {
    month: "short",
    day: "numeric",
    year: "numeric"
}) {
    if (!val) return "—";
    const dateObj = val instanceof Date ? val : parseAsUTC(val);
    if (!dateObj) return "—";
    try {
        return dateObj.toLocaleDateString("en-US", {
            timeZone: APP_TIMEZONE,
            ...options
        });
    } catch  {
        return dateObj.toLocaleDateString([], options);
    }
}
function formatISTDateTime(val, options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
}) {
    if (!val) return "—";
    const dateObj = val instanceof Date ? val : parseAsUTC(val);
    if (!dateObj) return "—";
    try {
        return dateObj.toLocaleString("en-US", {
            timeZone: APP_TIMEZONE,
            ...options
        });
    } catch  {
        return dateObj.toLocaleString([], options);
    }
}
const formatDateTime = formatISTDateTime;
const formatDate = formatISTDate;
const formatTime = formatISTTime;
function formatDurationMS(totalSeconds) {
    if (!totalSeconds || totalSeconds <= 0) return "00:00";
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}
function formatDurationVerbalMS(totalSeconds) {
    if (!totalSeconds || totalSeconds <= 0) return "0m 0s";
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return `${mins}m ${secs}s`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/useWebSocketSync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWebSocketHost",
    ()=>getWebSocketHost,
    "useWebSocketSync",
    ()=>useWebSocketSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function getWebSocketHost() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WS_URL) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WS_URL;
    }
    const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
    const portNum = parseInt(window.location.port, 10);
    const isLocalHost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    // When frontend is accessed on dev port 3000-3010 (locally or on server dev port), backend FastAPI is on 8000
    if (portNum >= 3000 && portNum <= 3010) {
        return `${proto}//${window.location.hostname}:8000`;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL.startsWith("http")) {
        try {
            const parsed = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL, window.location.href);
            // If NEXT_PUBLIC_API_URL points to localhost/127.0.0.1, but page is accessed from a remote server/domain/IP,
            // connect to the current server host so remote browser users connect reliably
            if ((parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") && !isLocalHost) {
                return `${proto}//${window.location.host}`;
            }
        } catch (_) {}
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL.replace(/^http/, "ws");
    }
    return `${proto}//${window.location.host}`;
}
const MAX_RECONNECT_ATTEMPTS = 20;
function useWebSocketSync(onMessageReceived, onReconnect) {
    _s();
    const storeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useWebSocketSync.useAuthStore[storeToken]": (s)=>s.token
    }["useWebSocketSync.useAuthStore[storeToken]"]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const retryCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reconnectTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isUnmountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onMessageReceived);
    const onReconnectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onReconnect);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebSocketSync.useEffect": ()=>{
            onMessageRef.current = onMessageReceived;
            onReconnectRef.current = onReconnect;
        }
    }["useWebSocketSync.useEffect"], [
        onMessageReceived,
        onReconnect
    ]);
    const getToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocketSync.useCallback[getToken]": ()=>{
            if (storeToken) return storeToken;
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const stored = sessionStorage.getItem("callzenza-auth") || localStorage.getItem("callzenza-auth");
                    if (stored) {
                        const parsed = JSON.parse(stored);
                        if (parsed?.state?.token) return parsed.state.token;
                    }
                } catch (_) {}
                return localStorage.getItem("token") || "";
            }
            //TURBOPACK unreachable
            ;
        }
    }["useWebSocketSync.useCallback[getToken]"], [
        storeToken
    ]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocketSync.useCallback[connect]": ()=>{
            if (isUnmountedRef.current) return;
            const activeToken = getToken();
            if (!activeToken || ("TURBOPACK compile-time value", "object") === "undefined") return;
            if (socketRef.current) {
                const oldWs = socketRef.current;
                socketRef.current = null;
                oldWs.onclose = null;
                oldWs.onerror = null;
                oldWs.close();
            }
            const host = getWebSocketHost();
            const tenant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTenantSubdomain"])();
            const url = `${host}/api/ws/call-events?token=${encodeURIComponent(activeToken)}${tenant ? `&tenant_subdomain=${encodeURIComponent(tenant)}` : ""}`;
            try {
                const ws = new WebSocket(url);
                socketRef.current = ws;
                ws.onopen = ({
                    "useWebSocketSync.useCallback[connect]": ()=>{
                        if (isUnmountedRef.current) {
                            ws.close();
                            return;
                        }
                        setStatus("connected");
                        const wasReconnecting = retryCountRef.current > 0;
                        retryCountRef.current = 0;
                        if (wasReconnecting && onReconnectRef.current) {
                            onReconnectRef.current();
                        }
                    }
                })["useWebSocketSync.useCallback[connect]"];
                ws.onmessage = ({
                    "useWebSocketSync.useCallback[connect]": (event)=>{
                        if (isUnmountedRef.current) return;
                        try {
                            const data = JSON.parse(event.data);
                            if (data.status === "heartbeat" || data.event === "PING" || data.event === "CONNECTED") {
                                return;
                            }
                            if (onMessageRef.current) {
                                onMessageRef.current(data);
                            }
                        } catch (_) {}
                    }
                })["useWebSocketSync.useCallback[connect]"];
                ws.onerror = ({
                    "useWebSocketSync.useCallback[connect]": ()=>{
                        if (isUnmountedRef.current) return;
                        setStatus("reconnecting");
                    }
                })["useWebSocketSync.useCallback[connect]"];
                ws.onclose = ({
                    "useWebSocketSync.useCallback[connect]": ()=>{
                        if (isUnmountedRef.current) return;
                        if (retryCountRef.current >= MAX_RECONNECT_ATTEMPTS) {
                            setStatus("disconnected");
                            return;
                        }
                        setStatus("reconnecting");
                        const backoffMs = Math.min(1000 * Math.pow(1.5, Math.min(retryCountRef.current, 8)), 10000);
                        retryCountRef.current += 1;
                        if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
                        reconnectTimerRef.current = setTimeout({
                            "useWebSocketSync.useCallback[connect]": ()=>{
                                if (!isUnmountedRef.current) {
                                    connect();
                                }
                            }
                        }["useWebSocketSync.useCallback[connect]"], backoffMs);
                    }
                })["useWebSocketSync.useCallback[connect]"];
            } catch (_) {
                if (!isUnmountedRef.current) {
                    setStatus("disconnected");
                }
            }
        }
    }["useWebSocketSync.useCallback[connect]"], [
        getToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebSocketSync.useEffect": ()=>{
            isUnmountedRef.current = false;
            connect();
            const handleOnline = {
                "useWebSocketSync.useEffect.handleOnline": ()=>{
                    retryCountRef.current = 0;
                    connect();
                }
            }["useWebSocketSync.useEffect.handleOnline"];
            const handleVisibility = {
                "useWebSocketSync.useEffect.handleVisibility": ()=>{
                    if (typeof document !== "undefined" && document.visibilityState === "visible") {
                        if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
                            retryCountRef.current = 0;
                            connect();
                        }
                    }
                }
            }["useWebSocketSync.useEffect.handleVisibility"];
            window.addEventListener("online", handleOnline);
            document.addEventListener("visibilitychange", handleVisibility);
            return ({
                "useWebSocketSync.useEffect": ()=>{
                    isUnmountedRef.current = true;
                    window.removeEventListener("online", handleOnline);
                    document.removeEventListener("visibilitychange", handleVisibility);
                    if (reconnectTimerRef.current) {
                        clearTimeout(reconnectTimerRef.current);
                        reconnectTimerRef.current = null;
                    }
                    if (socketRef.current) {
                        const ws = socketRef.current;
                        socketRef.current = null;
                        ws.onclose = null;
                        ws.onerror = null;
                        ws.close();
                    }
                }
            })["useWebSocketSync.useEffect"];
        }
    }["useWebSocketSync.useEffect"], [
        connect
    ]);
    return {
        status,
        reconnect: connect
    };
}
_s(useWebSocketSync, "Ux8kbdgniRNQX0ODTi4j746abOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/admin.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminService",
    ()=>adminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const adminService = {
    getUsers: (role)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(role ? `/api/admin/users?role=${role}` : "/api/admin/users"),
    getCampaigns: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/admin/campaigns"),
    getLeads: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/admin/leads"),
    getCalls: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/admin/calls"),
    getLeadUploads: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/admin/leads/uploads"),
    inviteUser: (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/admin/users/invite", {
            method: "POST",
            body: JSON.stringify(payload)
        }),
    updateUser: (id, payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/admin/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify(payload)
        }),
    deleteUser: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/admin/users/${id}`, {
            method: "DELETE"
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/agent.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agentService",
    ()=>agentService,
    "mgmtAgentService",
    ()=>mgmtAgentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
;
;
const IS_BROWSER = ("TURBOPACK compile-time value", "object") !== "undefined";
const API_URL = ("TURBOPACK compile-time truthy", 1) ? "" : "TURBOPACK unreachable";
const agentService = {
    list: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/agents"),
    get: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/agents/${id}`),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/agents", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/agents/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        }),
    remove: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/agents/${id}`, {
            method: "DELETE"
        }),
    test: (id, message)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/agents/${id}/test`, {
            method: "POST",
            body: JSON.stringify({
                message
            })
        }),
    /** Returns a playable object URL for the agent's ElevenLabs voice preview. */ previewVoice: async (id, text, voiceId, gender, lang)=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().token;
        const path = `/api/agents/${id}/voice-preview`;
        const url = `${API_URL}${path}`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            },
            body: JSON.stringify({
                text,
                voice_id: voiceId,
                gender,
                lang
            })
        });
        if (!res.ok) {
            const body = await res.json().catch(()=>({}));
            throw new Error(body.message ?? body.detail ?? "Voice preview failed — is ELEVENLABS_API_KEY set?");
        }
        const blob = await res.blob();
        return URL.createObjectURL(blob);
    }
};
const mgmtAgentService = {
    list: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/mgmt-agents"),
    get: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/${id}`),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/mgmt-agents", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    remove: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/${id}`, {
            method: "DELETE"
        }),
    createVoiceAgent: (agentId, voiceId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/${agentId}/voice-ids`, {
            method: "POST",
            body: JSON.stringify({
                voice_id: voiceId
            })
        }),
    updateVoiceAgent: (id, voiceId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/voice-ids/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                voice_id: voiceId
            })
        }),
    removeVoiceAgent: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/voice-ids/${id}`, {
            method: "DELETE"
        }),
    assignUsersToVoice: (id, user_ids)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/voice-ids/${id}/users`, {
            method: "POST",
            body: JSON.stringify({
                user_ids
            })
        }),
    createAIAgent: (agentId, name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/${agentId}/ai-agents`, {
            method: "POST",
            body: JSON.stringify({
                name
            })
        }),
    updateAIAgent: (id, name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/ai-agents/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                name
            })
        }),
    removeAIAgent: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/ai-agents/${id}`, {
            method: "DELETE"
        }),
    assignUsersToAI: (id, user_ids)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/mgmt-agents/ai-agents/${id}/users`, {
            method: "POST",
            body: JSON.stringify({
                user_ids
            })
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/auth.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const authService = {
    register: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(data),
            skipAuth: true
        }),
    login: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
            skipAuth: true
        }),
    me: (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/users/me", {
            token
        }),
    checkSlug: (slug)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/auth/check-slug?slug=${encodeURIComponent(slug)}`, {
            skipAuth: true
        }),
    registerOrganization: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/register-organization", {
            method: "POST",
            body: JSON.stringify(data),
            skipAuth: true
        }),
    verifyEmail: (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/verify-email", {
            method: "POST",
            body: JSON.stringify({
                token
            }),
            skipAuth: true
        }),
    resendVerification: (email)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/resend-verification", {
            method: "POST",
            body: JSON.stringify({
                email
            }),
            skipAuth: true
        }),
    forgotPassword: (email)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/forgot-password", {
            method: "POST",
            body: JSON.stringify({
                email
            }),
            skipAuth: true
        }),
    resetPassword: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/reset-password", {
            method: "POST",
            body: JSON.stringify(data),
            skipAuth: true
        }),
    getInvitationDetails: (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/auth/invitation-details?token=${encodeURIComponent(token)}`, {
            skipAuth: true
        }),
    acceptInvitation: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/auth/accept-invitation", {
            method: "POST",
            body: JSON.stringify(data),
            skipAuth: true
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/campaign.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignService",
    ()=>campaignService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const campaignService = {
    getTwilioNumber: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/integrations/twilio/number"),
    list: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/campaigns"),
    get: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}`),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/campaigns", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        }),
    getLeads: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/leads`),
    getClients: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/clients`),
    start: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/start`, {
            method: "POST"
        }),
    pause: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/pause`, {
            method: "POST"
        }),
    remove: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}`, {
            method: "DELETE"
        }),
    getDialerStatus: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/dialer/status`),
    startDialer: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/dialer/start`, {
            method: "POST"
        }),
    pauseDialer: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/dialer/pause`, {
            method: "POST"
        }),
    stopDialer: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/dialer/stop`, {
            method: "POST"
        }),
    getActivePdStatus: (agent_id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/pd-status${agent_id ? `?agent_id=${agent_id}` : ""}`),
    toggleActivePdStatus: (enable, agent_id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/voice-agents/pd-toggle", {
            method: "POST",
            body: JSON.stringify({
                enable,
                agent_id
            })
        }),
    uploadPdf: (file)=>{
        const formData = new FormData();
        formData.append("file", file);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUpload"])("/api/campaigns/upload-pdf", formData);
    },
    previewSpeech: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/campaigns/speech-preview", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    getAiAgentDashboard: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/ai-agent/dashboard`),
    getAiAgentLeads: (id, params)=>{
        const q = new URLSearchParams();
        if (params?.status_filter) q.set("status_filter", params.status_filter);
        if (params?.limit) q.set("limit", String(params.limit));
        if (params?.offset) q.set("offset", String(params.offset));
        const qs = q.toString();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/ai-agent/leads${qs ? `?${qs}` : ""}`);
    },
    getAiAgentCalls: (id, params)=>{
        const q = new URLSearchParams();
        if (params?.limit) q.set("limit", String(params.limit));
        if (params?.offset) q.set("offset", String(params.offset));
        const qs = q.toString();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/ai-agent/calls${qs ? `?${qs}` : ""}`);
    },
    getInboundConfig: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/inbound`),
    updateInboundConfig: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/campaigns/${id}/inbound`, {
            method: "PUT",
            body: JSON.stringify(data)
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/chatbot.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatbotService",
    ()=>chatbotService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
;
const IS_BROWSER = ("TURBOPACK compile-time value", "object") !== "undefined";
const API_BASE = ("TURBOPACK compile-time truthy", 1) ? "" : "TURBOPACK unreachable";
function getAuthHeader() {
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().token;
    return token ? {
        Authorization: `Bearer ${token}`
    } : {};
}
const chatbotService = {
    // User / Agent Chat Endpoints
    async sendMessage (message, conversation_id, agent_key, is_global) {
        const res = await fetch(`${API_BASE}/api/chatbot/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify({
                message,
                conversation_id,
                agent_key,
                is_global
            })
        });
        if (!res.ok) {
            const err = await res.json().catch(()=>({
                    detail: "Failed to send message"
                }));
            throw new Error(err.detail || "Failed to send message");
        }
        return res.json();
    },
    async listAvailableAgents () {
        try {
            const res = await fetch(`${API_BASE}/api/chatbot/agents`, {
                headers: getAuthHeader()
            });
            if (!res.ok) return [];
            return await res.json();
        } catch (e) {
            return [];
        }
    },
    async listConversations () {
        try {
            const res = await fetch(`${API_BASE}/api/chatbot/conversations`, {
                headers: getAuthHeader()
            });
            if (!res.ok) return [];
            return await res.json();
        } catch (e) {
            return [];
        }
    },
    async getConversation (id) {
        const res = await fetch(`${API_BASE}/api/chatbot/conversations/${id}`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load conversation messages");
        return res.json();
    },
    async deleteConversation (id) {
        const res = await fetch(`${API_BASE}/api/chatbot/conversations/${id}`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete conversation");
    },
    // Department & Custom Agent Endpoints
    async listAgents () {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/agents`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load agents");
        return res.json();
    },
    async createCustomAgent (payload) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/agents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Failed to create agent");
        return res.json();
    },
    async toggleAgentActive (agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/agents/${agent_key}/toggle`, {
            method: "PATCH",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to toggle agent status");
        return res.json();
    },
    async deleteCustomAgent (agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/agents/${agent_key}`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete custom agent");
        return res.json();
    },
    async listAgentLibrary (agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/library/${agent_key}`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load agent library");
        return res.json();
    },
    async uploadMultipleForAgent (files, agentKey) {
        const formData = new FormData();
        files.forEach((f)=>formData.append("pdfs", f));
        formData.append("agentKey", String(agentKey));
        const res = await fetch(`${API_BASE}/api/admin/chatbot/library/upload-multiple`, {
            method: "POST",
            headers: getAuthHeader(),
            body: formData
        });
        if (!res.ok) throw new Error("Upload failed");
        return res.json();
    },
    async listRagMisses (agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-misses/${agent_key}`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load gap questions");
        return res.json();
    },
    async resolveRagMiss (miss_id) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-misses/${miss_id}/resolve`, {
            method: "POST",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to resolve gap question");
        return res.json();
    },
    async listRagCache (agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-cache/${agent_key}`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load learned cache");
        return res.json();
    },
    async addRagCache (payload) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-cache`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Failed to add cache entry");
        return res.json();
    },
    async updateRagCache (id, payload) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-cache/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Failed to update cache entry");
        return res.json();
    },
    async deleteRagCache (id) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-cache/${id}`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete cache entry");
        return res.json();
    },
    async updateDocumentTitle (id, title) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify({
                title
            })
        });
        if (!res.ok) throw new Error("Failed to update document title");
        return res.json();
    },
    async getDocumentContent (id) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/${id}/content`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to fetch document content");
        return res.json();
    },
    async updateDocumentContent (id, payload) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/${id}/content`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Failed to update document content");
        return res.json();
    },
    getDocumentDownloadUrl (id) {
        return `${API_BASE}/api/admin/chatbot/documents/${id}/download`;
    },
    // Global Documents & Settings Endpoints
    async listDocuments () {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load knowledge documents");
        return res.json();
    },
    async uploadDocument (file, title, agent_key) {
        const formData = new FormData();
        formData.append("file", file);
        if (title) formData.append("title", title);
        if (agent_key) formData.append("agent_key", String(agent_key));
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/upload`, {
            method: "POST",
            headers: getAuthHeader(),
            body: formData
        });
        if (!res.ok) {
            const err = await res.json().catch(()=>({
                    detail: "Upload failed"
                }));
            throw new Error(err.detail || "Upload failed");
        }
        return res.json();
    },
    async createManualDocument (title, content, agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/manual`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify({
                title,
                content,
                agent_key
            })
        });
        if (!res.ok) {
            const err = await res.json().catch(()=>({
                    detail: "Creation failed"
                }));
            throw new Error(err.detail || "Creation failed");
        }
        return res.json();
    },
    async getDocumentDetails (id) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/${id}`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load document details");
        return res.json();
    },
    async deleteDocument (id) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/${id}`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete document");
    },
    async reprocessDocument (id) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/documents/${id}/reprocess`, {
            method: "POST",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to reprocess document");
        return res.json();
    },
    async listChunks (q, document_id, agent_key) {
        const params = new URLSearchParams();
        if (q) params.append("q", q);
        if (document_id) params.append("document_id", document_id);
        if (agent_key) params.append("agent_key", String(agent_key));
        const res = await fetch(`${API_BASE}/api/admin/chatbot/chunks?${params.toString()}`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to search chunks");
        return res.json();
    },
    async updateChunk (id, text) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/chunks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify({
                text
            })
        });
        if (!res.ok) throw new Error("Failed to update chunk");
        return res.json();
    },
    async deleteChunk (id) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/chunks/${id}`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete chunk");
    },
    async getConfig () {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/config`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load chatbot configuration");
        return res.json();
    },
    async updateConfig (config) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/config`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify(config)
        });
        if (!res.ok) throw new Error("Failed to update chatbot configuration");
        return res.json();
    },
    async getChatHistory () {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/history`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load chat history");
        return res.json();
    },
    async getAnalytics () {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/analytics`, {
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to load analytics");
        return res.json();
    },
    async testRAG (query, agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/test-rag`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeader()
            },
            body: JSON.stringify({
                query,
                agent_key
            })
        });
        if (!res.ok) throw new Error("RAG test query failed");
        return res.json();
    },
    // Bulk Delete Methods
    async deleteAllDocuments (agent_key) {
        const url = agent_key ? `${API_BASE}/api/admin/chatbot/documents/delete-all?agent_key=${agent_key}` : `${API_BASE}/api/admin/chatbot/documents/delete-all`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete all documents");
        return res.json();
    },
    async deleteAllChunks (agent_key) {
        const url = agent_key ? `${API_BASE}/api/admin/chatbot/chunks/delete-all?agent_key=${agent_key}` : `${API_BASE}/api/admin/chatbot/chunks/delete-all`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete all chunks");
        return res.json();
    },
    async deleteAllChatHistory () {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/history/delete-all`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete all chat history");
        return res.json();
    },
    async deleteAllRagMisses (agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-misses/${agent_key}/delete-all`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete gap questions");
        return res.json();
    },
    async deleteAllRagCache (agent_key) {
        const res = await fetch(`${API_BASE}/api/admin/chatbot/rag-cache/${agent_key}/delete-all`, {
            method: "DELETE",
            headers: getAuthHeader()
        });
        if (!res.ok) throw new Error("Failed to delete QA cache");
        return res.json();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/inbound.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inboundService",
    ()=>inboundService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const inboundService = {
    getStats: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/inbound/stats/summary"),
    list: (statusFilter, routingFilter)=>{
        const params = new URLSearchParams();
        if (statusFilter) params.append("status_filter", statusFilter);
        if (routingFilter) params.append("routing_filter", routingFilter);
        const queryString = params.toString() ? `?${params.toString()}` : "";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound${queryString}`);
    },
    get: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound/${id}`),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/inbound", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    toggleStatus: (id, status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound/${id}/status`, {
            method: "PATCH",
            body: JSON.stringify({
                status
            })
        }),
    delete: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound/${id}`, {
            method: "DELETE"
        }),
    getCalls: (id, limit = 25)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound/${id}/calls?limit=${limit}`),
    simulateInboundCall: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/inbound/simulate-call", {
            method: "POST",
            body: JSON.stringify(data || {})
        }),
    attendInboundCall: (callId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound/calls/${callId}/attend`, {
            method: "POST",
            body: JSON.stringify({})
        }),
    declineInboundCall: (callId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/inbound/calls/${callId}/decline`, {
            method: "POST",
            body: JSON.stringify({})
        }),
    getActiveIncomingCall: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/inbound/active-incoming")
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/lead.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractLeadFieldsFromRow",
    ()=>extractLeadFieldsFromRow,
    "leadService",
    ()=>leadService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
;
const leadService = {
    list: (params)=>{
        const cleanParams = {};
        if (params?.status && params.status.trim() && params.status !== "undefined") {
            cleanParams.status = params.status.trim();
        }
        if (params?.search && params.search.trim() && params.search !== "undefined") {
            cleanParams.search = params.search.trim();
        }
        const qs = new URLSearchParams(cleanParams).toString();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/leads${qs ? `?${qs}` : ""}`);
    },
    get: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/leads/${id}`),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/leads", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    createWithFile: (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUpload"])("/api/leads", formData),
    update: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/leads/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        }),
    remove: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/leads/${id}`, {
            method: "DELETE"
        }),
    importFile: (file, opts = {})=>{
        const formData = new FormData();
        formData.append("file", file);
        if (opts.agentId) formData.append("agent_id", opts.agentId);
        formData.append("auto_call", String(opts.autoCall ?? true));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUpload"])("/api/leads/import", formData);
    },
    preview: (file)=>{
        const formData = new FormData();
        formData.append("file", file);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUpload"])("/api/leads/preview", formData);
    },
    importMapped: (leads, agentId, campaignId, filename)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/leads/import-mapped", {
            method: "POST",
            body: JSON.stringify({
                leads,
                agent_id: agentId,
                campaign_id: campaignId,
                filename
            })
        });
    }
};
function extractLeadFieldsFromRow(row) {
    const findVal = (aliases)=>{
        for (const [key, val] of Object.entries(row)){
            if (!key || val === null || val === undefined) continue;
            const cleanKey = String(key).trim().toLowerCase().replace(/[^a-z0-9]/g, "");
            for (const alias of aliases){
                const cleanAlias = alias.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
                if (cleanKey === cleanAlias) {
                    return String(val).trim();
                }
            }
        }
        return "";
    };
    const firstName = findVal([
        "first_name",
        "first name",
        "firstname",
        "given_name",
        "given name",
        "fname",
        "first"
    ]);
    const lastName = findVal([
        "last_name",
        "last name",
        "lastname",
        "surname",
        "lname",
        "last"
    ]);
    const fullName = findVal([
        "full_name",
        "full name",
        "fullname",
        "lead_name",
        "lead name",
        "leadname",
        "customer_name",
        "customer name",
        "customername",
        "client_name",
        "client name",
        "clientname",
        "name",
        "contact_name",
        "contact name",
        "customer",
        "lead"
    ]);
    const phone = findVal([
        "phone",
        "phone_number",
        "phone number",
        "phonenumber",
        "mobile",
        "mobile_number",
        "mobile number",
        "mobilenumber",
        "contact",
        "contact_number",
        "contact number",
        "cell",
        "telephone",
        "whatsapp",
        "number",
        "phone_no",
        "phone no",
        "mobile_no",
        "mobile no",
        "contact_no",
        "contact no",
        "cust_phone",
        "customer_phone",
        "num"
    ]);
    const email = findVal([
        "email",
        "email_address",
        "email address",
        "emailaddress",
        "e-mail",
        "mail",
        "emailid",
        "email_id"
    ]);
    const company = findVal([
        "company",
        "company_name",
        "company name",
        "companyname",
        "organization",
        "org",
        "business",
        "business_name",
        "business name",
        "client_company"
    ]);
    const jobTitle = findVal([
        "job_title",
        "job title",
        "jobtitle",
        "title",
        "designation",
        "role",
        "position"
    ]);
    const requirement = findVal([
        "requirement",
        "requirements",
        "notes",
        "remarks",
        "remark",
        "interest",
        "product_interest",
        "product interest",
        "inquiry",
        "message",
        "description"
    ]);
    const budget = findVal([
        "budget",
        "monthly_budget",
        "monthly budget",
        "amount",
        "price"
    ]);
    const timeline = findVal([
        "timeline",
        "timeframe",
        "schedule"
    ]);
    const location = findVal([
        "location",
        "city",
        "place",
        "town",
        "address",
        "state",
        "country",
        "pincode",
        "zipcode"
    ]);
    let resolvedFirst = firstName;
    let resolvedLast = lastName;
    if (!resolvedFirst && !resolvedLast && fullName) {
        const parts = fullName.split(/\s+/);
        resolvedFirst = parts[0] || "";
        resolvedLast = parts.slice(1).join(" ") || "";
    } else if (resolvedFirst && !resolvedLast) {
        const parts = resolvedFirst.split(/\s+/);
        if (parts.length > 1) {
            resolvedFirst = parts[0];
            resolvedLast = parts.slice(1).join(" ");
        }
    }
    if (resolvedFirst && resolvedLast && resolvedFirst.toLowerCase().endsWith(resolvedLast.toLowerCase())) {
        resolvedFirst = resolvedFirst.slice(0, resolvedFirst.length - resolvedLast.length).trim();
    }
    return {
        first_name: resolvedFirst,
        last_name: resolvedLast,
        phone,
        email,
        company,
        job_title: jobTitle,
        requirement,
        budget,
        timeline,
        location
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/local-voice-test.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localVoiceTestService",
    ()=>localVoiceTestService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const localVoiceTestService = {
    start: (campaignId, leadId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/local-voice-test/start", {
            method: "POST",
            body: JSON.stringify({
                campaign_id: campaignId,
                lead_id: leadId
            })
        }),
    sendMessage: (sessionId, message)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/local-voice-test/message", {
            method: "POST",
            body: JSON.stringify({
                session_id: sessionId,
                user_message: message,
                message
            })
        }),
    end: (sessionId, durationSeconds)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/local-voice-test/end", {
            method: "POST",
            body: JSON.stringify({
                session_id: sessionId,
                duration_seconds: durationSeconds
            })
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/telephony-audio.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelephonyAudioManager",
    ()=>TelephonyAudioManager,
    "getStoredAuthToken",
    ()=>getStoredAuthToken,
    "telephonyAudioManager",
    ()=>telephonyAudioManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/useWebSocketSync.ts [app-client] (ecmascript)");
/**
 * Telephony Audio Service for Real-Time Live Call Monitoring (Listen & Barge In)
 * Decodes G.711 mu-law 8kHz audio streams directly from Twilio Media Streams into Web Audio API.
 * Captures and encodes supervisor microphone into G.711 mu-law frames for Barge In.
 */ // G.711 mu-law decompression lookup table
const ULAW_DECODE_TABLE = new Float32Array(256);
for(let i = 0; i < 256; i++){
    let mu = ~i;
    let sign = mu & 0x80 ? -1 : 1;
    let exponent = mu >> 4 & 0x07;
    let mantissa = mu & 0x0f;
    let sample = sign * ((mantissa << exponent + 3) + (132 << exponent) - 132);
    ULAW_DECODE_TABLE[i] = sample / 32768.0;
}
// Resample input audio buffer to 8000 Hz for telephony codec
function resampleTo8k(input, inputSampleRate) {
    if (inputSampleRate === 8000 || !input || input.length === 0) return input;
    const ratio = inputSampleRate / 8000;
    const newLength = Math.round(input.length / ratio);
    const result = new Float32Array(newLength);
    for(let i = 0; i < newLength; i++){
        const originPos = i * ratio;
        const index = Math.floor(originPos);
        const frac = originPos - index;
        const nextIndex = Math.min(index + 1, input.length - 1);
        result[i] = input[index] * (1 - frac) + input[nextIndex] * frac;
    }
    return result;
}
// G.711 mu-law linear-to-ulaw compression
function linearToMuLaw(sample) {
    const MAX = 32767;
    const BIAS = 132;
    let pcm = Math.max(-1, Math.min(1, sample));
    let intSample = Math.floor(pcm * MAX);
    let sign = intSample < 0 ? 0x80 : 0;
    if (sign) intSample = -intSample;
    if (intSample > MAX) intSample = MAX;
    intSample += BIAS;
    let exponent = 7;
    for(let expMask = 0x4000; (intSample & expMask) === 0 && exponent > 0; expMask >>= 1){
        exponent--;
    }
    let mantissa = intSample >> exponent + 3 & 0x0f;
    return ~(sign | exponent << 4 | mantissa) & 0xff;
}
;
function getWsBaseUrl() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebSocketHost"])();
}
function getStoredAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const s = sessionStorage.getItem("callzenza-auth") || localStorage.getItem("callzenza-auth");
        if (s) {
            const p = JSON.parse(s);
            if (p?.state?.token) return p.state.token;
        }
        for(let i = 0; i < localStorage.length; i++){
            const k = localStorage.key(i);
            if (k && k.startsWith("callzenza-auth-")) {
                const val = localStorage.getItem(k);
                if (val) {
                    const p = JSON.parse(val);
                    if (p?.state?.token) return p.state.token;
                }
            }
        }
    } catch (_) {}
    return localStorage.getItem("token") || "";
}
class TelephonyAudioManager {
    audioContext = null;
    gainNode = null;
    analyserNode = null;
    socket = null;
    micStream = null;
    micProcessor = null;
    nextPlayTime = 0;
    isMuted = false;
    isMicMuted = false;
    volume = 1.0;
    selectedOutputDeviceId = "default";
    selectedInputDeviceId = "default";
    mediaStreamDest = null;
    headsetAudioEl = null;
    onStateChange;
    onAudioLevel;
    onCallEnded;
    constructor(){
        this.initAudioContext();
        if (("TURBOPACK compile-time value", "object") !== "undefined" && navigator?.mediaDevices?.addEventListener) {
            navigator.mediaDevices.addEventListener("devicechange", ()=>{
                this.autoDetectHeadsetDevices().catch(()=>{});
            });
        }
    }
    async setAudioOutputDevice(deviceId) {
        this.selectedOutputDeviceId = deviceId || "default";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let audioCtxRouted = false;
        // 1. Direct Web Audio API AudioContext setSinkId (Chrome 110+, Edge)
        if (this.audioContext && typeof this.audioContext.setSinkId === "function") {
            try {
                await this.audioContext.setSinkId(this.selectedOutputDeviceId);
                console.log("[TelephonyAudio] AudioContext.setSinkId success:", this.selectedOutputDeviceId);
                audioCtxRouted = true;
                // Since AudioContext directly outputs to the chosen device, keep HTMLAudioElement muted to prevent dual-playing comb filter
                if (this.headsetAudioEl) {
                    this.headsetAudioEl.pause();
                    this.headsetAudioEl.muted = true;
                }
            } catch (err) {
                console.warn("[TelephonyAudio] AudioContext.setSinkId failed, using fallback:", err);
            }
        }
        // 2. HTMLAudioElement setSinkId fallback ONLY if AudioContext.setSinkId failed
        if (!audioCtxRouted && this.headsetAudioEl && typeof this.headsetAudioEl.setSinkId === "function") {
            try {
                await this.headsetAudioEl.setSinkId(this.selectedOutputDeviceId);
                this.headsetAudioEl.muted = false;
                if (this.headsetAudioEl.paused && this.mediaStreamDest) {
                    this.headsetAudioEl.play().catch(()=>{});
                }
                console.log("[TelephonyAudio] Headset AudioElement setSinkId success:", this.selectedOutputDeviceId);
            } catch (err) {
                console.warn("[TelephonyAudio] Headset AudioElement setSinkId error:", err);
            }
        }
    }
    setAudioInputDevice(deviceId) {
        this.selectedInputDeviceId = deviceId || "default";
    }
    async autoDetectHeadsetDevices() {
        if (("TURBOPACK compile-time value", "object") === "undefined" || !navigator?.mediaDevices?.enumerateDevices) return;
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const isHeadset = (label)=>{
                const l = (label || "").toLowerCase();
                return l.includes("headphone") || l.includes("headset") || l.includes("earphone") || l.includes("buds") || l.includes("airpods") || l.includes("bluetooth") || l.includes("wireless") || l.includes("hands-free") || l.includes("usb audio") || l.includes("realtek usb") || l.includes("jabra") || l.includes("poly") || l.includes("plantronics") || l.includes("epos") || l.includes("sennheiser") || l.includes("logitech");
            };
            // Auto-select 3rd party headset output
            const foundOutput = devices.find((d)=>d.kind === "audiooutput" && d.label && isHeadset(d.label));
            if (foundOutput && foundOutput.deviceId) {
                console.log("[TelephonyAudio] Auto-routing audio output to 3rd party headset:", foundOutput.label);
                await this.setAudioOutputDevice(foundOutput.deviceId);
            }
            // Auto-select 3rd party headset microphone
            const foundInput = devices.find((d)=>d.kind === "audioinput" && d.label && isHeadset(d.label));
            if (foundInput && foundInput.deviceId) {
                console.log("[TelephonyAudio] Auto-routing audio input to 3rd party headset mic:", foundInput.label);
                this.selectedInputDeviceId = foundInput.deviceId;
            }
        } catch (err) {
            console.warn("[TelephonyAudio] autoDetectHeadsetDevices error:", err);
        }
    }
    initAudioContext() {
        if (("TURBOPACK compile-time value", "object") !== "undefined" && !this.audioContext) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                try {
                    this.audioContext = new AudioContextClass();
                    this.gainNode = this.audioContext.createGain();
                    this.gainNode.gain.value = this.volume;
                    this.analyserNode = this.audioContext.createAnalyser();
                    this.analyserNode.fftSize = 64;
                    this.gainNode.connect(this.analyserNode);
                    this.analyserNode.connect(this.audioContext.destination);
                    // Create universal HTMLAudioElement stream bridge for headset setSinkId routing
                    try {
                        if (typeof this.audioContext.createMediaStreamDestination === "function") {
                            this.mediaStreamDest = this.audioContext.createMediaStreamDestination();
                            this.analyserNode.connect(this.mediaStreamDest);
                            if (!this.headsetAudioEl) {
                                this.headsetAudioEl = new Audio();
                                this.headsetAudioEl.autoplay = true;
                                this.headsetAudioEl.playsInline = true;
                                this.headsetAudioEl.muted = true; // Muted by default to prevent double-output echo
                                this.headsetAudioEl.srcObject = this.mediaStreamDest.stream;
                            }
                        }
                    } catch (e) {
                        console.warn("[TelephonyAudio] MediaStreamDestination fallback notice:", e);
                    }
                    // Initial auto-detection of any attached 3rd-party headset
                    this.autoDetectHeadsetDevices().catch(()=>{});
                } catch (e) {
                    console.warn("[TelephonyAudio] AudioContext init error:", e);
                }
            }
        }
    }
    async startListen(callId, token) {
        this.stopSession();
        this.onStateChange?.("CONNECTING", "Connecting to live call audio...");
        this.initAudioContext();
        if (this.audioContext && this.audioContext.state === "suspended") {
            try {
                await this.audioContext.resume();
            } catch (e) {
                console.warn("[TelephonyAudio] AudioContext resume failed:", e);
            }
        }
        const wsBase = getWsBaseUrl();
        const wsUrl = `${wsBase}/api/voice/barge/stream/browser/listen/${callId}?token=${encodeURIComponent(token)}`;
        try {
            this.socket = new WebSocket(wsUrl);
        } catch (err) {
            console.error("[TelephonyAudio] WebSocket instantiation failed:", err);
            this.onStateChange?.("ERROR", "Failed to connect to audio stream.");
            return;
        }
        this.socket.onopen = ()=>{
            this.onStateChange?.("LISTENING", "Listening to live call.");
        };
        this.socket.onmessage = (event)=>{
            this.handleIncomingAudio(event.data);
        };
        this.socket.onerror = (err)=>{
            console.error("[TelephonyAudio] WebSocket Error:", err);
            this.onStateChange?.("ERROR", "Failed to connect to audio stream.");
        };
        this.socket.onclose = (event)=>{
            if (event.code === 1008) {
                this.onStateChange?.("ERROR", "Permission denied.");
            } else {
                this.onStateChange?.("DISCONNECTED", "Listen session closed.");
            }
        };
    }
    async startBargeIn(callId, token) {
        this.stopSession();
        this.onStateChange?.("CONNECTING", "Establishing two-way audio bridge...");
        this.initAudioContext();
        if (this.audioContext && this.audioContext.state === "suspended") {
            try {
                await this.audioContext.resume();
            } catch (e) {
                console.warn("[TelephonyAudio] AudioContext resume failed:", e);
            }
        }
        // Request microphone access for Barge In (prioritizing 3rd-party headset mic if detected)
        let hasMic = false;
        if (typeof navigator !== "undefined" && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                const audioConstraints = {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                };
                if (this.selectedInputDeviceId && this.selectedInputDeviceId !== "default") {
                    audioConstraints.deviceId = {
                        ideal: this.selectedInputDeviceId
                    };
                }
                this.micStream = await navigator.mediaDevices.getUserMedia({
                    audio: audioConstraints
                });
                hasMic = true;
            } catch (micErr) {
                console.warn("[TelephonyAudio] Microphone permission or device not available:", micErr);
            }
        }
        const effectiveToken = token || getStoredAuthToken();
        const wsBase = getWsBaseUrl();
        const wsUrl = `${wsBase}/api/voice/barge/stream/browser/barge/${callId}?token=${encodeURIComponent(effectiveToken)}`;
        try {
            this.socket = new WebSocket(wsUrl);
        } catch (err) {
            console.error("[TelephonyAudio] Barge WebSocket instantiation failed:", err);
            this.onStateChange?.("ERROR", "Failed to connect to barge-in bridge.");
            return;
        }
        this.socket.onopen = ()=>{
            this.onStateChange?.("BARGED_IN", hasMic ? "Connected! You are live in the call." : "Connected to call bridge (Mic unavailable).");
            if (hasMic) {
                this.startMicrophoneCapture();
            }
        };
        this.socket.onmessage = (event)=>{
            this.handleIncomingAudio(event.data);
        };
        this.socket.onerror = (err)=>{
            console.error("[TelephonyAudio] Barge WebSocket Error:", err);
            this.onStateChange?.("ERROR", "Failed to connect to barge-in bridge.");
        };
        this.socket.onclose = (event)=>{
            this.stopMicrophone();
            if (event.code === 1008) {
                this.onStateChange?.("ERROR", "Permission denied for barge stream.");
            } else {
                this.onStateChange?.("DISCONNECTED", "Barge-in session closed.");
            }
        };
    }
    handleIncomingAudio(data) {
        try {
            const msg = JSON.parse(data);
            if (msg.event === "CALL_ENDED") {
                this.onCallEnded?.();
                this.stopSession();
                return;
            }
            if (msg.event === "media" && msg.media && msg.media.payload) {
                this.playUlawChunk(msg.media.payload);
            }
        } catch (e) {
            console.debug("[TelephonyAudio] Non-JSON payload:", e);
        }
    }
    playUlawChunk(base64Payload) {
        if (!this.audioContext || !this.gainNode || this.isMuted) return;
        try {
            if (this.audioContext.state === "suspended") {
                this.audioContext.resume().catch(()=>{});
            }
            if (this.headsetAudioEl && this.headsetAudioEl.paused && this.mediaStreamDest) {
                this.headsetAudioEl.play().catch(()=>{});
            }
            const binaryString = atob(base64Payload);
            const len = binaryString.length;
            if (len === 0) return;
            const audioBuffer = this.audioContext.createBuffer(1, len, 8000);
            const channelData = audioBuffer.getChannelData(0);
            for(let i = 0; i < len; i++){
                const byte = binaryString.charCodeAt(i);
                channelData[i] = ULAW_DECODE_TABLE[byte];
            }
            const source = this.audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.gainNode);
            const now = this.audioContext.currentTime;
            // Ultra-low latency scheduling: cap lead time to 15ms and prevent buffer accumulation
            const leadTime = 0.015;
            if (this.nextPlayTime < now || this.nextPlayTime > now + 0.040) {
                this.nextPlayTime = now + leadTime;
            }
            source.start(this.nextPlayTime);
            this.nextPlayTime += audioBuffer.duration;
        } catch (err) {
            console.error("[TelephonyAudio] Error decoding mu-law audio chunk:", err);
        }
    }
    async startMicrophoneCapture() {
        if (!this.audioContext || !this.micStream) return;
        try {
            if (this.audioContext.state === "suspended") {
                await this.audioContext.resume();
            }
            const micSource = this.audioContext.createMediaStreamSource(this.micStream);
            const inSampleRate = this.audioContext.sampleRate || 48000;
            // Telephony bandpass filtering (120Hz highpass + 3400Hz lowpass) to remove low rumble and high-frequency aliasing
            const highpass = this.audioContext.createBiquadFilter();
            highpass.type = "highpass";
            highpass.frequency.value = 120;
            const lowpass = this.audioContext.createBiquadFilter();
            lowpass.type = "lowpass";
            lowpass.frequency.value = 3400;
            micSource.connect(highpass);
            highpass.connect(lowpass);
            // Ultra-low latency ScriptProcessor buffer size: 512 samples @ 48kHz = 10.6ms!
            this.micProcessor = this.audioContext.createScriptProcessor(512, 1, 1);
            this.micProcessor.onaudioprocess = (e)=>{
                if (this.isMicMuted || !this.socket || this.socket.readyState !== WebSocket.OPEN) return;
                const rawData = e.inputBuffer.getChannelData(0);
                const inputData = resampleTo8k(rawData, inSampleRate);
                const ulawBytes = new Uint8Array(inputData.length);
                for(let i = 0; i < inputData.length; i++){
                    ulawBytes[i] = linearToMuLaw(inputData[i]);
                }
                // Convert to base64
                let binary = "";
                for(let i = 0; i < ulawBytes.length; i++){
                    binary += String.fromCharCode(ulawBytes[i]);
                }
                const b64 = btoa(binary);
                this.socket.send(JSON.stringify({
                    event: "media",
                    media: {
                        payload: b64
                    }
                }));
            };
            lowpass.connect(this.micProcessor);
            // Route ScriptProcessorNode through a near-zero gain node to destination
            // 0.00001 keeps onaudioprocess running in WebKit/Blink without supervisor hear-back echo or power-saving throttling
            const keepAliveGain = this.audioContext.createGain();
            keepAliveGain.gain.value = 0.00001;
            this.micProcessor.connect(keepAliveGain);
            keepAliveGain.connect(this.audioContext.destination);
        } catch (err) {
            console.error("[TelephonyAudio] Error initializing microphone capture:", err);
        }
    }
    stopMicrophone() {
        if (this.micProcessor) {
            try {
                this.micProcessor.disconnect();
            } catch (e) {}
            this.micProcessor = null;
        }
        if (this.micStream) {
            this.micStream.getTracks().forEach((track)=>track.stop());
            this.micStream = null;
        }
    }
    setVolume(vol) {
        this.volume = Math.max(0, Math.min(1, vol));
        if (this.gainNode && !this.isMuted) {
            this.gainNode.gain.value = this.volume;
        }
    }
    setMute(mute) {
        this.isMuted = mute;
        if (this.gainNode) {
            this.gainNode.gain.value = mute ? 0 : this.volume;
        }
    }
    setMicMute(mute) {
        this.isMicMuted = mute;
    }
    stopSession() {
        this.stopMicrophone();
        if (this.socket) {
            try {
                if (this.socket.readyState === WebSocket.OPEN) {
                    this.socket.send(JSON.stringify({
                        action: "leave"
                    }));
                }
                this.socket.close();
            } catch (e) {}
            this.socket = null;
        }
        this.nextPlayTime = 0;
        this.onStateChange?.("IDLE");
    }
}
const telephonyAudioManager = ("TURBOPACK compile-time truthy", 1) ? new TelephonyAudioManager() : "TURBOPACK unreachable";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/voice-agent.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "voiceAgentService",
    ()=>voiceAgentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const voiceAgentService = {
    list: (params)=>{
        const q = params?.agent_type ? `?agent_type=${params.agent_type}` : "";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents${q}`);
    },
    get: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}`),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/voice-agents", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    updateStatus: (id, status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/status`, {
            method: "PATCH",
            body: JSON.stringify({
                status
            })
        }),
    updateDirection: (id, direction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/direction`, {
            method: "PATCH",
            body: JSON.stringify({
                direction: direction.toUpperCase()
            })
        }),
    togglePd: (id, auto_dial_enabled)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/pd`, {
            method: "PATCH",
            body: JSON.stringify({
                auto_dial_enabled
            })
        }),
    delete: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}`, {
            method: "DELETE"
        }),
    getOverview: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/overview`),
    getCampaigns: (id, status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/campaigns${status ? `?status=${status}` : ""}`),
    getLeads: (id, params)=>{
        const q = new URLSearchParams();
        if (params?.search) q.append("search", params.search);
        if (params?.call_status) q.append("call_status", params.call_status);
        if (params?.lead_status) q.append("lead_status", params.lead_status);
        const str = q.toString();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/leads${str ? `?${str}` : ""}`);
    },
    getQualifiedCalls: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/qualified-calls`),
    getCallHistory: (id, rangeFilter)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice-agents/${id}/call-history${rangeFilter ? `?range_filter=${rangeFilter}` : ""}`)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseIsoTimestampMs",
    ()=>parseIsoTimestampMs,
    "useActiveCallStore",
    ()=>useActiveCallStore,
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
/**
 * Tab-Isolated Session Storage with Role-Scoped Fallback
 * 
 * 1. Uses sessionStorage as the primary storage engine to isolate tab sessions.
 *    Tab 1 (Admin) and Tab 2 (Voice Agent) on http://localhost:3000 run independently.
 * 2. Also saves a role-scoped fallback in localStorage (e.g. callzenza-auth-ADMIN)
 *    so opening a role portal in a new tab can automatically restore that role's session.
 */ const customTabStorage = {
    getItem: (name)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // 1. Check tab's isolated sessionStorage
        const tabData = sessionStorage.getItem(name);
        if (tabData) return tabData;
        // 2. If tab sessionStorage is empty, detect portal path to restore role session
        const pathname = window.location.pathname;
        let targetRole = "";
        if (pathname.startsWith("/admin")) targetRole = "ADMIN";
        else if (pathname.startsWith("/supervisor")) targetRole = "SUPERVISOR";
        else if (pathname.startsWith("/voice-agent")) targetRole = "VOICE_AGENT";
        else if (pathname.startsWith("/dashboard") || pathname.startsWith("/leads")) targetRole = "USER";
        if (targetRole) {
            const roleData = localStorage.getItem(`callzenza-auth-${targetRole}`);
            if (roleData) {
                // Hydrate this tab's sessionStorage with the role's saved credentials
                sessionStorage.setItem(name, roleData);
                return roleData;
            }
        }
        // 3. Fallback to default callzenza-auth in localStorage if available
        const defaultData = localStorage.getItem(name);
        if (defaultData) {
            sessionStorage.setItem(name, defaultData);
            return defaultData;
        }
        return null;
    },
    setItem: (name, value)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Store in tab's isolated sessionStorage
        sessionStorage.setItem(name, value);
        // Extract role from payload and save to role-scoped key in localStorage
        try {
            const parsed = JSON.parse(value);
            const userRole = parsed?.state?.user?.role;
            if (userRole) {
                localStorage.setItem(`callzenza-auth-${userRole}`, value);
                // Normalize SUPER_ADMIN to ADMIN key as well
                if (userRole === "SUPER_ADMIN") {
                    localStorage.setItem("callzenza-auth-ADMIN", value);
                }
            }
        } catch  {
        // Ignore JSON parse errors
        }
    },
    removeItem: (name)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Retrieve active role before clearing
        try {
            const tabData = sessionStorage.getItem(name);
            if (tabData) {
                const parsed = JSON.parse(tabData);
                const userRole = parsed?.state?.user?.role;
                if (userRole) {
                    localStorage.removeItem(`callzenza-auth-${userRole}`);
                    if (userRole === "SUPER_ADMIN") {
                        localStorage.removeItem("callzenza-auth-ADMIN");
                    }
                }
            }
        } catch  {
        // Ignore
        }
        sessionStorage.removeItem(name);
    }
};
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        token: null,
        user: null,
        setToken: (token)=>{
            set({
                token
            });
            // Sync role key if user is set
            const currentUser = get().user;
            if (currentUser?.role && ("TURBOPACK compile-time value", "object") !== "undefined") {
                const payload = JSON.stringify({
                    state: {
                        token,
                        user: currentUser
                    },
                    version: 0
                });
                localStorage.setItem(`callzenza-auth-${currentUser.role}`, payload);
            }
        },
        setUser: (user)=>{
            set({
                user
            });
            const currentToken = get().token;
            if (user?.role && currentToken && ("TURBOPACK compile-time value", "object") !== "undefined") {
                const payload = JSON.stringify({
                    state: {
                        token: currentToken,
                        user
                    },
                    version: 0
                });
                localStorage.setItem(`callzenza-auth-${user.role}`, payload);
                if (user.role === "SUPER_ADMIN") {
                    localStorage.setItem("callzenza-auth-ADMIN", payload);
                }
            }
        },
        logout: ()=>{
            const currentUser = get().user;
            const currentToken = get().token;
            if (currentUser) {
                const apiUrl = ("TURBOPACK compile-time truthy", 1) ? "" : "TURBOPACK unreachable";
                fetch(`${apiUrl}/api/auth/logout`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...currentToken ? {
                            Authorization: `Bearer ${currentToken}`
                        } : {}
                    },
                    body: JSON.stringify({
                        user_id: currentUser.id
                    })
                }).catch(()=>null);
            }
            if (currentUser?.role && ("TURBOPACK compile-time value", "object") !== "undefined") {
                localStorage.removeItem(`callzenza-auth-${currentUser.role}`);
                if (currentUser.role === "SUPER_ADMIN") {
                    localStorage.removeItem("callzenza-auth-ADMIN");
                }
            }
            set({
                token: null,
                user: null
            });
        }
    }), {
    name: "callzenza-auth",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>customTabStorage),
    skipHydration: false
}));
function parseIsoTimestampMs(isoString) {
    if (!isoString) return Date.now();
    let s = isoString.trim();
    // If no timezone offset or Z, explicitly force UTC
    if (!s.endsWith("Z") && !/[+-]\d{2}(:\d{2})?$/.test(s)) {
        s = s + "Z";
    }
    const parsed = new Date(s).getTime();
    if (isNaN(parsed) || parsed > Date.now()) {
        return Date.now();
    }
    return parsed;
}
const useActiveCallStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set)=>({
        callActive: false,
        callDuration: 0,
        customerConnectedAt: null,
        clientConnectedAt: null,
        clientDisconnectedAt: null,
        clientDuration: 0,
        activeCallId: null,
        telephonyStatus: "IDLE",
        leadName: "",
        leadPhone: "",
        selectedClientName: "",
        selectedClientPhone: "",
        selectedClientId: null,
        isCallParked: false,
        showSelectClientModal: false,
        setCallState: (data)=>set((state)=>({
                    ...state,
                    ...data
                })),
        openClientSelectionModal: ()=>set({
                showSelectClientModal: true
            }),
        closeClientSelectionModal: ()=>set({
                showSelectClientModal: false
            }),
        setSelectedClient: ({ name, phone, id })=>set({
                selectedClientName: name,
                selectedClientPhone: phone,
                selectedClientId: id || null
            }),
        tickDuration: ()=>set((state)=>{
                if (!state.callActive || !state.customerConnectedAt || state.telephonyStatus === "RINGING" || state.telephonyStatus === "INITIATING") {
                    if (state.callDuration !== 0 && (state.telephonyStatus === "RINGING" || state.telephonyStatus === "INITIATING")) {
                        return {
                            ...state,
                            callDuration: 0
                        };
                    }
                    return state;
                }
                const now = Date.now();
                const customerStartMs = parseIsoTimestampMs(state.customerConnectedAt);
                const customerElapsed = Math.max(0, Math.floor((now - customerStartMs) / 1000));
                let clientElapsed = state.clientDuration;
                if (state.clientConnectedAt && !state.clientDisconnectedAt) {
                    const clientStartMs = parseIsoTimestampMs(state.clientConnectedAt);
                    clientElapsed = Math.max(0, Math.floor((now - clientStartMs) / 1000));
                }
                return {
                    ...state,
                    callDuration: customerElapsed,
                    clientDuration: clientElapsed
                };
            }),
        resetCall: ()=>set({
                callActive: false,
                callDuration: 0,
                customerConnectedAt: null,
                clientConnectedAt: null,
                clientDisconnectedAt: null,
                clientDuration: 0,
                activeCallId: null,
                telephonyStatus: "IDLE",
                leadName: "",
                leadPhone: "",
                selectedClientName: "",
                selectedClientPhone: "",
                selectedClientId: null,
                isCallParked: false,
                showSelectClientModal: false
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/useLiveClock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLiveClock",
    ()=>useLiveClock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date-utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useLiveClock() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLiveClock.useState": ()=>new Date()
    }["useLiveClock.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveClock.useEffect": ()=>{
            setMounted(true);
            const id = setInterval({
                "useLiveClock.useEffect.id": ()=>setNow(new Date())
            }["useLiveClock.useEffect.id"], 1000);
            return ({
                "useLiveClock.useEffect": ()=>clearInterval(id)
            })["useLiveClock.useEffect"];
        }
    }["useLiveClock.useEffect"], []);
    const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_TIMEZONE"],
        hour: "2-digit",
        minute: "2-digit"
    });
    const timeWithSecondsStr = now.toLocaleTimeString("en-US", {
        timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_TIMEZONE"],
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    const dateStr = now.toLocaleDateString("en-GB", {
        timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_TIMEZONE"],
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
    const longDateStr = now.toLocaleDateString("en-US", {
        timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_TIMEZONE"],
        month: "long",
        day: "2-digit",
        year: "numeric"
    });
    const currentHourStart = new Date(now);
    currentHourStart.setMinutes(0, 0, 0);
    const currentHourEnd = new Date(currentHourStart.getTime() + 60 * 60 * 1000);
    const currentHourWindow = `${currentHourStart.toLocaleTimeString("en-US", {
        timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_TIMEZONE"],
        hour: "2-digit",
        minute: "2-digit"
    })} - ${currentHourEnd.toLocaleTimeString("en-US", {
        timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_TIMEZONE"],
        hour: "2-digit",
        minute: "2-digit"
    })}`;
    return {
        mounted,
        now,
        timeStr,
        timeWithSecondsStr,
        dateStr,
        longDateStr,
        currentHourWindow,
        reportTimestamp: `${dateStr} · ${timeStr}`,
        reportTimestampLong: `${longDateStr} · ${timeStr}`
    };
}
_s(useLiveClock, "lb/T/Ek1FZdTBl/X9zoSRSWd0EY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1kguaf9._.js.map