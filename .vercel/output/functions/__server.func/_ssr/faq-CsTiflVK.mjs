import { u as faqs } from "./salon-C_Hv5RvQ.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, i as CallBand } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CsTiflVK.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Questions",
			title: "Answers we can stand behind.",
			lede: "If the salon has not published a policy, the answer is to call. This page does not guess."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-5 pb-16",
			children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group border-b border-ink/10 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer font-serif text-xl",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pt-3 text-ink/80",
					children: item.a
				})]
			}, item.q))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
//#endregion
export { FaqPage as component };
