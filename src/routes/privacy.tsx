import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/shell";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/salon";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Bollywood Beauty Salon" },
      {
        name: "description",
        content: "How this Bollywood Beauty Salon website handles the call note. It does not send or store appointment requests.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <PageIntro
        kicker="Privacy"
        title="The call note never leaves your browser."
        lede="This website does not take online bookings and does not email the salon."
      />
      <div className="mx-auto max-w-3xl px-5 pb-20 text-ink/80">
        <p>
          If you type a name, phone number, or note on the contact page, that text stays on your device so you can copy it. Pressing the button does not transmit it. Do not type anything you would not read aloud on a phone call.
        </p>
        <p className="mt-4">
          Maps and the links to Google and Yelp are third-party pages. Their own policies apply once you leave this site. Calling {PHONE_DISPLAY} is a normal phone call to the salon, not a message through this website.
        </p>
        <p className="mt-4">
          Questions about a visit, not about this page, go to the salon at{" "}
          <a href={`tel:${PHONE_TEL}`} className="text-wine">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
