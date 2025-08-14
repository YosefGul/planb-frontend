import WorkSmartClient from "./work-smart-client";
import { getTeamMemberList } from "@/services/team-member-services";
import type { TeamMember } from "@/types/team-member-types";

// Fallback veriler
const fallbackTeamMembers: TeamMember[] = [
	{
		id: 1,
		name: "Ahmet Eren",
		title: "Co-Founder of Plan B",
		quote: "We make more creative productions in the freedom of spacelessness.",
		profilePhoto: undefined,
		linkedinUrl: undefined,
		orderNumber: 1,
	},
	{
		id: 2,
		name: "Yusuf",
		title: "CTO of Plan B",
		quote:
			"We provide a faster and more secure working environment by working entirely on the cloud.",
		profilePhoto: undefined,
		linkedinUrl: undefined,
		orderNumber: 2,
	},
];

// Server-side data fetching with caching and revalidation
async function getTeamMembersData(): Promise<TeamMember[]> {
	try {
		// Next.js 15+ built-in caching with revalidation
		const data = await getTeamMemberList(0, 2, "orderNumber,asc");
		return data?.content && data.content.length > 0
			? data.content
			: fallbackTeamMembers;
	} catch (error) {
		console.warn("Backend not available, using fallback data:", error);
		return fallbackTeamMembers;
	}
}

export const revalidate = 600; // 10 dakika

export default async function WorkSmart() {
	// Server-side'da veri çek
	const teamMembers = await getTeamMembersData();

	return <WorkSmartClient teamMembers={teamMembers} />;
}
