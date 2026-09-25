import { createFileRoute, Link } from "@tanstack/react-router";
import { CallBand } from "@/components/shell";
import { ADDRESS_LINE, CITY_LINE, hours, PHONE_DISPLAY, PHONE_TEL } from "@/data/salon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Woman-Owned Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Bollywood Beauty Salon is a woman-owned beauty salon at 418 W Lincoln Hwy, Exton, PA. Threading, bridal beauty, facials, waxing, hair, and henna.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <header className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-wine uppercase">Woman-owned</p>
          <h1 className="mt-4 font-serif text-5xl leading-none">A salon in Exton, kept by a woman who owns it.</h1>
          <p className="mt-5 text-lg text-ink/75">
            Bollywood Beauty Salon is a woman-owned beauty salon at {ADDRESS_LINE}, {CITY_LINE}. Guests come for threading, waxing, facials, hair, makeup, and henna.
          </p>
        </div>
        <figure>
          <img
            src="/images/bridal/jewelry.jpg"
            alt="Editorial close-up of gold jewelry. Not the salon interior."
            width={1400}
            height={933}
            className="aspect-landscape w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-ink/60">
            Kushith M, Pexels. Jewelry, not a photograph of the Exton salon.
          </figcaption>
        </figure>
      </header>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">What we will not invent</h2>
          <ul className="mt-4 grid gap-3 text-ink/80">
            <li>No owner biography, founding year, or staff directory. Those have not been confirmed for this website.</li>
            <li>Guest reviews sometimes name a stylist. That is the reviewer’s wording, not a claim about ownership.</li>
            <li>No celebrity clients, and no claim that the work here is used by film stars.</li>
            <li>One guest described the room as friendly and not glamorous. This site will not dress a stock spa interior up as the salon.</li>
            <li>Walk-ins, payment, parking, and cancellation are not published here. Call and ask.</li>
          </ul>
          <p className="mt-6">
            <Link to="/services" className="text-wine">
              See services
            </Link>
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Hours</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4 border-b border-ink/10 py-2">
                <span>{row.day}</span>
                <span className="text-right">{row.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink/65">
            Sunday opens at 10:00 AM. Listings disagree on the Sunday close, so call before you rely on it.
          </p>
          <a href={`tel:${PHONE_TEL}`} className="mt-4 inline-block text-wine">
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
      <CallBand />
    </main>
  );
}
