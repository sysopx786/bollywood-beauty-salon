import { o as PHONE_DISPLAY, s as PHONE_TEL } from "./salon-C_Hv5RvQ.mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-gJvb9pH0.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Privacy",
		title: "The call note never leaves your browser.",
		lede: "This website does not take online bookings and does not email the salon."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 pb-20 text-ink/80",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you type a name, phone number, or note on the contact page, that text stays on your device so you can copy it. Pressing the button does not transmit it. Do not type anything you would not read aloud on a phone call." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4",
				children: [
					"Maps and the links to Google and Yelp are third-party pages. Their own policies apply once you leave this site. Calling ",
					PHONE_DISPLAY,
					" is a normal phone call to the salon, not a message through this website."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4",
				children: [
					"Questions about a visit, not about this page, go to the salon at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "text-wine",
						children: PHONE_DISPLAY
					}),
					"."
				]
			})
		]
	})] });
}
//#endregion
export { PrivacyPage as component };
