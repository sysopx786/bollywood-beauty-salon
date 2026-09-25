import { i as __toESM } from "../_runtime.mjs";
import { _ as menu, f as formatPrice, l as categories } from "./salon-C_Hv5RvQ.mjs";
import { J as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, i as CallBand } from "./router-C0-eDx_d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-DEo207bf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = ["All", ...categories];
function PricingPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [tab, setTab] = (0, import_react.useState)("All");
	const [closed, setClosed] = (0, import_react.useState)([]);
	const groups = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return categories.filter((category) => tab === "All" || category === tab).map((category) => ({
			category,
			items: menu.filter((item) => {
				if (item.category !== category) return false;
				if (!q) return true;
				return item.name.toLowerCase().includes(q) || category.toLowerCase().includes(q) || (item.note?.toLowerCase().includes(q) ?? false);
			})
		})).filter((group) => group.items.length > 0);
	}, [query, tab]);
	const count = groups.reduce((sum, group) => sum + group.items.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Current menu",
			title: "Every price, from one list.",
			lede: "These amounts are from the photographed current menu. Older brochures are not mixed in. “Starting at” is not a flat quote."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-sm",
					htmlFor: "price-search",
					children: "Search the menu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "price-search",
					value: query,
					onChange: (event) => {
						setQuery(event.target.value);
						setClosed([]);
					},
					className: "mt-2 w-full border border-ink/20 bg-ivory px-4 py-3",
					type: "search"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex gap-2 overflow-x-auto pb-1",
					role: "tablist",
					"aria-label": "Menu categories",
					children: tabs.map((item) => {
						const selected = item === tab;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selected,
							onClick: () => {
								setTab(item);
								setClosed([]);
							},
							className: selected ? "shrink-0 bg-wine px-4 py-2 text-sm text-ivory" : "shrink-0 border border-ink/15 px-4 py-2 text-sm",
							children: item
						}, item);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-ink/70",
					"aria-live": "polite",
					children: count === 0 ? "Nothing on the menu matches that search." : `${count} menu ${count === 1 ? "line" : "lines"}.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: groups.map((group) => {
						const isOpen = !closed.includes(group.category);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "border-b border-ink/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": isOpen,
								className: "flex w-full items-baseline justify-between gap-4 py-4 text-left",
								onClick: () => setClosed((current) => current.includes(group.category) ? current.filter((name) => name !== group.category) : [...current, group.category]),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-2xl",
									children: group.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-ink/60",
									children: isOpen ? "Hide" : "Show"
								})]
							}) }), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceList, { items: group.items }) : null]
						}, group.category);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallBand, {})
	] });
}
function PriceList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-ink/10 border-t border-ink/10",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-baseline justify-between gap-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/$service",
				params: { service: item.slug },
				className: "underline decoration-ink/20 underline-offset-4 hover:text-wine",
				children: item.name
			}), item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-ink/65",
				children: item.note
			}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 text-sm",
				children: formatPrice(item)
			})]
		}, item.id))
	});
}
//#endregion
export { PricingPage as component };
