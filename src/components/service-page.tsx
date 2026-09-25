import { Link } from "@tanstack/react-router";
import { formatPrice, getService, itemsFor, services } from "@/data/salon";
import { CallBand, MenuCue } from "@/components/shell";

export function metaFor(slug: string) {
  const page = getService(slug);
  return [
    { title: `${page.title} | Bollywood Beauty Salon` },
    { name: "description", content: page.description },
  ];
}

export function ServicePage({ slug }: { slug: string }) {
  const page = getService(slug);
  const items = itemsFor(slug);
  const related = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article>
      <header className="mx-auto grid max-w-6xl items-end gap-8 px-5 pt-12 pb-10 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-wine uppercase">{page.kicker}</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-3 text-sm text-ink/70">Woman-owned beauty salon · Exton, Pennsylvania</p>
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg text-ink/80">
              {paragraph}
            </p>
          ))}
        </div>
        <figure>
          <img
            src={page.image}
            alt={page.alt}
            width={1200}
            height={1500}
            className="aspect-portrait w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-ink/60">{page.credit}</figcaption>
        </figure>
      </header>
      <section className="bg-champagne/40" aria-labelledby="prices-heading">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 id="prices-heading">
            <MenuCue large>Menu prices</MenuCue>
          </h2>
          <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {items.map((item) => (
              <li key={item.id} className="flex items-baseline justify-between gap-4 py-4">
                <span>
                  <span className="block">{item.name}</span>
                  {item.note ? <span className="mt-1 block text-sm text-ink/65">{item.note}</span> : null}
                </span>
                <span className="shrink-0 text-sm">{formatPrice(item)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink/70">
            “Starting at” prices can change with length, design, or the area treated. Confirm at the salon.
          </p>
        </div>
      </section>
      {page.support ? (
        <figure className="mx-auto max-w-6xl px-5 py-12">
          <img
            src={page.support.src}
            alt={page.support.alt}
            width={1600}
            height={1066}
            loading="lazy"
            className="aspect-landscape w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-ink/60">{page.support.credit}</figcaption>
        </figure>
      ) : null}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="font-serif text-2xl">Related</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link to="/$service" params={{ service: item.slug }} className="block border border-ink/10 p-4 hover:border-wine">
                {item.nav}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CallBand />
    </article>
  );
}
