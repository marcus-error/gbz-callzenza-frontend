(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/campaign/AgentStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentStep",
    ()=>AgentStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
"use client";
;
;
;
;
function AgentStep({ callingAgentMode, setCallingAgentMode, agents, voiceAgents, agentId, setAgentId, voiceAgentId, setVoiceAgentId, autoDialRatio, setAutoDialRatio, agentGender, setAgentGender, previewingVoice, onCheckVoice }) {
    const selectedVoiceAgentIds = voiceAgentId ? voiceAgentId.split(",").filter(Boolean) : [];
    const handleToggleVoiceAgent = (id)=>{
        if (selectedVoiceAgentIds.includes(id)) {
            const updated = selectedVoiceAgentIds.filter((x)=>x !== id);
            setVoiceAgentId(updated.join(","));
        } else {
            const updated = [
                ...selectedVoiceAgentIds,
                id
            ];
            setVoiceAgentId(updated.join(","));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6 space-y-5 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-gray-900 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                        className: "h-5 w-5 text-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    " Step 3: Agent Selection & Calling Mode"
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/AgentStep.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5",
                        children: "Select Agent Type"
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: callingAgentMode,
                        onChange: (e)=>{
                            const mode = e.target.value;
                            setCallingAgentMode(mode);
                            setAgentId("");
                            setVoiceAgentId("");
                        },
                        className: "w-full h-11 px-3 rounded-xl border border-input bg-background text-sm font-semibold mb-3 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "AI",
                                children: "AI Agent"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "VOICE",
                                children: "Voice Agent"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/AgentStep.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            callingAgentMode === "AI" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5",
                                children: "SELECT AI AGENT"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: agentId,
                                onChange: (e)=>setAgentId(e.target.value),
                                className: "w-full h-11 px-3 rounded-xl border border-input bg-background text-sm font-semibold mb-1 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select AI Agent..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
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
                                            fileName: "[project]/components/campaign/AgentStep.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            agents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-rose-500 mt-1",
                                children: "No AI Agents available. Please create an AI Agent first."
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-gray-500 uppercase tracking-wider",
                                        children: "Assigned Transfer Voice Agents (Human Backup)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    voiceAgents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100",
                                        children: [
                                            selectedVoiceAgentIds.length,
                                            " Selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-input rounded-xl p-3 bg-background max-h-48 overflow-y-auto space-y-1.5 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2.5 text-sm cursor-pointer select-none pb-2 border-b border-gray-100 font-bold text-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: voiceAgents.length > 0 && selectedVoiceAgentIds.length === voiceAgents.length,
                                                onChange: (e)=>{
                                                    if (e.target.checked) {
                                                        setVoiceAgentId(voiceAgents.map((a)=>a.id).join(","));
                                                    } else {
                                                        setVoiceAgentId("");
                                                    }
                                                },
                                                className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            "Select All Voice Agents"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    voiceAgents.map((expert)=>{
                                        const isChecked = selectedVoiceAgentIds.includes(expert.id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2.5 text-sm cursor-pointer select-none py-1.5 px-2 hover:bg-slate-50 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isChecked,
                                                    onChange: ()=>handleToggleVoiceAgent(expert.id),
                                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/AgentStep.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800",
                                                            children: expert.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/AgentStep.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${expert.status === "AVAILABLE" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : expert.status === "BUSY" || expert.status === "ON_CALL" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-rose-50 text-rose-700 border-rose-200"}`,
                                                            children: [
                                                                "● ",
                                                                expert.status || "AVAILABLE"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/campaign/AgentStep.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/AgentStep.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, expert.id, true, {
                                            fileName: "[project]/components/campaign/AgentStep.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    voiceAgents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-400 py-2 text-center",
                                        children: "No Voice Agents available."
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Auto Dial Ratio"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: autoDialRatio,
                                onChange: (e)=>setAutoDialRatio(e.target.value),
                                className: "w-full h-11 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer",
                                children: [
                                    ...Array(10)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: `1:${i + 1}`,
                                        children: [
                                            "1:",
                                            i + 1
                                        ]
                                    }, `1:${i + 1}`, true, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Assign AI Voice Gender"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: agentGender,
                                onChange: (e)=>setAgentGender(e.target.value),
                                className: "w-full h-11 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "female",
                                        children: "Female"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "male",
                                        children: "Male"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4 pt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: onCheckVoice,
                            disabled: previewingVoice,
                            className: "w-full md:w-auto border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-semibold gap-1.5 cursor-pointer",
                            children: previewingVoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-4 w-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 206,
                                        columnNumber: 19
                                    }, this),
                                    " Generating voice sample..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 205,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 210,
                                        columnNumber: 19
                                    }, this),
                                    " Listen to Voice Sample"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 209,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/AgentStep.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "h-5 w-5 text-indigo-500 mt-0.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-indigo-700 leading-relaxed font-medium",
                                children: "The AI Agent greets the lead, qualifies based on your script, and seamlessly bridges the active call to selected human Voice Agents upon qualification."
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/AgentStep.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 pt-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-gray-500 uppercase tracking-wider",
                                        children: "SELECT VOICE AGENTS (SELECT MULTIPLE)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    voiceAgents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100",
                                        children: [
                                            selectedVoiceAgentIds.length,
                                            " Selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-input rounded-xl p-3 bg-background max-h-48 overflow-y-auto space-y-1.5 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2.5 text-sm cursor-pointer select-none pb-2 border-b border-gray-100 font-bold text-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: voiceAgents.length > 0 && selectedVoiceAgentIds.length === voiceAgents.length,
                                                onChange: (e)=>{
                                                    if (e.target.checked) {
                                                        setVoiceAgentId(voiceAgents.map((a)=>a.id).join(","));
                                                    } else {
                                                        setVoiceAgentId("");
                                                    }
                                                },
                                                className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            "Select All Voice Agents"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    voiceAgents.map((expert)=>{
                                        const isChecked = selectedVoiceAgentIds.includes(expert.id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2.5 text-sm cursor-pointer select-none py-1.5 px-2 hover:bg-slate-50 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isChecked,
                                                    onChange: ()=>handleToggleVoiceAgent(expert.id),
                                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/AgentStep.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800",
                                                            children: expert.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/AgentStep.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${expert.status === "AVAILABLE" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : expert.status === "BUSY" || expert.status === "ON_CALL" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-rose-50 text-rose-700 border-rose-200"}`,
                                                            children: [
                                                                "● ",
                                                                expert.status || "AVAILABLE"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/campaign/AgentStep.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/AgentStep.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, expert.id, true, {
                                            fileName: "[project]/components/campaign/AgentStep.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    voiceAgents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-rose-500 py-2 text-center",
                                        children: "No Voice Agents available. Please create a Voice Agent first."
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/AgentStep.tsx",
                                        lineNumber: 279,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50/70 p-4 rounded-xl border border-emerald-100 flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                className: "h-5 w-5 text-emerald-600 mt-0.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-emerald-800 leading-relaxed font-medium",
                                children: "Direct Voice Agent Mode connects outbound calls directly to the selected Voice Agents' lines."
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/AgentStep.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/AgentStep.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/AgentStep.tsx",
                lineNumber: 224,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/campaign/AgentStep.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = AgentStep;
var _c;
__turbopack_context__.k.register(_c, "AgentStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/BasicInfoStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasicInfoStep",
    ()=>BasicInfoStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
"use client";
;
;
;
;
function BasicInfoStep({ name, setName, description, setDescription, objective, setObjective, customObjective, setCustomObjective, defaultLanguage, setDefaultLanguage, dialerType = "AUTO", setDialerType, clientId = "", setClientId, clientName = "", setClientName, clientPhone = "", setClientPhone, clients = [] }) {
    const isPhoneInvalid = clientPhone.trim() !== "" && !/^\+?[1-9]\d{1,14}$/.test(clientPhone.trim());
    const handleClientSelect = (selectedId)=>{
        if (setClientId) setClientId(selectedId);
        if (!selectedId) return;
        const found = clients.find((c)=>c.id === selectedId);
        if (found) {
            if (setClientName) setClientName(found.name || found.company_name || "");
            if (setClientPhone) setClientPhone(found.contact_number || "");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6 space-y-4 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-gray-900 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-5 w-5 text-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    " Step 1: Campaign Basic Info & Client Contact"
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Campaign Name *"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                className: "font-medium",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-indigo-50/60 border border-indigo-100 rounded-xl space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold text-indigo-900 uppercase tracking-wider",
                                children: "Select Client"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            clients && clients.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[11px] font-semibold text-slate-600 uppercase mb-1",
                                        children: "Choose Existing Client"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: clientId,
                                        onChange: (e)=>handleClientSelect(e.target.value),
                                        className: "w-full h-10 px-3 rounded-md border border-input bg-white text-sm font-medium cursor-pointer mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Create / Enter Custom Client --"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            clients.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.id,
                                                    children: [
                                                        c.name,
                                                        " ",
                                                        c.company_name ? `(${c.company_name})` : "",
                                                        " - ",
                                                        c.contact_number || "No Phone"
                                                    ]
                                                }, c.id, true, {
                                                    fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-semibold text-slate-600 uppercase mb-1",
                                                children: "Client Name (Company / Manager) *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: clientName,
                                                onChange: (e)=>{
                                                    setClientId?.("");
                                                    setClientName?.(e.target.value);
                                                },
                                                className: "font-medium bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-semibold text-slate-600 uppercase mb-1",
                                                children: "Client Phone Number (E.164 Format)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: clientPhone,
                                                onChange: (e)=>setClientPhone?.(e.target.value),
                                                className: `font-medium bg-white ${isPhoneInvalid ? 'border-rose-500 focus:ring-rose-500' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            isPhoneInvalid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold text-rose-500 mt-1",
                                                children: "Must be valid E.164 format (e.g. +15550192834)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-1.5 font-bold flex items-center gap-1.5",
                                children: "Dialer Type / Mode *"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: dialerType,
                                onChange: (e)=>setDialerType?.(e.target.value),
                                className: "w-full h-11 px-3 rounded-md border border-indigo-200 bg-indigo-50/40 text-sm font-bold text-indigo-950 cursor-pointer focus:ring-indigo-500 focus:border-indigo-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "AUTO",
                                        children: "Auto Dialer (Predictive Dialer - PD)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MANUAL",
                                        children: "Manual Dialer (Agent Triggered)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-medium text-slate-600 mt-1 leading-snug",
                                children: dialerType === "AUTO" ? "⚡ Auto Dialer: Campaign will immediately navigate to Voice Agent Dashboard with PD Ready (Inactive). Toggling ACTIVE starts auto calling leads." : "📞 Manual Dialer: Campaign will require the voice agent to trigger calls manually."
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Campaign Description"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                rows: 3,
                                className: "w-full text-sm font-medium border border-input rounded-md px-3 py-2 bg-background"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Objective / Purpose"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: objective,
                                onChange: (e)=>setObjective(e.target.value),
                                className: "w-full h-11 px-3 rounded-md border border-input bg-background text-sm font-medium mb-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "-- Select Objective --"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Solar",
                                        children: "Solar"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ACA",
                                        children: "ACA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MUA",
                                        children: "MUA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Custom",
                                        children: "Custom / Other"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            objective === "Custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: customObjective,
                                onChange: (e)=>setCustomObjective(e.target.value),
                                placeholder: "Enter custom campaign objective",
                                className: "font-medium mb-3"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Regional Language"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: defaultLanguage,
                                onChange: (e)=>setDefaultLanguage(e.target.value),
                                className: "w-full h-11 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "auto",
                                        children: "Auto Detect"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "en",
                                        children: "English"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ta",
                                        children: "Tamil"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "te",
                                        children: "Telugu"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ml",
                                        children: "Malayalam"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "kn",
                                        children: "Kannada"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "hi",
                                        children: "Hindi"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "bn",
                                        children: "Bengali"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "mr",
                                        children: "Marathi"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gu",
                                        children: "Gujarati"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pa",
                                        children: "Punjabi"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ur",
                                        children: "Urdu"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "or",
                                        children: "Odia"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/BasicInfoStep.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/campaign/BasicInfoStep.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c = BasicInfoStep;
var _c;
__turbopack_context__.k.register(_c, "BasicInfoStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/CallingConfigStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallingConfigStep",
    ()=>CallingConfigStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$carrier$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/carrier.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CallingConfigStep({ callingMode, setCallingMode, twilioNumber, setTwilioNumber, carrierId = "", setCarrierId, trunkId = "", setTrunkId, callerDidId = "", setCallerDidId, callingHours, setCallingHours, timezone, setTimezone, maxAttempts, setMaxAttempts, retryDelay, setRetryDelay, concurrency, setConcurrency }) {
    _s();
    const [carriers, setCarriers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trunks, setTrunks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dids, setDids] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingSIP, setLoadingSIP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallingConfigStep.useEffect": ()=>{
            if (callingMode === "sip") {
                setLoadingSIP(true);
                Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$carrier$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carrierService"].getCarriers("ACTIVE").catch({
                        "CallingConfigStep.useEffect": ()=>[]
                    }["CallingConfigStep.useEffect"]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$carrier$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carrierService"].getTrunks(undefined, "ACTIVE").catch({
                        "CallingConfigStep.useEffect": ()=>[]
                    }["CallingConfigStep.useEffect"]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$carrier$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["carrierService"].getDIDs().catch({
                        "CallingConfigStep.useEffect": ()=>[]
                    }["CallingConfigStep.useEffect"])
                ]).then({
                    "CallingConfigStep.useEffect": ([cList, tList, dList])=>{
                        setCarriers(cList || []);
                        setTrunks(tList || []);
                        setDids(dList || []);
                        const activeCarrierId = carrierId || (cList && cList.length > 0 ? cList[0].id : "");
                        if (!carrierId && activeCarrierId && setCarrierId) {
                            setCarrierId(activeCarrierId);
                        }
                        // Auto-select trunk for active carrier
                        const matchingTrunk = (tList || []).find({
                            "CallingConfigStep.useEffect": (t)=>!activeCarrierId || t.carrier_id === activeCarrierId
                        }["CallingConfigStep.useEffect"]) || (tList || [])[0];
                        if (matchingTrunk && (!trunkId || !(tList || []).some({
                            "CallingConfigStep.useEffect": (t)=>t.id === trunkId
                        }["CallingConfigStep.useEffect"]))) {
                            if (setTrunkId) setTrunkId(matchingTrunk.id);
                        }
                        // Auto-select DID for active carrier
                        const availableDList = (dList || []).filter({
                            "CallingConfigStep.useEffect.availableDList": (d)=>!activeCarrierId || !d.carrier_id || d.carrier_id === activeCarrierId
                        }["CallingConfigStep.useEffect.availableDList"]);
                        const matchingDid = availableDList[0] || (dList || [])[0];
                        if (matchingDid && (!callerDidId || !(dList || []).some({
                            "CallingConfigStep.useEffect": (d)=>d.id === callerDidId
                        }["CallingConfigStep.useEffect"]))) {
                            if (setCallerDidId) setCallerDidId(matchingDid.id);
                            setTwilioNumber(matchingDid.phone_number);
                        }
                        setLoadingSIP(false);
                    }
                }["CallingConfigStep.useEffect"]);
            }
        }
    }["CallingConfigStep.useEffect"], [
        callingMode
    ]);
    // Keep callerDidId and twilioNumber aligned when dids or carrierId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallingConfigStep.useEffect": ()=>{
            if (callingMode === "sip" && dids.length > 0) {
                const activeCarrierId = carrierId || carriers[0]?.id;
                const available = dids.filter({
                    "CallingConfigStep.useEffect.available": (d)=>!activeCarrierId || !d.carrier_id || d.carrier_id === activeCarrierId
                }["CallingConfigStep.useEffect.available"]);
                const targetDid = available.find({
                    "CallingConfigStep.useEffect": (d)=>d.id === callerDidId
                }["CallingConfigStep.useEffect"]) || available[0] || dids[0];
                if (targetDid && (!callerDidId || !dids.some({
                    "CallingConfigStep.useEffect": (d)=>d.id === callerDidId
                }["CallingConfigStep.useEffect"]))) {
                    if (setCallerDidId) setCallerDidId(targetDid.id);
                    setTwilioNumber(targetDid.phone_number);
                }
            }
        }
    }["CallingConfigStep.useEffect"], [
        callingMode,
        dids,
        carrierId,
        callerDidId
    ]);
    const handleCarrierChange = (newCarrierId)=>{
        if (setCarrierId) setCarrierId(newCarrierId);
        // Auto-select corresponding trunk
        const matchingTrunk = trunks.find((t)=>t.carrier_id === newCarrierId) || trunks[0];
        if (matchingTrunk && setTrunkId) {
            setTrunkId(matchingTrunk.id);
        } else if (setTrunkId) {
            setTrunkId("");
        }
        // Auto-select corresponding DID
        const available = dids.filter((d)=>!newCarrierId || !d.carrier_id || d.carrier_id === newCarrierId);
        const matchingDid = available[0] || dids[0];
        if (matchingDid) {
            if (setCallerDidId) setCallerDidId(matchingDid.id);
            setTwilioNumber(matchingDid.phone_number);
        } else if (setCallerDidId) {
            setCallerDidId("");
        }
    };
    const handleDidSelect = (didId)=>{
        if (setCallerDidId) setCallerDidId(didId);
        const selDid = dids.find((d)=>d.id === didId);
        if (selDid) {
            setTwilioNumber(selDid.phone_number);
        }
    };
    const selectedCarrier = carriers.find((c)=>c.id === carrierId) || carriers[0];
    const availableDids = dids.filter((d)=>!carrierId || !d.carrier_id || d.carrier_id === carrierId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6 space-y-5 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-900 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "h-5 w-5 text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    " Step 5: Calling Configuration"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-0.5",
                                children: "Configure telephony delivery route, caller identification, and dialing pacing."
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    callingMode === "sip" && selectedCarrier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            "SIP Carrier Route: ",
                            selectedCarrier.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Calling Mode & Telephony Engine"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: callingMode,
                                onChange: (e)=>setCallingMode(e.target.value),
                                className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer focus:ring-2 focus:ring-indigo-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "twilio",
                                        children: "Twilio Outbound (Cloud Voice API)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "sip",
                                        children: "SIP Carrier (Asterisk / Tata / Airtel / Jio Trunk)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "local",
                                        children: "Local Test Mode (Simulated Audio)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    callingMode === "sip" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                        className: "w-3.5 h-3.5 text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this),
                                    "Assigned SIP Carrier"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: carrierId,
                                onChange: (e)=>handleCarrierChange(e.target.value),
                                className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer",
                                disabled: loadingSIP || carriers.length === 0,
                                children: carriers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "No Active Carriers Available"
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this) : carriers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: c.id,
                                        children: [
                                            c.name,
                                            " (",
                                            c.sip_host,
                                            ":",
                                            c.sip_port,
                                            ") - ",
                                            c.provider_type
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    callingMode === "sip" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                        className: "w-3.5 h-3.5 text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    "SIP Trunk Route"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: trunkId,
                                onChange: (e)=>setTrunkId && setTrunkId(e.target.value),
                                className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer",
                                children: [
                                    trunks.filter((t)=>!carrierId || t.carrier_id === carrierId).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t.id,
                                            children: [
                                                t.name,
                                                " (Max ",
                                                t.max_concurrency,
                                                " lines) - ",
                                                t.direction
                                            ]
                                        }, t.id, true, {
                                            fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this)),
                                    trunks.filter((t)=>!carrierId || t.carrier_id === carrierId).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Default Primary Outbound Trunk"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                        className: "w-3.5 h-3.5 text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    callingMode === "sip" ? "Outbound Caller DID" : "Twilio Caller ID / Number"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            callingMode === "sip" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: callerDidId,
                                onChange: (e)=>handleDidSelect(e.target.value),
                                className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer",
                                children: [
                                    availableDids.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: d.id,
                                            children: [
                                                d.phone_number,
                                                " ",
                                                d.name ? `(${d.name})` : ""
                                            ]
                                        }, d.id, true, {
                                            fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this)),
                                    availableDids.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: [
                                            selectedCarrier?.username || "09410697548",
                                            " (Carrier Default Route)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: callingMode === "local" ? "LOCAL_TEST" : twilioNumber,
                                onChange: (e)=>setTwilioNumber(e.target.value),
                                disabled: callingMode === "local",
                                placeholder: "e.g. +1234567890",
                                className: "font-medium disabled:opacity-50 disabled:bg-gray-50"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Allowed calling hours"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                value: callingHours,
                                onChange: (e)=>setCallingHours(e.target.value),
                                placeholder: "e.g. 09:00-18:00",
                                className: "font-medium"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Timezone Offset"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: timezone,
                                onChange: (e)=>setTimezone(e.target.value),
                                className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm font-medium cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Local",
                                        children: "Local (Lead's timezone)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "UTC",
                                        children: "UTC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "EST",
                                        children: "EST / America New York"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "IST",
                                        children: "IST / Asia Kolkata"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Max attempts per lead"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                min: "1",
                                value: maxAttempts,
                                onChange: (e)=>setMaxAttempts(e.target.value),
                                className: "font-medium"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Retry delay (Minutes)"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                min: "1",
                                value: retryDelay,
                                onChange: (e)=>setRetryDelay(e.target.value),
                                className: "font-medium"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-medium",
                                children: "Concurrency (Parallel lines)"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                min: "1",
                                value: concurrency,
                                onChange: (e)=>setConcurrency(e.target.value),
                                className: "font-medium"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/CallingConfigStep.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/campaign/CallingConfigStep.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(CallingConfigStep, "l5i/5c93C9By2BWr655cQDLBjn8=");
_c = CallingConfigStep;
var _c;
__turbopack_context__.k.register(_c, "CallingConfigStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/CampaignCreateFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CampaignCreateFlow",
    ()=>CampaignCreateFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/campaign.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/agent.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$expert$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/expert.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$voice$2d$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/voice-agent.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$lead$2d$group$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/lead-group.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$lead$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/lead.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$client$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/client.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$CampaignStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/CampaignStepper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$BasicInfoStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/BasicInfoStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$ScriptStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/ScriptStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$AgentStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/AgentStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$LeadsStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/LeadsStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$CallingConfigStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/CallingConfigStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$ReviewStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/campaign/ReviewStep.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
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
;
;
;
;
;
;
;
;
function CampaignCreateFlow({ redirectPath = "/campaigns", role, campaignId: propCampaignId }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const editCampaignId = searchParams.get("edit") || propCampaignId || undefined;
    const isEditMode = Boolean(editCampaignId);
    const initialStepParam = searchParams.get("step");
    const initialStep = initialStepParam ? parseInt(initialStepParam, 10) : 1;
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialStep);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDraftLoaded, setIsDraftLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const nextStep = ()=>{
        setError(null);
        if (step < 6) {
            setStep(step + 1);
        }
    };
    const prevStep = ()=>{
        setError(null);
        if (step > 1) {
            setStep(step - 1);
        }
    };
    // Backend state lists
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [voiceAgents, setVoiceAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leadLibraries, setLeadLibraries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allLeads, setAllLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Step 1: Basic Info
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [objective, setObjective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customObjective, setCustomObjective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [defaultLanguage, setDefaultLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("auto");
    const [dialerType, setDialerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("AUTO");
    const [clientId, setClientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [clientName, setClientName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [clientPhone, setClientPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Step 2: Script
    const [selectedTemplateId, setSelectedTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customScript, setCustomScript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [parsingPdf, setParsingPdf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pdfFileName, setPdfFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfFileUrl, setPdfFileUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Step 3: Agent Selection & Mode
    const [callingAgentMode, setCallingAgentMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("AI");
    const [agentId, setAgentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [voiceAgentId, setVoiceAgentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [autoDialRatio, setAutoDialRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1:1");
    const [agentGender, setAgentGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("female");
    const [previewingVoice, setPreviewingVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Step 4: Leads Selection State
    const [leadSelectionMode, setLeadSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [libraryId, setLibraryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [libraryLeadsCount, setLibraryLeadsCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedLeadIds, setSelectedLeadIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Step 5: Calling Config
    const [callingMode, setCallingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("twilio");
    const [twilioNumber, setTwilioNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [carrierId, setCarrierId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [trunkId, setTrunkId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [callerDidId, setCallerDidId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [callingHours, setCallingHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("09:00-18:00");
    const [timezone, setTimezone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Local");
    const [maxAttempts, setMaxAttempts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("3");
    const [retryDelay, setRetryDelay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("60");
    const [concurrency, setConcurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentService"].list().catch({
                    "CampaignCreateFlow.useEffect": ()=>[]
                }["CampaignCreateFlow.useEffect"]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$expert$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expertService"].list().catch({
                    "CampaignCreateFlow.useEffect": ()=>[]
                }["CampaignCreateFlow.useEffect"]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$voice$2d$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voiceAgentService"].list().catch({
                    "CampaignCreateFlow.useEffect": ()=>[]
                }["CampaignCreateFlow.useEffect"]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$lead$2d$group$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadGroupService"].list().catch({
                    "CampaignCreateFlow.useEffect": ()=>[]
                }["CampaignCreateFlow.useEffect"]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$lead$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadService"].list().catch({
                    "CampaignCreateFlow.useEffect": ()=>[]
                }["CampaignCreateFlow.useEffect"]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getTwilioNumber().catch({
                    "CampaignCreateFlow.useEffect": ()=>({
                            twilio_phone_number: "",
                            configured: false
                        })
                }["CampaignCreateFlow.useEffect"]),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$client$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientService"].list().catch({
                    "CampaignCreateFlow.useEffect": ()=>[]
                }["CampaignCreateFlow.useEffect"])
            ]).then({
                "CampaignCreateFlow.useEffect": ([a, e, va, g, l, t, c])=>{
                    setAgents(a);
                    const mergedVoice = [
                        ...e
                    ];
                    for (const v of va){
                        if (!mergedVoice.some({
                            "CampaignCreateFlow.useEffect": (x)=>x.id === v.id || x.email === v.email
                        }["CampaignCreateFlow.useEffect"])) {
                            mergedVoice.push(v);
                        }
                    }
                    setVoiceAgents(mergedVoice);
                    setLeadLibraries(g);
                    setAllLeads(l);
                    setClients(c);
                    if (l.length > 0) {
                        setSelectedLeadIds(l.map({
                            "CampaignCreateFlow.useEffect": (x)=>x.id
                        }["CampaignCreateFlow.useEffect"]));
                    }
                    if (g.length > 0) {
                        setLibraryId(g[0].id);
                        setLibraryLeadsCount(g[0].lead_count);
                    } else if (l.length > 0) {
                        setLeadSelectionMode("ALL");
                    }
                    if (t.twilio_phone_number) {
                        setTwilioNumber(t.twilio_phone_number);
                    }
                }
            }["CampaignCreateFlow.useEffect"]).catch({
                "CampaignCreateFlow.useEffect": (err)=>setError(err.message)
            }["CampaignCreateFlow.useEffect"]);
        }
    }["CampaignCreateFlow.useEffect"], []);
    // Load existing campaign data when editing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (editCampaignId) {
                Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].get(editCampaignId).catch({
                        "CampaignCreateFlow.useEffect": ()=>null
                    }["CampaignCreateFlow.useEffect"]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].getLeads(editCampaignId).catch({
                        "CampaignCreateFlow.useEffect": ()=>[]
                    }["CampaignCreateFlow.useEffect"])
                ]).then({
                    "CampaignCreateFlow.useEffect": ([camp, cLeads])=>{
                        if (camp) {
                            setName(camp.name || "");
                            if (camp.client_id) setClientId(camp.client_id);
                            if (camp.schedule) {
                                setDescription(camp.schedule.description || "");
                                if (camp.schedule.objective) {
                                    if ([
                                        "Solar",
                                        "Insurance",
                                        "Real Estate",
                                        "SaaS"
                                    ].includes(camp.schedule.objective)) {
                                        setObjective(camp.schedule.objective);
                                    } else {
                                        setObjective("Custom");
                                        setCustomObjective(camp.schedule.objective);
                                    }
                                }
                                if (camp.schedule.default_language) setDefaultLanguage(camp.schedule.default_language);
                                if (camp.schedule.script) setCustomScript(camp.schedule.script);
                                if (camp.schedule.pdf_filename) setPdfFileName(camp.schedule.pdf_filename);
                                if (camp.schedule.pdf_url) setPdfFileUrl(camp.schedule.pdf_url);
                                if (camp.schedule.agent_gender) setAgentGender(camp.schedule.agent_gender);
                                if (camp.schedule.calling_mode) setCallingMode(camp.schedule.calling_mode);
                                if (camp.schedule.calling_hours) setCallingHours(camp.schedule.calling_hours);
                                if (camp.schedule.timezone) setTimezone(camp.schedule.timezone);
                                if (camp.schedule.max_attempts) setMaxAttempts(String(camp.schedule.max_attempts));
                                if (camp.schedule.retry_delay) setRetryDelay(String(camp.schedule.retry_delay));
                                if (camp.schedule.concurrency) setConcurrency(String(camp.schedule.concurrency));
                            }
                            if (camp.calling_mode) setCallingAgentMode(camp.calling_mode);
                            if (camp.agent_type) setCallingAgentMode(camp.agent_type.toUpperCase().startsWith("AI") ? "AI" : "VOICE");
                            if (camp.client_name) setClientName(camp.client_name);
                            if (camp.client_phone) setClientPhone(camp.client_phone);
                            if (camp.agent_id) setAgentId(camp.agent_id);
                            if (camp.voice_agent_id) setVoiceAgentId(camp.voice_agent_id);
                            if (camp.twilio_number) setTwilioNumber(camp.twilio_number);
                            if (cLeads && cLeads.length > 0) {
                                setSelectedLeadIds(cLeads.map({
                                    "CampaignCreateFlow.useEffect": (x)=>x.lead_id
                                }["CampaignCreateFlow.useEffect"]));
                                setLeadSelectionMode("MANUAL");
                            }
                        }
                    }
                }["CampaignCreateFlow.useEffect"]);
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        editCampaignId
    ]);
    // Load generic draft state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && !editCampaignId) {
                const draftStr = localStorage.getItem("campaign_generic_draft");
                if (draftStr) {
                    try {
                        const parsed = JSON.parse(draftStr);
                        if (parsed.name) setName(parsed.name);
                        if (parsed.description) setDescription(parsed.description);
                        if (parsed.objective) setObjective(parsed.objective);
                        if (parsed.customObjective) setCustomObjective(parsed.customObjective);
                        if (parsed.defaultLanguage) setDefaultLanguage(parsed.defaultLanguage);
                        if (parsed.clientId) setClientId(parsed.clientId);
                        if (parsed.clientName) setClientName(parsed.clientName);
                        if (parsed.clientPhone) setClientPhone(parsed.clientPhone);
                        if (parsed.callingAgentMode) setCallingAgentMode(parsed.callingAgentMode);
                        if (parsed.agentId) setAgentId(parsed.agentId);
                        if (parsed.voiceAgentId) setVoiceAgentId(parsed.voiceAgentId);
                        if (parsed.autoDialRatio) setAutoDialRatio(parsed.autoDialRatio);
                        if (parsed.agentGender) setAgentGender(parsed.agentGender);
                        if (parsed.leadSelectionMode) setLeadSelectionMode(parsed.leadSelectionMode);
                        if (parsed.libraryId) setLibraryId(parsed.libraryId);
                        if (parsed.selectedLeadIds) setSelectedLeadIds(parsed.selectedLeadIds);
                        if (parsed.callingMode) setCallingMode(parsed.callingMode);
                        if (parsed.twilioNumber) setTwilioNumber(parsed.twilioNumber);
                        if (parsed.callingHours) setCallingHours(parsed.callingHours);
                        if (parsed.timezone) setTimezone(parsed.timezone);
                        if (parsed.maxAttempts) setMaxAttempts(parsed.maxAttempts);
                        if (parsed.retryDelay) setRetryDelay(parsed.retryDelay);
                        if (parsed.concurrency) setConcurrency(parsed.concurrency);
                    } catch (e) {
                        console.error("Failed to load draft", e);
                    }
                }
            }
            setIsDraftLoaded(true);
        }
    }["CampaignCreateFlow.useEffect"], [
        editCampaignId
    ]);
    // Save generic draft state (excluding step so user always starts at Step 1: Basic Info)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (isDraftLoaded && !editCampaignId) {
                const draft = {
                    name,
                    description,
                    objective,
                    customObjective,
                    defaultLanguage,
                    clientId,
                    clientName,
                    clientPhone,
                    callingAgentMode,
                    agentId,
                    voiceAgentId,
                    autoDialRatio,
                    agentGender,
                    leadSelectionMode,
                    libraryId,
                    selectedLeadIds,
                    callingMode,
                    twilioNumber,
                    callingHours,
                    timezone,
                    maxAttempts,
                    retryDelay,
                    concurrency
                };
                localStorage.setItem("campaign_generic_draft", JSON.stringify(draft));
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        name,
        description,
        objective,
        customObjective,
        defaultLanguage,
        clientId,
        clientName,
        clientPhone,
        callingAgentMode,
        agentId,
        voiceAgentId,
        autoDialRatio,
        agentGender,
        leadSelectionMode,
        libraryId,
        selectedLeadIds,
        callingMode,
        twilioNumber,
        callingHours,
        timezone,
        maxAttempts,
        retryDelay,
        concurrency,
        isDraftLoaded,
        editCampaignId
    ]);
    // Ensure CREATE mode starts at Step 1: Basic Info and resets script template
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (!editCampaignId) {
                if (!initialStepParam) {
                    setStep(1);
                }
                setSelectedTemplateId("");
                setCustomScript("");
                setPdfFileName(null);
                setPdfFileUrl(null);
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        editCampaignId,
        initialStepParam
    ]);
    // Auto-sync objective selection to template when template is not explicitly chosen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (!editCampaignId && !selectedTemplateId && objective) {
                const objLower = objective.toLowerCase();
                if (objLower === "solar") {
                    handleTemplateChange("solar");
                } else if (objLower === "aca") {
                    handleTemplateChange("aca");
                } else if (objLower === "mua") {
                    handleTemplateChange("mua");
                } else if (objLower === "custom") {
                    handleTemplateChange("custom");
                }
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        objective,
        selectedTemplateId,
        editCampaignId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (!editCampaignId) {
                const targetId = selectedTemplateId || "custom";
                if (customScript) {
                    localStorage.setItem(`campaign_new_script_${targetId}`, customScript);
                }
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        customScript,
        selectedTemplateId,
        editCampaignId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (!editCampaignId) {
                const targetId = selectedTemplateId || "custom";
                if (pdfFileName !== null) {
                    localStorage.setItem(`campaign_new_pdf_name_${targetId}`, pdfFileName);
                } else {
                    localStorage.removeItem(`campaign_new_pdf_name_${targetId}`);
                }
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        pdfFileName,
        selectedTemplateId,
        editCampaignId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (!editCampaignId) {
                const targetId = selectedTemplateId || "custom";
                if (pdfFileUrl !== null) {
                    localStorage.setItem(`campaign_new_pdf_url_${targetId}`, pdfFileUrl);
                } else {
                    localStorage.removeItem(`campaign_new_pdf_url_${targetId}`);
                }
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        pdfFileUrl,
        selectedTemplateId,
        editCampaignId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignCreateFlow.useEffect": ()=>{
            if (!editCampaignId && selectedTemplateId) {
                localStorage.setItem("campaign_new_template_id", selectedTemplateId);
            }
        }
    }["CampaignCreateFlow.useEffect"], [
        selectedTemplateId,
        editCampaignId
    ]);
    const handleTemplateChange = (templateId)=>{
        setSelectedTemplateId(templateId);
        const savedScript = localStorage.getItem(`campaign_new_script_${templateId}`);
        if (savedScript !== null) {
            setCustomScript(savedScript);
        } else {
            const template = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$ScriptStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCRIPT_TEMPLATES"].find((t)=>t.id === templateId);
            setCustomScript(template ? template.text : "");
        }
        const savedPdfName = localStorage.getItem(`campaign_new_pdf_name_${templateId}`);
        const savedPdfUrl = localStorage.getItem(`campaign_new_pdf_url_${templateId}`);
        if (savedPdfName !== null) {
            setPdfFileName(savedPdfName);
            setPdfFileUrl(savedPdfUrl);
        } else {
            setPdfFileName(null);
            setPdfFileUrl(null);
        }
    };
    const handleLibraryChange = (id)=>{
        setLibraryId(id);
        const lib = leadLibraries.find((g)=>g.id === id);
        setLibraryLeadsCount(lib ? lib.lead_count : 0);
    };
    const handleCheckVoice = async ()=>{
        setPreviewingVoice(true);
        setError(null);
        try {
            const targetAgentId = agentId || (agents.length > 0 ? agents[0].id : "preview");
            const selectedAgent = agents.find((a)=>a.id === agentId);
            const voiceId = selectedAgent?.voice_id;
            const TEST_GREETINGS = {
                en: `Hello! I am your ${agentGender} AI assistant. How can I help you today?`,
                ta: `வணக்கம்! நான் உங்கள் ${agentGender === "male" ? "ஆண்" : "பெண்"} AI உதவியாளர். இன்று உங்களுக்கு எப்படி உதவலாம்?`,
                te: "నమస్కారం! నేను మీ AI సహాయకుడిని.",
                ml: "ഹലോ! ഞാൻ നിങ്ങളുടെ AI സഹായിയാണ്.",
                hi: "नमस्ते! मैं आपका AI सहायक हूँ।"
            };
            const text = TEST_GREETINGS[defaultLanguage] || TEST_GREETINGS.en;
            let played = false;
            try {
                const url = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$agent$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["agentService"].previewVoice(targetAgentId, text, voiceId, agentGender, defaultLanguage);
                if (url) {
                    const audio = new Audio(url);
                    await audio.play();
                    played = true;
                }
            } catch (backendErr) {
                console.warn("Backend voice preview error, using browser speech synthesis fallback:", backendErr);
            }
            if (!played && ("TURBOPACK compile-time value", "object") !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                if (agentGender === "male") {
                    utterance.pitch = 0.75;
                    utterance.rate = 0.95;
                } else {
                    utterance.pitch = 1.25;
                    utterance.rate = 1.0;
                }
                const voices = window.speechSynthesis.getVoices();
                const langCode = defaultLanguage === "ta" ? "ta" : defaultLanguage === "hi" ? "hi" : "en";
                const isMale = agentGender === "male";
                const matchedVoice = voices.find((v)=>{
                    const nameLower = v.name.toLowerCase();
                    const matchesLang = v.lang.toLowerCase().startsWith(langCode);
                    const matchesGender = isMale ? nameLower.includes("male") || nameLower.includes("david") || nameLower.includes("george") || nameLower.includes("mark") || nameLower.includes("guy") : nameLower.includes("female") || nameLower.includes("zira") || nameLower.includes("hazel") || nameLower.includes("susan") || nameLower.includes("aria");
                    return matchesLang && matchesGender;
                }) || voices.find((v)=>v.lang.toLowerCase().startsWith(langCode)) || voices[0];
                if (matchedVoice) {
                    utterance.voice = matchedVoice;
                }
                window.speechSynthesis.speak(utterance);
            }
        } catch (err) {
            setError(err.message || "Failed to preview agent voice.");
        } finally{
            setPreviewingVoice(false);
        }
    };
    const handlePdfUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setParsingPdf(true);
        setError(null);
        try {
            const uploadRes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].uploadPdf(file);
            if (uploadRes.url) {
                setPdfFileUrl(uploadRes.url);
            }
            let extractedText = uploadRes.extracted_text || "";
            // If backend extraction didn't yield text, attempt client-side extraction
            if (!extractedText.trim()) {
                const lowerName = file.name.toLowerCase();
                if (lowerName.endsWith(".pdf")) {
                    try {
                        const pdfjsLib = await __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)");
                        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
                        const arrayBuffer = await file.arrayBuffer();
                        const pdf = await pdfjsLib.getDocument({
                            data: arrayBuffer
                        }).promise;
                        for(let i = 1; i <= pdf.numPages; i++){
                            const page = await pdf.getPage(i);
                            const textContent = await page.getTextContent();
                            const pageText = textContent.items.map((item)=>item.str).join(" ");
                            extractedText += pageText + "\n";
                        }
                    } catch (pdfErr) {
                        console.warn("Client-side PDF extraction fallback failed:", pdfErr);
                    }
                } else {
                    // Plain text / markdown / CSV / JSON read
                    try {
                        extractedText = await file.text();
                    } catch (textErr) {
                        console.warn("Client-side text read fallback failed:", textErr);
                    }
                }
            }
            if (extractedText.trim()) {
                const cleanText = extractedText.trim();
                setCustomScript(cleanText);
                setPdfFileName(file.name);
                setSelectedTemplateId("custom");
                if ("TURBOPACK compile-time truthy", 1) {
                    try {
                        localStorage.setItem("campaign_new_script_custom", cleanText);
                        localStorage.setItem("campaign_new_pdf_name_custom", file.name);
                        if (uploadRes.url) {
                            localStorage.setItem("campaign_new_pdf_url_custom", uploadRes.url);
                        }
                    } catch (_) {}
                }
            } else {
                throw new Error("Could not extract any readable text from the selected file. Please verify file content or type your script manually.");
            }
        } catch (err) {
            setError(err.message || "Failed to parse script file");
        } finally{
            setParsingPdf(false);
            e.target.value = "";
        }
    };
    // Compute total active lead count for display
    let targetLeadsCount = 0;
    if (leadSelectionMode === "ALL") {
        targetLeadsCount = allLeads.length;
    } else if (leadSelectionMode === "LIBRARY") {
        const lib = leadLibraries.find((g)=>g.id === libraryId);
        targetLeadsCount = lib ? lib.lead_count : 0;
    } else {
        targetLeadsCount = selectedLeadIds.length;
    }
    const handleSave = async ()=>{
        setLoading(true);
        setError(null);
        try {
            if (!name.trim()) throw new Error("Campaign name is required");
            if (!clientId && !clientName.trim()) throw new Error("Please select or enter a Client for this campaign");
            if (!customScript.trim()) throw new Error("Script cannot be empty");
            if (callingAgentMode === "AI" && !agentId) throw new Error("Please select an AI Agent");
            if (callingAgentMode === "VOICE" && !voiceAgentId) throw new Error("Please select a Voice Agent");
            if (callingMode === "twilio" && !twilioNumber.trim()) throw new Error("Caller number is required for Twilio mode");
            if (isNaN(Number(maxAttempts)) || Number(maxAttempts) <= 0) throw new Error("Max attempts must be a positive number");
            if (isNaN(Number(retryDelay)) || Number(retryDelay) <= 0) throw new Error("Retry delay must be a positive number");
            if (isNaN(Number(concurrency)) || Number(concurrency) <= 0) throw new Error("Concurrency must be a positive number");
            let targetLeadIds = [];
            if (leadSelectionMode === "ALL") {
                targetLeadIds = allLeads.map((l)=>l.id);
            } else if (leadSelectionMode === "LIBRARY") {
                if (!libraryId) throw new Error("Please select a Lead Library");
                const libraryLeads = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$lead$2d$group$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadGroupService"].getLeads(libraryId);
                targetLeadIds = libraryLeads.map((l)=>l.id);
            } else {
                targetLeadIds = selectedLeadIds;
            }
            if (targetLeadIds.length === 0) {
                throw new Error("Please select at least 1 lead to start this campaign");
            }
            const payload = {
                name,
                calling_mode: callingAgentMode,
                agent_type: callingAgentMode === "AI" ? "AI_VOICE" : "HUMAN",
                agent_id: agentId || null,
                voice_agent_id: voiceAgentId || null,
                lead_group_id: leadSelectionMode === "LIBRARY" ? libraryId : null,
                client_id: clientId || null,
                client_name: clientName,
                client_phone: clientPhone,
                twilio_number: callingMode === "twilio" ? twilioNumber : callingMode === "sip" ? twilioNumber || "SIP_CARRIER" : "LOCAL_TEST",
                carrier_id: callingMode === "sip" ? carrierId || null : null,
                trunk_id: callingMode === "sip" ? trunkId || null : null,
                caller_did_id: callingMode === "sip" ? callerDidId || null : null,
                lead_ids: targetLeadIds,
                auto_dial_enabled: dialerType === "AUTO",
                auto_dial_ratio: parseInt(autoDialRatio.split(":")[1] || "1", 10),
                schedule: {
                    description,
                    objective: objective === "Custom" ? customObjective : objective,
                    script: customScript,
                    dialer_type: dialerType,
                    agent_gender: agentGender,
                    calling_mode: callingMode,
                    calling_hours: callingHours,
                    timezone,
                    max_attempts: Number(maxAttempts),
                    retry_delay: Number(retryDelay),
                    concurrency: Number(concurrency),
                    lead_library_name: leadSelectionMode === "LIBRARY" ? leadLibraries.find((g)=>g.id === libraryId)?.filename || "Spreadsheet Library" : "Direct Leads",
                    pdf_filename: pdfFileName,
                    pdf_url: pdfFileUrl,
                    default_language: defaultLanguage
                }
            };
            const basePath = redirectPath.includes("admin") ? "/admin/campaigns/create" : "/campaigns/new";
            if (isEditMode && editCampaignId) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].update(editCampaignId, payload);
                setSuccess("Campaign updated successfully!");
                setTimeout(()=>{
                    router.push(redirectPath);
                }, 1200);
            } else {
                const created = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].create(payload);
                setSuccess("Campaign created successfully!");
                localStorage.removeItem("campaign_generic_draft");
                localStorage.removeItem("campaign_new_template_id");
                // Remove individual script keys
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$ScriptStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCRIPT_TEMPLATES"].forEach((t)=>{
                    localStorage.removeItem(`campaign_new_script_${t.id}`);
                    localStorage.removeItem(`campaign_new_pdf_name_${t.id}`);
                    localStorage.removeItem(`campaign_new_pdf_url_${t.id}`);
                });
                setTimeout(()=>{
                    router.push(redirectPath);
                }, 1200);
            }
        } catch (err) {
            setError(err.message || "Failed to save campaign");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        onClick: ()=>router.push(redirectPath),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                            lineNumber: 603,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2",
                                children: [
                                    isEditMode ? "Edit Campaign" : "Create Campaign",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-6 w-6 text-indigo-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                        lineNumber: 607,
                                        columnNumber: 64
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                lineNumber: 606,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: isEditMode ? "Update campaign script, agent parameters, target leads, and calling configuration" : "Deploy an outbound calling campaign with active AI & Voice Agents"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-rose-600 mb-4 bg-rose-50 border border-rose-200 p-3.5 rounded-xl font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                lineNumber: 617,
                columnNumber: 17
            }, this),
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-emerald-800 mb-4 bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl font-bold flex items-center gap-2",
                children: [
                    "✓ ",
                    success
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                lineNumber: 618,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$CampaignStepper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CampaignStepper"], {
                currentStep: step,
                onSelectStep: (s)=>setStep(s)
            }, void 0, false, {
                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: step === 2 ? "max-w-6xl w-full transition-all duration-300" : "max-w-4xl w-full transition-all duration-300",
                children: [
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$BasicInfoStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BasicInfoStep"], {
                        name: name,
                        setName: setName,
                        description: description,
                        setDescription: setDescription,
                        objective: objective,
                        setObjective: setObjective,
                        customObjective: customObjective,
                        setCustomObjective: setCustomObjective,
                        defaultLanguage: defaultLanguage,
                        setDefaultLanguage: setDefaultLanguage,
                        dialerType: dialerType,
                        setDialerType: setDialerType,
                        clientId: clientId,
                        setClientId: setClientId,
                        clientName: clientName,
                        setClientName: setClientName,
                        clientPhone: clientPhone,
                        setClientPhone: setClientPhone,
                        clients: clients
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 626,
                        columnNumber: 11
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$ScriptStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScriptStep"], {
                        selectedTemplateId: selectedTemplateId,
                        onTemplateChange: handleTemplateChange,
                        customScript: customScript,
                        setCustomScript: setCustomScript,
                        parsingPdf: parsingPdf,
                        pdfFileName: pdfFileName,
                        onPdfUpload: handlePdfUpload,
                        customObjective: customObjective
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 650,
                        columnNumber: 11
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$AgentStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentStep"], {
                        callingAgentMode: callingAgentMode,
                        setCallingAgentMode: setCallingAgentMode,
                        agents: agents,
                        voiceAgents: voiceAgents,
                        agentId: agentId,
                        setAgentId: setAgentId,
                        voiceAgentId: voiceAgentId,
                        setVoiceAgentId: setVoiceAgentId,
                        autoDialRatio: autoDialRatio,
                        setAutoDialRatio: setAutoDialRatio,
                        agentGender: agentGender,
                        setAgentGender: setAgentGender,
                        previewingVoice: previewingVoice,
                        onCheckVoice: handleCheckVoice
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 663,
                        columnNumber: 11
                    }, this),
                    step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$LeadsStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadsStep"], {
                        allLeads: allLeads,
                        leadLibraries: leadLibraries,
                        leadSelectionMode: leadSelectionMode,
                        setLeadSelectionMode: setLeadSelectionMode,
                        libraryId: libraryId,
                        onLibraryChange: handleLibraryChange,
                        selectedLeadIds: selectedLeadIds,
                        setSelectedLeadIds: setSelectedLeadIds
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 682,
                        columnNumber: 11
                    }, this),
                    step === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$CallingConfigStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallingConfigStep"], {
                        callingMode: callingMode,
                        setCallingMode: setCallingMode,
                        twilioNumber: twilioNumber,
                        setTwilioNumber: setTwilioNumber,
                        carrierId: carrierId,
                        setCarrierId: setCarrierId,
                        trunkId: trunkId,
                        setTrunkId: setTrunkId,
                        callerDidId: callerDidId,
                        setCallerDidId: setCallerDidId,
                        callingHours: callingHours,
                        setCallingHours: setCallingHours,
                        timezone: timezone,
                        setTimezone: setTimezone,
                        maxAttempts: maxAttempts,
                        setMaxAttempts: setMaxAttempts,
                        retryDelay: retryDelay,
                        setRetryDelay: setRetryDelay,
                        concurrency: concurrency,
                        setConcurrency: setConcurrency
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 695,
                        columnNumber: 11
                    }, this),
                    step === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$campaign$2f$ReviewStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReviewStep"], {
                        name: name,
                        description: description,
                        objective: objective,
                        customObjective: customObjective,
                        customScript: customScript,
                        clientName: clientName,
                        clientPhone: clientPhone,
                        callingAgentMode: callingAgentMode,
                        agentId: agentId,
                        agents: agents,
                        voiceAgentId: voiceAgentId,
                        voiceAgents: voiceAgents,
                        agentGender: agentGender,
                        leadSelectionMode: leadSelectionMode,
                        targetLeadsCount: targetLeadsCount,
                        libraryId: libraryId,
                        leadLibraries: leadLibraries,
                        defaultLanguage: defaultLanguage,
                        callingMode: callingMode,
                        twilioNumber: twilioNumber,
                        callingHours: callingHours,
                        timezone: timezone,
                        maxAttempts: maxAttempts,
                        retryDelay: retryDelay,
                        concurrency: concurrency,
                        onGotoStep: (targetStep)=>setStep(targetStep)
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 720,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                onClick: step === 1 ? ()=>router.push(redirectPath) : prevStep,
                                className: "gap-1.5 font-semibold text-gray-600 hover:text-gray-800 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    step === 1 ? "Cancel" : "Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                lineNumber: 752,
                                columnNumber: 11
                            }, this),
                            step === 6 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: handleSave,
                                disabled: loading,
                                className: "bg-indigo-600 hover:bg-indigo-700 text-white gap-2 font-semibold shadow-sm px-6 cursor-pointer",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                            lineNumber: 769,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        isEditMode ? "Saving..." : "Creating..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                    lineNumber: 768,
                                    columnNumber: 17
                                }, this) : isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                            lineNumber: 773,
                                            columnNumber: 19
                                        }, this),
                                        " Save Campaign Changes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                    lineNumber: 772,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                            lineNumber: 777,
                                            columnNumber: 19
                                        }, this),
                                        " Create Campaign"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                    lineNumber: 776,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                lineNumber: 761,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: nextStep,
                                className: "bg-indigo-600 hover:bg-indigo-700 text-white gap-1.5 font-semibold shadow-sm cursor-pointer",
                                children: [
                                    "Next ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                        lineNumber: 787,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                                lineNumber: 782,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                        lineNumber: 751,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
                lineNumber: 624,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/campaign/CampaignCreateFlow.tsx",
        lineNumber: 599,
        columnNumber: 5
    }, this);
}
_s(CampaignCreateFlow, "k2Kz3z+r79+RBm29G1GNBFL43C0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CampaignCreateFlow;
var _c;
__turbopack_context__.k.register(_c, "CampaignCreateFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/CampaignStepper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAMPAIGN_STEPS",
    ()=>CAMPAIGN_STEPS,
    "CampaignStepper",
    ()=>CampaignStepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
"use client";
;
;
const CAMPAIGN_STEPS = [
    {
        num: 1,
        label: "Basic Info",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"]
    },
    {
        num: 2,
        label: "Script",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        num: 3,
        label: "Agent",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
    },
    {
        num: 4,
        label: "Leads",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
    },
    {
        num: 5,
        label: "Calling Config",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    },
    {
        num: 6,
        label: "Review",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
    }
];
function CampaignStepper({ currentStep, onSelectStep }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8 max-w-4xl bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: CAMPAIGN_STEPS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center flex-1 last:flex-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center w-full justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onSelectStep(s.num),
                                    className: `flex items-center justify-center h-10 w-10 rounded-full font-semibold border-2 transition-all cursor-pointer ${currentStep === s.num ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100 scale-110" : currentStep > s.num ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-gray-200 text-gray-400 hover:border-gray-300"}`,
                                    title: s.label,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/CampaignStepper.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/CampaignStepper.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                s.num < 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex-1 h-0.5 mx-2 min-w-[20px] transition-all duration-300 ${currentStep > s.num ? "bg-emerald-500" : "bg-gray-150"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/CampaignStepper.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/CampaignStepper.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onSelectStep(s.num),
                            className: `mt-2 text-[11px] font-bold transition-all truncate max-w-[80px] cursor-pointer ${currentStep === s.num ? "text-indigo-600 font-extrabold scale-105" : "text-gray-400 hover:text-gray-650"}`,
                            children: s.label
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/CampaignStepper.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, s.num, true, {
                    fileName: "[project]/components/campaign/CampaignStepper.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/campaign/CampaignStepper.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/campaign/CampaignStepper.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = CampaignStepper;
var _c;
__turbopack_context__.k.register(_c, "CampaignStepper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/LeadsStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadsStep",
    ()=>LeadsStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-minus.js [app-client] (ecmascript) <export default as MinusSquare>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LeadsStep({ allLeads, leadLibraries, leadSelectionMode, setLeadSelectionMode, libraryId, onLibraryChange, selectedLeadIds, setSelectedLeadIds }) {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [expandedGroups, setExpandedGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleExpandGroup = (groupKey)=>{
        setExpandedGroups((prev)=>({
                ...prev,
                [groupKey]: !prev[groupKey]
            }));
    };
    // Group leads by Excel file / library
    const excelGroupsMap = new Map();
    const manualLeadsList = [];
    allLeads.forEach((lead)=>{
        if (lead.source === "EXCEL_IMPORT" || lead.original_filename) {
            const filename = lead.original_filename || "Excel_Import_File";
            const key = lead.group_id || filename;
            if (!excelGroupsMap.has(key)) {
                excelGroupsMap.set(key, {
                    key,
                    filename,
                    groupId: lead.group_id || undefined,
                    leads: []
                });
            }
            excelGroupsMap.get(key).leads.push(lead);
        } else {
            manualLeadsList.push(lead);
        }
    });
    const searchLower = searchTerm.trim().toLowerCase();
    const filteredExcelGroups = Array.from(excelGroupsMap.values()).filter((group)=>{
        if (!searchLower) return true;
        const filenameMatch = group.filename.toLowerCase().includes(searchLower);
        const leadMatch = group.leads.some((l)=>`${l.first_name} ${l.last_name}`.toLowerCase().includes(searchLower) || l.email && l.email.toLowerCase().includes(searchLower) || l.phone && l.phone.includes(searchLower) || l.company && l.company.toLowerCase().includes(searchLower));
        return filenameMatch || leadMatch;
    });
    const filteredManualLeads = manualLeadsList.filter((l)=>{
        if (!searchLower) return true;
        return `${l.first_name} ${l.last_name}`.toLowerCase().includes(searchLower) || l.email && l.email.toLowerCase().includes(searchLower) || l.phone && l.phone.includes(searchLower) || l.company && l.company.toLowerCase().includes(searchLower);
    });
    const handleToggleLead = (id)=>{
        setSelectedLeadIds((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const handleToggleGroup = (groupLeads)=>{
        const groupLeadIds = groupLeads.map((l)=>l.id);
        const allSelected = groupLeadIds.every((id)=>selectedLeadIds.includes(id));
        if (allSelected) {
            // Unselect all in this group
            setSelectedLeadIds((prev)=>prev.filter((id)=>!groupLeadIds.includes(id)));
        } else {
            // Select all in this group
            setSelectedLeadIds((prev)=>Array.from(new Set([
                    ...prev,
                    ...groupLeadIds
                ])));
        }
    };
    const handleSelectAllFiltered = ()=>{
        const allFilteredLeads = [
            ...filteredExcelGroups.flatMap((g)=>g.leads),
            ...filteredManualLeads
        ];
        const filteredIds = allFilteredLeads.map((l)=>l.id);
        const allFilteredSelected = filteredIds.length > 0 && filteredIds.every((id)=>selectedLeadIds.includes(id));
        if (allFilteredSelected) {
            setSelectedLeadIds((prev)=>prev.filter((id)=>!filteredIds.includes(id)));
        } else {
            setSelectedLeadIds((prev)=>Array.from(new Set([
                    ...prev,
                    ...filteredIds
                ])));
        }
    };
    // Determine active total count for display badge
    let activeCount = 0;
    if (leadSelectionMode === "ALL") {
        activeCount = allLeads.length;
    } else if (leadSelectionMode === "LIBRARY") {
        const lib = leadLibraries.find((g)=>g.id === libraryId);
        activeCount = lib ? lib.lead_count : 0;
    } else {
        activeCount = selectedLeadIds.length;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6 space-y-5 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-gray-900 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                className: "h-5 w-5 text-indigo-500"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            " Step 4: Select Target Leads"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-3 py-1 rounded-full font-bold",
                        children: [
                            activeCount,
                            " Leads Selected"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/LeadsStep.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setLeadSelectionMode("ALL"),
                        className: `p-4 rounded-xl border text-left transition-all cursor-pointer ${leadSelectionMode === "ALL" ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-sm" : "border-gray-200 hover:border-gray-300 bg-white"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "h-4 w-4 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this),
                                            " All Leads"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    leadSelectionMode === "ALL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-4 w-4 text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 167,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 font-medium",
                                children: [
                                    "Include all (",
                                    allLeads.length,
                                    ") created outbound leads"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setLeadSelectionMode("LIBRARY"),
                        className: `p-4 rounded-xl border text-left transition-all cursor-pointer ${leadSelectionMode === "LIBRARY" ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-sm" : "border-gray-200 hover:border-gray-300 bg-white"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                className: "h-4 w-4 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            " Lead Library / CSV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    leadSelectionMode === "LIBRARY" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-4 w-4 text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 187,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 font-medium",
                                children: [
                                    "Select from imported CSV / Excel libraries (",
                                    leadLibraries.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setLeadSelectionMode("MANUAL"),
                        className: `p-4 rounded-xl border text-left transition-all cursor-pointer ${leadSelectionMode === "MANUAL" ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-sm" : "border-gray-200 hover:border-gray-300 bg-white"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                className: "h-4 w-4 text-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            " Select Manually"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    leadSelectionMode === "MANUAL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-4 w-4 text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 207,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 font-medium",
                                children: "Handpick specific leads using checkboxes"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/LeadsStep.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            leadSelectionMode === "ALL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-emerald-50/70 text-emerald-900 p-4 rounded-xl border border-emerald-100 flex items-center justify-between text-sm font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-gray-900",
                                children: "All Created Leads Selected"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-emerald-800 mt-0.5",
                                children: [
                                    "This campaign will target all ",
                                    allLeads.length,
                                    " leads currently registered in your system."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-emerald-100 text-emerald-800 py-1.5 px-4 rounded-full font-extrabold text-xs shrink-0",
                        children: [
                            allLeads.length,
                            " Leads"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/LeadsStep.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this),
            leadSelectionMode === "LIBRARY" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider font-medium",
                        children: "Target Leads Library File"
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: libraryId,
                        onChange: (e)=>onLibraryChange(e.target.value),
                        className: "w-full h-11 px-3 rounded-xl border border-input bg-background text-sm font-semibold cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Choose Library File..."
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            leadLibraries.map((lib)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: lib.id,
                                    children: [
                                        lib.filename,
                                        " (",
                                        lib.lead_count,
                                        " Leads)"
                                    ]
                                }, lib.id, true, {
                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    leadLibraries.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 p-3 rounded-xl",
                        children: 'No CSV/Excel Lead Libraries found. Switch to "All Leads" above or import a CSV file on the Leads page.'
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 249,
                        columnNumber: 13
                    }, this),
                    libraryId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-100 flex justify-between items-center text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Selected library file contains:"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 255,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-emerald-100 text-emerald-800 py-1 px-3.5 rounded-full font-bold text-xs",
                                children: [
                                    activeCount,
                                    " Leads"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 254,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/LeadsStep.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            leadSelectionMode === "MANUAL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        placeholder: "Search leads by name, phone, email, company, filename...",
                                        className: "pl-9 text-xs font-medium"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                onClick: handleSelectAllFiltered,
                                className: "text-xs font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-50 shrink-0",
                                children: "Deselect All Filtered"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    filteredExcelGroups.map((group)=>{
                        const groupLeadIds = group.leads.map((l)=>l.id);
                        const isAllSelected = groupLeadIds.every((id)=>selectedLeadIds.includes(id));
                        const isSomeSelected = groupLeadIds.some((id)=>selectedLeadIds.includes(id)) && !isAllSelected;
                        const searchMatchesLead = searchLower && group.leads.some((l)=>`${l.first_name} ${l.last_name}`.toLowerCase().includes(searchLower) || l.email && l.email.toLowerCase().includes(searchLower) || l.phone && l.phone.includes(searchLower) || l.company && l.company.toLowerCase().includes(searchLower));
                        const isExpanded = !!expandedGroups[group.key] || !!searchMatchesLead;
                        const selectedCountInGroup = groupLeadIds.filter((id)=>selectedLeadIds.includes(id)).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-indigo-150 rounded-2xl p-4 shadow-sm space-y-3 transition-all hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 flex-1 min-w-[260px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleToggleGroup(group.leads),
                                                    className: "p-1 text-indigo-600 hover:bg-indigo-50 rounded-lg cursor-pointer shrink-0",
                                                    title: isAllSelected ? "Deselect All in File" : "Select All in File",
                                                    children: isAllSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                        className: "h-5 w-5 text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 25
                                                    }, this) : isSomeSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MinusSquare$3e$__["MinusSquare"], {
                                                        className: "h-5 w-5 text-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                        className: "h-5 w-5 text-slate-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-extrabold text-slate-900 tracking-tight leading-snug break-all",
                                                            children: group.filename
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 flex-wrap text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100",
                                                                    children: [
                                                                        selectedCountInGroup,
                                                                        " / ",
                                                                        group.leads.length,
                                                                        " Customers Selected"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                    lineNumber: 338,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider text-[10px]",
                                                                    children: "EXCEL IMPORT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>toggleExpandGroup(group.key),
                                            className: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 font-bold text-xs h-8 px-3 rounded-xl gap-1.5 cursor-pointer shrink-0",
                                            children: [
                                                isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 35
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 75
                                                }, this),
                                                isExpanded ? "HIDE CUSTOMERS" : "VIEW CUSTOMERS"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                    lineNumber: 312,
                                    columnNumber: 17
                                }, this),
                                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 border-t border-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-200/80 rounded-xl overflow-hidden max-h-56 overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-left text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[10px] border-b border-slate-200 sticky top-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-2.5 w-10 text-center",
                                                                children: "Select"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-2.5",
                                                                children: "Customer Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-2.5",
                                                                children: "Phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-2.5",
                                                                children: "Company"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-2.5",
                                                                children: "Requirement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "divide-y divide-slate-100 font-medium text-slate-700",
                                                    children: group.leads.map((lead)=>{
                                                        const isChecked = selectedLeadIds.includes(lead.id);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            onClick: ()=>handleToggleLead(lead.id),
                                                            className: `cursor-pointer transition-colors ${isChecked ? "bg-indigo-50/60 font-semibold" : "hover:bg-slate-50"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-2.5 text-center",
                                                                    children: isChecked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                                        className: "h-4 w-4 text-indigo-600 inline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 37
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                        className: "h-4 w-4 text-slate-300 inline"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                        lineNumber: 389,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                    lineNumber: 385,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-2.5 font-bold text-slate-900",
                                                                    children: [
                                                                        lead.first_name,
                                                                        " ",
                                                                        lead.last_name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-2.5 font-mono",
                                                                    children: lead.phone || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-2.5",
                                                                    children: lead.company || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-2.5 text-slate-500 truncate max-w-xs",
                                                                    children: lead.requirement || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, lead.id, true, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 31
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                            lineNumber: 364,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                        lineNumber: 363,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                    lineNumber: 362,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, group.key, true, {
                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                            lineNumber: 308,
                            columnNumber: 15
                        }, this);
                    }),
                    filteredManualLeads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-extrabold uppercase text-slate-500 tracking-wider",
                                children: [
                                    "Manual Outbound Leads (",
                                    filteredManualLeads.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 413,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-200 rounded-xl overflow-hidden max-h-56 overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "bg-slate-50 border-b border-slate-200 font-semibold text-slate-500 uppercase sticky top-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-2.5 w-10 text-center",
                                                        children: "Select"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-2.5",
                                                        children: "Customer Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-2.5",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-2.5",
                                                        children: "Company"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-2.5",
                                                        children: "Requirement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                lineNumber: 419,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-slate-100 font-medium text-slate-700",
                                            children: filteredManualLeads.map((lead)=>{
                                                const isChecked = selectedLeadIds.includes(lead.id);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    onClick: ()=>handleToggleLead(lead.id),
                                                    className: `cursor-pointer transition-colors ${isChecked ? "bg-indigo-50/60 font-semibold" : "hover:bg-slate-50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2.5 text-center",
                                                            children: isChecked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                                className: "h-4 w-4 text-indigo-600 inline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                className: "h-4 w-4 text-slate-300 inline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2.5 font-bold text-slate-900",
                                                            children: [
                                                                lead.first_name,
                                                                " ",
                                                                lead.last_name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2.5 font-mono",
                                                            children: lead.phone || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2.5",
                                                            children: lead.company || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2.5 text-slate-500 truncate max-w-xs",
                                                            children: lead.requirement || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, lead.id, true, {
                                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/LeadsStep.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/LeadsStep.tsx",
                                    lineNumber: 417,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/LeadsStep.tsx",
                                lineNumber: 416,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 412,
                        columnNumber: 13
                    }, this),
                    filteredExcelGroups.length === 0 && filteredManualLeads.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 text-center text-slate-400 font-medium bg-slate-50 rounded-2xl border border-dashed border-slate-200",
                        children: "No leads match your search criteria."
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/LeadsStep.tsx",
                        lineNumber: 461,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/LeadsStep.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/campaign/LeadsStep.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(LeadsStep, "UPw2TnGC0rbBp2OAQ2weuczdd5U=");
_c = LeadsStep;
var _c;
__turbopack_context__.k.register(_c, "LeadsStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/ReviewStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewStep",
    ()=>ReviewStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
"use client";
;
;
;
function ReviewStep({ name, description, objective, customObjective, customScript, clientName, clientPhone, callingAgentMode, agentId, agents, voiceAgentId, voiceAgents, agentGender, leadSelectionMode, targetLeadsCount, libraryId, leadLibraries, defaultLanguage, callingMode, twilioNumber, callingHours, timezone, maxAttempts, retryDelay, concurrency, onGotoStep }) {
    const selectedAgent = agents.find((a)=>a.id === agentId);
    const selectedVoiceAgentIds = voiceAgentId ? voiceAgentId.split(",").filter(Boolean) : [];
    const selectedVoiceAgents = voiceAgents.filter((e)=>selectedVoiceAgentIds.includes(e.id));
    const voiceAgentNames = selectedVoiceAgents.length > 0 ? selectedVoiceAgents.map((e)=>e.name).join(", ") : selectedVoiceAgentIds.length > 0 ? `${selectedVoiceAgentIds.length} Voice Agents Selected` : "None selected";
    const selectedLibrary = leadLibraries.find((g)=>g.id === libraryId);
    const langNames = {
        auto: "Auto Detect",
        en: "English",
        ta: "Tamil",
        te: "Telugu",
        ml: "Malayalam",
        kn: "Kannada",
        hi: "Hindi",
        bn: "Bengali",
        mr: "Marathi",
        gu: "Gujarati",
        pa: "Punjabi",
        ur: "Urdu",
        or: "Odia"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6 space-y-6 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b pb-4 border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-900 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-5 w-5 text-indigo-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/campaign/ReviewStep.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                " Step 6: Review & Edit Campaign Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/ReviewStep.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400 mt-1",
                            children: 'Review your configuration. Click "Edit" on any section below to change parameters.'
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/ReviewStep.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/campaign/ReviewStep.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/campaign/ReviewStep.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-extrabold text-slate-500 uppercase tracking-wider",
                                children: "1. Basic Information & Client"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            onGotoStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onGotoStep(1),
                                className: "text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer",
                                children: "✏️ Edit Basic Info"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold",
                                        children: "Campaign Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-800",
                                        children: name || "—"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-indigo-600 block font-semibold",
                                        children: "Target Client"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-indigo-900",
                                        children: [
                                            clientName || "—",
                                            " ",
                                            clientPhone ? `(${clientPhone})` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold",
                                        children: "Objective"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-700",
                                        children: objective === "Custom" ? customObjective : objective || "Not specified"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold",
                                        children: "Regional Language"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-800",
                                        children: langNames[defaultLanguage] || "Auto Detect"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: description || "No description provided"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/ReviewStep.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-extrabold text-slate-500 uppercase tracking-wider",
                                children: "2. Campaign Script"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            onGotoStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onGotoStep(2),
                                className: "text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer",
                                children: "✏️ Edit Script"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-3 rounded-lg border border-gray-150 font-mono text-xs text-gray-700 max-h-32 overflow-y-auto leading-relaxed",
                        children: customScript || "No script entered"
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/ReviewStep.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-extrabold text-slate-500 uppercase tracking-wider",
                                children: "3. Agent Selection & Mode"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            onGotoStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onGotoStep(3),
                                className: "text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer",
                                children: "✏️ Edit Agent"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: callingAgentMode === "AI" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-indigo-600 block",
                                    children: [
                                        "AI Agent: ",
                                        selectedAgent ? selectedAgent.name : "None selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/ReviewStep.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 font-medium",
                                    children: [
                                        "Gender: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "capitalize text-gray-600 font-bold",
                                            children: agentGender
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/ReviewStep.tsx",
                                            lineNumber: 180,
                                            columnNumber: 25
                                        }, this),
                                        selectedVoiceAgentIds.length > 0 && ` • Backup Human: ${voiceAgentNames}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/campaign/ReviewStep.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/ReviewStep.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-emerald-600 block",
                                children: [
                                    "Direct Voice Agent(s): ",
                                    voiceAgentNames
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/campaign/ReviewStep.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/ReviewStep.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-extrabold text-slate-500 uppercase tracking-wider",
                                children: "4. Target Leads"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            onGotoStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onGotoStep(4),
                                className: "text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer",
                                children: "✏️ Edit Leads"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-emerald-600",
                            children: [
                                leadSelectionMode === "ALL" && `All Created Leads (${targetLeadsCount} Leads)`,
                                leadSelectionMode === "LIBRARY" && `${selectedLibrary?.filename || "Lead Library"} (${targetLeadsCount} Leads)`,
                                leadSelectionMode === "MANUAL" && `Manually Selected (${targetLeadsCount} Leads)`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/campaign/ReviewStep.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/ReviewStep.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-extrabold text-slate-500 uppercase tracking-wider",
                                children: "5. Calling Configuration"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            onGotoStep && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onGotoStep(5),
                                className: "text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer",
                                children: "✏️ Edit Config"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold uppercase",
                                        children: "Calling Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-indigo-700",
                                        children: callingMode?.toLowerCase() === "sip" ? "SIP Carrier" : callingMode?.toLowerCase() === "local" ? "Local Test Mode" : "Twilio Outbound"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold uppercase",
                                        children: "Caller ID"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono font-bold text-gray-800",
                                        children: callingMode === "local" ? "LOCAL_TEST (Simulated)" : twilioNumber || "Default"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold uppercase",
                                        children: "Allowed Hours / Timezone"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-700",
                                        children: [
                                            callingHours,
                                            " (",
                                            timezone,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold uppercase",
                                        children: "Max Attempts / Delay"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-700",
                                        children: [
                                            maxAttempts,
                                            " attempts / ",
                                            retryDelay,
                                            " mins"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400 block font-semibold uppercase",
                                        children: "Concurrency"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-800",
                                        children: [
                                            concurrency,
                                            " Parallel channel(s)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ReviewStep.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ReviewStep.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/ReviewStep.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/campaign/ReviewStep.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c = ReviewStep;
var _c;
__turbopack_context__.k.register(_c, "ReviewStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/campaign/ScriptStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMOTIONS",
    ()=>EMOTIONS,
    "EMOTION_VOICE_MODULATION",
    ()=>EMOTION_VOICE_MODULATION,
    "SCRIPT_TEMPLATES",
    ()=>SCRIPT_TEMPLATES,
    "ScriptStep",
    ()=>ScriptStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/campaign.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const EMOTIONS = [
    {
        type: "happy",
        label: "Happy",
        icon: "🙂",
        description: "Warm, upbeat, and cheerful"
    },
    {
        type: "sad",
        label: "Sad",
        icon: "😢",
        description: "Somber, empathetic, and gentle"
    },
    {
        type: "fearful",
        label: "Fearful",
        icon: "😨",
        description: "Tense, hurried, and urgent"
    },
    {
        type: "disgusted",
        label: "Disgusted",
        icon: "🤢",
        description: "Averse and disapproving"
    },
    {
        type: "surprised",
        label: "Surprised",
        icon: "😮",
        description: "Excited, lively, and dynamic"
    },
    {
        type: "neutral",
        label: "Neutral",
        icon: "😐",
        description: "Default, balanced, and professional"
    },
    {
        type: "fluent",
        label: "Fluent",
        icon: "🗣",
        description: "Articulate, confident, and smooth"
    }
];
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
const SCRIPT_TEMPLATES = [
    {
        id: "solar",
        name: "Solar",
        text: `You are an AI voice agent representing Home Solar Experts. Your role is to conduct a natural, friendly, and professional phone conversation with homeowners regarding a promotional solar consultation program.

IMPORTANT INSTRUCTIONS:
* Speak naturally like a real human sales representative.
* Do not read the entire script at once.
* Ask only one question at a time and wait for the customer's response.
* Follow the conversation flow dynamically based on the customer's answers.
* Do not repeat questions if the customer has already provided the information.
* Handle objections naturally using the objection-handling guidelines below.
* Keep the conversation concise and aim to complete it in approximately 2 minutes.
* Collect and validate all required qualifying information before proceeding.
* Never claim that the customer is qualified until all qualification requirements are met.

CONVERSATION FLOW

1. GREETING
Start the call with:
"Hi, my name is [Agent Name], <break time="0.5s" /> and I'm calling you from Home Solar Experts. How are you today?"
Wait for the customer's response before continuing.

2. REASON FOR THE CALL
After the greeting, explain:
"This is not a sales call. We are currently running a promotional program in your area that provides homeowners with a free consultation to see how they may be able to get solar panels without spending money upfront. Solar panels may help reduce electricity bills and can potentially increase home value as well."
"I just need to collect a few details and check your eligibility for the free consultation. Don't worry, I'll finish the call in less than two minutes."

3. QUALIFICATION PROCESS
Ask the following questions one at a time.

Question 1 – Home Ownership:
"Do you currently own your home, or are you renting?"
Qualification requirement:
* Must own the home.
* If the customer rents the home, they do not qualify.

Question 2 – Property Type and Taxpayer Status:
"Is it a single-residence home, and are you currently a taxpayer?"
Qualification requirements:
* Must be a single-residence home.
* Must be a taxpayer.

Question 3 – Homeowner Name:
"For confirmation, am I speaking with the homeowner? May I have your first and last name, please?"
Collect:
* First Name
* Last Name

Question 4 – ZIP Code:
"To validate your location, could you please confirm your 5-digit ZIP code?"
Validation:
* ZIP code must contain exactly 5 digits.
* If the customer provides an invalid ZIP code, politely ask them to confirm it again.

Question 5 – Monthly Electricity Bill:
"Finally, approximately how much is your monthly electricity bill? Is it more than $150?"
Qualification requirement:
* Monthly electricity bill must be more than $150.

4. QUALIFICATION DECISION
The customer qualifies only if ALL of the following conditions are satisfied:
* Owns the home
* Property is a single-residence home
* Is a taxpayer
* Valid 5-digit ZIP code is provided
* Monthly electricity bill is more than $150

If all requirements are met, say:
"Looks like you qualify! Congratulations!"
Then continue with the appointment process.

If the customer does not meet one or more qualification requirements, politely inform them that they are currently not eligible for the consultation program. Do not continue to the appointment scheduling process.

5. EMAIL AND APPOINTMENT SCHEDULING
For qualified customers, say:
"I'll have my supervisor send you a quote to your email for reference before they come and meet with you in person. May I have your email address, please?"
Collect and confirm the email address.

Then ask for availability:
"What day would work better for you, tomorrow or the day after tomorrow?"
Available appointment hours: 10:00 AM to 7:00 PM.
Offer suitable time options, for example:
"We have slots available between 10 AM and 7 PM. Would you prefer a morning, afternoon, or evening appointment?"
Confirm the selected date and time before ending the call.

6. OBJECTION HANDLING
If customer says "I'm not interested":
"I completely understand. Just to clarify, we're not asking you to buy anything on this call. This program is simply to provide information about solar energy and see whether you may qualify for options that could help reduce your electricity costs. Some homeowners may be able to reduce their monthly electricity expenses by around 40 to 50 percent depending on their situation. It will only take a minute or two to check your eligibility."

If customer says "My roof has issues" or "My roof is old":
"I understand. We have solar engineers and analysts who can assess the condition and suitability of the roof. The roof condition does not necessarily mean you cannot check your eligibility, so let me just verify a few details first."

If customer says "Solar is too expensive":
"Yes, solar systems can be expensive, which is exactly why this program may be helpful. Depending on eligibility and available options, some homeowners may be able to explore programs with little or no upfront cost. That's why I just need to verify a few details to see if you qualify for the free consultation."

7. END CALL RESPONSES
Qualified Customer:
"Perfect! You're all set. I've noted your details, and our supervisor will send the quote information to your email before the appointment. Thank you for your time, and have a great day!"

Not Qualified:
"Thank you for your time. Based on the information provided, it looks like you may not currently qualify for this consultation program. We appreciate your interest, and have a great day!"

Not Interested:
"No problem at all. Thank you for your time. Have a wonderful day!"`
    },
    {
        id: "aca",
        name: "ACA",
        text: "Hello [Lead Name], <break time=\"0.5s\" /> this is [Agent Name] calling to see if you have qualified for the zero-dollar health insurance coverage under the ACA program. <break time=\"1.0s\" /> How are you doing today?"
    },
    {
        id: "mua",
        name: "MUA",
        text: "Hi [Lead Name], <break time=\"0.5s\" /> this is [Agent Name] calling to follow up on your request for Medicare and Medicare Advantage plan options. <break time=\"1.0s\" /> Do you have a few moments to discuss your coverage?"
    },
    {
        id: "custom",
        name: "Custom (Blank)",
        text: ""
    }
];
function ScriptStep({ selectedTemplateId, onTemplateChange, customScript, setCustomScript, parsingPdf, pdfFileName, onPdfUpload, customObjective }) {
    _s();
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showCustomInput, setShowCustomInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customSeconds, setCustomSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2.0");
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEmotionMenu, setShowEmotionMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingPreview, setIsPlayingPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingPreview, setLoadingPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const emotionMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const customPauseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previewAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScriptStep.useEffect": ()=>{
            const handleClickOutside = {
                "ScriptStep.useEffect.handleClickOutside": (e)=>{
                    if (emotionMenuRef.current && !emotionMenuRef.current.contains(e.target)) {
                        setShowEmotionMenu(false);
                    }
                    if (customPauseRef.current && !customPauseRef.current.contains(e.target)) {
                        setShowCustomInput(false);
                    }
                }
            }["ScriptStep.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ScriptStep.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis) {
                        window.speechSynthesis.cancel();
                    }
                }
            })["ScriptStep.useEffect"];
        }
    }["ScriptStep.useEffect"], []);
    // Inserts text precisely at cursor selection
    const insertAtCursor = (textToInsert, notificationMsg)=>{
        const textarea = textareaRef.current;
        if (!textarea) {
            setCustomScript(customScript ? `${customScript} ${textToInsert}` : textToInsert);
            return;
        }
        const start = textarea.selectionStart ?? customScript.length;
        const end = textarea.selectionEnd ?? customScript.length;
        const currentVal = customScript || "";
        const before = currentVal.substring(0, start);
        const after = currentVal.substring(end);
        const newVal = before + textToInsert + after;
        setCustomScript(newVal);
        if (notificationMsg) {
            setNotification(notificationMsg);
            setTimeout(()=>setNotification(null), 2400);
        }
        // Move cursor right after the inserted tag and refocus
        setTimeout(()=>{
            textarea.focus();
            const nextPos = start + textToInsert.length;
            textarea.setSelectionRange(nextPos, nextPos);
        }, 15);
    };
    const handleInsertPause = (sec)=>{
        const formatted = typeof sec === "number" ? `${sec}s` : sec.endsWith("s") ? sec : `${sec}s`;
        insertAtCursor(`<break time="${formatted}" />`, `Inserted ${formatted} pause gap at cursor`);
        setShowCustomInput(false);
    };
    const handleCustomSubmit = (e)=>{
        e.preventDefault();
        const val = parseFloat(customSeconds);
        if (isNaN(val) || val < 0.1 || val > 10.0) {
            setNotification("Pause duration must be between 0.1s and 10.0s");
            setTimeout(()=>setNotification(null), 3000);
            return;
        }
        const cleanStr = val.toFixed(2).replace(/\.?0+$/, "") || "0.1";
        handleInsertPause(cleanStr);
    };
    const handleInsertEmotion = (emotionType)=>{
        const textarea = textareaRef.current;
        const tag = `<emotion type="${emotionType}" />`;
        if (!textarea) {
            insertAtCursor(tag, `Inserted ${emotionType} emotion tag`);
            setShowEmotionMenu(false);
            return;
        }
        const start = textarea.selectionStart ?? (customScript || "").length;
        const end = textarea.selectionEnd ?? (customScript || "").length;
        const currentVal = customScript || "";
        const selectedText = currentVal.substring(start, end);
        let textToInsert = tag;
        let nextCursor = start + tag.length;
        if (selectedText.length > 0) {
            textToInsert = `<emotion type="${emotionType}" />${selectedText}<emotion type="neutral" />`;
            nextCursor = start + textToInsert.length;
        }
        const before = currentVal.substring(0, start);
        const after = currentVal.substring(end);
        setCustomScript(before + textToInsert + after);
        setNotification(`Applied ${emotionType} emotion`);
        setTimeout(()=>setNotification(null), 2400);
        setShowEmotionMenu(false);
        setTimeout(()=>{
            textarea.focus();
            textarea.setSelectionRange(nextCursor, nextCursor);
        }, 15);
    };
    const stopPreview = ()=>{
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        if (previewAudioRef.current) {
            try {
                previewAudioRef.current.pause();
                previewAudioRef.current.currentTime = 0;
            } catch (e) {}
            previewAudioRef.current = null;
        }
        setIsPlayingPreview(false);
        setLoadingPreview(false);
    };
    const playBrowserSynthesisFallback = (textToSpeak)=>{
        if (("TURBOPACK compile-time value", "object") === "undefined" || !window.speechSynthesis) {
            setNotification("Speech synthesis is not supported in this browser");
            setTimeout(()=>setNotification(null), 2400);
            setIsPlayingPreview(false);
            return;
        }
        window.speechSynthesis.cancel();
        setIsPlayingPreview(true);
        const combinedRegex = /(<emotion\s+type=["']?([a-zA-Z]+)["']?\s*\/?>)|(<break\s+time=["']?(\d*\.?\d+)s?["']?\s*\/?>)/gi;
        const segments = [];
        let currentEmotion = "neutral";
        let lastIdx = 0;
        let match;
        while((match = combinedRegex.exec(textToSpeak)) !== null){
            const chunk = textToSpeak.substring(lastIdx, match.index).replace(/<[^>]+>/g, "").trim();
            const emotionTag = match[2];
            const breakTag = match[4];
            if (emotionTag) {
                if (chunk) {
                    segments.push({
                        text: chunk,
                        emotion: currentEmotion,
                        pauseAfterMs: 0
                    });
                }
                currentEmotion = emotionTag.toLowerCase();
            } else if (breakTag) {
                const pauseSec = Math.max(0.1, Math.min(10.0, parseFloat(breakTag) || 0));
                const pauseMs = Math.round(pauseSec * 1000);
                if (chunk) {
                    segments.push({
                        text: chunk,
                        emotion: currentEmotion,
                        pauseAfterMs: pauseMs
                    });
                } else if (segments.length > 0) {
                    segments[segments.length - 1].pauseAfterMs += pauseMs;
                } else {
                    segments.push({
                        text: "",
                        emotion: currentEmotion,
                        pauseAfterMs: pauseMs
                    });
                }
            }
            lastIdx = combinedRegex.lastIndex;
        }
        const remaining = textToSpeak.substring(lastIdx).replace(/<[^>]+>/g, "").trim();
        if (remaining) {
            segments.push({
                text: remaining,
                emotion: currentEmotion,
                pauseAfterMs: 0
            });
        }
        if (segments.length === 0) {
            setIsPlayingPreview(false);
            return;
        }
        let segIdx = 0;
        const playNext = ()=>{
            if (segIdx >= segments.length) {
                setIsPlayingPreview(false);
                return;
            }
            const seg = segments[segIdx++];
            if (!seg.text) {
                if (seg.pauseAfterMs > 0) {
                    setTimeout(playNext, seg.pauseAfterMs);
                } else {
                    playNext();
                }
                return;
            }
            const cleanText = seg.text.replace(/\[Lead Name\]/gi, "Alex").replace(/\[Agent Name\]/gi, "Sarah");
            const utterance = new SpeechSynthesisUtterance(cleanText);
            const mod = EMOTION_VOICE_MODULATION[seg.emotion] || EMOTION_VOICE_MODULATION.neutral;
            utterance.pitch = mod.pitch;
            utterance.rate = mod.rate;
            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.speechSynthesis) {
                const voices = window.speechSynthesis.getVoices();
                if (voices && voices.length > 0) {
                    const isTamil = /[\u0B80-\u0BFF]/.test(cleanText);
                    const langTarget = isTamil ? "ta-in" : "en-in";
                    const bestVoice = voices.find((v)=>(v.lang || "").toLowerCase().startsWith(langTarget.slice(0, 2)) && ((v.name || "").toLowerCase().includes("natural") || (v.name || "").toLowerCase().includes("online") || (v.name || "").toLowerCase().includes("google"))) || voices.find((v)=>(v.lang || "").toLowerCase().startsWith(langTarget.slice(0, 2))) || voices.find((v)=>(v.name || "").toLowerCase().includes("natural") || (v.name || "").toLowerCase().includes("google"));
                    if (bestVoice) {
                        utterance.voice = bestVoice;
                    }
                }
            }
            utterance.onend = ()=>{
                if (seg.pauseAfterMs > 0) {
                    setTimeout(playNext, seg.pauseAfterMs);
                } else {
                    playNext();
                }
            };
            utterance.onerror = ()=>{
                if (seg.pauseAfterMs > 0) {
                    setTimeout(playNext, seg.pauseAfterMs);
                } else {
                    playNext();
                }
            };
            window.speechSynthesis.speak(utterance);
        };
        playNext();
    };
    const handlePreviewScript = async ()=>{
        if (isPlayingPreview || loadingPreview) {
            stopPreview();
            return;
        }
        const textToSpeak = (customScript || "").trim();
        if (!textToSpeak) {
            setNotification("Please write or select a script to preview");
            setTimeout(()=>setNotification(null), 2400);
            return;
        }
        stopPreview();
        setLoadingPreview(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$campaign$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["campaignService"].previewSpeech({
                script: textToSpeak,
                lead_name: "Customer",
                agent_name: "Alex"
            });
            if (res && res.audio_url) {
                const audio = new Audio(res.audio_url);
                previewAudioRef.current = audio;
                setIsPlayingPreview(true);
                setLoadingPreview(false);
                audio.onended = ()=>{
                    setIsPlayingPreview(false);
                    previewAudioRef.current = null;
                };
                audio.onerror = ()=>{
                    console.warn("Speech preview audio playback error, falling back to browser synthesis");
                    setIsPlayingPreview(false);
                    previewAudioRef.current = null;
                    playBrowserSynthesisFallback(textToSpeak);
                };
                await audio.play();
                return;
            }
        } catch (err) {
            console.warn("Speech preview API failed, using browser synthesis fallback:", err);
        } finally{
            setLoadingPreview(false);
        }
        playBrowserSynthesisFallback(textToSpeak);
    };
    const PAUSE_PRESETS = [
        "0.25s",
        "0.5s",
        "1.0s",
        "1.5s"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6 md:p-8 space-y-6 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-6 w-6 text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, this),
                                    " Step 2: Configure Script"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-0.5",
                                children: "Design your campaign conversation flow, dynamic lead variables, speech emotions, and exact pause gaps."
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3.5 w-3.5 text-emerald-600"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: notification
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                        lineNumber: 479,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/ScriptStep.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",
                                children: "Select a Script Template"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-2.5",
                                children: SCRIPT_TEMPLATES.map((t)=>{
                                    const displayName = t.id === "custom" && customObjective?.trim() ? `Custom (${customObjective.trim()})` : t.name;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onTemplateChange(t.id),
                                        className: `p-3 text-sm font-semibold rounded-xl border text-center transition-all cursor-pointer ${selectedTemplateId === t.id ? "bg-indigo-50/90 border-indigo-600 text-indigo-700 shadow-sm ring-2 ring-indigo-500/20" : "border-gray-200 hover:border-gray-300 bg-white text-gray-700 hover:bg-gray-50/60"}`,
                                        children: displayName
                                    }, t.id, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 499,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-indigo-50/50 via-slate-50 to-indigo-50/30 p-4 rounded-xl border border-indigo-100/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-indigo-600 text-white p-2.5 rounded-xl shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/campaign/ScriptStep.tsx",
                                            lineNumber: 520,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 519,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-sm text-gray-900",
                                                children: "Upload Script File"
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Automatically extract text from any document (.pdf, .docx, .txt, .csv, .md, etc.) to populate the script box."
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                lineNumber: 524,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 522,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        onChange: onPdfUpload,
                                        className: "hidden",
                                        id: "pdf-script-upload",
                                        disabled: parsingPdf
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>document.getElementById("pdf-script-upload")?.click(),
                                        disabled: parsingPdf,
                                        className: "bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 font-semibold shadow-xs",
                                        children: parsingPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "h-4 w-4 mr-2 animate-spin text-indigo-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this),
                                                "Parsing File..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/campaign/ScriptStep.tsx",
                                            lineNumber: 543,
                                            columnNumber: 17
                                        }, this) : "Choose File"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                        lineNumber: 517,
                        columnNumber: 9
                    }, this),
                    pdfFileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium px-4 py-2.5 rounded-xl flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "h-4 w-4 text-emerald-600 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Success! Loaded script text from: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: pdfFileName
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 557,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                        lineNumber: 555,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                        children: "Edit / Write Campaign Script"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 564,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-gray-400 font-medium",
                                        children: "Click anywhere in the script to place cursor, then choose pause durations or emotions below."
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 overflow-hidden shadow-xs transition-all bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ref: textareaRef,
                                        value: customScript,
                                        onChange: (e)=>setCustomScript(e.target.value),
                                        placeholder: 'Hello [Lead Name], <emotion type="happy" /> welcome! <break time="0.5s" /> This is [Agent Name] calling from...',
                                        rows: 11,
                                        className: "w-full text-sm font-normal text-gray-800 p-3.5 bg-white border-0 focus:outline-none focus:ring-0 font-mono leading-relaxed resize-y min-h-[220px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 573,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50/90 border-t border-gray-200/80 px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 font-semibold text-gray-700 mr-1 select-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-indigo-600",
                                                                children: "</>"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 588,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Pause:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 17
                                                    }, this),
                                                    PAUSE_PRESETS.map((sec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleInsertPause(sec),
                                                            title: `Insert ${sec} gap at cursor`,
                                                            className: "px-2.5 py-1 font-medium bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 border border-gray-300 hover:border-indigo-400 rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95",
                                                            children: sec
                                                        }, sec, false, {
                                                            fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 19
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: customPauseRef,
                                                        className: "relative inline-block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setShowCustomInput(!showCustomInput);
                                                                    setShowEmotionMenu(false);
                                                                },
                                                                className: `px-2.5 py-1 font-medium rounded-lg border transition-all cursor-pointer shadow-2xs flex items-center gap-1 active:scale-95 ${showCustomInput ? "bg-indigo-600 text-white border-indigo-600" : "bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 border-gray-300 hover:border-indigo-400"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Customize"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        className: `h-3 w-3 ${showCustomInput ? "rotate-180" : ""}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 620,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 607,
                                                                columnNumber: 19
                                                            }, this),
                                                            showCustomInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                onSubmit: handleCustomSubmit,
                                                                className: "absolute left-0 bottom-full mb-2 bg-white border border-gray-200 shadow-xl rounded-xl p-3 z-30 flex items-center gap-2 min-w-[210px] animate-in fade-in zoom-in-95 duration-150",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "h-4 w-4 text-indigo-600 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0.1",
                                                                        max: "10.0",
                                                                        step: "0.1",
                                                                        value: customSeconds,
                                                                        onChange: (e)=>setCustomSeconds(e.target.value),
                                                                        placeholder: "Seconds",
                                                                        className: "w-16 px-2 py-1 text-xs border border-gray-300 rounded-md font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500",
                                                                        autoFocus: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 629,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-500 font-medium",
                                                                        children: "sec"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 640,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "px-2.5 py-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md cursor-pointer transition-colors",
                                                                        children: "Insert"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 641,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 624,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-[1px] bg-gray-300 mx-1 hidden sm:block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: emotionMenuRef,
                                                        className: "relative inline-block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setShowEmotionMenu(!showEmotionMenu);
                                                                    setShowCustomInput(false);
                                                                },
                                                                title: "Insert emotion control tag at cursor",
                                                                className: `px-2.5 py-1 font-medium rounded-lg border transition-all cursor-pointer shadow-2xs flex items-center gap-1.5 active:scale-95 ${showEmotionMenu ? "bg-indigo-600 text-white border-indigo-600 shadow-sm" : "bg-white hover:bg-indigo-50 text-gray-700 hover:text-indigo-700 border-gray-300 hover:border-indigo-400"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                                                                        className: `h-3.5 w-3.5 ${showEmotionMenu ? "text-white" : "text-indigo-600"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 668,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Emotion"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 669,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        className: `h-3 w-3 transition-transform ${showEmotionMenu ? "rotate-180 text-white" : "opacity-70"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 670,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 19
                                                            }, this),
                                                            showEmotionMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-full mb-2 bg-white border border-gray-200 shadow-xl rounded-xl p-2 z-40 w-64 animate-in fade-in zoom-in-95 duration-150",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-2.5 py-1.5 border-b border-gray-100 flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-xs text-gray-800 flex items-center gap-1.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                                                                                        className: "h-3.5 w-3.5 text-indigo-600"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                        lineNumber: 677,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    "Speech Emotion"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                lineNumber: 676,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] text-gray-400",
                                                                                children: "7 presets"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                lineNumber: 680,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 675,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "py-1 max-h-56 overflow-y-auto space-y-0.5",
                                                                        children: EMOTIONS.map((emo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleInsertEmotion(emo.type),
                                                                                className: "w-full text-left px-2.5 py-1.5 rounded-lg text-xs hover:bg-indigo-50/80 hover:text-indigo-900 transition-colors flex items-center justify-between group cursor-pointer",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-base leading-none",
                                                                                                children: emo.icon
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                                lineNumber: 691,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "font-medium text-gray-800 group-hover:text-indigo-700",
                                                                                                        children: emo.label
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                                        lineNumber: 693,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "text-[10px] text-gray-400 font-normal leading-tight",
                                                                                                        children: emo.description
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                                        lineNumber: 694,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                                lineNumber: 692,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                        lineNumber: 690,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] font-mono text-gray-400 group-hover:text-indigo-600 bg-gray-50 group-hover:bg-indigo-100/60 px-1.5 py-0.5 rounded",
                                                                                        children: [
                                                                                            "<",
                                                                                            emo.type,
                                                                                            ">"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                        lineNumber: 697,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, emo.type, true, {
                                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                                lineNumber: 684,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pt-1.5 border-t border-gray-100 text-[10px] text-gray-400 px-2 text-center",
                                                                        children: "Active until next emotion tag or defaults to neutral"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                        lineNumber: 703,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-[1px] bg-gray-300 mx-1 hidden sm:block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>insertAtCursor("[Lead Name]", "Inserted [Lead Name] variable"),
                                                                title: "Insert customer lead's name",
                                                                className: "px-2 py-1 font-mono text-[11px] bg-white hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border border-gray-300 hover:border-indigo-400 rounded-lg transition-all cursor-pointer shadow-2xs",
                                                                children: "+ [Lead Name]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 714,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>insertAtCursor("[Agent Name]", "Inserted [Agent Name] variable"),
                                                                title: "Insert AI voice agent's name",
                                                                className: "px-2 py-1 font-mono text-[11px] bg-white hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border border-gray-300 hover:border-indigo-400 rounded-lg transition-all cursor-pointer shadow-2xs",
                                                                children: "+ [Agent Name]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 722,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                lineNumber: 585,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handlePreviewScript,
                                                        title: isPlayingPreview ? "Stop speech preview" : "Listen to script speech preview with emotions and pauses",
                                                        className: `px-2.5 py-1 rounded-lg border font-medium text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-95 ${isPlayingPreview ? "bg-rose-600 text-white border-rose-600 animate-pulse" : loadingPreview ? "bg-amber-50 text-amber-700 border-amber-300" : "bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 border-gray-300 hover:border-emerald-400"}`,
                                                        children: loadingPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "h-3.5 w-3.5 animate-spin text-amber-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Generating..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 21
                                                        }, this) : isPlayingPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                    className: "h-3 w-3 fill-current"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                    lineNumber: 754,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Stop"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                    lineNumber: 755,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                    className: "h-3.5 w-3.5 text-emerald-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                            lineNumber: 758,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-gray-500 font-mono text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: (customScript || "").length.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 766,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400",
                                                                children: "/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 767,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-400",
                                                                children: "10,000 characters"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                                lineNumber: 768,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                        lineNumber: 765,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                lineNumber: 734,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 572,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between text-[11px] text-gray-400 pt-1 px-1 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Tags like ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded",
                                                children: '<break time="0.5s" />'
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                lineNumber: 776,
                                                columnNumber: 25
                                            }, this),
                                            " and ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "text-amber-600 bg-amber-50 px-1 py-0.5 rounded",
                                                children: '<emotion type="happy" />'
                                            }, void 0, false, {
                                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                                lineNumber: 776,
                                                columnNumber: 141
                                            }, this),
                                            " customize voice pacing & tone."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Supports 7 emotions & 0.1s to 10.0s pauses"
                                    }, void 0, false, {
                                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                                        lineNumber: 778,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/campaign/ScriptStep.tsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/campaign/ScriptStep.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/campaign/ScriptStep.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/campaign/ScriptStep.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
_s(ScriptStep, "pyukxhUYBwcYMGv5kme0YXA/5Gs=");
_c = ScriptStep;
var _c;
__turbopack_context__.k.register(_c, "ScriptStep");
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
"[project]/lib/services/carrier.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "carrierService",
    ()=>carrierService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const carrierService = {
    // Carrier CRUD
    getCarriers: (status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(status ? `/api/sip-carriers?status=${status}` : "/api/sip-carriers"),
    getCarrier: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-carriers/${id}`),
    createCarrier: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/sip-carriers", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    updateCarrier: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-carriers/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    deleteCarrier: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-carriers/${id}`, {
            method: "DELETE"
        }),
    testCarrierConnection: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-carriers/${id}/test-connection`, {
            method: "POST"
        }),
    toggleCarrierStatus: (id, status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-carriers/${id}/status?status_value=${status}`, {
            method: "POST"
        }),
    getHealthLogs: (id, limit = 20)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-carriers/${id}/health-logs?limit=${limit}`),
    // Routing Policies
    getRoutingPolicy: (campaignId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(campaignId ? `/api/sip-carriers/routing-policies/current?campaign_id=${campaignId}` : "/api/sip-carriers/routing-policies/current"),
    saveRoutingPolicy: (policy)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/sip-carriers/routing-policies", {
            method: "POST",
            body: JSON.stringify(policy)
        }),
    // Trunk CRUD
    getTrunks: (carrierId, status)=>{
        const params = new URLSearchParams();
        if (carrierId) params.append("carrier_id", carrierId);
        if (status) params.append("status", status);
        const query = params.toString() ? `?${params.toString()}` : "";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-trunks${query}`);
    },
    getTrunk: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-trunks/${id}`),
    createTrunk: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/sip-trunks", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    updateTrunk: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-trunks/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    deleteTrunk: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-trunks/${id}`, {
            method: "DELETE"
        }),
    testTrunkConnection: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/sip-trunks/${id}/test-connection`, {
            method: "POST"
        }),
    // DID Inventory CRUD
    getDIDs: (carrierId, trunkId, status)=>{
        const params = new URLSearchParams();
        if (carrierId) params.append("carrier_id", carrierId);
        if (trunkId) params.append("trunk_id", trunkId);
        if (status) params.append("status", status);
        const query = params.toString() ? `?${params.toString()}` : "";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/dids${query}`);
    },
    getDID: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/dids/${id}`),
    createDID: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/dids", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    updateDID: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/dids/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    deleteDID: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/dids/${id}`, {
            method: "DELETE"
        }),
    assignDID: (id, assignment)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/dids/${id}/assign`, {
            method: "POST",
            body: JSON.stringify(assignment)
        }),
    syncInboundNumbers: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/dids/sync-inbound", {
            method: "POST"
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
"[project]/lib/services/client.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientService",
    ()=>clientService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const clientService = {
    list: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/clients"),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/clients", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    update: (id, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/clients/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        }),
    remove: (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/clients/${id}`, {
            method: "DELETE"
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/expert.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "expertService",
    ()=>expertService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const expertService = {
    list: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/experts"),
    create: (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/experts", {
            method: "POST",
            body: JSON.stringify(data)
        }),
    getMe: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/experts/me"),
    updateStatus: (status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/experts/me/status", {
            method: "PATCH",
            body: JSON.stringify({
                status
            })
        }),
    getMeLeads: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/experts/me/leads"),
    getMeCalls: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/experts/me/calls"),
    getLeads: (expertId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/experts/${expertId}/leads`),
    completeCall: (callId, payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/experts/me/calls/${callId}/complete`, {
            method: "POST",
            body: JSON.stringify(payload)
        })
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
"[project]/lib/services/lead-group.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "leadGroupService",
    ()=>leadGroupService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-client.ts [app-client] (ecmascript)");
;
const leadGroupService = {
    list: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/lead-groups"),
    create: (filename, leads, agentId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/lead-groups", {
            method: "POST",
            body: JSON.stringify({
                filename,
                leads,
                agent_id: agentId
            })
        });
    },
    importFile: (file, agentId)=>{
        const formData = new FormData();
        formData.append("file", file);
        if (agentId) formData.append("agent_id", agentId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUpload"])("/api/lead-groups/import", formData);
    },
    update: (groupId, data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/lead-groups/${groupId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        });
    },
    getLeads: (groupId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/lead-groups/${groupId}/leads`),
    remove: (groupId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/api/lead-groups/${groupId}`, {
            method: "DELETE"
        }),
    downloadUrl: (groupId)=>{
        const IS_BROWSER = ("TURBOPACK compile-time value", "object") !== "undefined";
        const baseUrl = ("TURBOPACK compile-time truthy", 1) ? "" : "TURBOPACK unreachable";
        return `${baseUrl}/api/lead-groups/${groupId}/download`;
    }
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

//# sourceMappingURL=_126pycj._.js.map