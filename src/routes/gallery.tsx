import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type RefObject } from "react";
import { PageIntro } from "@/components/shell";
import { gallery, type GalleryImage } from "@/data/salon";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Bollywood Beauty Salon, Exton" },
      {
        name: "description",
        content:
          "Editorial photographs for mood — bridal beauty, henna, threading, facials, and hair. These are not photos of Bollywood Beauty Salon clients.",
      },
    ],
  }),
  component: GalleryPage,
});

const filters = ["All", "Bridal", "Henna", "Threading & Brows", "Facials", "Hair", "Makeup"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const visible = gallery.filter((image) => filter === "All" || image.category === filter);
  const current = active === null ? null : visible[active];

  useEffect(() => {
    if (!current) return;
    const node = dialogRef.current;
    node?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index === null ? index : (index + 1) % visible.length));
      if (event.key === "ArrowLeft")
        setActive((index) => (index === null ? index : (index - 1 + visible.length) % visible.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, visible.length]);

  return (
    <main>
      <PageIntro
        kicker="Editorial"
        title="A mood, not a client book."
        lede="These photographs are licensed stock. They show the beauty the salon works toward. They are not pictures of this salon, its room, or its guests."
      />
      <div className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex gap-2 overflow-x-auto pb-6" role="group" aria-label="Filter photographs">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => {
                setFilter(item);
                setActive(null);
              }}
              className={
                filter === item
                  ? "shrink-0 bg-wine px-4 py-2 text-sm text-ivory"
                  : "shrink-0 border border-ink/15 px-4 py-2 text-sm"
              }
            >
              {item}
            </button>
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((image, index) => (
            <li key={image.src}>
              <button type="button" className="block w-full text-left" onClick={() => setActive(index)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="aspect-portrait w-full object-cover"
                />
                <span className="mt-2 block text-xs text-ink/60">{image.credit}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink/70">
          Real client before-and-after photographs are not published yet.{" "}
          <Link to="/before-and-after" className="text-wine">
            See that page
          </Link>
          .
        </p>
      </div>
      {current ? (
        <Lightbox
          image={current}
          dialogRef={dialogRef}
          onClose={() => setActive(null)}
          onPrev={() => setActive((index) => (index === null ? index : (index - 1 + visible.length) % visible.length))}
          onNext={() => setActive((index) => (index === null ? index : (index + 1) % visible.length))}
        />
      ) : null}
    </main>
  );
}

function Lightbox({
  image,
  dialogRef,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  dialogRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 p-4 text-ivory"
    >
      <div className="grid w-full max-w-4xl gap-4">
        <div className="flex justify-end gap-2">
          <button type="button" className="border border-ivory/30 px-4 py-2 text-sm" onClick={onPrev}>
            Previous
          </button>
          <button type="button" className="border border-ivory/30 px-4 py-2 text-sm" onClick={onNext}>
            Next
          </button>
          <button type="button" className="bg-ivory px-4 py-2 text-sm text-ink" onClick={onClose}>
            Close
          </button>
        </div>
        <img src={image.src} alt={image.alt} className="max-h-[70vh] w-full object-contain" />
        <p className="text-sm text-ivory/75">
          {image.category}. {image.credit}. Not a client of this salon.
        </p>
      </div>
    </div>
  );
}
