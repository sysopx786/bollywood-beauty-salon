import { o as PHONE_DISPLAY, s as PHONE_TEL } from "./salon-C_Hv5RvQ.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as CallBand } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bridal-Cnp85UjS.js
var import_jsx_runtime = require_jsx_runtime();
var figures = [
	{
		label: "Bridal makeup",
		price: "$400",
		note: "Printed price. Ask what the appointment includes."
	},
	{
		label: "Engagement makeup",
		price: "$250",
		note: "A separate line from bridal makeup."
	},
	{
		label: "Bridal henna",
		price: "From $150",
		note: "Design, coverage, and names change the price."
	}
];
function BridalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-wine uppercase",
					children: "Bridal · Woman-owned · Exton"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-serif text-5xl leading-none sm:text-6xl",
					children: "For the day you have imagined."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-lg text-ink/75",
					children: "Makeup and mehndi at Bollywood Beauty Salon, planned by phone. There is no online booking, and the photographs on this page are editorial, not this salon’s brides."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "mt-8 inline-block bg-wine px-5 py-4 text-sm text-ivory",
					children: ["Call ", PHONE_DISPLAY]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/bridal/bridal-red.jpg",
				alt: "Editorial photograph of a South Asian bride in red and gold. Not a client of this salon.",
				width: 1200,
				height: 1600,
				className: "aspect-portrait w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-2 text-xs text-ink/60",
				children: "Fliqa India, Pexels. Not a client of this salon."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-y border-ink/10 bg-champagne/40",
			"aria-labelledby": "bridal-prices",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "bridal-prices",
				className: "sr-only",
				children: "Bridal prices"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-px bg-ink/10 px-5 py-px sm:grid-cols-3",
				children: figures.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-ivory px-6 py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl",
							children: item.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink/65",
							children: item.note
						})
					]
				}, item.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl",
					children: "What the menu does not promise"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 grid gap-4 text-ink/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A separate bridal-hair price is not on the current menu. Hair beyond a cut or blow-dry is quoted at the salon." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A makeup trial and a bridal package are not printed. Do not assume either is included in the $400." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Prom is $85 and sweet sixteen is $85. They live with party makeup, not bridal." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Threading, waxing, and facials can be booked in the weeks before. They are priced on their own menus." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/$service",
							params: { service: "bridal-makeup" },
							className: "text-wine",
							children: "Bridal makeup details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 text-ink/40",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/$service",
							params: { service: "henna-mehndi" },
							className: "text-wine",
							children: "Henna menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 text-ink/40",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/$service",
							params: { service: "party-makeup" },
							className: "text-wine",
							children: "Party makeup"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/bridal/south-indian-bride.jpg",
				alt: "Editorial photograph of a bride in a purple sari with gold jewelry.",
				width: 1400,
				height: 933,
				loading: "lazy",
				className: "aspect-landscape w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-2 text-xs text-ink/60",
				children: "Dream_ maKkerzz, Pexels. Not a client of this salon."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/henna/mehndi-bangles.jpg",
				alt: "Mehndi and gold bangles against a purple sari.",
				width: 1400,
				height: 933,
				loading: "lazy",
				className: "aspect-landscape w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-wine uppercase",
					children: "Henna"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-serif text-4xl",
					children: "Ancient art. Modern beauty."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-ink/75",
					children: "A small design starts at $10. Bridal henna starts at $150. Ask how far the paste goes, and whether names are part of the design, before the cone is opened."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
//#endregion
export { BridalPage as component };
