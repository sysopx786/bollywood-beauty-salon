import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  ADDRESS_LINE,
  CITY_LINE,
  DIRECTIONS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  hours,
  services,
} from "@/data/salon";

const links = [
  { to: "/services", label: "Services" },
  { to: "/bridal", label: "Bridal" },
  { to: "/pricing", label: "Menu of services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ivory focus:px-4 focus:py-3 focus:text-wine"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="min-w-0">
            <span className="block font-serif text-lg leading-none tracking-tight text-wine sm:text-xl">
              Bollywood Beauty Salon
            </span>
            <span className="mt-1 block text-xs tracking-wide text-ink/70">
              Woman-owned · Exton, PA
            </span>
          </Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
            <div className="group relative">
              <Link to="/services" className="text-sm text-ink hover:text-wine">
                Services
              </Link>
              <div className="invisible absolute top-full left-0 z-40 w-64 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="border border-ink/10 bg-ivory p-3 shadow-sm">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to="/$service"
                        params={{ service: service.slug }}
                        className="block px-2 py-2 text-sm text-ink hover:bg-champagne hover:text-wine"
                      >
                        {service.nav}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {links.slice(1).map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-ink hover:text-wine">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 bg-wine px-4 py-3 text-sm text-ivory hover:opacity-90 sm:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call now
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-ink/15 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-ink/10 bg-ivory px-5 py-4 xl:hidden" aria-label="Mobile">
            <ul className="grid gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block py-3 text-base"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/$service"
                    params={{ service: service.slug }}
                    className="block py-2 pl-3 text-sm text-ink/80"
                    onClick={() => setOpen(false)}
                  >
                    {service.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
      <div id="content">{children}</div>
      <footer className="border-t border-ink/10 bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl text-ivory">Bollywood Beauty Salon</p>
            <p className="mt-3 max-w-sm text-sm text-ivory/80">
              A woman-owned beauty salon in Exton, Pennsylvania. Threading, bridal beauty, facials, waxing, hair, and henna.
            </p>
            <p className="mt-4 text-sm">
              {ADDRESS_LINE}
              <br />
              {CITY_LINE}
            </p>
            <a href={`tel:${PHONE_TEL}`} className="mt-3 inline-block text-sm text-champagne">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-xs tracking-widest text-champagne uppercase">Hours</p>
            <ul className="mt-3 grid gap-1 text-sm text-ivory/85">
              {hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="text-right">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-champagne uppercase">Visit</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>
                <Link to="/pricing" className="text-ivory/85 hover:text-ivory">
                  Menu of services
                </Link>
              </li>
              <li>
                <Link to="/before-and-after" className="text-ivory/85 hover:text-ivory">
                  Before & after
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-ivory/85 hover:text-ivory">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivory/85 hover:text-ivory">
                  Contact
                </Link>
              </li>
              <li>
                <a href={DIRECTIONS_URL} className="text-ivory/85 hover:text-ivory">
                  Directions
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-ivory/85 hover:text-ivory">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-ivory/85 hover:text-ivory">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-ivory/85 hover:text-ivory">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-24 text-xs text-ivory/60 md:pb-8">
          Editorial photographs are licensed stock. They are not photographs of this salon’s clients or interior.
        </p>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-ink/10 bg-ivory md:hidden">
        <a href={`tel:${PHONE_TEL}`} className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-medium text-ink">
          <Phone className="size-5 text-leaf" aria-hidden="true" />
          Call salon
        </a>
        <Link
          to="/pricing"
          className="menu-flash flex flex-1 items-center justify-center border-l border-wine/30 py-4 text-sm font-medium text-wine"
        >
          Menu services
        </Link>
      </div>
    </>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-3xl px-5 pt-14 pb-8">
      <p className="text-xs tracking-widest text-wine uppercase">{kicker}</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-ink/75">{lede}</p>
    </header>
  );
}

export function CallBand() {
  return (
    <aside className="bg-wine text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center">
        <div>
          <p className="font-serif text-3xl">Call to arrange a visit</p>
          <p className="mt-2 max-w-xl text-sm text-ivory/80">
            There is no online booking yet. Calling the salon is how an appointment is confirmed.
          </p>
        </div>
        <a href={`tel:${PHONE_TEL}`} className="bg-ivory px-6 py-4 text-sm text-wine">
          {PHONE_DISPLAY}
        </a>
      </div>
    </aside>
  );
}
