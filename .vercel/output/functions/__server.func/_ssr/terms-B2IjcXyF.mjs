import { o as PHONE_DISPLAY, s as PHONE_TEL } from "./salon-C_Hv5RvQ.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-B2IjcXyF.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Terms",
		title: "A menu page is not a confirmed appointment.",
		lede: "Prices are the current salon menu. Calling the salon is what holds a time."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-4 px-5 pb-20 text-ink/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Flat prices are the printed amount. “Starting at,” “each,” and “per foil” mean the visit can differ. Ask before the service begins." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Facial names are printed as the salon lists them. They are cosmetic. They are not medical claims and not a promise to change skin color." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Eyelash extensions at $35 need a phone confirmation of what that visit includes. It should not be assumed to be a full classic or volume set." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Photographs are licensed editorial images. They are not clients, staff, or the Exton interior." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Guest excerpts are short quotations from public reviews. They are not testimonials commissioned by the salon, and this site does not publish an overall rating." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"To ask about a service, call",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "text-wine",
					children: PHONE_DISPLAY
				}),
				"."
			] })
		]
	})] });
}
//#endregion
export { TermsPage as component };
