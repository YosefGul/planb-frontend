import PortfolioClient from "./portfolio-client";
import { getPortfolioList } from "@/services/portfolio-service";
import type { Portfolio } from "@/types/portfolio.types";

// Fallback veriler
const fallbackPortfolios: Portfolio[] = [
  {
    id: 1,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-01-15T10:30:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+1",
        isCovered: true,
      },
    ],
  },
  {
    id: 2,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-01-20T14:45:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+2",
        isCovered: true,
      },
    ],
  },
  {
    id: 3,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-01-25T09:15:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+3",
        isCovered: true,
      },
    ],
  },
  {
    id: 4,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-01-30T16:20:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+4",
        isCovered: true,
      },
    ],
  },
  {
    id: 5,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-02-05T11:30:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+5",
        isCovered: true,
      },
    ],
  },
  {
    id: 6,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-02-10T13:45:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+6",
        isCovered: true,
      },
    ],
  },
  {
    id: 7,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-02-15T15:20:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+7",
        isCovered: true,
      },
    ],
  },
  {
    id: 8,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-02-20T12:10:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+8",
        isCovered: true,
      },
    ],
  },
  {
    id: 9,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-02-25T17:30:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+9",
        isCovered: true,
      },
    ],
  },
  {
    id: 10,
    name: "Game Name",
    description:
      "This area will receive information about the game, details and a summary of some content updates.",
    excerpt: "Game excerpt and brief description",
    publishDate: "2025-03-01T10:00:00.000",
    assets: [
      {
        asset: "https://via.placeholder.com/400x300/222222/999999?text=Game+10",
        isCovered: true,
      },
    ],
  },
];

// Server-side data fetching with caching and revalidation
async function getPortfoliosData(): Promise<Portfolio[]> {
  try {
    // Next.js 15+ built-in caching with revalidation
    const data = await getPortfolioList(0, 10, "publishDate,desc", "");
    return data?.content && data.content.length > 0
      ? data.content
      : fallbackPortfolios;
  } catch (error) {
    console.warn("Backend not available, using fallback data:", error);
    return fallbackPortfolios;
  }
}

export default async function Portfolio() {
  // Server-side'da veri çek
  const portfolios = await getPortfoliosData();

  return <PortfolioClient portfolios={portfolios} />;
}
