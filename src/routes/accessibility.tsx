import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/shell";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/salon";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility | Bollywood Beauty Salon" },
      {
        name: "description",
        content:
          "Accessibility notes for the Bollywood Beauty Salon website, and what the Exton salon has not published about parking or step-free entry.",
      },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <main>
      <PageIntro
        kicker="Accessibility"
        title="The site should be readable. The building details are a phone call."
        lede="Pages use text instead of prices trapped in photographs, visible keyboard focus, and a skip link. Motion is reduced when your device asks for that."
      />
      <div className="mx-auto grid max-w-3xl gap-4 px-5 pb-20 text-ink/80">
        <p>
          If a page is hard to use, call{" "}
          <a href={`tel:${PHONE_TEL}`} className="text-wine">
            {PHONE_DISPLAY}
          </a>{" "}
          and say what you were trying to do. There is no separate accessibility inbox on this site.
        </p>
        <p>
          The salon has not published parking, step-free entrance, or restroom details. If access matters to the trip, ask on the phone before you come. This website will not guess.
        </p>
        <p>Sunday’s closing time is also best confirmed by phone. The site says the salon opens at 10:00 AM and does not pick a closing time the listings disagree on.</p>
      </div>
    </main>
  );
}
