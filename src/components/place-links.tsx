import { ADDRESS_LINE, CITY_LINE, DIRECTIONS_URL, GOOGLE_URL } from "@/data/salon";

const letters = [
  ["G", "#4285F4"],
  ["o", "#EA4335"],
  ["o", "#FBBC05"],
  ["g", "#4285F4"],
  ["l", "#34A853"],
  ["e", "#EA4335"],
] as const;

export function MapsPin({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#34A853"
        d="M35.76 26.36h.01s-3.77 5.53-6.94 9.64c-2.74 3.55-3.54 6.59-3.77 8.06C24.97 44.6 24.53 45 24 45s-.97-.4-1.06-.94c-.23-1.47-1.03-4.51-3.77-8.06-.42-.55-.85-1.12-1.28-1.7L28.24 22l8.33-9.88C37.49 14.05 38 16.21 38 18.5c0 2.9-.83 5.59-2.24 7.86z"
      />
      <path
        fill="#FBBC05"
        d="M28.24 22 17.89 34.3c-2.82-3.78-5.66-7.94-5.66-7.94h.01c-.3-.48-.57-.97-.8-1.48L19.76 15s.84 1.31 2.26 3.46L28.24 22z"
      />
      <path
        fill="#4285F4"
        d="M28.4 12.84 19.76 15l-7.32 10.88c-.84-1.67-1.44-3.44-1.44-5.38 0-6.07 4.93-11 11-11 3.2 0 5.9 1.34 6.4 3.34z"
      />
      <path fill="#EA4335" d="M28.24 22l8.33-9.88C36.13 10.79 34.26 9.5 32 9.5c-1.2 0-2.33.31-3.32.85L28.24 22z" />
      <circle cx="24" cy="18.5" r="3.2" fill="#fff" />
    </svg>
  );
}

export function GoogleMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.9z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C39 39.2 44 34 44 24c0-1.3-.1-2.7-.4-3.9z"
      />
    </svg>
  );
}

export function GoogleWord() {
  return (
    <span className="font-medium tracking-tight">
      {letters.map(([letter, color], index) => (
        <span key={`${letter}-${index}`} style={{ color }}>
          {letter}
        </span>
      ))}
    </span>
  );
}

export function SalonAddress({
  variant = "stack",
  tone = "light",
}: {
  variant?: "stack" | "inline";
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-ivory" : "text-[#1a73e8]";
  return (
    <a
      href={DIRECTIONS_URL}
      className={`inline-flex items-start gap-2 underline-offset-4 hover:underline ${color}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapsPin className="mt-0.5 size-5 shrink-0" />
      {variant === "inline" ? (
        <span>
          {ADDRESS_LINE}, {CITY_LINE}
        </span>
      ) : (
        <span>
          {ADDRESS_LINE}
          <br />
          {CITY_LINE}
        </span>
      )}
    </a>
  );
}

export function DirectionsLink({
  children = "Directions",
  className = "",
  tone = "light",
}: {
  children?: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-ivory" : "text-[#1a73e8]";
  return (
    <a
      href={DIRECTIONS_URL}
      className={`inline-flex items-center gap-2 ${color} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapsPin className="size-5 shrink-0" />
      {children}
    </a>
  );
}

export function GoogleReviewsLink({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={GOOGLE_URL}
      className={`inline-flex items-center gap-2 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GoogleMark className="size-5 shrink-0" />
      {children ?? <GoogleWord />}
    </a>
  );
}
