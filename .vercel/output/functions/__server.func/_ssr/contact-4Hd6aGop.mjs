import { i as __toESM } from "../_runtime.mjs";
import { a as MAP_EMBED, c as YELP_URL, h as hours, i as GOOGLE_URL, n as CITY_LINE, o as PHONE_DISPLAY, r as DIRECTIONS_URL, s as PHONE_TEL, t as ADDRESS_LINE } from "./salon-C_Hv5RvQ.mjs";
import { J as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-4Hd6aGop.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [when, setWhen] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [copyState, setCopyState] = (0, import_react.useState)("");
	const text = [
		`Name: ${name || "(not filled in)"}`,
		`Callback: ${phone || "(not filled in)"}`,
		`Timing: ${when || "(not filled in)"}`,
		`Note: ${note || "(none)"}`
	].join("\n");
	async function copy() {
		try {
			await navigator.clipboard.writeText(text);
			setCopyState("Copied. The salon still has not received it — place the call.");
		} catch {
			setCopyState("Copy was blocked. Select the note and read it when you call.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Visit or call",
		title: "The phone is how a visit is confirmed.",
		lede: "There is no online booking. The note below is for you to read from. It is not sent, stored, or turned into an appointment."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-2xl",
				children: "Bollywood Beauty Salon"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2",
				children: [
					ADDRESS_LINE,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					CITY_LINE
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${PHONE_TEL}`,
				className: "mt-3 inline-block text-lg text-wine",
				children: PHONE_DISPLAY
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: DIRECTIONS_URL,
					className: "text-wine",
					children: "Directions"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-1 text-sm",
				children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between gap-4 border-b border-ink/10 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: row.time
					})]
				}, row.day))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-ink/70",
				children: [
					"Public reviews:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: GOOGLE_URL,
						className: "text-wine",
						children: "Google"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: YELP_URL,
						className: "text-wine",
						children: "Yelp"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Map showing 418 W Lincoln Hwy, Exton, Pennsylvania",
				src: MAP_EMBED,
				className: "mt-6 min-h-72 w-full border border-ink/10",
				loading: "lazy"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "border border-ink/10 p-5",
			onSubmit: (event) => {
				event.preventDefault();
				setReady(true);
				setCopyState("");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl",
					children: "Prepare a call note"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink/70",
					children: "This website does not email the salon. Pressing the button only shows a note you can copy. It does not confirm a time."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-5 block text-sm",
					htmlFor: "guest-name",
					children: "Your name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "guest-name",
					value: name,
					onChange: (event) => setName(event.target.value),
					className: "mt-1 w-full border border-ink/20 bg-ivory px-3 py-3",
					autoComplete: "name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-4 block text-sm",
					htmlFor: "guest-phone",
					children: "Phone to reach you"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "guest-phone",
					value: phone,
					onChange: (event) => setPhone(event.target.value),
					className: "mt-1 w-full border border-ink/20 bg-ivory px-3 py-3",
					type: "tel",
					autoComplete: "tel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-4 block text-sm",
					htmlFor: "guest-when",
					children: "Day or time you hope for"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "guest-when",
					value: when,
					onChange: (event) => setWhen(event.target.value),
					className: "mt-1 w-full border border-ink/20 bg-ivory px-3 py-3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-4 block text-sm",
					htmlFor: "guest-note",
					children: "What you want done"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "guest-note",
					value: note,
					onChange: (event) => setNote(event.target.value),
					className: "mt-1 min-h-28 w-full border border-ink/20 bg-ivory px-3 py-3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-5 bg-wine px-5 py-3 text-sm text-ivory",
					children: "Prepare a call note"
				}),
				ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 border border-gold/50 bg-champagne/40 p-4",
					role: "status",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								"Nothing was sent. The salon did not receive this, and no appointment is booked. Call ",
								PHONE_DISPLAY,
								" and read the note if it helps."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-3 block text-sm",
							htmlFor: "call-note",
							children: "Note to read aloud"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "call-note",
							readOnly: true,
							value: text,
							className: "mt-1 min-h-28 w-full border border-ink/20 bg-ivory px-3 py-3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "border border-ink/20 px-4 py-3 text-sm",
								onClick: () => void copy(),
								children: "Copy note"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE_TEL}`,
								className: "bg-wine px-4 py-3 text-sm text-ivory",
								children: "Call the salon"
							})]
						}),
						copyState ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm",
							children: copyState
						}) : null
					]
				}) : null
			]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
