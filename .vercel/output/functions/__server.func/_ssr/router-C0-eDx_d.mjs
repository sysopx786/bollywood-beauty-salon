import { i as __toESM } from "../_runtime.mjs";
import { f as formatPrice, g as itemsFor, h as hours, m as getService, n as CITY_LINE, o as PHONE_DISPLAY, r as DIRECTIONS_URL, s as PHONE_TEL, t as ADDRESS_LINE, y as services } from "./salon-C_Hv5RvQ.mjs";
import { J as require_react, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as notFound, v as createRootRoute, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, r as Phone, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-Btzy_Pra.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/bridal",
		label: "Bridal"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/reviews",
		label: "Reviews"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Shell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ivory focus:px-4 focus:py-3 focus:text-wine",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-serif text-lg leading-none tracking-tight text-wine sm:text-xl",
							children: "Bollywood Beauty Salon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs tracking-wide text-ink/70",
							children: "Woman-owned · Exton, PA"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-5 lg:flex",
						"aria-label": "Primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "text-sm text-ink hover:text-wine",
								children: "Services"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "invisible absolute top-full left-0 z-40 w-64 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "border border-ink/10 bg-ivory p-3 shadow-sm",
									children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/$service",
										params: { service: service.slug },
										className: "block px-2 py-2 text-sm text-ink hover:bg-champagne hover:text-wine",
										children: service.nav
									}) }, service.slug))
								})
							})]
						}), links.slice(1).map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "text-sm text-ink hover:text-wine",
							children: link.label
						}, link.to))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "hidden items-center gap-2 bg-wine px-4 py-3 text-sm text-ivory hover:opacity-90 sm:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Call now"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center border border-ink/15 lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							onClick: () => setOpen((value) => !value),
							children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: open ? "Close menu" : "Open menu"
							})]
						})]
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				id: "mobile-nav",
				className: "border-t border-ink/10 bg-ivory px-5 py-4 lg:hidden",
				"aria-label": "Mobile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-1",
					children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "block py-3 text-base",
						onClick: () => setOpen(false),
						children: link.label
					}) }, link.to)), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/$service",
						params: { service: service.slug },
						className: "block py-2 pl-3 text-sm text-ink/80",
						onClick: () => setOpen(false),
						children: service.nav
					}) }, service.slug))]
				})
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "content",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "border-t border-ink/10 bg-ink text-ivory",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-2xl text-ivory",
								children: "Bollywood Beauty Salon"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-sm text-sm text-ivory/80",
								children: "A woman-owned beauty salon in Exton, Pennsylvania. Threading, bridal beauty, facials, waxing, hair, and henna."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm",
								children: [
									ADDRESS_LINE,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									CITY_LINE
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE_TEL}`,
								className: "mt-3 inline-block text-sm text-champagne",
								children: PHONE_DISPLAY
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-champagne uppercase",
						children: "Hours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-1 text-sm text-ivory/85",
						children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right",
								children: row.time
							})]
						}, row.day))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-champagne uppercase",
						children: "Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 grid gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pricing",
								className: "text-ivory/85 hover:text-ivory",
								children: "Pricing"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/before-and-after",
								className: "text-ivory/85 hover:text-ivory",
								children: "Before & after"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "text-ivory/85 hover:text-ivory",
								children: "FAQ"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-ivory/85 hover:text-ivory",
								children: "Contact"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: DIRECTIONS_URL,
								className: "text-ivory/85 hover:text-ivory",
								children: "Directions"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "text-ivory/85 hover:text-ivory",
								children: "Privacy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms",
								className: "text-ivory/85 hover:text-ivory",
								children: "Terms"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/accessibility",
								className: "text-ivory/85 hover:text-ivory",
								children: "Accessibility"
							}) })
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 pb-24 text-xs text-ivory/60 md:pb-8",
				children: "Editorial photographs are licensed stock. They are not photographs of this salon’s clients or interior."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-x-0 bottom-0 z-40 flex border-t border-ink/10 bg-ivory md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `tel:${PHONE_TEL}`,
				className: "flex flex-1 items-center justify-center gap-2 py-4 text-sm font-medium text-wine",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Call salon"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: DIRECTIONS_URL,
				className: "flex flex-1 items-center justify-center border-l border-ink/10 py-4 text-sm font-medium",
				children: "Directions"
			})]
		})
	] });
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-3xl px-5 pt-14 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-wine uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-ink/75",
				children: lede
			})
		]
	});
}
function CallBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "bg-wine text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-3xl",
				children: "Call to arrange a visit"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-ivory/80",
				children: "There is no online booking yet. Calling the salon is how an appointment is confirmed."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${PHONE_TEL}`,
				className: "bg-ivory px-6 py-4 text-sm text-wine",
				children: PHONE_DISPLAY
			})]
		})
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-C0-eDx_d.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-ivory px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-wine",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-3xl",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-ink/70",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CZnhP-yX.css";
var Route$14 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#5C1A2E"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Source+Sans+3:ital,wght@0,400;0,600;1,400&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-5 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-wine uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-5xl",
				children: "This page is not on the menu."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-ink/75",
				children: "The address may have changed. Try one of these."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 grid gap-3 text-wine",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Home"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						children: "Services"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						children: "Pricing"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Contact"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						children: ["Call ", PHONE_DISPLAY]
					}) })
				]
			})
		]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-BRpC8xa2.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Bollywood Beauty Salon | Woman-Owned Salon in Exton, PA" }, {
		name: "description",
		content: "Woman-owned beauty salon in Exton, Pennsylvania. Eyebrow threading, bridal makeup, facials, waxing, hair color, and henna at 418 W Lincoln Hwy."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
