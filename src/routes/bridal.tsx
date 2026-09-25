import { createFileRoute, Link } from "@tanstack/react-router";
import { CallBand, MenuCue } from "@/components/shell";
import { PHONE_DISPLAY, PHONE_TEL, publicPath } from "@/data/salon";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup & Henna in Exton | Bollywood Beauty Salon" },
      {
        name: "description",
        content:
          "Woman-owned bridal beauty in Exton, PA. Bridal makeup $400, engagement makeup $250, bridal henna from $150. Call to confirm what the visit includes.",
      },
    ],
  }),
  component: BridalPage,
});

const figures = [
  { label: "Bridal makeup", price: "$400", note: "Printed price. Ask what the appointment includes." },
  { label: "Engagement makeup", price: "$250", note: "A separate line from bridal makeup." },
  { label: "Bridal henna", price: "From $150", note: "Design, coverage, and names change the price." },
];

function BridalPage() {
  return (
    <main>
      <header className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-wine uppercase">Bridal · Woman-owned · Exton</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">For the day you have imagined.</h1>
          <p className="mt-5 max-w-md text-lg text-ink/75">
            Makeup and mehndi at Bollywood Beauty Salon, planned by phone. There is no online booking, and the photographs on this page are editorial, not this salon’s brides.
          </p>
          <a href={`tel:${PHONE_TEL}`} className="mt-8 inline-block bg-wine px-5 py-4 text-sm text-ivory">
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <figure>
          <img
            src={publicPath("/images/bridal/bridal-red.jpg")}
            alt="Editorial photograph of a South Asian bride in red and gold. Not a client of this salon."
            width={1200}
            height={1600}
            className="aspect-portrait w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-ink/60">Fliqa India, Pexels. Not a client of this salon.</figcaption>
        </figure>
      </header>

      <section className="border-y border-ink/10 bg-champagne/40" aria-labelledby="bridal-prices">
        <h2 id="bridal-prices" className="sr-only">
          Bridal prices
        </h2>
        <div className="mx-auto grid max-w-6xl gap-px bg-ink/10 px-5 py-px sm:grid-cols-3">
          {figures.map((item) => (
            <div key={item.label} className="bg-ivory px-6 py-8">
              <p className="font-serif text-3xl">{item.price}</p>
              <p className="mt-2">{item.label}</p>
              <p className="mt-2 text-sm text-ink/65">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl">What the menu does not promise</h2>
          <ul className="mt-6 grid gap-4 text-ink/80">
            <li>A separate bridal-hair price is not on the current menu. Hair beyond a cut or blow-dry is quoted at the salon.</li>
            <li>A makeup trial and a bridal package are not printed. Do not assume either is included in the $400.</li>
            <li>Prom is $85 and sweet sixteen is $85. They live with party makeup, not bridal.</li>
            <li>Threading, waxing, and facials can be booked in the weeks before. They are priced on their own menus.</li>
          </ul>
          <p className="mt-6">
            <Link to="/$service" params={{ service: "bridal-makeup" }} className="text-wine">
              Bridal makeup details
            </Link>
            <span className="px-2 text-ink/40">/</span>
            <Link to="/$service" params={{ service: "henna-mehndi" }}>
              <MenuCue>Henna menu</MenuCue>
            </Link>
            <span className="px-2 text-ink/40">/</span>
            <Link to="/$service" params={{ service: "party-makeup" }} className="text-wine">
              Party makeup
            </Link>
          </p>
        </div>
        <figure>
          <img
            src={publicPath("/images/bridal/south-indian-bride.jpg")}
            alt="Editorial photograph of a bride in a purple sari with gold jewelry."
            width={1400}
            height={933}
            loading="lazy"
            className="aspect-landscape w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-ink/60">Dream_ maKkerzz, Pexels. Not a client of this salon.</figcaption>
        </figure>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 lg:grid-cols-2">
        <img
          src={publicPath("/images/henna/mehndi-bangles.jpg")}
          alt="Mehndi and gold bangles against a purple sari."
          width={1400}
          height={933}
          loading="lazy"
          className="aspect-landscape w-full object-cover"
        />
        <div>
          <p className="text-xs tracking-widest text-wine uppercase">Henna</p>
          <h2 className="mt-3 font-serif text-4xl">Ancient art. Modern beauty.</h2>
          <p className="mt-4 text-ink/75">
            A small design starts at $10. Bridal henna starts at $150. Ask how far the paste goes, and whether names are part of the design, before the cone is opened.
          </p>
        </div>
      </section>
      <CallBand />
    </main>
  );
}
