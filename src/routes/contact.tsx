import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/shell";
import {
  ADDRESS_LINE,
  CITY_LINE,
  DIRECTIONS_URL,
  GOOGLE_URL,
  hours,
  MAP_EMBED,
  PHONE_DISPLAY,
  PHONE_TEL,
  YELP_URL,
} from "@/data/salon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Call Bollywood Beauty Salon at (610) 363-1244. 418 W Lincoln Hwy, Exton, PA 19341. This website does not book appointments.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [when, setWhen] = useState("");
  const [note, setNote] = useState("");
  const [ready, setReady] = useState(false);
  const [copyState, setCopyState] = useState("");

  const text = [`Name: ${name || "(not filled in)"}`, `Callback: ${phone || "(not filled in)"}`, `Timing: ${when || "(not filled in)"}`, `Note: ${note || "(none)"}`].join("\n");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState("Copied. The salon still has not received it — place the call.");
    } catch {
      setCopyState("Copy was blocked. Select the note and read it when you call.");
    }
  }

  return (
    <main>
      <PageIntro
        kicker="Visit or call"
        title="The phone is how a visit is confirmed."
        lede="There is no online booking. The note below is for you to read from. It is not sent, stored, or turned into an appointment."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-2">
        <div>
          <p className="font-serif text-2xl">Bollywood Beauty Salon</p>
          <p className="mt-2">
            {ADDRESS_LINE}
            <br />
            {CITY_LINE}
          </p>
          <a href={`tel:${PHONE_TEL}`} className="mt-3 inline-block text-lg text-wine">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-2 text-sm">
            <a href={DIRECTIONS_URL} className="text-wine">
              Directions
            </a>
          </p>
          <ul className="mt-6 grid gap-1 text-sm">
            {hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4 border-b border-ink/10 py-2">
                <span>{row.day}</span>
                <span className="text-right">{row.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/70">
            Public reviews:{" "}
            <a href={GOOGLE_URL} className="text-wine">
              Google
            </a>
            {" · "}
            <a href={YELP_URL} className="text-wine">
              Yelp
            </a>
          </p>
          <iframe
            title="Map showing 418 W Lincoln Hwy, Exton, Pennsylvania"
            src={MAP_EMBED}
            className="mt-6 min-h-72 w-full border border-ink/10"
            loading="lazy"
          />
        </div>
        <form
          className="border border-ink/10 p-5"
          onSubmit={(event) => {
            event.preventDefault();
            setReady(true);
            setCopyState("");
          }}
        >
          <h2 className="font-serif text-2xl">Prepare a call note</h2>
          <p className="mt-2 text-sm text-ink/70">
            This website does not email the salon. Pressing the button only shows a note you can copy. It does not confirm a time.
          </p>
          <label className="mt-5 block text-sm" htmlFor="guest-name">
            Your name
          </label>
          <input
            id="guest-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full border border-ink/20 bg-ivory px-3 py-3"
            autoComplete="name"
          />
          <label className="mt-4 block text-sm" htmlFor="guest-phone">
            Phone to reach you
          </label>
          <input
            id="guest-phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-1 w-full border border-ink/20 bg-ivory px-3 py-3"
            type="tel"
            autoComplete="tel"
          />
          <label className="mt-4 block text-sm" htmlFor="guest-when">
            Day or time you hope for
          </label>
          <input
            id="guest-when"
            value={when}
            onChange={(event) => setWhen(event.target.value)}
            className="mt-1 w-full border border-ink/20 bg-ivory px-3 py-3"
          />
          <label className="mt-4 block text-sm" htmlFor="guest-note">
            What you want done
          </label>
          <textarea
            id="guest-note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="mt-1 min-h-28 w-full border border-ink/20 bg-ivory px-3 py-3"
          />
          <button type="submit" className="mt-5 bg-wine px-5 py-3 text-sm text-ivory">
            Prepare a call note
          </button>
          {ready ? (
            <div className="mt-6 border border-gold/50 bg-champagne/40 p-4" role="status">
              <p className="text-sm">
                Nothing was sent. The salon did not receive this, and no appointment is booked. Call {PHONE_DISPLAY} and read the note if it helps.
              </p>
              <label className="mt-3 block text-sm" htmlFor="call-note">
                Note to read aloud
              </label>
              <textarea id="call-note" readOnly value={text} className="mt-1 min-h-28 w-full border border-ink/20 bg-ivory px-3 py-3" />
              <div className="mt-3 flex flex-wrap gap-3">
                <button type="button" className="border border-ink/20 px-4 py-3 text-sm" onClick={() => void copy()}>
                  Copy note
                </button>
                <a href={`tel:${PHONE_TEL}`} className="bg-wine px-4 py-3 text-sm text-ivory">
                  Call the salon
                </a>
              </div>
              {copyState ? <p className="mt-3 text-sm">{copyState}</p> : null}
            </div>
          ) : null}
        </form>
      </div>
    </main>
  );
}
