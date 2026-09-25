import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, i as CallBand } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/before-and-after-CZwebWpj.js
var import_jsx_runtime = require_jsx_runtime();
function BeforeAfterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Results",
			title: "Real client transformations coming soon.",
			lede: "This page stays empty until the salon has permission to show actual guests. Stock photographs are not before-and-after results, and they will not be presented as if they were."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-5 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-dashed border-ink/25 px-6 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl",
						children: "No pairs yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-md text-sm text-ink/70",
						children: "When a guest agrees, a real before and a real after can live here. Until then, the gallery is labeled as editorial only."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "mt-6 inline-block text-sm text-wine",
						children: "View the editorial gallery"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
//#endregion
export { BeforeAfterPage as component };
