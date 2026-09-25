import { d as featured, h as hours, i as GOOGLE_URL, m as getService, n as CITY_LINE, o as PHONE_DISPLAY, r as DIRECTIONS_URL, s as PHONE_TEL, t as ADDRESS_LINE, v as reviews } from "./salon-C_Hv5RvQ.mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BRpC8xa2.js
var import_jsx_runtime = require_jsx_runtime();
var trust = [
	"Woman-owned",
	"Exton, PA",
	"Threading",
	"Bridal beauty",
	"Facials",
	"Waxing",
	"Hair",
	"Henna"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-wine uppercase",
					children: "Exton, Pennsylvania"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-serif text-5xl leading-none text-ink sm:text-6xl",
					children: "Beauty, precision, and tradition."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md text-lg text-ink/75",
					children: "A woman-owned beauty salon for threading, bridal makeup, facials, waxing, hair, and henna."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "bg-wine px-5 py-4 text-sm text-ivory",
							children: "Call now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "border border-ink/20 px-5 py-4 text-sm",
							children: "View services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "border border-ink/20 px-5 py-4 text-sm",
							children: "View pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: DIRECTIONS_URL,
							className: "border border-ink/20 px-5 py-4 text-sm",
							children: "Get directions"
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/bridal/bridal-portrait.jpg",
				alt: "Editorial close-up of a South Asian bride with a nath and maang tikka. Not a client of this salon.",
				width: 1200,
				height: 1600,
				className: "aspect-portrait w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-2 text-xs text-ink/60",
				children: "Editorial photograph. Not a client of Bollywood Beauty Salon."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex gap-3 overflow-x-auto border-y border-ink/10 px-5 py-4 text-xs tracking-widest uppercase",
			children: trust.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "shrink-0 text-ink/70",
				children: item
			}, item))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16",
			"aria-labelledby": "signature",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "signature",
				className: "font-serif text-4xl",
				children: "Signature services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((item) => {
					const page = getService(item.slug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "group border border-ink/10 bg-ivory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/$service",
							params: { service: page.slug },
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: page.image,
								alt: "",
								width: 800,
								height: 1e3,
								loading: "lazy",
								className: "aspect-portrait w-full object-cover transition duration-300 group-hover:scale-[1.02]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl",
										children: page.nav
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-ink/70",
										children: page.paragraphs[0]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-wine",
										children: item.price
									})
								]
							})]
						})
					}, item.slug);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/threading/threading-process.jpg",
				alt: "Cotton thread shaping an eyebrow.",
				width: 1600,
				height: 1066,
				loading: "lazy",
				className: "aspect-landscape h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-ink px-8 py-16 text-ivory lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-champagne uppercase",
						children: "Threading"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-4xl",
						children: "Precision in every thread."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-ivory/80",
						children: "Eyebrows are $10. Men’s eyebrows are $12. A full face is $35. The same menu covers lip, chin, and neck."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/$service",
						params: { service: "eyebrow-threading" },
						className: "mt-6 text-sm text-champagne",
						children: "See threading prices"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 flex flex-col justify-center px-8 py-16 lg:order-1 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-wine uppercase",
						children: "Bridal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-serif text-4xl",
						children: "For the day you have imagined."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-ink/75",
						children: "Bridal makeup is $400. Engagement makeup is $250. Bridal henna starts at $150. Call to confirm what the makeup visit includes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/bridal",
						className: "mt-6 text-sm text-wine",
						children: "Explore bridal"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/bridal/bridal-veil.jpg",
				alt: "A bride in red and gold, photographed through an embroidered veil.",
				width: 1600,
				height: 1066,
				loading: "lazy",
				className: "order-1 aspect-landscape h-full w-full object-cover lg:order-2"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-champagne/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/henna/mehndi-bangles.jpg",
					alt: "Mehndi and gold bangles on a deep purple sari.",
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
						children: "Henna starts at $10. Bridal henna starts at $150. Henna for hair starts at $35."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/$service",
						params: { service: "henna-mehndi" },
						className: "mt-6 inline-block text-sm text-wine",
						children: "Henna menu"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16",
			"aria-labelledby": "voices",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "voices",
						className: "font-serif text-4xl",
						children: "What guests have written"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/reviews",
						className: "text-sm text-wine",
						children: "All excerpts"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: reviews.slice(0, 3).map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border border-ink/10 p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed",
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
					}, review.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-ink/60",
					children: [
						"Short public excerpts.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: GOOGLE_URL,
							className: "underline",
							children: "Read more on Google"
						}),
						". This page does not publish an overall star rating."
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink/10",
			"aria-labelledby": "visit",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "visit",
						className: "font-serif text-4xl",
						children: "Visit the salon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-lg",
						children: [
							"Bollywood Beauty Salon",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							ADDRESS_LINE,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							CITY_LINE
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "mt-4 inline-block text-wine",
						children: PHONE_DISPLAY
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-2 text-sm",
						children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-6 border-b border-ink/10 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.time })]
						}, row.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-ink/60",
						children: "Sunday’s closing time differs between the salon sign and some online listings. Call before you come on Sunday."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map showing 418 W Lincoln Hwy, Exton, Pennsylvania",
					src: "https://maps.google.com/maps?q=418+W+Lincoln+Hwy,+Exton,+PA+19341&z=16&output=embed",
					className: "min-h-80 w-full border border-ink/10",
					loading: "lazy"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BeautySalon",
				name: "Bollywood Beauty Salon",
				description: "Woman-owned beauty salon in Exton, Pennsylvania offering eyebrow threading, waxing, facials, hair, makeup, bridal beauty, and henna.",
				telephone: "+1-610-363-1244",
				address: {
					"@type": "PostalAddress",
					streetAddress: "418 W Lincoln Hwy",
					addressLocality: "Exton",
					addressRegion: "PA",
					postalCode: "19341",
					addressCountry: "US"
				},
				openingHoursSpecification: [
					[
						"Monday",
						"11:00",
						"20:00"
					],
					[
						"Tuesday",
						"11:00",
						"20:00"
					],
					[
						"Wednesday",
						"11:00",
						"20:00"
					],
					[
						"Thursday",
						"11:00",
						"20:00"
					],
					[
						"Friday",
						"10:00",
						"20:00"
					],
					[
						"Saturday",
						"10:00",
						"20:00"
					]
				].map(([day, opens, closes]) => ({
					"@type": "OpeningHoursSpecification",
					dayOfWeek: day,
					opens,
					closes
				}))
			}) }
		})
	] });
}
//#endregion
export { Home as component };
