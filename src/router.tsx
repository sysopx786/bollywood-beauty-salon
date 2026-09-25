import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const raw = import.meta.env.BASE_URL ?? "/";
  let basepath: string | undefined;
  if (raw !== "/" && raw !== "") {
    const path = raw.startsWith("http") ? new URL(raw).pathname : raw;
    const trimmed = path.replace(/\/$/, "");
    basepath = trimmed === "" ? undefined : trimmed;
  }
  return createRouter({
    routeTree,
    basepath,
    ...(basepath ? { trailingSlash: "always" as const } : {}),
    defaultErrorComponent: AppErrorComponent,
  });
}