import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechPulseDaily",
    short_name: "TechPulseDaily",
    description: "Technology news and practical digital guidance for modern readers.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.png",
        type: "image/png",
        sizes: "any",
      },
    ],
  };
}
