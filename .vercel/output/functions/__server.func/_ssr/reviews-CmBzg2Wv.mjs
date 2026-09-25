import { i as __toESM } from "../_runtime.mjs";
import { c as YELP_URL, i as GOOGLE_URL, v as reviews } from "./salon-C_Hv5RvQ.mjs";
import { J as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, i as CallBand } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-CmBzg2Wv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tags = [
	"All",
	"Threading",
	"Waxing",
	"Hair",
	"Facials",
	"Makeup"
];
var sources = [
	"All",
	"Google",
	"Yelp"
];
function ReviewsPage() {
	const [tag, setTag] = (0, import_react.useState)("All");
	const [source, setSource] = (0, import_react.useState)("All");
	const shown = (0, import_react.useMemo)(() => reviews.filter((review) => {
		if (source !== "All" && review.source !== source) return false;
		if (tag !== "All" && !review.tags.includes(tag)) return false;
		return true;
	}), [tag, source]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "In their words",
			title: "Short excerpts. The full reviews stay where they were written.",
			lede: "These are pieces of public Google and Yelp reviews. This page does not show a star average, a review count, or a rating in search results."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex flex-wrap gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: GOOGLE_URL,
						className: "text-wine underline underline-offset-4",
						children: "Open Google"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: YELP_URL,
						className: "text-wine underline underline-offset-4",
						children: "Open Yelp"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm",
						children: "Service mentioned"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex gap-2 overflow-x-auto",
						children: tags.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
							pressed: tag === item,
							onClick: () => setTag(item),
							label: item
						}, item))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm",
						children: "Where it was written"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex gap-2",
						children: sources.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
							pressed: source === item,
							onClick: () => setSource(item),
							label: item
						}, item))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-4",
					children: shown.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { review }, review.id))
				}),
				shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-ink/70",
					children: "No excerpts match that filter."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-ink/65",
					children: "Names of stylists appear only because a guest wrote them. This site does not publish a staff list. Some public reviews are critical and are not reprinted here as marketing. Read those on Google and Yelp too."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
function Filter({ pressed, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": pressed,
		onClick,
		className: pressed ? "shrink-0 bg-ink px-4 py-2 text-sm text-ivory" : "shrink-0 border border-ink/15 px-4 py-2 text-sm",
		children: label
	});
}
function ReviewCard({ review }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "border border-ink/10 p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "leading-relaxed",
			children: [
				"“",
				review.excerpt,
				"”"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mt-4 text-xs text-ink/60",
			children: [
				review.name,
				" · ",
				review.source,
				" · ",
				review.date
			]
		})] })
	});
}
//#endregion
export { ReviewsPage as component };
