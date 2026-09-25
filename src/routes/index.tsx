import { createFileRoute, Link } from "@tanstack/react-router";
import { featured, getService, hours, reviews, ADDRESS_LINE, CITY_LINE, DIRECTIONS_URL, PHONE_DISPLAY, PHONE_TEL, GOOGLE_URL, publicPath } from "@/data/salon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bollywood Beauty Salon | Woman-Owned Salon in Exton, PA" },
      {
        name: "description",
        content:
          "Woman-owned beauty salon in Exton, Pennsylvania. Eyebrow threading, bridal makeup, facials, waxing, hair color, and henna at 418 W Lincoln Hwy.",
      },
    ],
  }),
  component: Home,
});

const trust = ["Woman-owned", "Exton, PA", "Threading", "Bridal beauty", "Facials", "Waxing", "Hair", "Henna"];

function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs tracking-widest text-wine uppercase">Exton, Pennsylvania</p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-ink sm:text-6xl">
            Beauty, precision, and tradition.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink/75">
            A woman-owned beauty salon for threading, bridal makeup, facials, waxing, hair, and henna.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`} className="bg-wine px-5 py-4 text-sm text-ivory">
              Call now
            </a>
            <Link to="/services" className="border border-ink/20 px-5 py-4 text-sm">
              View services
            </Link>
            <Link to="/pricing" className="border border-ink/20 px-5 py-4 text-sm">
              Menu of services
            </Link>
            <a href={DIRECTIONS_URL} className="border border-ink/20 px-5 py-4 text-sm">
              Get directions
            </a>
          </div>
        </div>
        <figure>
          <img
            src={publicPath("/images/bridal/bridal-portrait.jpg")}
            alt="Editorial close-up of a South Asian bride with a nath and maang tikka. Not a client of this salon."
            width={1200}
            height={1600}
            className="aspect-portrait w-full object-cover"
          />
          <figcaption className="mt-2 text-xs text-ink/60">
            Editorial photograph. Not a client of Bollywood Beauty Salon.
          </figcaption>
        </figure>
      </section>

      <ul className="flex gap-3 overflow-x-auto border-y border-ink/10 px-5 py-4 text-xs tracking-widest uppercase">
        {trust.map((item) => (
          <li key={item} className="shrink-0 text-ink/70">
            {item}
          </li>
        ))}
      </ul>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="signature">
        <h2 id="signature" className="font-serif text-4xl">
          Signature services
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => {
            const page = getService(item.slug);
            return (
              <li key={item.slug} className="group border border-ink/10 bg-ivory">
                <Link to="/$service" params={{ service: page.slug }} className="block">
                  <img
                    src={page.image}
                    alt=""
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="aspect-portrait w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="p-5">
                    <h3 className="font-serif text-2xl">{page.nav}</h3>
                    <p className="mt-2 text-sm text-ink/70">{page.paragraphs[0]}</p>
                    <p className="mt-4 text-sm text-wine">{item.price}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="grid lg:grid-cols-2">
        <img
          src={publicPath("/images/threading/threading-process.jpg")}
          alt="Cotton thread shaping an eyebrow."
          width={1600}
          height={1066}
          loading="lazy"
          className="aspect-landscape h-full w-full object-cover"
        />
        <div className="flex flex-col justify-center bg-ink px-8 py-16 text-ivory lg:px-16">
          <p className="text-xs tracking-widest text-champagne uppercase">Threading</p>
          <h2 className="mt-3 font-serif text-4xl">Precision in every thread.</h2>
          <p className="mt-4 max-w-md text-ivory/80">
            Eyebrows are $10. Men’s eyebrows are $12. A full face is $35. The same menu covers lip, chin, and neck.
          </p>
          <Link to="/$service" params={{ service: "eyebrow-threading" }} className="mt-6 text-sm text-champagne">
            See threading prices
          </Link>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-8 py-16 lg:order-1 lg:px-16">
          <p className="text-xs tracking-widest text-wine uppercase">Bridal</p>
          <h2 className="mt-3 font-serif text-4xl">For the day you have imagined.</h2>
          <p className="mt-4 max-w-md text-ink/75">
            Bridal makeup is $400. Engagement makeup is $250. Bridal henna starts at $150. Call to confirm what the makeup visit includes.
          </p>
          <Link to="/bridal" className="mt-6 text-sm text-wine">
            Explore bridal
          </Link>
        </div>
        <img
          src={publicPath("/images/bridal/bridal-veil.jpg")}
          alt="A bride in red and gold, photographed through an embroidered veil."
          width={1600}
          height={1066}
          loading="lazy"
          className="order-1 aspect-landscape h-full w-full object-cover lg:order-2"
        />
      </section>

      <section className="bg-champagne/50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <img
            src={publicPath("/images/henna/mehndi-bangles.jpg")}
            alt="Mehndi and gold bangles on a deep purple sari."
            width={1400}
            height={933}
            loading="lazy"
            className="aspect-landscape w-full object-cover"
          />
          <div>
            <p className="text-xs tracking-widest text-wine uppercase">Henna</p>
            <h2 className="mt-3 font-serif text-4xl">Ancient art. Modern beauty.</h2>
            <p className="mt-4 text-ink/75">
              Henna starts at $10. Bridal henna starts at $150. Henna for hair starts at $35.
            </p>
            <Link to="/$service" params={{ service: "henna-mehndi" }} className="mt-6 inline-block text-sm text-wine">
              Henna menu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="voices">
        <div className="flex items-end justify-between gap-4">
          <h2 id="voices" className="font-serif text-4xl">
            What guests have written
          </h2>
          <Link to="/reviews" className="text-sm text-wine">
            All excerpts
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <li key={review.id} className="border border-ink/10 p-5">
              <blockquote>
                <p className="text-sm leading-relaxed">“{review.excerpt}”</p>
                <footer className="mt-4 text-xs text-ink/60">
                  {review.name} · {review.source} · {review.date}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-ink/60">
          Short public excerpts.{" "}
          <a href={GOOGLE_URL} className="underline">
            Read more on Google
          </a>
          . This page does not publish an overall star rating.
        </p>
      </section>

      <section className="border-t border-ink/10" aria-labelledby="visit">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 id="visit" className="font-serif text-4xl">
              Visit the salon
            </h2>
            <p className="mt-4 text-lg">
              Bollywood Beauty Salon
              <br />
              {ADDRESS_LINE}
              <br />
              {CITY_LINE}
            </p>
            <a href={`tel:${PHONE_TEL}`} className="mt-4 inline-block text-wine">
              {PHONE_DISPLAY}
            </a>
            <ul className="mt-6 grid gap-2 text-sm">
              {hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-6 border-b border-ink/10 py-2">
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink/60">
              Sunday’s closing time differs between the salon sign and some online listings. Call before you come on Sunday.
            </p>
          </div>
          <iframe
            title="Map showing 418 W Lincoln Hwy, Exton, Pennsylvania"
            src="https://maps.google.com/maps?q=418+W+Lincoln+Hwy,+Exton,+PA+19341&z=16&output=embed"
            className="min-h-80 w-full border border-ink/10"
            loading="lazy"
          />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Bollywood Beauty Salon",
            description:
              "Woman-owned beauty salon in Exton, Pennsylvania offering eyebrow threading, waxing, facials, hair, makeup, bridal beauty, and henna.",
            telephone: "+1-610-363-1244",
            address: {
              "@type": "PostalAddress",
              streetAddress: "418 W Lincoln Hwy",
              addressLocality: "Exton",
              addressRegion: "PA",
              postalCode: "19341",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              ["Monday", "11:00", "20:00"],
              ["Tuesday", "11:00", "20:00"],
              ["Wednesday", "11:00", "20:00"],
              ["Thursday", "11:00", "20:00"],
              ["Friday", "10:00", "20:00"],
              ["Saturday", "10:00", "20:00"],
            ].map(([day, opens, closes]) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: day,
              opens,
              closes,
            })),
          }),
        }}
      />
    </main>
  );
}
