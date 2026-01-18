module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/hooks/useDebounce.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchOrgMetadata",
    ()=>fetchOrgMetadata,
    "fetchOrgRepos",
    ()=>fetchOrgRepos
]);
const GITHUB_API_BASE = 'https://api.github.com';
async function fetchWithAuth(url, token) {
    const headers = {
        'Accept': 'application/vnd.github.v3+json'
    };
    if (token) {
        headers['Authorization'] = `token ${token}`;
    }
    const response = await fetch(url, {
        headers
    });
    if (!response.ok) {
        const error = {
            message: await response.text().catch(()=>'Unknown error'),
            status: response.status,
            statusText: response.statusText
        };
        throw error;
    }
    return response;
}
async function fetchOrgRepos(org, page = 1, perPage = 10, token) {
    const url = `${GITHUB_API_BASE}/orgs/${encodeURIComponent(org)}/repos?page=${page}&per_page=${perPage}&sort=updated`;
    try {
        const response = await fetchWithAuth(url, token);
        const repos = await response.json();
        return repos;
    } catch (error) {
        if (error && typeof error === 'object' && 'status' in error) {
            throw error;
        }
        throw {
            message: error instanceof Error ? error.message : 'Network error',
            status: 0,
            statusText: 'Network Error'
        };
    }
}
async function fetchOrgMetadata(org, token) {
    const url = `${GITHUB_API_BASE}/orgs/${encodeURIComponent(org)}`;
    try {
        const response = await fetchWithAuth(url, token);
        const orgData = await response.json();
        return orgData;
    } catch (error) {
        if (error && typeof error === 'object' && 'status' in error) {
            throw error;
        }
        throw {
            message: error instanceof Error ? error.message : 'Network error',
            status: 0,
            statusText: 'Network Error'
        };
    }
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLastOrgSearch",
    ()=>getLastOrgSearch,
    "getStoredToken",
    ()=>getStoredToken,
    "removeStoredToken",
    ()=>removeStoredToken,
    "setLastOrgSearch",
    ()=>setLastOrgSearch,
    "setStoredToken",
    ()=>setStoredToken
]);
const TOKEN_KEY = 'github_token';
const LAST_ORG_KEY = 'last_org_search';
function getStoredToken() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setStoredToken(token) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function removeStoredToken() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getLastOrgSearch() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function setLastOrgSearch(org) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchInput",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function SearchInput({ org, onOrgChange, token }) {
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(org);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setInputValue(org);
    }, [
        org
    ]);
    const { data: orgData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'org-metadata',
            org
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOrgMetadata"])(org, token || undefined),
        enabled: org.length > 0,
        retry: (failureCount, error)=>{
            const apiError = error;
            return apiError.status !== 404 && apiError.status !== 403 && failureCount < 2;
        }
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (trimmed) {
            onOrgChange(trimmed);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                orgData?.avatar_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: orgData.avatar_url,
                        alt: orgData.login,
                        width: 40,
                        height: 40,
                        className: "rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputValue,
                        onChange: (e)=>setInputValue(e.target.value),
                        placeholder: "Enter organization name (e.g., github, microsoft)",
                        className: "w-full px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        "Search"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RepoCard",
    ()=>RepoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-ssr] (ecmascript) <export default as GitFork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
;
;
function RepoCard({ repo, onClick, isSelected }) {
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `border rounded-lg p-4 transition-colors cursor-pointer ${isSelected ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-50 dark:bg-zinc-900' : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-zinc-900 dark:text-zinc-100",
                                children: repo.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            repo.private && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "w-4 h-4 text-zinc-500"
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    repo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-600 dark:text-zinc-400 text-sm mb-3 line-clamp-2",
                        children: repo.description
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500",
                        children: [
                            repo.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    repo.language
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    repo.stargazers_count
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    repo.forks_count
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    formatDate(repo.updated_at)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/EmptyState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
;
;
function EmptyState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-12 px-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                    className: "w-16 h-16 text-zinc-400 dark:text-zinc-600"
                }, void 0, false, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/EmptyState.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/EmptyState.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2",
                children: "No Repositories Found"
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/EmptyState.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-600 dark:text-zinc-400 max-w-md",
                children: "This organization doesn't have any public repositories or they are all private."
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/EmptyState.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/EmptyState.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RepoList",
    ()=>RepoList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$RepoCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/EmptyState.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RepoList({ repos, sortBy, sortOrder, onSortChange, selectedRepoId, onRepoClick }) {
    const sortedRepos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const sorted = [
            ...repos
        ];
        let comparison;
        switch(sortBy){
            case 'stars':
                comparison = (a, b)=>b.stargazers_count - a.stargazers_count;
                break;
            case 'forks':
                comparison = (a, b)=>b.forks_count - a.forks_count;
                break;
            case 'updated':
                comparison = (a, b)=>new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                break;
            default:
                return sorted;
        }
        sorted.sort(comparison);
        // Reverse if ascending order
        if (sortOrder === 'asc') {
            sorted.reverse();
        }
        return sorted;
    }, [
        repos,
        sortBy,
        sortOrder
    ]);
    if (repos.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyState"], {}, void 0, false, {
            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoList.tsx",
            lineNumber: 50,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: sortedRepos.map((repo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$RepoCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepoCard"], {
                repo: repo,
                onClick: ()=>onRepoClick(repo),
                isSelected: selectedRepoId === repo.id
            }, repo.id, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoList.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoList.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SortControls",
    ()=>SortControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-ssr] (ecmascript) <export default as GitFork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
;
;
function SortControls({ sortBy, sortOrder, onSortChange, onOrderChange }) {
    const sortOptions = [
        {
            value: 'stars',
            label: 'Stars',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                lineNumber: 15,
                columnNumber: 45
            }, this)
        },
        {
            value: 'forks',
            label: 'Forks',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                lineNumber: 16,
                columnNumber: 45
            }, this)
        },
        {
            value: 'updated',
            label: 'Updated',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                lineNumber: 17,
                columnNumber: 49
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 flex-wrap p-3 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
                children: "Sort:"
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: sortOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSortChange(option.value),
                        className: `px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-1.5 ${sortBy === option.value ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`,
                        children: [
                            option.icon,
                            option.label
                        ]
                    }, option.value, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 border-l border-zinc-200 dark:border-zinc-800 pl-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onOrderChange('asc'),
                        className: `p-1.5 rounded-md transition-colors ${sortOrder === 'asc' ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`,
                        "aria-label": "Ascending",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onOrderChange('desc'),
                        className: `p-1.5 rounded-md transition-colors ${sortOrder === 'desc' ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`,
                        "aria-label": "Descending",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkeletonLoader",
    ()=>SkeletonLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SkeletonLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: Array.from({
            length: 5
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 animate-pulse",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-md flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                                    lineNumber: 13,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                                    lineNumber: 14,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-16"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                                            lineNumber: 16,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-16"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                                            lineNumber: 17,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-20"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                    lineNumber: 9,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorState",
    ()=>ErrorState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
;
;
function ErrorState({ error, onRetry }) {
    const is404 = error.status === 404;
    const is403 = error.status === 403;
    let title;
    let message;
    if (is404) {
        title = 'Organization Not Found';
        message = 'The organization you searched for does not exist or is not accessible.';
    } else if (is403) {
        title = 'Rate Limit Exceeded';
        message = 'GitHub API rate limit reached. You can add a personal access token to increase your rate limit.';
    } else {
        title = 'Something Went Wrong';
        message = error.message || 'An unexpected error occurred while fetching data.';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-12 px-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-16 h-16 text-zinc-400 dark:text-zinc-600"
                }, void 0, false, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-600 dark:text-zinc-400 max-w-md mb-6",
                children: message
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRetry,
                className: "px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors",
                children: "Try Again"
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/InfiniteScrollTrigger.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteScrollTrigger",
    ()=>InfiniteScrollTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function InfiniteScrollTrigger({ onIntersect, hasMore, isLoading }) {
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasMore || isLoading) return;
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0]?.isIntersecting) {
                onIntersect();
            }
        }, {
            rootMargin: '100px'
        });
        const currentTrigger = triggerRef.current;
        if (currentTrigger) {
            observer.observe(currentTrigger);
        }
        return ()=>{
            if (currentTrigger) {
                observer.unobserve(currentTrigger);
            }
        };
    }, [
        hasMore,
        isLoading,
        onIntersect
    ]);
    if (!hasMore) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: triggerRef,
        className: "h-10 flex items-center justify-center",
        children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-zinc-500 dark:text-zinc-400 text-sm",
            children: "Loading more..."
        }, void 0, false, {
            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/InfiniteScrollTrigger.tsx",
            lineNumber: 49,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/InfiniteScrollTrigger.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsSidebar",
    ()=>StatsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-ssr] (ecmascript) <export default as GitFork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
'use client';
;
;
function StatsSidebar({ repos, orgData, selectedRepo, onClose }) {
    const totalStars = repos.reduce((sum, repo)=>sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo)=>sum + repo.forks_count, 0);
    const languages = repos.reduce((acc, repo)=>{
        if (repo.language) {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
        }
        return acc;
    }, {});
    const topLanguages = Object.entries(languages).sort(([, a], [, b])=>b - a).slice(0, 5);
    if (selectedRepo) {
        const formatDate = (dateString)=>{
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:h-full flex flex-col lg:border-l border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-zinc-900 dark:text-zinc-100",
                                    children: "Repository"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors",
                                    "aria-label": "Close details",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1",
                            children: selectedRepo.name
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        selectedRepo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2",
                            children: selectedRepo.description
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-5 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: selectedRepo.html_url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    "View on GitHub"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    children: "Stars"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-zinc-900 dark:text-zinc-100",
                                            children: selectedRepo.stargazers_count.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium",
                                                    children: "Forks"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-zinc-900 dark:text-zinc-100",
                                            children: selectedRepo.forks_count.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        selectedRepo.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Language"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2.5 h-2.5 rounded-full bg-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-zinc-900 dark:text-zinc-100 font-medium",
                                            children: selectedRepo.language
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mb-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Dates"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500 dark:text-zinc-500",
                                                    children: "Created"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-900 dark:text-zinc-100 font-medium",
                                                    children: formatDate(selectedRepo.created_at)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500 dark:text-zinc-500",
                                                    children: "Updated"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-900 dark:text-zinc-100 font-medium",
                                                    children: formatDate(selectedRepo.updated_at)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: selectedRepo.private ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                className: "w-4 h-4 text-zinc-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-zinc-900 dark:text-zinc-100",
                                                children: "Private"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "w-4 h-4 text-zinc-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-zinc-900 dark:text-zinc-100",
                                                children: "Public"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-zinc-500 dark:text-zinc-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: selectedRepo.default_branch
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
            lineNumber: 37,
            columnNumber: 5
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:h-full flex flex-col lg:border-l border-t lg:border-t-0 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1",
                        children: "Statistics"
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    orgData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-600 dark:text-zinc-400 truncate",
                        children: orgData.name || orgData.login
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-5 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium",
                                                children: "Repos"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold text-zinc-900 dark:text-zinc-100",
                                        children: repos.length
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium",
                                                children: "Stars"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold text-zinc-900 dark:text-zinc-100",
                                        children: totalStars.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium",
                                                children: "Forks"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold text-zinc-900 dark:text-zinc-100",
                                        children: totalForks.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-zinc-500 dark:text-zinc-500 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium",
                                                children: "Languages"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold text-zinc-900 dark:text-zinc-100",
                                        children: Object.keys(languages).length
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    topLanguages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-4 h-4 text-zinc-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                                        children: "Top Languages"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: topLanguages.map(([lang, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-zinc-900 dark:text-zinc-100",
                                                        children: lang
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded",
                                                children: count
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, lang, true, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    orgData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-3",
                                children: orgData.description || 'No description available'
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: orgData.html_url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:underline",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    "View on GitHub"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx",
        lineNumber: 156,
        columnNumber: 7
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TokenInput",
    ()=>TokenInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/lib/storage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function TokenInput({ onTokenChange }) {
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredToken"])() || '');
    const handleSave = ()=>{
        if (token.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStoredToken"])(token.trim());
            onTokenChange(token.trim());
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeStoredToken"])();
            onTokenChange(null);
        }
        setIsExpanded(false);
    };
    const handleClear = ()=>{
        setToken('');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeStoredToken"])();
        onTokenChange(null);
        setIsExpanded(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                className: "text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredToken"])() ? 'Update Token' : 'Add Personal Access Token'
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-8 right-0 z-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 shadow-lg w-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-600 dark:text-zinc-400 mb-2",
                        children: "Optional: Add a GitHub Personal Access Token to increase rate limits."
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: token,
                        onChange: (e)=>setToken(e.target.value),
                        placeholder: "ghp_...",
                        className: "w-full px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 mb-2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "flex-1 px-3 py-1.5 text-sm bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredToken"])() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClear,
                                className: "px-3 py-1.5 text-sm border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/hooks/useDebounce.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SearchInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$RepoList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/RepoList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$SortControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SortControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$SkeletonLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/SkeletonLoader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$ErrorState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/ErrorState.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$InfiniteScrollTrigger$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/InfiniteScrollTrigger.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$StatsSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/StatsSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$TokenInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/components/TokenInput.tsx [app-ssr] (ecmascript)");
'use client';
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
const PER_PAGE = 10;
function DashboardContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const orgFromUrl = searchParams.get('org') || '';
    const [org, setOrg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(orgFromUrl);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredToken"])());
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('updated');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('desc');
    const [selectedRepo, setSelectedRepo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const debouncedOrg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebounce"])(org, 300);
    // Update URL when org changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (debouncedOrg) {
            const params = new URLSearchParams(searchParams.toString());
            params.set('org', debouncedOrg);
            router.push(`?${params.toString()}`, {
                scroll: false
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLastOrgSearch"])(debouncedOrg);
        }
    }, [
        debouncedOrg,
        router,
        searchParams
    ]);
    // Initialize org from URL on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (orgFromUrl && !org) {
            setOrg(orgFromUrl);
        }
    }, [
        orgFromUrl,
        org
    ]);
    // Reset selected repo when org changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedRepo(null);
    }, [
        debouncedOrg
    ]);
    const { data, error, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            'org-repos',
            debouncedOrg,
            token
        ],
        queryFn: ({ pageParam = 1 })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOrgRepos"])(debouncedOrg, pageParam, PER_PAGE, token || undefined),
        enabled: debouncedOrg.length > 0,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages)=>{
            if (lastPage.length < PER_PAGE) {
                return undefined;
            }
            return allPages.length + 1;
        },
        retry: (failureCount, error)=>{
            const apiError = error;
            return apiError.status !== 404 && apiError.status !== 403 && failureCount < 2;
        }
    });
    const { data: orgData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'org-metadata',
            debouncedOrg
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOrgMetadata"])(debouncedOrg, token || undefined),
        enabled: debouncedOrg.length > 0,
        retry: (failureCount, error)=>{
            const apiError = error;
            return apiError.status !== 404 && apiError.status !== 403 && failureCount < 2;
        }
    });
    const allRepos = data?.pages.flat() || [];
    const handleOrgChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newOrg)=>{
        setOrg(newOrg);
        setSelectedRepo(null);
    }, []);
    const handleTokenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newToken)=>{
        setToken(newToken);
        setSelectedRepo(null);
    }, []);
    const handleRetry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (debouncedOrg) {
            router.refresh();
        }
    }, [
        debouncedOrg,
        router
    ]);
    const handleRepoClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((repo)=>{
        setSelectedRepo(repo);
    }, []);
    const handleCloseSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSelectedRepo(null);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-zinc-50 dark:bg-black font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:mr-80 xl:mr-96",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2",
                                children: "GitHub Organization Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-600 dark:text-zinc-400",
                                children: "Explore repositories from any GitHub organization"
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchInput"], {
                                    org: org,
                                    onOrgChange: handleOrgChange,
                                    token: token
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$TokenInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TokenInput"], {
                                onTokenChange: handleTokenChange
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    isLoading && !data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$SkeletonLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonLoader"], {}, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                        lineNumber: 143,
                        columnNumber: 32
                    }, this),
                    isError && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$ErrorState$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorState"], {
                        error: error,
                        onRetry: handleRetry
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    !isLoading && !isError && debouncedOrg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            allRepos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$SortControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortControls"], {
                                    sortBy: sortBy,
                                    sortOrder: sortOrder,
                                    onSortChange: setSortBy,
                                    onOrderChange: setSortOrder
                                }, void 0, false, {
                                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$RepoList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepoList"], {
                                repos: allRepos,
                                sortBy: sortBy,
                                sortOrder: sortOrder,
                                onSortChange: setSortBy,
                                selectedRepoId: selectedRepo?.id || null,
                                onRepoClick: handleRepoClick
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            allRepos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$InfiniteScrollTrigger$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfiniteScrollTrigger"], {
                                onIntersect: ()=>fetchNextPage(),
                                hasMore: hasNextPage || false,
                                isLoading: isFetchingNextPage
                            }, void 0, false, {
                                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    !debouncedOrg && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center py-12 px-4 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-600 dark:text-zinc-400",
                            children: "Enter an organization name to get started"
                        }, void 0, false, {
                            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            debouncedOrg && !isLoading && !isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block fixed right-0 top-0 w-80 xl:w-96 h-screen overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$StatsSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatsSidebar"], {
                    repos: allRepos,
                    orgData: orgData || null,
                    selectedRepo: selectedRepo,
                    onClose: handleCloseSidebar
                }, void 0, false, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this),
            debouncedOrg && !isLoading && !isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden mt-8 border-t border-zinc-200 dark:border-zinc-800 pt-8 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$StatsSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatsSidebar"], {
                    repos: allRepos,
                    orgData: orgData || null,
                    selectedRepo: selectedRepo,
                    onClose: handleCloseSidebar
                }, void 0, false, {
                    fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$components$2f$SkeletonLoader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkeletonLoader"], {}, void 0, false, {
            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
            lineNumber: 221,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$DevProjects$2f$WebDev$2f$gdg$2d$tasks$2f$frontend$2f$task$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardContent, {}, void 0, false, {
            fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/DevProjects/WebDev/gdg-tasks/frontend/task-1/app/page.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3110c1a._.js.map