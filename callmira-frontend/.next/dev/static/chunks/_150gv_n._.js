(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/ai-chatbot/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAIChatbotPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/chatbot.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MarkdownText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/MarkdownText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript) <export default as Sliders>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
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
function AdminAIChatbotPage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const isAdmin = user?.role === "ADMIN" || user?.role === "SUPER_ADMIN";
    // Top Section Mode (Department Workspace vs Custom Agent Creator)
    const [topMode, setTopMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("departments");
    // Navigation Tabs
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("workspace");
    // Department & Custom Agent State
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAgentKey, setSelectedAgentKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(900001);
    const [deptFiles, setDeptFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deptMisses, setDeptMisses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deptCaches, setDeptCaches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [deptUploading, setDeptUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deptDragOver, setDeptDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Custom Agent Creation State
    const [selectedArchetype, setSelectedArchetype] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sales");
    const [customAgentName, setCustomAgentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customArchetypeTitle, setCustomArchetypeTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customArchetypeDesc, setCustomArchetypeDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customArchetypeIcon, setCustomArchetypeIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("🤖");
    const [customAgentFiles, setCustomAgentFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customAgentPrompt, setCustomAgentPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [creatingAgent, setCreatingAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Global RAG State
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chunks, setChunks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chunkSearch, setChunkSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingChunkId, setEditingChunkId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingChunkText, setEditingChunkText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analytics, setAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [actionLoading, setActionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Modals
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadFile, setUploadFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadTitle, setUploadTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showManualModal, setShowManualModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manualTitle, setManualTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [manualContent, setManualContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAddQAModal, setShowAddQAModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [qaQuestion, setQaQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [qaAnswer, setQaAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDocDetails, setSelectedDocDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Scoped Library Doc Edit State
    const [editingDocItem, setEditingDocItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editDocTitle, setEditDocTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingDocContentItem, setEditingDocContentItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editDocFullTitle, setEditDocFullTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editDocFullText, setEditDocFullText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingDocContent, setLoadingDocContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Learned Cache CRUD States
    const [viewingCacheItem, setViewingCacheItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingCacheItem, setEditingCacheItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editCacheQuestion, setEditCacheQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editCacheAnswer, setEditCacheAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAddCacheModal, setShowAddCacheModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [addCacheQuestion, setAddCacheQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [addCacheAnswer, setAddCacheAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Sandbox State
    const [sandboxQuery, setSandboxQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sandboxAgentKey, setSandboxAgentKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [sandboxConversationId, setSandboxConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [sandboxPdfUrl, setSandboxPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sandboxQAHistory, setSandboxQAHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sandboxLoading, setSandboxLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const deptFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const customFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const archetypes = [
        {
            id: "sales",
            icon: "💰",
            title: "SALES CLOSING BOT",
            desc: "Conversion engine"
        },
        {
            id: "support",
            icon: "🛡️",
            title: "CUSTOMER SUPPORT AGENT",
            desc: "Resolution layer"
        },
        {
            id: "copilot",
            icon: "🚀",
            title: "PRODUCT COPILOT",
            desc: "Feature navigator"
        },
        {
            id: "custom",
            icon: "✨",
            title: "CUSTOM ARCHETYPE",
            desc: "Build from scratch"
        }
    ];
    // Initial Data Load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminAIChatbotPage.useEffect": ()=>{
            loadInitialData();
        }
    }["AdminAIChatbotPage.useEffect"], []);
    // When selectedAgentKey changes, load scoped data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminAIChatbotPage.useEffect": ()=>{
            if (selectedAgentKey) {
                loadScopedAgentData(selectedAgentKey);
            }
        }
    }["AdminAIChatbotPage.useEffect"], [
        selectedAgentKey
    ]);
    const loadInitialData = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const [agentsList, docsData, configData, analyticsData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listAgents().catch(()=>[]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listDocuments().catch(()=>[]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].getConfig().catch(()=>null),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].getAnalytics().catch(()=>null)
            ]);
            setAgents(agentsList);
            setDocuments(docsData);
            setConfig(configData);
            setAnalytics(analyticsData);
            if (agentsList.length > 0 && !selectedAgentKey) {
                setSelectedAgentKey(agentsList[0].agent_key);
            }
        } catch (err) {
            setError(err.message || "Failed to load knowledge data");
        } finally{
            setLoading(false);
        }
    };
    const loadScopedAgentData = async (agentKey)=>{
        try {
            const [libraryRes, missesRes, cacheRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listAgentLibrary(agentKey).catch(()=>({
                        files: []
                    })),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listRagMisses(agentKey).catch(()=>({
                        misses: []
                    })),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listRagCache(agentKey).catch(()=>({
                        cache: []
                    }))
            ]);
            setDeptFiles(libraryRes.files || []);
            setDeptMisses(missesRes.misses || []);
            setDeptCaches(cacheRes.cache || []);
        } catch (err) {
            console.error("Failed to load agent scoped data:", err);
        }
    };
    const loadChunks = async (searchQuery)=>{
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listChunks(searchQuery);
            setChunks(data);
        } catch (err) {
            console.error("Failed to load chunks:", err);
        }
    };
    const loadChatHistory = async ()=>{
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].getChatHistory();
            setChatHistory(data);
        } catch (err) {
            console.error("Failed to load history:", err);
        }
    };
    const handleDeleteChatHistory = async (id)=>{
        if (!confirm("Are you sure you want to delete this conversation?")) return;
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteConversation(id);
            setSuccess("Conversation deleted successfully.");
            loadChatHistory();
        } catch (err) {
            setError(err.message || "Failed to delete conversation");
        } finally{
            setActionLoading(false);
        }
    };
    // Bulk Delete Handlers
    const handleDeleteAllDeptFiles = async (agentKey)=>{
        if (!confirm("Are you sure you want to delete ALL documents for this workspace? This cannot be undone.")) return;
        setActionLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteAllDocuments(agentKey);
            setSuccess(res.message || "All agent workspace documents deleted.");
            loadScopedAgentData(agentKey);
            loadInitialData();
        } catch (err) {
            setError(err.message || "Failed to delete agent workspace documents");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDeleteAllRagMisses = async (agentKey)=>{
        if (!confirm("Are you sure you want to clear ALL gap questions for this agent?")) return;
        setActionLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteAllRagMisses(agentKey);
            setSuccess(res.message || "All gap questions cleared.");
            setDeptMisses([]);
        } catch (err) {
            setError(err.message || "Failed to clear gap questions");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDeleteAllRagCache = async (agentKey)=>{
        if (!confirm("Are you sure you want to clear ALL learned QA cache entries for this agent?")) return;
        setActionLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteAllRagCache(agentKey);
            setSuccess(res.message || "All QA cache entries cleared.");
            setDeptCaches([]);
        } catch (err) {
            setError(err.message || "Failed to clear QA cache");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDeleteAllDocuments = async ()=>{
        if (!confirm("Are you sure you want to delete ALL master knowledge documents and all their vector chunks? This cannot be undone.")) return;
        setActionLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteAllDocuments();
            setSuccess(res.message || "All master documents deleted.");
            setDocuments([]);
            if (activeTab === "chunks") loadChunks();
        } catch (err) {
            setError(err.message || "Failed to delete master documents");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDeleteAllChunks = async ()=>{
        if (!confirm("Are you sure you want to delete ALL vector chunks? This cannot be undone.")) return;
        setActionLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteAllChunks();
            setSuccess(res.message || "All vector chunks deleted.");
            setChunks([]);
        } catch (err) {
            setError(err.message || "Failed to delete vector chunks");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDeleteAllChatHistory = async ()=>{
        if (!confirm("Are you sure you want to clear ALL user chat history across all agents? This cannot be undone.")) return;
        setActionLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteAllChatHistory();
            setSuccess(res.message || "All chat history cleared.");
            setChatHistory([]);
        } catch (err) {
            setError(err.message || "Failed to clear chat history");
        } finally{
            setActionLoading(false);
        }
    };
    const handleTabChange = (tab)=>{
        setActiveTab(tab);
        setError(null);
        setSuccess(null);
        if (tab === "chunks") loadChunks(chunkSearch);
        if (tab === "history") loadChatHistory();
        if (tab === "analytics") __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].getAnalytics().then(setAnalytics);
    };
    // Toggle Agent Active State
    const handleToggleAgent = async (agentKey)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].toggleAgentActive(agentKey);
            setAgents((prev)=>prev.map((a)=>a.agent_key === agentKey ? {
                        ...a,
                        is_active: res.is_active
                    } : a));
        } catch (err) {
            setError(err.message || "Failed to toggle agent status");
        }
    };
    // Delete Custom Agent
    const handleDeleteCustomAgent = async (agentKey, name)=>{
        if (!confirm(`Delete custom agent '${name}' and its scoped knowledge?`)) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteCustomAgent(agentKey);
            setSuccess(`Agent '${name}' removed.`);
            loadInitialData();
        } catch (err) {
            setError(err.message || "Failed to delete agent");
        }
    };
    // Drop / Select multiple files for scoped agent
    const handleDeptFileDrop = async (files)=>{
        if (!files || files.length === 0) return;
        setDeptUploading(true);
        setError(null);
        setSuccess(null);
        try {
            const fileArray = Array.from(files);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].uploadMultipleForAgent(fileArray, selectedAgentKey);
            setSuccess(res.message || `Uploaded ${fileArray.length} file(s).`);
            loadScopedAgentData(selectedAgentKey);
            loadInitialData();
        } catch (err) {
            setError(err.message || "Scoped document upload failed");
        } finally{
            setDeptUploading(false);
            setDeptDragOver(false);
        }
    };
    // Resolve RAG Miss
    const handleResolveMiss = async (missId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].resolveRagMiss(missId);
            setDeptMisses((prev)=>prev.filter((m)=>m.id !== missId));
            setSuccess("Gap question resolved and added to learned knowledge.");
            if (selectedAgentKey) {
                loadScopedAgentData(selectedAgentKey);
            }
        } catch (err) {
            setError(err.message || "Failed to resolve question");
        }
    };
    // Delete Learned Cache Entry
    const handleDeleteCache = async (cacheId)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteRagCache(cacheId);
            setDeptCaches((prev)=>prev.filter((c)=>c.id !== cacheId));
            setSuccess("Cached Q&A entry removed.");
        } catch (err) {
            setError(err.message || "Failed to delete cache entry");
        }
    };
    // Start Edit Scoped Document Content & Title
    const handleStartEditDocContent = async (f)=>{
        setEditingDocContentItem(f);
        setEditDocFullTitle(f.title || f.filename || "");
        setEditDocFullText("");
        setLoadingDocContent(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].getDocumentContent(f.id);
            setEditDocFullText(data.content || "");
        } catch (err) {
            setError(err.message || "Failed to load document content");
        } finally{
            setLoadingDocContent(false);
        }
    };
    // Save Edit Scoped Document Content & Title
    const handleSaveEditDocContent = async (e)=>{
        e.preventDefault();
        if (!editingDocContentItem || !editDocFullText.trim()) return;
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].updateDocumentContent(editingDocContentItem.id, {
                title: editDocFullTitle.trim(),
                content: editDocFullText.trim()
            });
            setSuccess(`Document '${editDocFullTitle}' content updated and re-indexed into RAG memory!`);
            setEditingDocContentItem(null);
            loadScopedAgentData(selectedAgentKey);
            loadInitialData();
        } catch (err) {
            setError(err.message || "Failed to update document content");
        } finally{
            setActionLoading(false);
        }
    };
    // Download Document File
    const handleDownloadDoc = (docId)=>{
        const url = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].getDocumentDownloadUrl(docId);
        window.open(url, "_blank");
    };
    // Start Edit Learned Cache Item
    const handleStartEditCache = (c)=>{
        setEditingCacheItem(c);
        setEditCacheQuestion(c.question);
        setEditCacheAnswer(c.answer);
    };
    // Save Edit Learned Cache Item
    const handleSaveEditCache = async (e)=>{
        e.preventDefault();
        if (!editingCacheItem || !editCacheQuestion.trim() || !editCacheAnswer.trim()) return;
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].updateRagCache(editingCacheItem.id, {
                question: editCacheQuestion.trim(),
                answer: editCacheAnswer.trim()
            });
            setSuccess("Learned Q&A entry updated.");
            setEditingCacheItem(null);
            loadScopedAgentData(selectedAgentKey);
        } catch (err) {
            setError(err.message || "Failed to update cache entry");
        } finally{
            setActionLoading(false);
        }
    };
    // Save Add Manual Learned Cache Item
    const handleSaveAddCache = async (e)=>{
        e.preventDefault();
        if (!addCacheQuestion.trim() || !addCacheAnswer.trim()) return;
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].addRagCache({
                agent_key: selectedAgentKey,
                question: addCacheQuestion.trim(),
                answer: addCacheAnswer.trim(),
                source: "manual"
            });
            setSuccess("New Learned Q&A entry added!");
            setShowAddCacheModal(false);
            setAddCacheQuestion("");
            setAddCacheAnswer("");
            loadScopedAgentData(selectedAgentKey);
        } catch (err) {
            setError(err.message || "Failed to add cache entry");
        } finally{
            setActionLoading(false);
        }
    };
    // Create Custom Agent
    const handleCreateCustomAgent = async (e)=>{
        e.preventDefault();
        if (!customAgentName.trim()) return;
        setCreatingAgent(true);
        setError(null);
        setSuccess(null);
        try {
            const arch = archetypes.find((a)=>a.id === selectedArchetype) || archetypes[3];
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].createCustomAgent({
                name: customAgentName.trim(),
                archetype_id: selectedArchetype,
                archetype_title: selectedArchetype === "custom" ? customArchetypeTitle : arch.title,
                archetype_desc: selectedArchetype === "custom" ? customArchetypeDesc : arch.desc,
                archetype_icon: selectedArchetype === "custom" ? customArchetypeIcon : arch.icon,
                system_prompt: customAgentPrompt.trim()
            });
            // If initial PDFs attached
            if (customAgentFiles.length > 0 && res.agent?.agent_key) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].uploadMultipleForAgent(customAgentFiles, res.agent.agent_key);
            }
            setSuccess(`Agent '${customAgentName}' deployed successfully!`);
            setCustomAgentName("");
            setCustomArchetypeTitle("");
            setCustomArchetypeDesc("");
            setCustomAgentFiles([]);
            setCustomAgentPrompt("");
            setTopMode("departments");
            loadInitialData();
        } catch (err) {
            setError(err.message || "Failed to deploy custom agent");
        } finally{
            setCreatingAgent(false);
        }
    };
    // Global upload submit
    const handleUploadSubmit = async (e)=>{
        e.preventDefault();
        if (!uploadFile) return;
        setActionLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].uploadDocument(uploadFile, uploadTitle);
            setSuccess(res.message || "Document uploaded and indexed!");
            setShowUploadModal(false);
            setUploadFile(null);
            setUploadTitle("");
            loadInitialData();
        } catch (err) {
            setError(err.message || "Upload failed");
        } finally{
            setActionLoading(false);
        }
    };
    // Global manual submit
    const handleManualSubmit = async (e)=>{
        e.preventDefault();
        if (!manualTitle.trim() || !manualContent.trim()) return;
        setActionLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].createManualDocument(manualTitle, manualContent);
            setSuccess(res.message || "Knowledge entry created and indexed!");
            setShowManualModal(false);
            setManualTitle("");
            setManualContent("");
            loadInitialData();
        } catch (err) {
            setError(err.message || "Creation failed");
        } finally{
            setActionLoading(false);
        }
    };
    // Reprocess Document
    const handleReprocess = async (id)=>{
        setActionLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].reprocessDocument(id);
            setSuccess(res.message || "Document reprocessed successfully!");
            loadInitialData();
        } catch (err) {
            setError(err.message || "Reprocessing failed");
        } finally{
            setActionLoading(false);
        }
    };
    // View Document Details
    const handleViewDocument = async (id)=>{
        setActionLoading(true);
        setError(null);
        try {
            const docDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].getDocumentDetails(id);
            setSelectedDocDetails(docDetails);
        } catch (err) {
            setError(err.message || "Failed to load document details");
        } finally{
            setActionLoading(false);
        }
    };
    // Delete Document
    const handleDeleteDoc = async (id, title)=>{
        if (!confirm(`Delete '${title}' and its chunks?`)) return;
        setActionLoading(true);
        setError(null);
        setSuccess(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteDocument(id);
            setSuccess(`Document '${title}' removed.`);
            loadInitialData();
        } catch (err) {
            setError(err.message || "Deletion failed");
        } finally{
            setActionLoading(false);
        }
    };
    const handleSaveQA = async (e)=>{
        e.preventDefault();
        if (!qaQuestion.trim() || !qaAnswer.trim()) return;
        setActionLoading(true);
        setError(null);
        setSuccess(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].createManualDocument(`Q&A: ${qaQuestion.substring(0, 50)}`, `Q: ${qaQuestion}\n\nA: ${qaAnswer}`, activeTab === "workspace" && selectedAgentKey ? selectedAgentKey : undefined);
            setSuccess("Q&A chunk added successfully");
            setShowAddQAModal(false);
            setQaQuestion("");
            setQaAnswer("");
            loadChunks(chunkSearch);
            loadInitialData();
        } catch (err) {
            setError(err.message || "Failed to add Q&A chunk");
        } finally{
            setActionLoading(false);
        }
    };
    // Save Config
    const handleSaveConfig = async (e)=>{
        e.preventDefault();
        if (!config) return;
        setActionLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].updateConfig(config);
            setSuccess("Configuration updated successfully!");
            setConfig(res.config);
        } catch (err) {
            setError(err.message || "Failed to save configuration");
        } finally{
            setActionLoading(false);
        }
    };
    // Run Sandbox Query & Real-time Q&A / PDF Update
    const handleRunSandbox = async (e)=>{
        e.preventDefault();
        const queryText = sandboxQuery.trim();
        if (!queryText) return;
        setSandboxLoading(true);
        setError(null);
        try {
            const activeAgentKey = sandboxAgentKey || selectedAgentKey;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].sendMessage(queryText, sandboxConversationId, activeAgentKey, false);
            setSandboxConversationId(res.conversation_id);
            if (res.pdf_url) {
                setSandboxPdfUrl(res.pdf_url);
            }
            setSandboxQAHistory((prev)=>[
                    ...prev,
                    {
                        question: queryText,
                        answer: res.message,
                        q_time: res.created_at,
                        a_time: res.created_at
                    }
                ]);
            setSandboxQuery("");
            // Real-time update of #2 Scoped Library, Gap Questions, and Learned Cache
            if (activeAgentKey) {
                loadScopedAgentData(activeAgentKey);
            }
        } catch (err) {
            setError(err.message || "Sandbox test query failed");
        } finally{
            setSandboxLoading(false);
        }
    };
    const handleNewSandboxSession = ()=>{
        setSandboxConversationId(undefined);
        setSandboxPdfUrl(null);
        setSandboxQAHistory([]);
        setSuccess("Started new conversation session with clean PDF.");
    };
    const handleEditChunk = (chunk)=>{
        setEditingChunkId(chunk.id);
        setEditingChunkText(chunk.text);
    };
    const handleSaveChunk = async (id)=>{
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].updateChunk(id, editingChunkText);
            setSuccess("Chunk updated successfully");
            setEditingChunkId(null);
            loadChunks(chunkSearch);
        } catch (err) {
            setError(err.message || "Failed to update chunk");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDeleteChunk = async (id)=>{
        if (!confirm("Are you sure you want to delete this chunk?")) return;
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteChunk(id);
            setSuccess("Chunk deleted successfully");
            loadChunks(chunkSearch);
        } catch (err) {
            setError(err.message || "Failed to delete chunk");
        } finally{
            setActionLoading(false);
        }
    };
    const handleToggleAgentStatus = async (agentKey, e)=>{
        e.stopPropagation();
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].toggleAgentActive(agentKey);
            setSuccess("Agent status updated");
            const updatedAgents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listAgents();
            setAgents(updatedAgents);
        } catch (err) {
            setError(err.message || "Failed to toggle agent status");
        } finally{
            setActionLoading(false);
        }
    };
    const handleDeleteAgent = async (agentKey, e)=>{
        e.stopPropagation();
        if (!confirm("Are you sure you want to delete this custom agent? This cannot be undone.")) return;
        setActionLoading(true);
        setError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].deleteCustomAgent(agentKey);
            setSuccess("Custom agent deleted");
            if (selectedAgentKey === agentKey) {
                setSelectedAgentKey(900001);
            }
            const updatedAgents = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$chatbot$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatbotService"].listAgents();
            setAgents(updatedAgents);
        } catch (err) {
            setError(err.message || "Failed to delete agent");
        } finally{
            setActionLoading(false);
        }
    };
    const selectedAgent = agents.find((a)=>a.agent_key === selectedAgentKey) || agents[0];
    const customAgentsFleet = agents.filter((a)=>a.agent_key > 900010);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 md:p-8 space-y-6 max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 802,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2",
                                            children: [
                                                "CallZenza AI Chatbot & RAG",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs bg-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider",
                                                    children: "Admin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 806,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-xs font-medium",
                                            children: "Manage department workspaces, custom agent creators, scoped documents, text chunking, vector embeddings, Gemini grounding, and chat logs."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 812,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 805,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 801,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center bg-slate-100/80 p-1 rounded-2xl border border-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setTopMode("departments");
                                        setActiveTab("workspace");
                                    },
                                    className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${topMode === "departments" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                            className: "w-4 h-4 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 831,
                                            columnNumber: 15
                                        }, this),
                                        "Department Workspace"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 820,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setTopMode("custom_creator");
                                        setActiveTab("workspace");
                                    },
                                    className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${topMode === "custom_creator" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4 text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 845,
                                            columnNumber: 15
                                        }, this),
                                        "Custom Agent Creator"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 834,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 819,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 800,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-xs font-medium animate-fadeIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-5 h-5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 854,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 855,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 853,
                    columnNumber: 11
                }, this),
                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-xs font-medium animate-fadeIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-5 h-5 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 860,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: success
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 861,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 859,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-slate-200 overflow-x-auto gap-1 pb-px scrollbar-none",
                    children: [
                        {
                            id: "workspace",
                            label: "Agent Workspaces & Scoped RAG",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
                        },
                        {
                            id: "documents",
                            label: "Master Knowledge Base",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
                        },
                        {
                            id: "chunks",
                            label: "Chunks & Embeddings",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
                        },
                        {
                            id: "config",
                            label: "Configuration",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"]
                        },
                        {
                            id: "history",
                            label: "Chat History",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
                        },
                        {
                            id: "analytics",
                            label: "Analytics",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                        },
                        {
                            id: "sandbox",
                            label: "Test Sandbox",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
                        }
                    ].map((tab)=>{
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTabChange(tab.id),
                            className: `flex items-center gap-2 px-4 py-3 text-xs font-bold border-b-2 transition-all whitespace-nowrap ${isActive ? "border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-xl" : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-t-xl"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: `w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 888,
                                    columnNumber: 17
                                }, this),
                                tab.label
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 879,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 866,
                    columnNumber: 9
                }, this),
                activeTab === "workspace" && topMode === "departments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 animate-fadeIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block",
                                    children: "Select Agent Workspace"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3",
                                    children: [
                                        agents.map((ag)=>{
                                            const isSelected = selectedAgentKey === ag.agent_key;
                                            const isCustom = ag.agent_key > 900010;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setSelectedAgentKey(ag.agent_key),
                                                className: `p-4 rounded-2xl cursor-pointer transition-all border text-center relative flex flex-col items-center justify-center gap-1.5 group ${isSelected ? "bg-indigo-50/80 border-indigo-600 shadow-sm shadow-indigo-500/10 ring-2 ring-indigo-500/20" : "bg-white border-slate-200/90 hover:border-indigo-300 hover:bg-slate-50/60"}`,
                                                children: [
                                                    isCustom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>handleDeleteAgent(ag.agent_key, e),
                                                        className: "absolute top-2 right-2 p-1 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-md transition-colors opacity-0 group-hover:opacity-100",
                                                        title: "Delete Custom Agent",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 919,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl mb-0.5",
                                                        children: ag.archetype_icon || "🤖"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 928,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold text-xs text-slate-800 tracking-tight truncate w-full px-4",
                                                        children: ag.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>handleToggleAgentStatus(ag.agent_key, e),
                                                        disabled: actionLoading,
                                                        className: `flex items-center gap-1.5 mt-0.5 px-2 py-0.5 rounded-full hover:opacity-80 transition-opacity ${ag.is_active ? "bg-emerald-50" : "bg-slate-100"}`,
                                                        title: "Click to toggle status",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-2 h-2 rounded-full ${ag.is_active ? "bg-emerald-500 shadow-xs" : "bg-slate-400"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-bold ${ag.is_active ? "text-emerald-700" : "text-slate-600"}`,
                                                                children: ag.is_active ? "Active" : "Inactive"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 945,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, ag.agent_key, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 909,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setTopMode("custom_creator"),
                                            className: "p-4 rounded-2xl cursor-pointer transition-all border border-dashed border-indigo-300 bg-indigo-50/30 hover:bg-indigo-50 text-center flex flex-col items-center justify-center gap-1.5 text-indigo-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-6 h-6 text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-xs tracking-tight",
                                                    children: "Create New Agent"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 954,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 904,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 899,
                            columnNumber: 13
                        }, this),
                        selectedAgent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl",
                                                    children: selectedAgent.archetype_icon || "💼"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-base font-extrabold text-slate-900 tracking-tight",
                                                            children: [
                                                                selectedAgent.name,
                                                                " WORKSPACE"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 font-medium",
                                                            children: [
                                                                "Agent Key: ",
                                                                selectedAgent.agent_key,
                                                                " • ",
                                                                selectedAgent.archetype_title || "Scoped Library Context"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 969,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${selectedAgent.is_active ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-600 border border-slate-200"}`,
                                                    children: selectedAgent.is_active ? "Active" : "Inactive"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: "outline",
                                                    onClick: ()=>handleToggleAgent(selectedAgent.agent_key),
                                                    className: "rounded-xl text-xs h-8 font-semibold",
                                                    children: selectedAgent.is_active ? "Deactivate" : "Activate"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 981,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 968,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                                    children: "#1 RAG PDF / Document Upload"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1009,
                                                                    columnNumber: 25
                                                                }, this),
                                                                deptUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-indigo-600 flex items-center gap-1.5 animate-pulse",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                            className: "w-3.5 h-3.5 animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1014,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Indexing..."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1013,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onDragOver: (e)=>{
                                                                e.preventDefault();
                                                                setDeptDragOver(true);
                                                            },
                                                            onDragLeave: ()=>setDeptDragOver(false),
                                                            onDrop: (e)=>{
                                                                e.preventDefault();
                                                                handleDeptFileDrop(e.dataTransfer.files);
                                                            },
                                                            onClick: ()=>deptFileInputRef.current?.click(),
                                                            className: `p-8 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 ${deptDragOver ? "border-indigo-600 bg-indigo-50/50" : "border-slate-200 hover:border-indigo-400 hover:bg-slate-50/60 bg-slate-50/30"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-xs",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        className: "w-6 h-6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                        lineNumber: 1038,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1037,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-bold text-slate-800 block",
                                                                            children: "Drop PDF to add to this agent's library"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1041,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] text-slate-400 font-medium block",
                                                                            children: "Click or drag & drop — multiple PDFs / DOCX / TXT supported"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1044,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1040,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: deptFileInputRef,
                                                                    type: "file",
                                                                    multiple: true,
                                                                    accept: ".pdf,.docx,.doc,.txt,.csv,.md",
                                                                    onChange: (e)=>handleDeptFileDrop(e.target.files),
                                                                    className: "hidden"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1048,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1020,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                                    children: [
                                                                        "#2 Scoped Agent Library (",
                                                                        deptFiles.length,
                                                                        " files)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1062,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "ghost",
                                                                            size: "sm",
                                                                            onClick: ()=>loadScopedAgentData(selectedAgentKey),
                                                                            className: "text-xs h-7 gap-1 text-slate-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1072,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Refresh"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        deptFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            onClick: ()=>handleDeleteAllDeptFiles(selectedAgentKey),
                                                                            className: "text-xs h-7 gap-1 border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 font-bold rounded-xl cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1082,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                "Delete All Files"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1076,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1065,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1061,
                                                            columnNumber: 23
                                                        }, this),
                                                        deptFiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-8 text-center bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 text-xs font-medium space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    className: "w-6 h-6 text-slate-300 mx-auto mb-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1091,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Library is currently empty."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1092,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px]",
                                                                    children: [
                                                                        "Upload documents to seed knowledge for ",
                                                                        selectedAgent.name,
                                                                        "."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1093,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1090,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 max-h-72 overflow-y-auto pr-1",
                                                            children: deptFiles.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between gap-3 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2.5 truncate",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                    className: "w-4 h-4 text-indigo-600 shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1103,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "truncate",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-bold text-slate-900 truncate block",
                                                                                            children: f.title || f.filename
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                            lineNumber: 1105,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                                            children: [
                                                                                                f.file_type,
                                                                                                " • ",
                                                                                                f.chunk_count,
                                                                                                " chunks • ",
                                                                                                f.status
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                            lineNumber: 1106,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1104,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1102,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 shrink-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleViewDocument(f.id),
                                                                                    className: "p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors cursor-pointer",
                                                                                    title: "View Document Chunks & Details",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                        lineNumber: 1118,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1113,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDownloadDoc(f.id),
                                                                                    className: "p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-white rounded-lg transition-colors cursor-pointer",
                                                                                    title: "Download Original File",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                        lineNumber: 1125,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1120,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleStartEditDocContent(f),
                                                                                    className: "p-1.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition-colors cursor-pointer",
                                                                                    title: "Edit Document Content & Vector Memory",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                        lineNumber: 1132,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1127,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleDeleteDoc(f.id, f.title || f.filename),
                                                                                    className: "p-1.5 text-slate-400 hover:text-red-600 hover:bg-white rounded-lg transition-colors cursor-pointer",
                                                                                    title: "Delete Document",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                        lineNumber: 1139,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1134,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1112,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, f.id, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1096,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1005,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase tracking-wider block",
                                                                    children: [
                                                                        "Unanswered / Gap Questions (",
                                                                        deptMisses.length,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1154,
                                                                    columnNumber: 25
                                                                }, this),
                                                                deptMisses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    size: "sm",
                                                                    variant: "outline",
                                                                    onClick: ()=>handleDeleteAllRagMisses(selectedAgentKey),
                                                                    className: "text-[11px] h-7 gap-1 font-bold border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1164,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Clear All"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1158,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1153,
                                                            columnNumber: 23
                                                        }, this),
                                                        deptMisses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-8 text-center bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 text-xs font-medium space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl block mb-1",
                                                                    children: "🎉"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1172,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-slate-700",
                                                                    children: "No unresolved gaps!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1173,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px]",
                                                                    children: "All questions have been matched or successfully answered."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1174,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1171,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2 max-h-60 overflow-y-auto pr-1",
                                                            children: deptMisses.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 bg-red-50/50 border border-red-100 rounded-2xl flex items-center justify-between gap-3 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-slate-800 font-semibold text-[11px] truncate flex-1",
                                                                            children: m.question
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1183,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            size: "sm",
                                                                            onClick: ()=>handleResolveMiss(m.id),
                                                                            className: "bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-[10px] font-bold h-7 px-2.5",
                                                                            children: "Resolve"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1184,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, m.id, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1179,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1177,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-slate-500 uppercase tracking-wider block",
                                                                    children: [
                                                                        "Gemini Q&A Review (Learned Cache) (",
                                                                        deptCaches.length,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1200,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            size: "sm",
                                                                            variant: "outline",
                                                                            onClick: ()=>setShowAddCacheModal(true),
                                                                            className: "text-[11px] h-7 gap-1 font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50 rounded-xl cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                    className: "w-3 h-3 text-indigo-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1210,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Add Q&A"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1204,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        deptCaches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            size: "sm",
                                                                            variant: "outline",
                                                                            onClick: ()=>handleDeleteAllRagCache(selectedAgentKey),
                                                                            className: "text-[11px] h-7 gap-1 font-bold border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-3 h-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1220,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                "Clear All"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1214,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1203,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1199,
                                                            columnNumber: 23
                                                        }, this),
                                                        deptCaches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-8 text-center bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 text-xs font-medium space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                                                                    className: "w-6 h-6 text-slate-300 mx-auto mb-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1230,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "No learned cache entries for this agent yet."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1231,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1229,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2.5 max-h-64 overflow-y-auto pr-1",
                                                            children: deptCaches.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-center text-[11px] font-bold text-indigo-700 gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "truncate flex-1",
                                                                                    children: [
                                                                                        "Q: ",
                                                                                        c.question
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1241,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-1 shrink-0",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>setViewingCacheItem(c),
                                                                                            className: "text-slate-400 hover:text-indigo-600 p-1 transition-colors cursor-pointer",
                                                                                            title: "View Full Q&A",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                                className: "w-3.5 h-3.5"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                                lineNumber: 1248,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                            lineNumber: 1243,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>handleStartEditCache(c),
                                                                                            className: "text-slate-400 hover:text-blue-600 p-1 transition-colors cursor-pointer",
                                                                                            title: "Edit Q&A",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                                                className: "w-3.5 h-3.5"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                                lineNumber: 1255,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                            lineNumber: 1250,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>handleDeleteCache(c.id),
                                                                                            className: "text-slate-400 hover:text-red-600 p-1 transition-colors cursor-pointer",
                                                                                            title: "Delete Entry",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                className: "w-3.5 h-3.5"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                                lineNumber: 1262,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                            lineNumber: 1257,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                                    lineNumber: 1242,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1240,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-slate-700 text-[11px] font-medium whitespace-pre-wrap line-clamp-3",
                                                                            children: c.answer
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1266,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, c.id, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1236,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1003,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 966,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 897,
                    columnNumber: 11
                }, this),
                activeTab === "workspace" && topMode === "custom_creator" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 space-y-6 shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-black text-slate-900 tracking-tight flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-5 h-5 text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 19
                                                }, this),
                                                "Custom Agent Creation Workspace"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1285,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 font-medium mt-0.5",
                                            children: "Design specialized AI agents with tailored archetypes, scoped knowledge libraries, and system prompts."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1289,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1284,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleCreateCustomAgent,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block",
                                                    children: "01 — Agent Archetype"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1297,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                                    children: archetypes.map((arch)=>{
                                                        const isSel = selectedArchetype === arch.id;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: ()=>setSelectedArchetype(arch.id),
                                                            className: `p-4 rounded-2xl cursor-pointer transition-all border text-center flex flex-col items-center justify-center gap-1.5 ${isSel ? "bg-indigo-50 border-indigo-600 shadow-xs ring-2 ring-indigo-500/20" : "bg-slate-50/50 border-slate-200 hover:border-indigo-300"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl",
                                                                    children: arch.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1313,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-[11px] text-slate-800 tracking-tight",
                                                                    children: arch.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1314,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-400 font-medium",
                                                                    children: arch.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1317,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, arch.id, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1304,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1300,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-700 block mb-1.5",
                                                            children: "Agent Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1325,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            placeholder: "e.g. 'Sales Objection Pro' or 'HR Copilot'",
                                                            value: customAgentName,
                                                            onChange: (e)=>setCustomAgentName(e.target.value),
                                                            className: "rounded-2xl border-slate-200 text-xs h-11 font-semibold",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1326,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1324,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block",
                                                    children: "02 — RAG Data Portal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1338,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>customFileInputRef.current?.click(),
                                                    className: "p-6 border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-2xl text-center cursor-pointer bg-slate-50/30 flex flex-col items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "w-5 h-5 text-indigo-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1345,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-slate-800",
                                                            children: "Drop PDF for this agent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1346,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400",
                                                            children: "Click or drag & drop — multiple PDFs supported"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1347,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ref: customFileInputRef,
                                                            type: "file",
                                                            multiple: true,
                                                            accept: ".pdf,.docx,.doc,.txt,.csv,.md",
                                                            onChange: (e)=>setCustomAgentFiles(Array.from(e.target.files || [])),
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1341,
                                                    columnNumber: 19
                                                }, this),
                                                customAgentFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-emerald-600 font-bold",
                                                    children: [
                                                        customAgentFiles.length,
                                                        " file(s) selected for initial indexing"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1358,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-slate-700 block",
                                                    children: "Agent System Instructions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1366,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 3,
                                                    placeholder: "Provide custom behavioral instructions for this agent...",
                                                    value: customAgentPrompt,
                                                    onChange: (e)=>setCustomAgentPrompt(e.target.value),
                                                    className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1365,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: creatingAgent || !customAgentName.trim(),
                                            className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl h-11 font-bold text-xs gap-2 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1381,
                                                    columnNumber: 19
                                                }, this),
                                                creatingAgent ? "Deploying & Indexing..." : "Deploy / Save Agent"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1294,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1283,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-slate-500 uppercase tracking-wider block",
                                    children: [
                                        "Custom Agents Fleet (",
                                        customAgentsFleet.length,
                                        " agents)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1389,
                                    columnNumber: 15
                                }, this),
                                customAgentsFleet.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 text-center bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 text-xs font-medium space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "w-6 h-6 text-slate-300 mx-auto mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "No custom agents deployed yet."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1396,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1394,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 flex-1 overflow-y-auto pr-1",
                                    children: customAgentsFleet.map((ag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl",
                                                                    children: ag.archetype_icon || "🤖"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1407,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-extrabold text-slate-900 block",
                                                                            children: ag.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1409,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                            children: [
                                                                                "Key: ",
                                                                                ag.agent_key,
                                                                                " • ",
                                                                                ag.pdfs_count,
                                                                                " PDFs"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                            lineNumber: 1410,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1408,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1406,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteCustomAgent(ag.agent_key, ag.name),
                                                            className: "text-slate-400 hover:text-red-600 p-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 1420,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1416,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1405,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-1 border-t border-slate-200/60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${ag.is_active ? "bg-emerald-50 text-emerald-700" : "bg-slate-200 text-slate-600"}`,
                                                            children: ag.is_active ? "Active" : "Inactive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1425,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleToggleAgent(ag.agent_key),
                                                            className: "text-[10px] font-bold text-indigo-600 hover:text-indigo-800",
                                                            children: ag.is_active ? "Deactivate" : "Activate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1432,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1424,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, ag.agent_key, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1401,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1399,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1388,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1281,
                    columnNumber: 11
                }, this),
                activeTab === "documents" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-slate-800",
                                    children: "Master Documents & Knowledge Base"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1451,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        documents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleDeleteAllDocuments,
                                            variant: "outline",
                                            size: "sm",
                                            className: "rounded-xl text-xs gap-1.5 border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1460,
                                                    columnNumber: 21
                                                }, this),
                                                "Delete All Documents"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1454,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setShowManualModal(true),
                                            variant: "outline",
                                            size: "sm",
                                            className: "rounded-xl text-xs gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3.5 h-3.5 text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1470,
                                                    columnNumber: 19
                                                }, this),
                                                "Add Manual"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setShowUploadModal(true),
                                            size: "sm",
                                            className: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1478,
                                                    columnNumber: 19
                                                }, this),
                                                "Upload"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1473,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1450,
                            columnNumber: 13
                        }, this),
                        documents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl p-8 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "w-10 h-10 text-indigo-600 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-slate-800",
                                    children: "No knowledge documents yet"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1487,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-xs max-w-sm mx-auto",
                                    children: "Upload PDF, DOCX, TXT, or CSV files to index knowledge."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1488,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1485,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3.5",
                                                    children: "Document"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1498,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1499,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Scope"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1500,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Chunks"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1501,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3.5 text-right",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1502,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1496,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1495,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-slate-100 text-slate-700",
                                        children: documents.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-slate-50/60 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 font-bold text-slate-900",
                                                        children: doc.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1508,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 bg-slate-100 text-slate-700 rounded-lg font-bold text-[10px]",
                                                            children: doc.file_type
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1510,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1509,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[10px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "w-3 h-3 text-emerald-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1516,
                                                                    columnNumber: 29
                                                                }, this),
                                                                doc.status
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1515,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4 text-slate-500 font-medium",
                                                        children: doc.agent_key ? `Agent #${doc.agent_key}` : "Global"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1520,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4 font-bold text-slate-900",
                                                        children: doc.chunk_count
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleViewDocument(doc.id),
                                                                    className: "p-1.5 text-slate-500 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors",
                                                                    title: "View Document Details",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                        lineNumber: 1531,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1526,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleReprocess(doc.id),
                                                                    className: "p-1.5 text-slate-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors",
                                                                    title: "Reprocess Document",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                        lineNumber: 1538,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1533,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteDoc(doc.id, doc.title),
                                                                    className: "p-1.5 text-slate-500 hover:text-red-600 rounded-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                        lineNumber: 1544,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1540,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1525,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1524,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, doc.id, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1507,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1505,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 1494,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1493,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1449,
                    columnNumber: 11
                }, this),
                activeTab === "chunks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1 max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1562,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Search chunk text...",
                                            value: chunkSearch,
                                            onChange: (e)=>{
                                                setChunkSearch(e.target.value);
                                                loadChunks(e.target.value);
                                            },
                                            className: "pl-9 rounded-xl border-slate-200 text-xs h-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1563,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        chunks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleDeleteAllChunks,
                                            size: "sm",
                                            variant: "outline",
                                            className: "h-10 rounded-xl text-xs gap-1.5 border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 font-bold cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1581,
                                                    columnNumber: 21
                                                }, this),
                                                "Delete All Chunks"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1575,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setShowAddQAModal(true),
                                            size: "sm",
                                            variant: "outline",
                                            className: "h-10 rounded-xl text-xs gap-1.5 border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1591,
                                                    columnNumber: 19
                                                }, this),
                                                "Add Q&A Pair"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1585,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-slate-500 whitespace-nowrap",
                                            children: [
                                                "Showing ",
                                                chunks.length,
                                                " chunks"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1594,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1573,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1560,
                            columnNumber: 13
                        }, this),
                        chunks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 bg-white border border-slate-200 rounded-2xl text-slate-400 text-sm font-medium",
                            children: "No chunks found matching query."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1599,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: chunks.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-4 border-slate-200/80 rounded-2xl space-y-2.5 bg-white shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-slate-100 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-xs text-indigo-600",
                                                    children: [
                                                        "Chunk #",
                                                        c.chunk_index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1607,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full",
                                                            children: "3072-dim Gemini Vector"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1609,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-medium text-slate-400",
                                                            children: [
                                                                c.token_count,
                                                                " words"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1612,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1608,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1606,
                                            columnNumber: 21
                                        }, this),
                                        editingChunkId === c.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "w-full text-xs text-slate-700 font-medium leading-relaxed bg-white p-3 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-y min-h-[120px]",
                                                    value: editingChunkText,
                                                    onChange: (e)=>setEditingChunkText(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1617,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setEditingChunkId(null),
                                                            className: "text-[10px] font-bold text-slate-500 hover:text-slate-700 px-2 py-1",
                                                            disabled: actionLoading,
                                                            children: "CANCEL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1623,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleSaveChunk(c.id),
                                                            className: "text-[10px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg flex items-center gap-1",
                                                            disabled: actionLoading,
                                                            children: [
                                                                actionLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "w-3 h-3 animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1635,
                                                                    columnNumber: 46
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1635,
                                                                    columnNumber: 93
                                                                }, this),
                                                                "SAVE"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1630,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1622,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1616,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-700 font-medium leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100 line-clamp-5",
                                                    children: c.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1642,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-end gap-2 pt-1 border-t border-slate-100 mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleEditChunk(c),
                                                            className: "text-slate-400 hover:text-indigo-600 p-1 rounded-md hover:bg-indigo-50 transition-colors",
                                                            title: "Edit Chunk",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 1651,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1646,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteChunk(c.id),
                                                            className: "text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50 transition-colors",
                                                            title: "Delete Chunk",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 1658,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1653,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1645,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1641,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1605,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1603,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1559,
                    columnNumber: 11
                }, this),
                activeTab === "config" && config && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSaveConfig,
                    className: "bg-white border border-slate-200 rounded-2xl p-6 space-y-6 max-w-3xl shadow-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base font-bold text-slate-900",
                            children: "Chatbot & RAG Retrieval Settings"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1673,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-slate-700 block mb-1.5",
                                            children: "Gemini LLM Model"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: config.model_name,
                                            onChange: (e)=>setConfig({
                                                    ...config,
                                                    model_name: e.target.value
                                                }),
                                            className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "gemini-3.6-flash",
                                                    children: "gemini-3.6-flash (Fast, Recommended)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1682,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "gemini-pro-latest",
                                                    children: "gemini-pro-latest (High Reasoning)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1683,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "gemini-flash-lite-latest",
                                                    children: "gemini-flash-lite-latest (Ultra-lightweight)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1684,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1677,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1675,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-700",
                                                            children: "Temperature"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1691,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-indigo-600",
                                                            children: config.temperature
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1692,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1690,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0.0",
                                                    max: "1.0",
                                                    step: "0.05",
                                                    value: config.temperature,
                                                    onChange: (e)=>setConfig({
                                                            ...config,
                                                            temperature: parseFloat(e.target.value)
                                                        }),
                                                    className: "w-full accent-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1694,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1689,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-bold text-slate-700",
                                                            children: "Top-K Chunks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1706,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-indigo-600",
                                                            children: config.top_k
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1707,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1705,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "1",
                                                    max: "10",
                                                    step: "1",
                                                    value: config.top_k,
                                                    onChange: (e)=>setConfig({
                                                            ...config,
                                                            top_k: parseInt(e.target.value)
                                                        }),
                                                    className: "w-full accent-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1709,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1704,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-700",
                                                        children: "Min Similarity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1721,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-indigo-600",
                                                        children: config.similarity_threshold
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1722,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0.0",
                                                        max: "1.0",
                                                        step: "0.05",
                                                        value: config.similarity_threshold,
                                                        onChange: (e)=>setConfig({
                                                                ...config,
                                                                similarity_threshold: parseFloat(e.target.value)
                                                            }),
                                                        className: "w-full accent-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1723,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1720,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1719,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1688,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-slate-700 block mb-1.5",
                                            children: "System Prompt & Grounding Rules"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1737,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 5,
                                            value: config.system_prompt,
                                            onChange: (e)=>setConfig({
                                                    ...config,
                                                    system_prompt: e.target.value
                                                }),
                                            className: "w-full text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1738,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1736,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-slate-700 block mb-1.5",
                                            children: "Fallback Answer (Anti-Hallucination)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1747,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: config.fallback_message,
                                            onChange: (e)=>setConfig({
                                                    ...config,
                                                    fallback_message: e.target.value
                                                }),
                                            className: "rounded-xl border-slate-200 text-xs h-10"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1748,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1746,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1674,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            disabled: actionLoading,
                            className: "bg-indigo-600 text-white rounded-xl text-xs px-5 h-10 font-semibold gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1757,
                                    columnNumber: 15
                                }, this),
                                actionLoading ? "Saving..." : "Save Settings"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1756,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1672,
                    columnNumber: 11
                }, this),
                activeTab === "history" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base font-bold text-slate-800",
                                    children: "User & Agent Chat Conversations"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1767,
                                    columnNumber: 15
                                }, this),
                                chatHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleDeleteAllChatHistory,
                                    size: "sm",
                                    variant: "outline",
                                    className: "h-8 rounded-xl text-xs gap-1.5 border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 font-bold cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1775,
                                            columnNumber: 19
                                        }, this),
                                        "Clear All History"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1769,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1766,
                            columnNumber: 13
                        }, this),
                        chatHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 bg-white border border-slate-200 rounded-2xl text-slate-400 text-sm font-medium",
                            children: "No chat conversations logged yet."
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1781,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3.5",
                                                    children: "User"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1789,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Conversation"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1790,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1791,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-3.5",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1792,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3.5 text-right",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1793,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1788,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1787,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-slate-100 text-slate-700",
                                        children: chatHistory.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-slate-50/60 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-slate-900",
                                                                children: item.user_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 1800,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-slate-400 text-[11px]",
                                                                children: item.user_email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 1801,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1799,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4 font-semibold text-slate-800",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1803,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4 font-bold text-slate-800",
                                                        children: item.message_count
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1804,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-4 text-slate-400 text-[11px]",
                                                        children: new Date(item.updated_at).toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1805,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 text-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSelectedChat(item),
                                                                    className: "px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl text-xs",
                                                                    children: "Inspect Log"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1810,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteChatHistory(item.id),
                                                                    className: "p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                                                    title: "Delete Conversation",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                        lineNumber: 1821,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                    lineNumber: 1816,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1809,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1808,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1798,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1796,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 1786,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1785,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1765,
                    columnNumber: 11
                }, this),
                activeTab === "analytics" && analytics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 rounded-3xl bg-white border-slate-200/80 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-slate-400 uppercase",
                                    children: "Documents Indexed"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1838,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-black text-slate-900",
                                    children: [
                                        analytics.completed_documents,
                                        " / ",
                                        analytics.total_documents
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1839,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1837,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 rounded-3xl bg-white border-slate-200/80 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-slate-400 uppercase",
                                    children: "Vector Chunks"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1842,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-black text-purple-600",
                                    children: analytics.total_chunks
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1843,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1841,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 rounded-3xl bg-white border-slate-200/80 shadow-xs space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-bold text-slate-400 uppercase",
                                    children: "User Queries Answered"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1846,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-black text-emerald-600",
                                    children: analytics.total_user_queries
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1847,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1845,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1836,
                    columnNumber: 11
                }, this),
                activeTab === "sandbox" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-bold text-slate-900 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-5 h-5 text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1859,
                                                    columnNumber: 19
                                                }, this),
                                                "RAG Test Sandbox & Conversation Session"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1858,
                                            columnNumber: 17
                                        }, this),
                                        sandboxConversationId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: handleNewSandboxSession,
                                            className: "text-xs h-8 rounded-xl font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50",
                                            children: "+ New Session"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1863,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1857,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleRunSandbox,
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[11px] font-bold text-slate-700 block mb-1",
                                                    children: "Target Agent (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1876,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: sandboxAgentKey || "",
                                                    onChange: (e)=>setSandboxAgentKey(e.target.value ? parseInt(e.target.value) : undefined),
                                                    className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "All Knowledge (Global)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1882,
                                                            columnNumber: 21
                                                        }, this),
                                                        agents.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: a.agent_key,
                                                                children: [
                                                                    a.name,
                                                                    " (Key: ",
                                                                    a.agent_key,
                                                                    ")"
                                                                ]
                                                            }, a.agent_key, true, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 1884,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1877,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1875,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 4,
                                            placeholder: "Ask a question about the knowledge base...",
                                            value: sandboxQuery,
                                            onChange: (e)=>setSandboxQuery(e.target.value),
                                            className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1890,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: sandboxLoading || !sandboxQuery.trim(),
                                            className: "w-full bg-indigo-600 text-white rounded-xl text-xs h-10 font-bold gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1902,
                                                    columnNumber: 19
                                                }, this),
                                                sandboxLoading ? "Retrieving & Generating PDF..." : "Send Question & Update PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1897,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1874,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1856,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-bold text-slate-900 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-5 h-5 text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1912,
                                                    columnNumber: 19
                                                }, this),
                                                "CONVERSATION Q&A HISTORY"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1911,
                                            columnNumber: 17
                                        }, this),
                                        sandboxPdfUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: ()=>{
                                                const apiBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "";
                                                window.open(`${apiBase}${sandboxPdfUrl}`, "_blank");
                                            },
                                            className: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs gap-1.5 font-bold cursor-pointer shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1924,
                                                    columnNumber: 21
                                                }, this),
                                                "Open Conversation PDF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1916,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1910,
                                    columnNumber: 15
                                }, this),
                                sandboxQAHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 text-center bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 text-xs font-medium space-y-1 my-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-8 h-8 text-slate-300 mx-auto mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1932,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-slate-700",
                                            children: "No questions asked in this session yet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1933,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px]",
                                            children: "Ask a question to see real-time Q&A history and generated PDF."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1934,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1931,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 flex-1 overflow-y-auto max-h-[480px] pr-1",
                                    children: sandboxQAHistory.map((qa, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-indigo-700 flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Q",
                                                                idx + 1,
                                                                ": ",
                                                                qa.question
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1941,
                                                            columnNumber: 25
                                                        }, this),
                                                        qa.q_time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400 font-normal shrink-0 ml-2",
                                                            children: qa.q_time.substring(11, 16)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1943,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1940,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-slate-800 font-medium whitespace-pre-wrap pl-3 border-l-2 border-emerald-500 bg-white/70 p-2.5 rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-emerald-700 block mb-1",
                                                            children: [
                                                                "A",
                                                                idx + 1,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 1949,
                                                            columnNumber: 25
                                                        }, this),
                                                        qa.answer
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 1948,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1939,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 1937,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                            lineNumber: 1909,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1854,
                    columnNumber: 11
                }, this),
                showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-md space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900",
                                        children: "Upload Knowledge Document"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1965,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowUploadModal(false),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 1967,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1966,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 1964,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleUploadSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Document Title (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1973,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "e.g. Sales Playbook Q3",
                                                value: uploadTitle,
                                                onChange: (e)=>setUploadTitle(e.target.value),
                                                className: "rounded-xl border-slate-200 text-xs h-10"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1974,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1972,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Select File (PDF, DOCX, TXT, CSV, MD)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1983,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".pdf,.docx,.doc,.txt,.csv,.md",
                                                onChange: (e)=>setUploadFile(e.target.files?.[0] || null),
                                                className: "w-full text-xs file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 border border-slate-200 rounded-xl p-2 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1984,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1982,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: ()=>setShowUploadModal(false),
                                                className: "rounded-xl text-xs",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1993,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: !uploadFile || actionLoading,
                                                className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 1997,
                                                        columnNumber: 21
                                                    }, this),
                                                    actionLoading ? "Processing..." : "Upload & Index"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 1996,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 1992,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 1971,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 1963,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 1962,
                    columnNumber: 11
                }, this),
                showManualModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-lg space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900",
                                        children: "Add Manual Knowledge"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2011,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowManualModal(false),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2013,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2012,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2010,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleManualSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2019,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "e.g. Return Policy & Warranty Terms",
                                                value: manualTitle,
                                                onChange: (e)=>setManualTitle(e.target.value),
                                                className: "rounded-xl border-slate-200 text-xs h-10",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2020,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2018,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Knowledge Content"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2030,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 6,
                                                placeholder: "Enter factual documentation, FAQs, or procedures...",
                                                value: manualContent,
                                                onChange: (e)=>setManualContent(e.target.value),
                                                className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2031,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2029,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: ()=>setShowManualModal(false),
                                                className: "rounded-xl text-xs",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2042,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: !manualTitle.trim() || !manualContent.trim() || actionLoading,
                                                className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2046,
                                                        columnNumber: 21
                                                    }, this),
                                                    actionLoading ? "Indexing..." : "Save Knowledge"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2045,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2041,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2017,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2009,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2008,
                    columnNumber: 11
                }, this),
                showAddQAModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-lg space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900",
                                        children: "Add Q&A Chunk"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2060,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowAddQAModal(false),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2062,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2061,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2059,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSaveQA,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Question / Query"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2067,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: qaQuestion,
                                                onChange: (e)=>setQaQuestion(e.target.value),
                                                placeholder: "e.g. What is the refund policy?",
                                                required: true,
                                                className: "w-full text-xs font-medium border-slate-200 rounded-xl bg-slate-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2068,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2066,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Ideal AI Answer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2077,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: qaAnswer,
                                                onChange: (e)=>setQaAnswer(e.target.value),
                                                placeholder: "e.g. We offer a 30-day money-back guarantee...",
                                                required: true,
                                                rows: 5,
                                                className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2078,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2076,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 pt-2 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: ()=>setShowAddQAModal(false),
                                                className: "rounded-xl text-xs",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2088,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: !qaQuestion.trim() || !qaAnswer.trim() || actionLoading,
                                                className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2092,
                                                        columnNumber: 21
                                                    }, this),
                                                    actionLoading ? "Saving..." : "Save Q&A"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2091,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2087,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2065,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2058,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2057,
                    columnNumber: 11
                }, this),
                selectedDocDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-3xl max-h-[85vh] flex flex-col space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-slate-900",
                                                children: selectedDocDetails.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 font-medium",
                                                children: [
                                                    selectedDocDetails.chunks?.length || 0,
                                                    " chunks • Status: ",
                                                    selectedDocDetails.status
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2108,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2106,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedDocDetails(null),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2113,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto space-y-3 pr-1",
                                children: [
                                    selectedDocDetails.chunks?.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-indigo-600 uppercase",
                                                            children: [
                                                                "Chunk #",
                                                                c.chunk_index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 2121,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400 font-medium",
                                                            children: [
                                                                c.token_count,
                                                                " words"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                            lineNumber: 2124,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 2120,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-700 leading-relaxed font-medium",
                                                    children: c.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 2126,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2119,
                                            columnNumber: 19
                                        }, this)),
                                    (!selectedDocDetails.chunks || selectedDocDetails.chunks.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-slate-400 text-xs font-medium",
                                        children: "No chunks found for this document."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2132,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center pt-2 border-t border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>handleDownloadDoc(selectedDocDetails.id),
                                        className: "rounded-xl text-xs gap-1.5 border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2144,
                                                columnNumber: 19
                                            }, this),
                                            "Download File"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2139,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>{
                                                    const doc = selectedDocDetails;
                                                    setSelectedDocDetails(null);
                                                    handleStartEditDocContent(doc);
                                                },
                                                className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2156,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Edit Content"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                onClick: ()=>setSelectedDocDetails(null),
                                                className: "rounded-xl text-xs",
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2159,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2138,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2104,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2103,
                    columnNumber: 11
                }, this),
                selectedChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-2xl max-h-[85vh] flex flex-col space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-slate-900",
                                                children: selectedChat.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 font-medium",
                                                children: [
                                                    "User: ",
                                                    selectedChat.user_name,
                                                    " (",
                                                    selectedChat.user_role,
                                                    ") • ",
                                                    selectedChat.message_count,
                                                    " messages"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2175,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2173,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedChat(null),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2180,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2179,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2172,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto space-y-3 pr-1",
                                children: selectedChat.messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3.5 rounded-2xl text-xs space-y-1 ${m.sender === "user" ? "bg-indigo-50/70 border border-indigo-100 text-indigo-950 ml-6" : "bg-slate-50 border border-slate-200 text-slate-800 mr-6"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center font-bold text-[10px] text-slate-400 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: m.sender === "user" ? "User" : "CallZenza AI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2195,
                                                        columnNumber: 23
                                                    }, this),
                                                    m.latency_ms ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            m.latency_ms,
                                                            " ms"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2196,
                                                        columnNumber: 39
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2194,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MarkdownText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownText"], {
                                                    content: m.content,
                                                    isUser: m.sender === "user"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                    lineNumber: 2199,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2198,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, m.id, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2186,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2184,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end pt-2 border-t border-slate-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setSelectedChat(null),
                                    className: "rounded-xl text-xs",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                    lineNumber: 2206,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2205,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2171,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2170,
                    columnNumber: 11
                }, this),
                viewingCacheItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-xl space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                                                className: "w-5 h-5 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2220,
                                                columnNumber: 19
                                            }, this),
                                            "Learned Q&A Details"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2219,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewingCacheItem(null),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2224,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2223,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2218,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1",
                                                children: "Question"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl text-xs font-semibold text-slate-900",
                                                children: viewingCacheItem.question
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2233,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2229,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1",
                                                children: "Learned Gemini Answer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2239,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 whitespace-pre-wrap max-h-60 overflow-y-auto",
                                                children: viewingCacheItem.answer
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2242,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[11px] text-slate-400 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Source: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-600",
                                                        children: viewingCacheItem.source || "auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2248,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2248,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Created: ",
                                                    new Date(viewingCacheItem.created_at).toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2249,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2247,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2228,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2 pt-2 border-t border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>{
                                            const c = viewingCacheItem;
                                            setViewingCacheItem(null);
                                            handleStartEditCache(c);
                                        },
                                        className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2262,
                                                columnNumber: 19
                                            }, this),
                                            "Edit This Entry"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2254,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>setViewingCacheItem(null),
                                        className: "rounded-xl text-xs",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2265,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2253,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2217,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2216,
                    columnNumber: 11
                }, this),
                editingCacheItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-lg space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900",
                                        children: "Edit Learned Q&A"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2278,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditingCacheItem(null),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2280,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2279,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2277,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSaveEditCache,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Question"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2286,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: editCacheQuestion,
                                                onChange: (e)=>setEditCacheQuestion(e.target.value),
                                                required: true,
                                                className: "w-full text-xs font-medium border-slate-200 rounded-xl bg-slate-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2287,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2285,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Answer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2295,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: editCacheAnswer,
                                                onChange: (e)=>setEditCacheAnswer(e.target.value),
                                                required: true,
                                                rows: 6,
                                                className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2296,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2294,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 pt-2 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: ()=>setEditingCacheItem(null),
                                                className: "rounded-xl text-xs",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2305,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: actionLoading,
                                                className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold",
                                                children: actionLoading ? "Saving..." : "Save Changes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2308,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2304,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2284,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2276,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2275,
                    columnNumber: 11
                }, this),
                showAddCacheModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-lg space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900",
                                        children: "Add Learned Q&A Entry"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2322,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowAddCacheModal(false),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2324,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2323,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2321,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSaveAddCache,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "User Question"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2330,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "e.g. Who is the CEO of CallZenza?",
                                                value: addCacheQuestion,
                                                onChange: (e)=>setAddCacheQuestion(e.target.value),
                                                required: true,
                                                className: "w-full text-xs font-medium border-slate-200 rounded-xl bg-slate-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2331,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2329,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Target AI Answer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2340,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: "e.g. The CEO of CallZenza is Mr. Murugan.",
                                                value: addCacheAnswer,
                                                onChange: (e)=>setAddCacheAnswer(e.target.value),
                                                required: true,
                                                rows: 5,
                                                className: "w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2341,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2339,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 pt-2 border-t border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: ()=>setShowAddCacheModal(false),
                                                className: "rounded-xl text-xs",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2351,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: !addCacheQuestion.trim() || !addCacheAnswer.trim() || actionLoading,
                                                className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2355,
                                                        columnNumber: 21
                                                    }, this),
                                                    actionLoading ? "Saving..." : "Add to Learned Cache"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2354,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2350,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2328,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2320,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2319,
                    columnNumber: 11
                }, this),
                editingDocContentItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-3xl p-6 w-full max-w-2xl max-h-[90vh] flex flex-col space-y-4 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-slate-100 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-5 h-5 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2372,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-bold text-slate-900",
                                                        children: "Edit Document Content & Vector Memory"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2374,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400 font-medium",
                                                        children: "Modifying this text updates the document and re-embeds all vector chunks for Gemini RAG."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2375,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2373,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2371,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditingDocContentItem(null),
                                        className: "text-slate-400 hover:text-slate-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                            lineNumber: 2381,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2380,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2370,
                                columnNumber: 15
                            }, this),
                            loadingDocContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-12 text-center text-slate-400 text-xs font-medium space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-6 h-6 animate-spin text-indigo-600 mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2387,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Loading document content..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2388,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2386,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSaveEditDocContent,
                                className: "flex-1 flex flex-col space-y-4 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 block mb-1",
                                                children: "Document Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2393,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: editDocFullTitle,
                                                onChange: (e)=>setEditDocFullTitle(e.target.value),
                                                required: true,
                                                className: "w-full text-xs font-medium border-slate-200 rounded-xl bg-slate-50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2394,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2392,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex flex-col min-h-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-700 block",
                                                        children: "Full Document Text Content"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2404,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleDownloadDoc(editingDocContentItem.id),
                                                        className: "text-[11px] text-emerald-600 hover:underline flex items-center gap-1 font-semibold cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                                lineNumber: 2410,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Download File"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2405,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2403,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: editDocFullText,
                                                onChange: (e)=>setEditDocFullText(e.target.value),
                                                required: true,
                                                rows: 12,
                                                placeholder: "Enter or edit full text content...",
                                                className: "w-full flex-1 text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-mono leading-relaxed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2414,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2402,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-2 pt-2 border-t border-slate-100 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: ()=>setEditingDocContentItem(null),
                                                className: "rounded-xl text-xs",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2425,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: !editDocFullText.trim() || actionLoading,
                                                className: "bg-indigo-600 text-white rounded-xl text-xs font-semibold gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                        lineNumber: 2438,
                                                        columnNumber: 23
                                                    }, this),
                                                    actionLoading ? "Re-Indexing Vectors..." : "Save Content & Re-Embed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                                lineNumber: 2433,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                        lineNumber: 2424,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                                lineNumber: 2391,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                        lineNumber: 2369,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/ai-chatbot/page.tsx",
                    lineNumber: 2368,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/ai-chatbot/page.tsx",
            lineNumber: 798,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/ai-chatbot/page.tsx",
        lineNumber: 797,
        columnNumber: 5
    }, this);
}
_s(AdminAIChatbotPage, "ktt4HudqVfUZafzewR4K1wLr8wo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = AdminAIChatbotPage;
var _c;
__turbopack_context__.k.register(_c, "AdminAIChatbotPage");
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

//# sourceMappingURL=_150gv_n._.js.map