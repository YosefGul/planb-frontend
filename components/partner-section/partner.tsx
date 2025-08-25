import { getPartnerList } from "@/services/partner-services";
import type { Partner } from "@/types/partner.types";
import PartnerClient from "./partner-client";

// Fallback partner verileri
const fallbackPartners: Partner[] = [
  {
    id: 1,
    name: "NVIDIA",
    icon: "/nvdia.png",
  },
  {
    id: 2,
    name: "Steam",
    icon: "/steam-banner.png",
  },
  {
    id: 3,
    name: "Unity",
    icon: "/unity.png",
  },
  {
    id: 4,
    name: "Microsoft",
    icon: "/microsoft.png",
  },
];

// Server-side data fetching
async function getPartnersData(): Promise<Partner[]> {
  try {
    const data = await getPartnerList();
    // Maksimum 10 partner al
    const partners =
      data && data.length > 0 ? data.slice(0, 10) : fallbackPartners;
    return partners;
  } catch (error) {
    console.warn("Backend not available, using fallback partners:", error);
    return fallbackPartners;
  }
}

// Revalidate every 10 minutes

export default async function Partner() {
  const partners = await getPartnersData();

  return <PartnerClient partners={partners} />;
}
