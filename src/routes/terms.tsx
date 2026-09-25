import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/shell";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/salon";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | Bollywood Beauty Salon" },
      {
        name: "description",
        content:
          "Menu prices on this site are the current printed prices for Bollywood Beauty Salon in Exton. A call confirms the visit. This site does not book appointments.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageIntro
        kicker="Terms"
        title="A menu page is not a confirmed appointment."
        lede="Prices are the current salon menu. Calling the salon is what holds a time."
      />
      <div className="mx-auto grid max-w-3xl gap-4 px-5 pb-20 text-ink/80">
        <p>Flat prices are the printed amount. “Starting at,” “each,” and “per foil” mean the visit can differ. Ask before the service begins.</p>
        <p>Facial names are printed as the salon lists them. They are cosmetic. They are not medical claims and not a promise to change skin color.</p>
        <p>Eyelash extensions at $35 need a phone confirmation of what that visit includes. It should not be assumed to be a full classic or volume set.</p>
        <p>Photographs are licensed editorial images. They are not clients, staff, or the Exton interior.</p>
        <p>Guest excerpts are short quotations from public reviews. They are not testimonials commissioned by the salon, and this site does not publish an overall rating.</p>
        <p>
          To ask about a service, call{" "}
          <a href={`tel:${PHONE_TEL}`} className="text-wine">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
