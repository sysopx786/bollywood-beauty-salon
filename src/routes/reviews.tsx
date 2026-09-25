import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CallBand, PageIntro } from "@/components/shell";
import { GOOGLE_URL, reviews, YELP_URL, type Review } from "@/data/salon";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Words | Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Short public excerpts about Bollywood Beauty Salon in Exton. Read the full conversations on Google and Yelp. This page does not publish an overall rating.",
      },
    ],
  }),
  component: ReviewsPage,
});

const tags = ["All", "Threading", "Waxing", "Hair", "Facials", "Makeup"] as const;
const sources = ["All", "Google", "Yelp"] as const;

function ReviewsPage() {
  const [tag, setTag] = useState<(typeof tags)[number]>("All");
  const [source, setSource] = useState<(typeof sources)[number]>("All");
  const shown = useMemo(
    () =>
      reviews.filter((review) => {
        if (source !== "All" && review.source !== source) return false;
        if (tag !== "All" && !review.tags.includes(tag)) return false;
        return true;
      }),
    [tag, source],
  );

  return (
    <main>
      <PageIntro
        kicker="In their words"
        title="Short excerpts. The full reviews stay where they were written."
        lede="These are pieces of public Google and Yelp reviews. This page does not show a star average, a review count, or a rating in search results."
      />
      <div className="mx-auto max-w-3xl px-5 pb-16">
        <p className="flex flex-wrap gap-4 text-sm">
          <a href={GOOGLE_URL} className="text-wine underline underline-offset-4">
            Open Google
          </a>
          <a href={YELP_URL} className="text-wine underline underline-offset-4">
            Open Yelp
          </a>
        </p>
        <fieldset className="mt-6">
          <legend className="text-sm">Service mentioned</legend>
          <div className="mt-2 flex gap-2 overflow-x-auto">
            {tags.map((item) => (
              <Filter key={item} pressed={tag === item} onClick={() => setTag(item)} label={item} />
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-4">
          <legend className="text-sm">Where it was written</legend>
          <div className="mt-2 flex gap-2">
            {sources.map((item) => (
              <Filter key={item} pressed={source === item} onClick={() => setSource(item)} label={item} />
            ))}
          </div>
        </fieldset>
        <ul className="mt-8 grid gap-4">
          {shown.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
        {shown.length === 0 ? <p className="mt-6 text-sm text-ink/70">No excerpts match that filter.</p> : null}
        <p className="mt-8 text-sm text-ink/65">
          Names of stylists appear only because a guest wrote them. This site does not publish a staff list. Some public reviews are critical and are not reprinted here as marketing. Read those on Google and Yelp too.
        </p>
      </div>
      <CallBand />
    </main>
  );
}

function Filter({ pressed, onClick, label }: { pressed: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={pressed ? "shrink-0 bg-ink px-4 py-2 text-sm text-ivory" : "shrink-0 border border-ink/15 px-4 py-2 text-sm"}
    >
      {label}
    </button>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <li className="border border-ink/10 p-5">
      <blockquote>
        <p className="leading-relaxed">“{review.excerpt}”</p>
        <footer className="mt-4 text-xs text-ink/60">
          {review.name} · {review.source} · {review.date}
        </footer>
      </blockquote>
    </li>
  );
}
