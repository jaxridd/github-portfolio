import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Jax Riddell - IT & Systems Support",
  description:
    "Portfolio of Jax Riddell — IT support, systems administration, and homelab projects including Active Directory, pfSense, and Splunk SIEM. CompTIA Security+ certified.",
  keywords:
    "Jax Riddell, IT support, systems administration, Active Directory, pfSense, networking, homelab, CompTIA Security+, Lamar University",
  authors: [{ name: "Jax Riddell" }],
  creator: "Jax Riddell",
  openGraph: {
    title: "Jax Riddell - IT & Systems Support",
    description:
      "IT & systems support professional building enterprise-style homelabs in Active Directory, firewalls, and SIEM.",
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
    title: "Jax Riddell - IT & Systems Support",
    description:
      "IT & systems support professional building enterprise-style homelabs in Active Directory, firewalls, and SIEM.",
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
