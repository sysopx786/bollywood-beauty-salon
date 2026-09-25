import { createFileRoute, Link } from "@tanstack/react-router";
import { CallBand, PageIntro } from "@/components/shell";

export const Route = createFileRoute("/before-and-after")({
  head: () => ({
    meta: [
      { title: "Before & After | Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Real client transformations from Bollywood Beauty Salon are not published yet. Stock photos are not shown as results.",
      },
    ],
  }),
  component: BeforeAfterPage,
});

function BeforeAfterPage() {
  return (
    <main>
      <PageIntro
        kicker="Results"
        title="Real client transformations coming soon."
        lede="This page stays empty until the salon has permission to show actual guests. Stock photographs are not before-and-after results, and they will not be presented as if they were."
      />
      <section className="mx-auto max-w-3xl px-5 pb-16">
        <div className="border border-dashed border-ink/25 px-6 py-16 text-center">
          <p className="font-serif text-3xl">No pairs yet</p>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/70">
            When a guest agrees, a real before and a real after can live here. Until then, the gallery is labeled as editorial only.
          </p>
          <Link to="/gallery" className="mt-6 inline-block text-sm text-wine">
            View the editorial gallery
          </Link>
        </div>
      </section>
      <CallBand />
    </main>
  );
}
