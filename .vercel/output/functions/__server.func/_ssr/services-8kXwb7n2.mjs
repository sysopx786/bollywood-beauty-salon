import { y as services } from "./salon-C_Hv5RvQ.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, i as CallBand } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-8kXwb7n2.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "The menu",
			title: "Services, with the prices printed beside them.",
			lede: "Bollywood Beauty Salon is a woman-owned salon in Exton. Every page below uses the current menu. Older brochure items are not listed."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 pb-16 sm:grid-cols-2",
			children: services.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/$service",
				params: { service: page.slug },
				className: "group block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: page.image,
						alt: "",
						width: 1200,
						height: 800,
						loading: "lazy",
						className: "aspect-landscape w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-2xl group-hover:text-wine",
						children: page.nav
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink/75",
						children: page.paragraphs[0]
					})
				]
			}) }, page.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
//#endregion
export { ServicesPage as component };
