import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://personalize-se.ilhasoftware.com";

const PRODUCT_VIDEOS = [
  {
    path: "/products/product-video-1.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-2.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-3.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-4.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-5.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-6.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-7.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-8.mp4",
    priority: 0.6,
  },
  {
    path: "/products/product-video-9.mp4",
    priority: 0.6,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const videoEntries: MetadataRoute.Sitemap = PRODUCT_VIDEOS.map((video) => ({
    url: `${siteUrl}${video.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: video.priority,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...videoEntries,
  ];
}

