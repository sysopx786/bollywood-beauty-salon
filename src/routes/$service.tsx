import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage, metaFor } from "@/components/service-page";
import { services } from "@/data/salon";

export const Route = createFileRoute("/$service")({
  head: ({ params }) => {
    const page = services.find((item) => item.slug === params.service);
    if (!page) return { meta: [{ title: "Page not found | Bollywood Beauty Salon" }] };
    return { meta: metaFor(page.slug) };
  },
  loader: ({ params }) => {
    if (!services.some((item) => item.slug === params.service)) throw notFound();
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { service } = Route.useParams();
  return <ServicePage slug={service} />;
}
