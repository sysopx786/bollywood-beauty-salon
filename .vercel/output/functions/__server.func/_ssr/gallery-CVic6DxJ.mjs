import { i as __toESM } from "../_runtime.mjs";
import { p as gallery } from "./salon-C_Hv5RvQ.mjs";
import { J as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CVic6DxJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"All",
	"Bridal",
	"Henna",
	"Threading & Brows",
	"Facials",
	"Hair",
	"Makeup"
];
function GalleryPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const dialogRef = (0, import_react.useRef)(null);
	const visible = gallery.filter((image) => filter === "All" || image.category === filter);
	const current = active === null ? null : visible[active];
	(0, import_react.useEffect)(() => {
		if (!current) return;
		dialogRef.current?.focus();
		function onKey(event) {
			if (event.key === "Escape") setActive(null);
			if (event.key === "ArrowRight") setActive((index) => index === null ? index : (index + 1) % visible.length);
			if (event.key === "ArrowLeft") setActive((index) => index === null ? index : (index - 1 + visible.length) % visible.length);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [current, visible.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Editorial",
			title: "A mood, not a client book.",
			lede: "These photographs are licensed stock. They show the beauty the salon works toward. They are not pictures of this salon, its room, or its guests."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-x-auto pb-6",
					role: "group",
					"aria-label": "Filter photographs",
					children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": filter === item,
						onClick: () => {
							setFilter(item);
							setActive(null);
						},
						className: filter === item ? "shrink-0 bg-wine px-4 py-2 text-sm text-ivory" : "shrink-0 border border-ink/15 px-4 py-2 text-sm",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: visible.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "block w-full text-left",
						onClick: () => setActive(index),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image.src,
							alt: image.alt,
							width: 900,
							height: 1200,
							loading: "lazy",
							className: "aspect-portrait w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-xs text-ink/60",
							children: image.credit
						})]
					}) }, image.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-sm text-ink/70",
					children: [
						"Real client before-and-after photographs are not published yet.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/before-and-after",
							className: "text-wine",
							children: "See that page"
						}),
						"."
					]
				})
			]
		}),
		current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			image: current,
			dialogRef,
			onClose: () => setActive(null),
			onPrev: () => setActive((index) => index === null ? index : (index - 1 + visible.length) % visible.length),
			onNext: () => setActive((index) => index === null ? index : (index + 1) % visible.length)
		}) : null
	] });
}
function Lightbox({ image, dialogRef, onClose, onPrev, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dialogRef,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": image.alt,
		tabIndex: -1,
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/92 p-4 text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid w-full max-w-4xl gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "border border-ivory/30 px-4 py-2 text-sm",
							onClick: onPrev,
							children: "Previous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "border border-ivory/30 px-4 py-2 text-sm",
							onClick: onNext,
							children: "Next"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "bg-ivory px-4 py-2 text-sm text-ink",
							onClick: onClose,
							children: "Close"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image.src,
					alt: image.alt,
					className: "max-h-[70vh] w-full object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-ivory/75",
					children: [
						image.category,
						". ",
						image.credit,
						". Not a client of this salon."
					]
				})
			]
		})
	});
}
//#endregion
export { GalleryPage as component };
