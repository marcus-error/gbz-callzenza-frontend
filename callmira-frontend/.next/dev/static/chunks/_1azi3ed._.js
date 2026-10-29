(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$analytics$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/analytics.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/campaign.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/admin.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$call$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/call.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/useWebSocketSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/percent.js [app-client] (ecmascript) <export default as Percent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-forwarded.js [app-client] (ecmascript) <export default as PhoneForwarded>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
;
// --- ANIMATED BACKGROUND COMPONENTS ---
const AnimatedDashboardBackground = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: 360,
                    x: [
                        0,
                        50,
                        0
                    ],
                    y: [
                        0,
                        -30,
                        0
                    ]
                },
                transition: {
                    duration: 120,
                    repeat: Infinity,
                    ease: "linear"
                },
                className: "absolute -top-40 -left-20 opacity-5 text-indigo-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                    size: 700,
                    strokeWidth: 0.5
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: -360,
                    x: [
                        0,
                        -80,
                        0
                    ],
                    y: [
                        0,
                        50,
                        0
                    ]
                },
                transition: {
                    duration: 160,
                    repeat: Infinity,
                    ease: "linear"
                },
                className: "absolute top-20 -right-40 opacity-5 text-purple-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"], {
                    size: 800,
                    strokeWidth: 0.5
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: 360,
                    x: [
                        0,
                        60,
                        0
                    ],
                    y: [
                        0,
                        -80,
                        0
                    ]
                },
                transition: {
                    duration: 200,
                    repeat: Infinity,
                    ease: "linear"
                },
                className: "absolute -bottom-60 left-[20%] opacity-[0.03] text-emerald-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                    size: 1000,
                    strokeWidth: 0.5
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ],
                    opacity: [
                        0.03,
                        0.08,
                        0.03
                    ]
                },
                transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                    size: 500,
                    strokeWidth: 0.5
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 w-full h-[2px] bg-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.5)]",
                animate: {
                    y: [
                        0,
                        ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable",
                        0
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AnimatedDashboardBackground;
// --- ANIMATED UI COMPONENTS ---
const Speedometer = ({ value, max, label })=>{
    const percentage = Math.min(value / max, 1);
    const angle = -135 + percentage * 270; // From -135deg to +135deg
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-48 flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-40 h-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-full h-full drop-shadow-lg",
                        viewBox: "0 0 100 100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "speedGrad3",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#10b981"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#3b82f6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#8b5cf6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                        id: "glow3",
                                        x: "-20%",
                                        y: "-20%",
                                        width: "140%",
                                        height: "140%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                stdDeviation: "2",
                                                result: "blur"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                                in: "SourceGraphic",
                                                in2: "blur",
                                                operator: "over"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 20 80 A 45 45 0 1 1 80 80",
                                fill: "none",
                                stroke: "#e2e8f0",
                                strokeWidth: "6",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 20 80 A 45 45 0 1 1 80 80",
                                fill: "none",
                                stroke: "url(#speedGrad3)",
                                strokeWidth: "6",
                                strokeLinecap: "round",
                                strokeDasharray: "200",
                                strokeDashoffset: 200 - 200 * percentage,
                                className: "transition-all duration-1000 ease-out",
                                filter: "url(#glow3)"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                ...Array(11)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "50",
                                    y1: "14",
                                    x2: "50",
                                    y2: "18",
                                    stroke: "#cbd5e1",
                                    strokeWidth: "2",
                                    transform: `rotate(${-135 + i * 27} 50 50)`
                                }, i, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        initial: {
                            rotate: -135
                        },
                        animate: {
                            rotate: angle
                        },
                        transition: {
                            type: "spring",
                            stiffness: 40,
                            damping: 15
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1 h-[65px] bg-slate-800 rounded-full origin-bottom translate-y-[10px] shadow-sm relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3px] border-r-[3px] border-b-[8px] border-l-transparent border-r-transparent border-b-indigo-500 -mt-1"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800 rounded-full border-4 border-white shadow-md flex items-center justify-center mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-1.5 bg-indigo-500 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 flex flex-col items-center mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-black text-slate-800 tracking-tight leading-none",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Speedometer;
const LivePulseGraph = ({ isActive = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[120px] overflow-hidden bg-indigo-950/40 rounded-xl border border-indigo-500/20 shadow-inner flex items-center mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px]"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                className: "absolute w-[200%] h-full text-indigo-400",
                preserveAspectRatio: "none",
                viewBox: "0 0 1000 100",
                initial: {
                    x: "0%"
                },
                animate: {
                    x: "-50%"
                },
                transition: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0,50 L50,50 L60,20 L70,80 L80,50 L150,50 L160,10 L170,90 L180,50 L250,50 L260,30 L270,70 L280,50 L350,50 L360,20 L370,80 L380,50 L450,50 L460,10 L470,90 L480,50 L500,50 L550,50 L560,20 L570,80 L580,50 L650,50 L660,10 L670,90 L680,50 L750,50 L760,30 L770,70 L780,50 L850,50 L860,20 L870,80 L880,50 L950,50 L960,10 L970,90 L980,50 L1000,50",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                    style: {
                        filter: "drop-shadow(0 0 8px rgba(99,102,241,0.8))"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-full h-full text-slate-600/30",
                        preserveAspectRatio: "none",
                        viewBox: "0 0 1000 100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "50",
                            x2: "1000",
                            y2: "50",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeDasharray: "6 6"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800",
                        children: "No Active Campaign"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-transparent to-indigo-900/50 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = LivePulseGraph;
const ActiveDialerRing = ({ isActive = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center w-12 h-12",
        children: [
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-full h-full border-2 border-indigo-400 rounded-full",
                        animate: {
                            scale: [
                                1,
                                2.2
                            ],
                            opacity: [
                                0.8,
                                0
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-full h-full border-2 border-indigo-300 rounded-full",
                        animate: {
                            scale: [
                                1,
                                2.8
                            ],
                            opacity: [
                                0.5,
                                0
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeOut",
                            delay: 0.3
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${isActive ? 'bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-indigo-500/50' : 'bg-slate-700 shadow-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                    className: `w-4 h-4 text-white ${isActive ? 'animate-pulse' : 'opacity-50'}`
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = ActiveDialerRing;
function DashboardPage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dashboardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animation values
    const [speedVal, setSpeedVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allCampaigns, setAllCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].persist.onFinishHydration({
                "DashboardPage.useEffect.unsub": ()=>setHydrated(true)
            }["DashboardPage.useEffect.unsub"]);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].persist.hasHydrated()) {
                setHydrated(true);
            }
            return ({
                "DashboardPage.useEffect": ()=>unsub()
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], []);
    const isAdmin = hydrated && user && (user.role === "ADMIN" || user.role === "SUPER_ADMIN" || user.role === "BUSINESS_OWNER");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recentCalls, setRecentCalls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Admin Dashboard State
    const [adminUsers, setAdminUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminCampaigns, setAdminCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminLeads, setAdminLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminCalls, setAdminCalls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adminLoading, setAdminLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adminError, setAdminError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Determine active running campaigns across all agents / system
    const targetCampaignList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[targetCampaignList]": ()=>{
            return isAdmin ? adminCampaigns.length > 0 ? adminCampaigns : allCampaigns : allCampaigns.length > 0 ? allCampaigns : adminCampaigns;
        }
    }["DashboardPage.useMemo[targetCampaignList]"], [
        isAdmin,
        adminCampaigns,
        allCampaigns
    ]);
    const activeRunningCampaigns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[activeRunningCampaigns]": ()=>{
            return targetCampaignList.filter({
                "DashboardPage.useMemo[activeRunningCampaigns]": (c)=>(c.status || "").toUpperCase() === "RUNNING"
            }["DashboardPage.useMemo[activeRunningCampaigns]"]);
        }
    }["DashboardPage.useMemo[activeRunningCampaigns]"], [
        targetCampaignList
    ]);
    const hasActiveCampaign = activeRunningCampaigns.length > 0;
    const ratioSum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[ratioSum]": ()=>{
            return activeRunningCampaigns.reduce({
                "DashboardPage.useMemo[ratioSum]": (sum, c)=>sum + (c.auto_dial_ratio || 1)
            }["DashboardPage.useMemo[ratioSum]"], 0);
        }
    }["DashboardPage.useMemo[ratioSum]"], [
        activeRunningCampaigns
    ]);
    const liveActiveCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[liveActiveCount]": ()=>{
            const activeCallsList = isAdmin ? adminCalls : recentCalls;
            return activeCallsList.filter({
                "DashboardPage.useMemo[liveActiveCount]": (c)=>[
                        "DIALING",
                        "RINGING",
                        "CONNECTED",
                        "IN_PROGRESS",
                        "HUMAN_HANDLING",
                        "AI_HANDLING"
                    ].includes((c.status || "").toUpperCase())
            }["DashboardPage.useMemo[liveActiveCount]"]).length;
        }
    }["DashboardPage.useMemo[liveActiveCount]"], [
        isAdmin,
        adminCalls,
        recentCalls
    ]);
    const baseIntensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[baseIntensity]": ()=>{
            return Math.max(30, ratioSum * 50 + liveActiveCount * 25);
        }
    }["DashboardPage.useMemo[baseIntensity]"], [
        ratioSum,
        liveActiveCount
    ]);
    // Calculate & Update Dial Intensity Speedometer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!hydrated) return;
            if (!hasActiveCampaign) {
                setSpeedVal(0);
                return;
            }
            const updateSpeed = {
                "DashboardPage.useEffect.updateSpeed": ()=>{
                    const microVariation = Math.floor(Math.random() * 20) - 10;
                    setSpeedVal(Math.min(500, Math.max(10, baseIntensity + microVariation)));
                }
            }["DashboardPage.useEffect.updateSpeed"];
            updateSpeed();
            const interval = setInterval(updateSpeed, 2000);
            return ({
                "DashboardPage.useEffect": ()=>clearInterval(interval)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        hydrated,
        hasActiveCampaign,
        baseIntensity
    ]);
    // Fullscreen listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const handleFullscreenChange = {
                "DashboardPage.useEffect.handleFullscreenChange": ()=>{
                    setIsFullscreen(!!document.fullscreenElement);
                }
            }["DashboardPage.useEffect.handleFullscreenChange"];
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            return ({
                "DashboardPage.useEffect": ()=>document.removeEventListener('fullscreenchange', handleFullscreenChange)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], []);
    const toggleFullscreen = ()=>{
        if (!document.fullscreenElement) {
            dashboardRef.current?.requestFullscreen().catch((err)=>{
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };
    const fetchData = async (showLoader = true)=>{
        if (!hydrated || !user) return;
        if (showLoader) {
            if (isAdmin) setAdminLoading(true);
            else setLoading(true);
        }
        try {
            if (isAdmin) {
                const [usersRes, campaignsRes, leadsRes, callsRes, fullCampsRes] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getUsers(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getCampaigns(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].getLeads(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$call$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callService"].list().catch(()=>[]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].list().catch(()=>[])
                ]);
                setAdminUsers(usersRes);
                setAdminCampaigns(campaignsRes);
                setAdminLeads(leadsRes);
                setAdminCalls(callsRes);
                setAllCampaigns(fullCampsRes);
            } else {
                const [dashboardRes, callsRes, fullCampsRes] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$analytics$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyticsService"].dashboard(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$call$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callService"].list().catch(()=>[]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].list().catch(()=>[])
                ]);
                setData(dashboardRes);
                setRecentCalls(callsRes.slice(0, 5));
                setAllCampaigns(fullCampsRes);
            }
        } catch (e) {
            if (isAdmin) setAdminError(e.message || "Failed to load admin dashboard data");
            else setError(e.message);
        } finally{
            if (showLoader) {
                if (isAdmin) setAdminLoading(false);
                else setLoading(false);
            }
        }
    };
    // Initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!hydrated || !user) return;
            fetchData(true);
        }
    }["DashboardPage.useEffect"], [
        hydrated,
        user,
        isAdmin
    ]);
    // Active Campaign Live Polling - Runs ONLY when hasActiveCampaign is true
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!hydrated || !user || !hasActiveCampaign) return;
            const intervalId = setInterval({
                "DashboardPage.useEffect.intervalId": ()=>{
                    fetchData(false);
                }
            }["DashboardPage.useEffect.intervalId"], 5000);
            return ({
                "DashboardPage.useEffect": ()=>{
                    clearInterval(intervalId);
                }
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        hydrated,
        user,
        hasActiveCampaign
    ]);
    // Real-time WebSocket event listener for Campaign & Call events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!hydrated || !user || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useWebSocketSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebSocketHost"])();
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().token || "";
            const wsUrl = `${host}/api/ws/call-events?token=${encodeURIComponent(token)}`;
            let ws = null;
            try {
                ws = new WebSocket(wsUrl);
                ws.onerror = ({
                    "DashboardPage.useEffect": ()=>{}
                })["DashboardPage.useEffect"];
                ws.onmessage = ({
                    "DashboardPage.useEffect": (evt)=>{
                        try {
                            const msg = JSON.parse(evt.data);
                            if (msg.event === "campaign_status_changed" || msg.event === "call_status" || msg.type === "CALL_UPDATE") {
                                fetchData(false);
                            }
                        } catch (e) {}
                    }
                })["DashboardPage.useEffect"];
            } catch (err) {}
            return ({
                "DashboardPage.useEffect": ()=>{
                    if (ws) {
                        try {
                            ws.close();
                        } catch (e) {}
                    }
                }
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        hydrated,
        user
    ]);
    const formattedDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    if (isAdmin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dashboardRef,
                className: `flex flex-col animate-in fade-in duration-300 font-sans relative ${isFullscreen ? 'bg-slate-50 p-8 h-screen overflow-y-auto' : 'gap-8'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedDashboardBackground, {}, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "z-10 relative space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#241A47] via-[#4A3FC9] to-[#7C5CFF] p-[26px_28px] text-white mb-2 shadow-[0_8px_30px_rgba(124,92,255,0.3)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] -top-[160px] -right-[100px] pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)] bottom-[10px] left-[200px] pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-[14px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        whileHover: {
                                                            rotate: 90
                                                        },
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 200,
                                                            damping: 10
                                                        },
                                                        className: "w-[50px] h-[50px] shrink-0 rounded-[14px] bg-white/10 flex items-center justify-center border border-white/20 shadow-inner",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl sm:text-[26px] font-black tracking-tight text-white leading-none mb-1 font-['Space_Grotesk']",
                                                                children: "Admin Control Center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-white/70 font-black tracking-widest uppercase",
                                                                children: "Platform Operations & Logs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 self-start sm:self-center shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-white/90 text-[11px] font-black bg-white/10 border border-white/20 rounded-xl py-2.5 px-4 shadow-sm uppercase tracking-widest",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: formattedDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: toggleFullscreen,
                                                        className: "p-2.5 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors shadow-sm text-white group",
                                                        title: "Toggle Fullscreen",
                                                        children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                            className: "w-4 h-4 group-hover:scale-110 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 37
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                            className: "w-4 h-4 group-hover:scale-110 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 116
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this),
                            adminError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-rose-50/80 backdrop-blur-md border border-rose-200 text-rose-800 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-5 h-5 text-rose-600 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: adminError
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 450,
                                columnNumber: 15
                            }, this),
                            adminLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32 rounded-3xl border border-slate-100/50 bg-white/50 backdrop-blur-md p-6 animate-pulse"
                                    }, i, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 457,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/live-calls",
                                                className: "lg:col-span-2 group relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 shadow-2xl border border-indigo-700/50 text-white hover:scale-[1.02] transition-all duration-300 block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-0 top-0 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-[80px] animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute left-[-20%] bottom-[-20%] w-80 h-80 bg-purple-500/20 rounded-full filter blur-[80px] animate-pulse",
                                                        style: {
                                                            animationDelay: '1s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10 flex flex-col h-full justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 mb-3 bg-black/20 w-max px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                                        className: "w-4 h-4 text-amber-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 476,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                        className: "text-indigo-200 font-bold uppercase tracking-widest text-[10px]",
                                                                                        children: "Live Calls Monitor"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 477,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 475,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-4xl font-black text-white flex items-center gap-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveDialerRing, {
                                                                                        isActive: hasActiveCampaign
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 480,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Active Interactions"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 481,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 479,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-4 bg-white/10 rounded-2xl group-hover:bg-indigo-500 transition-colors border border-white/10 backdrop-blur-md shadow-lg",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                            className: "w-6 h-6 text-white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LivePulseGraph, {
                                                                isActive: hasActiveCampaign
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 468,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-xl border border-white/80 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-white/90 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-6 left-6 flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                className: `w-4 h-4 ${hasActiveCampaign ? 'text-indigo-500 animate-pulse' : 'text-slate-400'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-black text-indigo-700 uppercase tracking-widest flex items-center gap-1.5",
                                                                children: [
                                                                    "Dial Intensity ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `px-1.5 py-0.5 rounded text-[9px] font-extrabold ${hasActiveCampaign ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-slate-200 text-slate-600 border border-slate-300'}`,
                                                                        children: hasActiveCampaign ? 'ACTIVE' : 'INACTIVE'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 498,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 497,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8 transform group-hover:scale-105 transition-transform duration-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Speedometer, {
                                                            value: hasActiveCampaign ? speedVal : 0,
                                                            max: 500,
                                                            label: hasActiveCampaign ? "Calls / Min" : "Inactive (0)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
                                        children: [
                                            {
                                                label: "Registered Users",
                                                value: adminUsers.length,
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                                gradient: "from-blue-600 to-indigo-900",
                                                shadow: "shadow-blue-500/30"
                                            },
                                            {
                                                label: "Active Campaigns",
                                                value: activeRunningCampaigns.length,
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"],
                                                gradient: "from-emerald-500 to-teal-900",
                                                shadow: "shadow-emerald-500/30"
                                            },
                                            {
                                                label: "Uploaded Leads",
                                                value: adminLeads.length,
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                                gradient: "from-purple-600 to-fuchsia-900",
                                                shadow: "shadow-purple-500/30"
                                            }
                                        ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                whileHover: {
                                                    y: -8,
                                                    scale: 1.02
                                                },
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: i * 0.15,
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 20
                                                },
                                                className: `relative overflow-hidden bg-gradient-to-br ${stat.gradient} rounded-3xl shadow-2xl p-6 text-white border border-white/10 group`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -right-6 -bottom-6 opacity-10 group-hover:scale-125 transition-transform duration-700 ease-out",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                            className: "w-40 h-40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                        className: "absolute inset-x-0 bottom-0 w-full h-1/2 opacity-20",
                                                        preserveAspectRatio: "none",
                                                        viewBox: "0 0 100 20",
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 0.2
                                                        },
                                                        transition: {
                                                            delay: 0.5
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: `M0,20 Q20,${Math.random() * 15} 40,15 T100,${Math.random() * 15}`,
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 528,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10 flex justify-between items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1.5 h-1.5 rounded-full bg-white animate-ping"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 537,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] font-black text-white/70 uppercase tracking-widest",
                                                                                children: stat.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 538,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 536,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-5xl font-black text-white tracking-tighter drop-shadow-lg",
                                                                        children: stat.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 540,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner group-hover:bg-white/20 transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                                    className: "w-6 h-6 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 516,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 xl:grid-cols-2 gap-8 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-2xl p-6 rounded-3xl border border-indigo-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex flex-col gap-5 relative overflow-hidden group hover:border-indigo-500/40 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/30 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between pb-4 border-b border-indigo-500/20 relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 559,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-xl font-black text-white tracking-tight",
                                                                        children: "User Directory"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "relative flex h-2 w-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 565,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 566,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 564,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-indigo-300 font-black uppercase tracking-widest",
                                                                        children: "Live Top 10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 568,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-auto max-h-[350px] relative z-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-indigo-500/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent pr-2",
                                                        children: adminUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-8 flex flex-col items-center justify-center text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                    className: "w-8 h-8 text-indigo-400/40 mb-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-white",
                                                                    children: "No Users Found"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-indigo-300/50 mt-0.5",
                                                                    children: "No active users in the system."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full text-left border-collapse text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "sticky top-0 bg-slate-950/80 backdrop-blur-md z-20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-indigo-500/10 text-indigo-300/70 text-[10px] font-black uppercase tracking-widest",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "pb-3 pt-2",
                                                                                children: "Identity"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 585,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "pb-3 pt-2",
                                                                                children: "Role"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 586,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "pb-3 pt-2",
                                                                                children: "Status"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 587,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 584,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-indigo-500/10 text-white font-bold",
                                                                    children: adminUsers.slice(0, 10).map((u, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                                                            initial: {
                                                                                opacity: 0,
                                                                                x: -10
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                x: 0
                                                                            },
                                                                            transition: {
                                                                                delay: idx * 0.05
                                                                            },
                                                                            className: "hover:bg-white/5 transition-colors group/row",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs shadow-lg font-black text-white",
                                                                                                children: u.full_name ? u.full_name[0].toUpperCase() : u.email[0].toUpperCase()
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                                lineNumber: 598,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-white font-black",
                                                                                                        children: u.full_name || "—"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                                        lineNumber: 602,
                                                                                                        columnNumber: 39
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "text-indigo-200/50 text-[10px] font-medium",
                                                                                                        children: u.email
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                                        lineNumber: 603,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                                lineNumber: 601,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 597,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 596,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase border ${u.role.includes("ADMIN") ? "bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.2)]" : "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"}`,
                                                                                        children: u.role.replace("_", " ")
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 608,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 607,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${u.is_active ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]" : "bg-slate-800 text-slate-400 border-slate-700"}`,
                                                                                        children: [
                                                                                            u.is_active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                                lineNumber: 618,
                                                                                                columnNumber: 53
                                                                                            }, this),
                                                                                            u.is_active ? "Active" : "Inactive"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 615,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 614,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, u.id, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 592,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-2xl p-6 rounded-3xl border border-purple-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex flex-col gap-5 relative overflow-hidden group hover:border-purple-500/40 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-24 -left-24 w-48 h-48 bg-purple-600/30 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between pb-4 border-b border-purple-500/20 relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-2.5 bg-purple-500/20 text-purple-400 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                            className: "w-5 h-5 fill-purple-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 636,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-xl font-black text-white tracking-tight",
                                                                        children: "Global Campaigns"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 635,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "relative flex h-2 w-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 643,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "relative inline-flex rounded-full h-2 w-2 bg-amber-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 644,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 642,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-purple-300 font-black uppercase tracking-widest",
                                                                        children: "Active Top 10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 646,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 641,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-auto max-h-[350px] relative z-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-purple-500/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent pr-2",
                                                        children: adminCampaigns.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-8 flex flex-col items-center justify-center text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                    className: "w-8 h-8 text-purple-400/40 mb-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 655,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-white",
                                                                    children: "No Campaigns Found"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-purple-300/50 mt-0.5",
                                                                    children: "No active campaigns running."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 657,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full text-left border-collapse text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "sticky top-0 bg-slate-950/80 backdrop-blur-md z-20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-purple-500/10 text-purple-300/70 text-[10px] font-black uppercase tracking-widest",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "pb-3 pt-2",
                                                                                children: "Campaign"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 663,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "pb-3 pt-2",
                                                                                children: "Business"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "pb-3 pt-2",
                                                                                children: "Number"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 665,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "pb-3 pt-2",
                                                                                children: "Status"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 666,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 662,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-purple-500/10 text-white font-bold",
                                                                    children: adminCampaigns.slice(0, 10).map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                                                            initial: {
                                                                                opacity: 0,
                                                                                x: 10
                                                                            },
                                                                            animate: {
                                                                                opacity: 1,
                                                                                x: 0
                                                                            },
                                                                            transition: {
                                                                                delay: idx * 0.05
                                                                            },
                                                                            className: "hover:bg-white/5 transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "font-black text-white",
                                                                                        children: c.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 676,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 675,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4 text-purple-200/60 font-medium text-[11px]",
                                                                                    children: c.business_name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 678,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-indigo-300 font-mono text-[10px] bg-indigo-500/10 border border-indigo-500/20 rounded px-2 py-1 shadow-sm",
                                                                                        children: c.twilio_number
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 680,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 679,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-4",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${c.status === "RUNNING" ? "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]" : "bg-slate-800 text-slate-400 border-slate-700"}`,
                                                                                        children: [
                                                                                            c.status === "RUNNING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                                className: "w-2.5 h-2.5 fill-amber-400"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                                lineNumber: 688,
                                                                                                columnNumber: 64
                                                                                            }, this),
                                                                                            c.status
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 685,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 684,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, c.id, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 671,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 463,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 404,
            columnNumber: 7
        }, this);
    }
    // Business User Dashboard
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-8 animate-in fade-in duration-300 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedDashboardBackground, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 712,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-10 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#241A47] via-[#4A3FC9] to-[#7C5CFF] p-[26px_28px] text-white mb-2 shadow-[0_8px_30px_rgba(124,92,255,0.3)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] -top-[160px] -right-[100px] pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 718,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)] bottom-[10px] left-[200px] pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 719,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[14px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[50px] h-[50px] shrink-0 rounded-[14px] bg-white/10 flex items-center justify-center border border-white/20 shadow-inner",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-2xl sm:text-[26px] font-black tracking-tight text-white leading-none mb-1 font-['Space_Grotesk']",
                                                            children: [
                                                                "Good morning, ",
                                                                user?.full_name ? user.full_name.toLowerCase().includes("admin") ? "System Admin" : user.full_name.split(" ")[0] : user?.email?.split("@")[0] || "Admin"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-white/70 font-black tracking-widest uppercase",
                                                            children: "Here is what is happening with your workspace today."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 722,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-white/90 text-[11px] font-black bg-white/10 border border-white/20 rounded-xl py-2.5 px-4 shadow-sm uppercase tracking-widest shrink-0 self-start sm:self-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: formattedDate
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 721,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 mt-6 bg-rose-50/80 backdrop-blur-md border border-rose-200 text-rose-800 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-rose-600 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 744,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        error,
                                        " — Create or join a business workspace to enable call features."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 743,
                            columnNumber: 13
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-6",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-32 rounded-3xl border border-slate-100/50 bg-white/50 backdrop-blur-md p-6 animate-pulse"
                                }, i, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 752,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 750,
                            columnNumber: 13
                        }, this) : data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/live-calls",
                                            className: "lg:col-span-2 group relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 shadow-2xl border border-indigo-700/50 text-white hover:scale-[1.02] transition-all duration-300 block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 top-0 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-[80px] animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-[-20%] bottom-[-20%] w-80 h-80 bg-purple-500/20 rounded-full filter blur-[80px] animate-pulse",
                                                    style: {
                                                        animationDelay: '1s'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 flex flex-col h-full justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 mb-3 bg-black/20 w-max px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                                    className: "w-4 h-4 text-amber-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 768,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                    className: "text-indigo-200 font-bold uppercase tracking-widest text-[10px]",
                                                                                    children: "Live Calls Monitor"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 769,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 767,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-4xl font-black text-white flex items-center gap-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveDialerRing, {
                                                                                    isActive: hasActiveCampaign
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 772,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Active Human Voice Interactions"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 773,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 771,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 766,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 bg-white/10 rounded-2xl group-hover:bg-indigo-500 transition-colors border border-white/10 backdrop-blur-md shadow-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                        className: "w-6 h-6 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 777,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 776,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LivePulseGraph, {
                                                            isActive: hasActiveCampaign
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 764,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/70 backdrop-blur-2xl rounded-3xl p-6 shadow-xl border border-white/80 flex flex-col items-center justify-center relative overflow-hidden group hover:bg-white/90 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-6 left-6 flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: `w-4 h-4 ${hasActiveCampaign ? 'text-indigo-500 animate-pulse' : 'text-slate-400'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 786,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-black text-indigo-700 uppercase tracking-widest flex items-center gap-1.5",
                                                            children: [
                                                                "Dial Intensity ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-1.5 py-0.5 rounded text-[9px] font-extrabold ${hasActiveCampaign ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-slate-200 text-slate-600 border border-slate-300'}`,
                                                                    children: hasActiveCampaign ? 'ACTIVE' : 'INACTIVE'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 40
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 transform group-hover:scale-105 transition-transform duration-500",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Speedometer, {
                                                        value: hasActiveCampaign ? speedVal : 0,
                                                        max: 500,
                                                        label: hasActiveCampaign ? "Calls / Min" : "Inactive (0)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 784,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 759,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: [
                                        {
                                            label: "Total Leads",
                                            value: data.total_leads,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                            gradient: "from-blue-600 to-indigo-900"
                                        },
                                        {
                                            label: "Qualified Leads",
                                            value: data.qualified_leads,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
                                            gradient: "from-emerald-500 to-teal-900"
                                        },
                                        {
                                            label: "Qualification Rate",
                                            value: `${data.qualification_rate}%`,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Percent$3e$__["Percent"],
                                            gradient: "from-amber-500 to-orange-900"
                                        },
                                        {
                                            label: "Active Conversations",
                                            value: data.active_conversations,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                            gradient: "from-purple-600 to-fuchsia-900"
                                        },
                                        {
                                            label: "Human Handoffs",
                                            value: data.human_handoffs,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"],
                                            gradient: "from-indigo-600 to-slate-900"
                                        },
                                        {
                                            label: "Revenue",
                                            value: `$${data.revenue.toLocaleString()}`,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                            gradient: "from-emerald-400 to-green-900"
                                        }
                                    ].map((metric, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                y: -8,
                                                scale: 1.02
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: i * 0.1
                                            },
                                            className: `relative overflow-hidden bg-gradient-to-br ${metric.gradient} rounded-3xl shadow-xl p-6 text-white border border-white/10 group`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-700 ease-out",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(metric.icon, {
                                                        className: "w-32 h-32"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 813,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 flex justify-between items-start w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black text-white/70 uppercase tracking-widest",
                                                                    children: metric.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 818,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-4xl font-black text-white tracking-tighter drop-shadow-md",
                                                                    children: metric.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 819,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner group-hover:bg-white/20 transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(metric.icon, {
                                                                className: "w-5 h-5 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 822,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 806,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 797,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/80 shadow-xl flex flex-col gap-5 relative overflow-hidden group hover:bg-white/80 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pb-4 border-b border-slate-200/60 relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 shadow-inner",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$forwarded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneForwarded$3e$__["PhoneForwarded"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 833,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-xl font-black text-slate-800 tracking-tight",
                                                                    children: "Recent Call History"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 837,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1",
                                                                    children: "Live interaction logs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 838,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 832,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/reports",
                                                    className: "text-[10px] bg-slate-800 hover:bg-indigo-600 transition-colors px-4 py-2 rounded-full font-black text-white uppercase tracking-wider shadow-md",
                                                    children: "View All Reports"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 831,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto relative z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-left border-collapse text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-slate-200/60 text-slate-400 text-[10px] font-black uppercase tracking-wider",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 pt-2",
                                                                    children: "Contact Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 849,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 pt-2",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 850,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 pt-2",
                                                                    children: "Agent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 pt-2",
                                                                    children: "Duration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 pt-2",
                                                                    children: "Outcome"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 853,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 pt-2",
                                                                    children: "Date/Time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y divide-slate-100 text-slate-700 font-bold",
                                                        children: recentCalls.length > 0 ? recentCalls.map((call, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-white/50 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4 text-slate-900",
                                                                        children: call.lead_name || call.client_name || "Unknown"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 860,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4 text-slate-500 font-medium text-xs font-mono",
                                                                        children: call.client_phone || call.to_number || call.from_number
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 861,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4 text-slate-700 font-semibold",
                                                                        children: call.agent_name || "Unknown"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 862,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4 text-slate-600",
                                                                        children: call.duration_seconds ? `${Math.floor(call.duration_seconds / 60)}m ${call.duration_seconds % 60}s` : "0m 0s"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 863,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black shadow-sm border ${call.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : call.status === "FAILED" ? "bg-red-50 text-red-700 border-red-200" : call.status === "IN_PROGRESS" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-indigo-50 text-indigo-700 border-indigo-200"}`,
                                                                            children: call.status || "Unknown"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 867,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 866,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4 text-slate-400 text-xs font-medium",
                                                                        children: new Date(call.created_at).toLocaleString([], {
                                                                            hour: '2-digit',
                                                                            minute: '2-digit',
                                                                            month: 'short',
                                                                            day: 'numeric'
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 876,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, call.id || idx, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 859,
                                                                columnNumber: 27
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 5,
                                                                className: "py-8 text-center text-slate-400 font-medium",
                                                                children: "No recent calls found."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 882,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 881,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 846,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 845,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 830,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 757,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 714,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 711,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 710,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "zOL4gdq6riAI5VFMdzTzuPkImr4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c4 = DashboardPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "AnimatedDashboardBackground");
__turbopack_context__.k.register(_c1, "Speedometer");
__turbopack_context__.k.register(_c2, "LivePulseGraph");
__turbopack_context__.k.register(_c3, "ActiveDialerRing");
__turbopack_context__.k.register(_c4, "DashboardPage");
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
"[project]/lib/services/analytics.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyticsService",
    ()=>analyticsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const analyticsService = {
    dashboard: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/analytics/dashboard")
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
"[project]/lib/services/call.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callService",
    ()=>callService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const callService = {
    listForLead: (leadId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice/calls?lead_id=${leadId}`),
    list: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/voice/calls"),
    get: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice/calls/${id}`),
    trigger: (leadId, agentId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/voice/outbound", {
            method: "POST",
            body: JSON.stringify({
                lead_id: leadId,
                agent_id: agentId
            })
        }),
    updateQualification: (id, qualification_status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice/calls/${id}/qualification`, {
            method: "POST",
            body: JSON.stringify({
                qualification_status
            })
        }),
    addClientToCall: (id, client_name, client_phone)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/voice/calls/${id}/add-client`, {
            method: "POST",
            body: JSON.stringify({
                client_name,
                client_phone
            })
        }),
    getDispositions: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/dispositions");
            if (res && typeof res === "object") {
                if ("options" in res && Array.isArray(res.options) && res.options.length > 0) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.setItem("admin_dispositions", JSON.stringify(res.options));
                    }
                    return res.options;
                }
                if (Array.isArray(res)) {
                    const names = res.map((r)=>typeof r === "string" ? r : r.name || r.status_name);
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.setItem("admin_dispositions", JSON.stringify(names));
                    }
                    return names;
                }
            }
        } catch (err) {
            console.warn("Could not fetch dispositions from server, checking local cache:", err);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const stored = localStorage.getItem("admin_dispositions");
            if (stored) {
                try {
                    return JSON.parse(stored);
                } catch  {}
            }
        }
        return [
            "Sale / Success",
            "Callback Required",
            "Interested / Follow Up",
            "Customer Busy / Call Later",
            "Not Interested",
            "Voicemail / No Answer",
            "Invalid Number",
            "Do Not Call (DNC)"
        ];
    },
    adminGetDispositions: async (category, search)=>{
        let url = "/api/admin/dispositions";
        const params = new URLSearchParams();
        if (category && category !== "ALL") params.append("category", category);
        if (search) params.append("search", search);
        if (params.toString()) url += `?${params.toString()}`;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(url);
    },
    adminCreateDisposition: async (payload)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/admin/dispositions", {
            method: "POST",
            body: JSON.stringify(payload)
        });
    },
    adminUpdateDisposition: async (id, payload)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/admin/dispositions/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        });
    },
    adminDeleteDisposition: async (id)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/admin/dispositions/${id}`, {
            method: "DELETE"
        });
    },
    adminResetDefaults: async ()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/admin/dispositions/reset-defaults", {
            method: "POST"
        });
    },
    /**
   * Force-completes all stale/stuck active calls for the current user's business.
   * Resets agent user.status from ON_CALL → AVAILABLE.
   * Call on dashboard load after a crash/disconnect to avoid being permanently stuck.
   * @param staleAfterSeconds - Calls older than this many seconds are treated as stale (default: 300s)
   */ cleanupStale: async (staleAfterSeconds = 300)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/calls/cleanup-stale?stale_after_seconds=${staleAfterSeconds}`, {
            method: "POST"
        });
    },
    endCall: (callId, duration, outcome)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/calls/${callId}/end`, {
            method: "POST",
            body: JSON.stringify({
                duration_seconds: duration ?? 0,
                outcome: outcome ?? "COMPLETED"
            })
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

//# sourceMappingURL=_1azi3ed._.js.map