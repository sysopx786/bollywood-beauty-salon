import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CallBand, PageIntro } from "@/components/shell";
import { categories, formatPrice, menu, type MenuItem } from "@/data/salon";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Menu of services | Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Current menu prices for threading, waxing, facials, hair, makeup, lashes, henna, and treatments at Bollywood Beauty Salon in Exton, PA.",
      },
    ],
  }),
  component: PricingPage,
});

const tabs = ["All", ...categories] as const;

function PricingPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [closed, setClosed] = useState<string[]>([]);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((category) => tab === "All" || category === tab)
      .map((category) => ({
        category,
        items: menu.filter((item) => {
          if (item.category !== category) return false;
          if (!q) return true;
          return (
            item.name.toLowerCase().includes(q) ||
            category.toLowerCase().includes(q) ||
            (item.note?.toLowerCase().includes(q) ?? false)
          );
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [query, tab]);

  const count = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <main>
      <PageIntro
        kicker="Current menu"
        title="Menu of services"
        lede="These amounts are from the photographed current menu. Older brochures are not mixed in. “Starting at” is not a flat quote."
      />
      <div className="mx-auto max-w-3xl px-5 pb-16">
        <label className="block text-sm" htmlFor="price-search">
          Search the menu
        </label>
        <input
          id="price-search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setClosed([]);
          }}
          className="mt-2 w-full border border-ink/20 bg-ivory px-4 py-3"
          type="search"
        />
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Menu categories">
          {tabs.map((item) => {
            const selected = item === tab;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setTab(item);
                  setClosed([]);
                }}
                className={
                  selected
                    ? "shrink-0 bg-wine px-4 py-2 text-sm text-ivory"
                    : "shrink-0 border border-ink/15 px-4 py-2 text-sm"
                }
              >
                {item}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-ink/70" aria-live="polite">
          {count === 0 ? "Nothing on the menu matches that search." : `${count} menu ${count === 1 ? "line" : "lines"}.`}
        </p>
        <div className="mt-4">
          {groups.map((group) => {
            const isOpen = !closed.includes(group.category);
            return (
              <section key={group.category} className="border-b border-ink/10">
                <h2>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full items-baseline justify-between gap-4 py-4 text-left"
                    onClick={() =>
                      setClosed((current) =>
                        current.includes(group.category)
                          ? current.filter((name) => name !== group.category)
                          : [...current, group.category],
                      )
                    }
                  >
                    <span className="font-serif text-2xl">{group.category}</span>
                    <span className="text-sm text-ink/60">{isOpen ? "Hide" : "Show"}</span>
                  </button>
                </h2>
                {isOpen ? <PriceList items={group.items} /> : null}
              </section>
            );
          })}
        </div>
      </div>
      <CallBand />
    </main>
  );
}

function PriceList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="divide-y divide-ink/10 border-t border-ink/10">
      {items.map((item) => (
        <li key={item.id} className="flex items-baseline justify-between gap-4 py-4">
          <span>
            <Link
              to="/$service"
              params={{ service: item.slug }}
              className="underline decoration-ink/20 underline-offset-4 hover:text-wine"
            >
              {item.name}
            </Link>
            {item.note ? <span className="mt-1 block text-sm text-ink/65">{item.note}</span> : null}
          </span>
          <span className="shrink-0 text-sm">{formatPrice(item)}</span>
        </li>
      ))}
    </ul>
  );
}