function metaFor(slug) {
	const page = getService(slug);
	return [{ title: `${page.title} | Bollywood Beauty Salon` }, {
		name: "description",
		content: page.description
	}];
}
function ServicePage({ slug }) {
	const page = getService(slug);
	const items = itemsFor(slug);
	const related = services.filter((item) => item.slug !== slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto grid max-w-6xl items-end gap-8 px-5 pt-12 pb-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-wine uppercase",
					children: page.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-serif text-4xl leading-tight sm:text-5xl",
					children: page.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-ink/70",
					children: "Woman-owned beauty salon · Exton, Pennsylvania"
				}),
				page.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-ink/80",
					children: paragraph
				}, paragraph))
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: page.image,
				alt: page.alt,
				width: 1200,
				height: 1500,
				className: "aspect-portrait w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-2 text-xs text-ink/60",
				children: page.credit
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-champagne/40",
			"aria-labelledby": "prices-heading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "prices-heading",
						className: "font-serif text-3xl",
						children: "Menu prices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-ink/10 border-y border-ink/10",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: item.name
							}), item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-ink/65",
								children: item.note
							}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-sm",
								children: formatPrice(item)
							})]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-ink/70",
						children: "“Starting at” prices can change with length, design, or the area treated. Confirm at the salon."
					})
				]
			})
		}),
		page.support ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "mx-auto max-w-6xl px-5 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: page.support.src,
				alt: page.support.alt,
				width: 1600,
				height: 1066,
				loading: "lazy",
				className: "aspect-landscape w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-2 text-xs text-ink/60",
				children: page.support.credit
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl",
				children: "Related"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-3",
				children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/$service",
					params: { service: item.slug },
					className: "block border border-ink/10 p-4 hover:border-wine",
					children: item.nav
				}) }, item.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
