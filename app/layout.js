import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Jax Riddell - Full-Stack Developer",
  description:
    "Portfolio of Jax Riddell, a full-stack developer specializing in React, Next.js, and modern web technologies. View my projects including ClaimLens AI fact-checking app and Disney+ clone.",
  keywords:
    "Jax Riddell, full-stack developer, React, Next.js, JavaScript, portfolio, web development",
  authors: [{ name: "Jax Riddell" }],
  creator: "Jax Riddell",
  openGraph: {
    title: "Jax Riddell - Full-Stack Developer",
    description:
      "Portfolio of Jax Riddell, a full-stack developer with a passion for building.",
    url: "https://jaxr.dev",
    siteName: "Jax Riddell Portfolio",
    images: [
      {
        url: "/jax.jpg",
        width: 1200,
        height: 630,
        alt: "Jax Riddell",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jax Riddell - Full-Stack Developer",
    description:
      "Portfolio of Jax Riddell, a full-stack developer with a passion for building.",
    images: ["/jax.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/jax.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/jax.jpg" type="image/jpeg" />
        <Script
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
