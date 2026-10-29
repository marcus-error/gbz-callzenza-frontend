(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/auth.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
function AdminLogin() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { register, handleSubmit, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const { token, user, setToken, setUser, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLogin.useEffect": ()=>{
            if (token && user) {
                if (user.role === "SUPER_ADMIN" || user.role === "ADMIN") {
                    router.replace("/dashboard");
                } else if (user.role === "SUPERVISOR") {
                    router.replace("/supervisor/dashboard");
                } else if (user.role === "VOICE_AGENT") {
                    router.replace("/voice-agent/dashboard");
                } else {
                    router.replace("/dashboard");
                }
            }
        }
    }["AdminLogin.useEffect"], [
        token,
        user,
        router
    ]);
    const onSubmit = async (values)=>{
        setError(null);
        try {
            const cleanEmail = values.email.trim();
            const { access_token } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].login({
                email: cleanEmail,
                password: values.password
            });
            const me = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].me(access_token);
            setToken(access_token);
            setUser(me);
            if ("TURBOPACK compile-time truthy", 1) {
                const statePayload = JSON.stringify({
                    state: {
                        token: access_token,
                        user: me
                    },
                    version: 0
                });
                sessionStorage.setItem("callzenza-auth", statePayload);
                localStorage.setItem(`callzenza-auth-${me.role}`, statePayload);
                localStorage.setItem("callzenza-auth", statePayload);
            }
            if (me.role === "SUPER_ADMIN" || me.role === "ADMIN") {
                router.push("/dashboard");
            } else if (me.role === "SUPERVISOR") {
                router.push("/supervisor/dashboard");
            } else if (me.role === "VOICE_AGENT") {
                router.push("/voice-agent/dashboard");
            } else {
                router.push("/dashboard");
            }
        } catch (e) {
            logout();
            setError(e instanceof Error ? e.message : "Invalid email or password");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen flex flex-col items-center justify-center p-6 bg-slate-950 text-slate-100 relative overflow-hidden font-sans cursor-default select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/admin/login/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/admin/login/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md flex flex-col gap-6 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between w-full mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors font-semibold group bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/login/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Back to User Login"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/login/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/login/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-xs text-slate-500 hover:text-slate-300 transition-colors font-medium",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/login/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/login/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/login/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/login/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-200 via-slate-100 to-purple-200 bg-clip-text text-transparent",
                                children: "Admin Portal"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/login/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 mt-2 text-sm",
                                children: "Access platform operations & configurations."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/login/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/login/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.4
                        },
                        className: "bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl shadow-slate-950/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                            children: "Admin Email"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/login/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            ...register("email", {
                                                required: true
                                            }),
                                            type: "email",
                                            className: "bg-slate-950/80 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/login/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/login/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/login/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    ...register("password", {
                                                        required: true
                                                    }),
                                                    type: showPassword ? "text" : "password",
                                                    className: "bg-slate-950/80 border-slate-800 text-slate-100 placeholder:text-slate-600 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 pr-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/login/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-3.5 top-3 text-slate-500 hover:text-slate-300 cursor-pointer",
                                                    suppressHydrationWarning: true,
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-4.5 h-4.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/login/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4.5 h-4.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/login/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 72
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/login/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/login/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/login/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "p-3.5 text-xs bg-red-950/40 border border-red-900/50 text-red-400 rounded-xl",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/login/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: formState.isSubmitting,
                                    className: "mt-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all cursor-pointer",
                                    children: formState.isSubmitting ? "Authenticating..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/login/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            " Authenticate Admin"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/login/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/login/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/login/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/login/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mt-4 bg-slate-900/40 border border-slate-900 py-2.5 px-4 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "w-3.5 h-3.5 text-emerald-500"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/login/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SSL Secure · Encrypted Session Gateway"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/login/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/login/page.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/login/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/login/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(AdminLogin, "AXB0zYCVeYniTVjQcompbYlueeo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = AdminLogin;
var _c;
__turbopack_context__.k.register(_c, "AdminLogin");
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
]);

//# sourceMappingURL=_1t2p8__._.js.map