var $$splitComponentImporter$12 = () => import("../_service-C89RzLMw.mjs");
var Route$12 = createFileRoute("/$service")({
	head: ({ params }) => {
		const page = services.find((item) => item.slug === params.service);
		if (!page) return { meta: [{ title: "Page not found | Bollywood Beauty Salon" }] };
		return { meta: metaFor(page.slug) };
	},
	loader: ({ params }) => {
		if (!services.some((item) => item.slug === params.service)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-BbKDXj5M.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | Woman-Owned Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Bollywood Beauty Salon is a woman-owned beauty salon at 418 W Lincoln Hwy, Exton, PA. Threading, bridal beauty, facials, waxing, hair, and henna."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./accessibility-CMlPB4WS.mjs");
var Route$10 = createFileRoute("/accessibility")({
	head: () => ({ meta: [{ title: "Accessibility | Bollywood Beauty Salon" }, {
		name: "description",
		content: "Accessibility notes for the Bollywood Beauty Salon website, and what the Exton salon has not published about parking or step-free entry."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./before-and-after-CZwebWpj.mjs");
var Route$9 = createFileRoute("/before-and-after")({
	head: () => ({ meta: [{ title: "Before & After | Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Real client transformations from Bollywood Beauty Salon are not published yet. Stock photos are not shown as results."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./bridal-Cnp85UjS.mjs");
var Route$8 = createFileRoute("/bridal")({
	head: () => ({ meta: [{ title: "Bridal Makeup & Henna in Exton | Bollywood Beauty Salon" }, {
		name: "description",
		content: "Woman-owned bridal beauty in Exton, PA. Bridal makeup $400, engagement makeup $250, bridal henna from $150. Call to confirm what the visit includes."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-4Hd6aGop.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Call Bollywood Beauty Salon at (610) 363-1244. 418 W Lincoln Hwy, Exton, PA 19341. This website does not book appointments."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./faq-CsTiflVK.mjs");
var Route$6 = createFileRoute("/faq")({
	head: () => ({ meta: [{ title: "FAQ | Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Hours, threading prices, bridal makeup, and what Bollywood Beauty Salon in Exton has not published yet. Call (610) 363-1244."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-CVic6DxJ.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery | Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Editorial photographs for mood — bridal beauty, henna, threading, facials, and hair. These are not photos of Bollywood Beauty Salon clients."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./pricing-DEo207bf.mjs");
var Route$4 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing | Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Current menu prices for threading, waxing, facials, hair, makeup, lashes, henna, and treatments at Bollywood Beauty Salon in Exton, PA."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-gJvb9pH0.mjs");
var Route$3 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy | Bollywood Beauty Salon" }, {
		name: "description",
		content: "How this Bollywood Beauty Salon website handles the call note. It does not send or store appointment requests."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./reviews-CmBzg2Wv.mjs");
var Route$2 = createFileRoute("/reviews")({
	head: () => ({ meta: [{ title: "Guest Words | Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Short public excerpts about Bollywood Beauty Salon in Exton. Read the full conversations on Google and Yelp. This page does not publish an overall rating."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-8kXwb7n2.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | Bollywood Beauty Salon, Exton" }, {
		name: "description",
		content: "Threading, waxing, facials, hair, bridal and party makeup, lashes, henna, and short beauty treatments at a woman-owned salon in Exton, PA."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./terms-B2IjcXyF.mjs");
var Route = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms | Bollywood Beauty Salon" }, {
		name: "description",
		content: "Menu prices on this site are the current printed prices for Bollywood Beauty Salon in Exton. A call confirms the visit. This site does not book appointments."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$13.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	ServiceRoute: Route$12.update({
		id: "/$service",
		path: "/$service",
		getParentRoute: () => Route$14
	}),
	AboutRoute: Route$11.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$14
	}),
	AccessibilityRoute: Route$10.update({
		id: "/accessibility",
		path: "/accessibility",
		getParentRoute: () => Route$14
	}),
	BeforeAndAfterRoute: Route$9.update({
		id: "/before-and-after",
		path: "/before-and-after",
		getParentRoute: () => Route$14
	}),
	BridalRoute: Route$8.update({
		id: "/bridal",
		path: "/bridal",
		getParentRoute: () => Route$14
	}),
	ContactRoute: Route$7.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$14
	}),
	FaqRoute: Route$6.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$14
	}),
	GalleryRoute: Route$5.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$14
	}),
	PricingRoute: Route$4.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$14
	}),
	PrivacyRoute: Route$3.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$14
	}),
	ReviewsRoute: Route$2.update({
		id: "/reviews",
		path: "/reviews",
		getParentRoute: () => Route$14
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$14
	}),
	TermsRoute: Route.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$14
	})
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { PageIntro as a, CallBand as i, Route$12 as n, ServicePage as r, router_exports as t };
