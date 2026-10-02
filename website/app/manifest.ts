import type { MetadataRoute } from "next";

// Install-to-home-screen and the large icon search engines and phones
// pick up (Bing showed a generic globe, 2026-10-02).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "pawenn",
    short_name: "pawenn",
    description: "Vets, groomers, pet hotels, trainers, pet shops and sitters with real contacts, hours and prices.",
    start_url: "/",
    display: "browser",
    background_color: "#FFFFFF",
    theme_color: "#004E89",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
