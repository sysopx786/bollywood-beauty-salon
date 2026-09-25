import { createFileRoute } from "@tanstack/react-router";
import { CallBand, PageIntro } from "@/components/shell";
import { SalonAddress } from "@/components/place-links";
import { ADDRESS_LINE, CITY_LINE, faqs } from "@/data/salon";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Hours, threading prices, bridal makeup, and what Bollywood Beauty Salon in Exton has not published yet. Call (610) 363-1244.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqAnswer({ text }: { text: string }) {
  const address = `${ADDRESS_LINE}, ${CITY_LINE}`;
  if (!text.includes(address)) return text;
  const [before, after] = text.split(address);
  return (
    <>
      {before}
      <SalonAddress variant="inline" />
      {after}
    </>
  );
}

function FaqPage() {
  return (
    <main>
      <PageIntro
        kicker="Questions"
        title="Answers we can stand behind."
        lede="If the salon has not published a policy, the answer is to call. This page does not guess."
      />
      <div className="mx-auto max-w-3xl px-5 pb-16">
        {faqs.map((item) => (
          <details key={item.q} className="group border-b border-ink/10 py-4">
            <summary className="cursor-pointer font-serif text-xl">{item.q}</summary>
            <p className="pt-3 text-ink/80">
              <FaqAnswer text={item.a} />
            </p>
          </details>
        ))}
      </div>
      <CallBand />
    </main>
  );
}
