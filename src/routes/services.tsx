import { createFileRoute, Link } from "@tanstack/react-router";
import { CallBand, PageIntro } from "@/components/shell";
import { services } from "@/data/salon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Threading, waxing, facials, hair, bridal and party makeup, lashes, henna, and short beauty treatments at a woman-owned salon in Exton, PA.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <PageIntro
        kicker="The menu"
        title="Services, with the prices printed beside them."
        lede="Bollywood Beauty Salon is a woman-owned salon in Exton. Every page below uses the current menu. Older brochure items are not listed."
      />
      <ul className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 sm:grid-cols-2">
        {services.map((page) => (
          <li key={page.slug}>
            <Link to="/$service" params={{ service: page.slug }} className="group block">
              <img
                src={page.image}
                alt=""
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-landscape w-full object-cover"
              />
              <h2 className="mt-4 font-serif text-2xl group-hover:text-wine">{page.nav}</h2>
              <p className="mt-2 text-sm text-ink/75">{page.paragraphs[0]}</p>
            </Link>
          </li>
        ))}
      </ul>
      <CallBand />
    </main>
  );
}
