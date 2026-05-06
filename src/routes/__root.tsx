import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EcoPuertoRico · Transformación Digital del Programa de Recolección de Aceite" },
      { name: "description", content: "Propuesta integral: tecnología, comunicación y estrategia para potenciar el programa de recolección de aceite del Municipio de Puerto Rico." },
      { property: "og:title", content: "EcoPuertoRico · Transformación Digital del Programa de Recolección de Aceite" },
      { name: "twitter:title", content: "EcoPuertoRico · Transformación Digital del Programa de Recolección de Aceite" },
      { property: "og:description", content: "Propuesta integral: tecnología, comunicación y estrategia para potenciar el programa de recolección de aceite del Municipio de Puerto Rico." },
      { name: "twitter:description", content: "Propuesta integral: tecnología, comunicación y estrategia para potenciar el programa de recolección de aceite del Municipio de Puerto Rico." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02d30f2f-8bd6-4d21-9ab2-d2b9fb74c8c7/id-preview-f7d4bc20--d8e28e69-25dd-4b90-a7f0-fb3b0fa80cdf.lovable.app-1778065583664.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/02d30f2f-8bd6-4d21-9ab2-d2b9fb74c8c7/id-preview-f7d4bc20--d8e28e69-25dd-4b90-a7f0-fb3b0fa80cdf.lovable.app-1778065583664.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
