import { h as hours, n as CITY_LINE, o as PHONE_DISPLAY, s as PHONE_TEL, t as ADDRESS_LINE } from "./salon-C_Hv5RvQ.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as CallBand } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BbKDXj5M.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-wine uppercase",
					children: "Woman-owned"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-serif text-5xl leading-none",
					children: "A salon in Exton, kept by a woman who owns it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-lg text-ink/75",
					children: [
						"Bollywood Beauty Salon is a woman-owned beauty salon at ",
						ADDRESS_LINE,
						", ",
						CITY_LINE,
						". Guests come for threading, waxing, facials, hair, makeup, and henna."
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/bridal/jewelry.jpg",
				alt: "Editorial close-up of gold jewelry. Not the salon interior.",
				width: 1400,
				height: 933,
				className: "aspect-landscape w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-2 text-xs text-ink/60",
				children: "Kushith M, Pexels. Jewelry, not a photograph of the Exton salon."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl",
					children: "What we will not invent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 grid gap-3 text-ink/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No owner biography, founding year, or staff directory. Those have not been confirmed for this website." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Guest reviews sometimes name a stylist. That is the reviewer’s wording, not a claim about ownership." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No celebrity clients, and no claim that the work here is used by film stars." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "One guest described the room as friendly and not glamorous. This site will not dress a stock spa interior up as the salon." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Walk-ins, payment, parking, and cancellation are not published here. Call and ask." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "text-wine",
						children: "See services"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl",
					children: "Hours"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 text-sm",
					children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-4 border-b border-ink/10 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right",
							children: row.time
						})]
					}, row.day))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-ink/65",
					children: "Sunday opens at 10:00 AM. Listings disagree on the Sunday close, so call before you rely on it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "mt-4 inline-block text-wine",
					children: PHONE_DISPLAY
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
//#endregion
export { AboutPage as component };
