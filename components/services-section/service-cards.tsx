import ServiceCardsClient from "@/components/services-section/service-cards-client";
import { getServiceList } from "@/services/service-services";
import type { Service } from "@/types/service.types";

// Fallback veriler
const fallbackServices: Service[] = [
  {
    id: 1,
    name: "GAME STUDIO",
    description:
      "We produce entertaining games for PC, game consoles and mobile devices with expert game designer and implementer teams.",
    icon: "/gamepad.svg",
  },
  {
    id: 2,
    name: "ANIMATION",
    description:
      "We produce web optimized animated content, 3D space and AR animations. At the same time, we realize more realistic shots with Motion Capture technology.",
    icon: "/anim-service-icon.svg",
  },
  {
    id: 3,
    name: "MARKETING",
    description:
      "In addition to game, animation and advertising services, we provide consultancy on your marketing processes with industry experts and produce road maps for you.",
    icon: "/marketing-service-icon.svg",
  },
];

// Server-side data fetching with caching and revalidation
async function getServicesData(): Promise<Service[]> {
  try {
    // Next.js 15+ built-in caching with revalidation
    const data = await getServiceList("", 0, 3, "name,asc");
    return data?.content && data.content.length > 0
      ? data.content
      : fallbackServices;
  } catch (error) {
    return fallbackServices;
  }
}

export default async function ServiceCards() {
  // Server-side'da veri çek
  const services = await getServicesData();

  return <ServiceCardsClient services={services} />;
}
