import { fetchServer } from "@/utils/fetch-server";
import type { TeamMemberList, TeamMember } from "@/types/team-member-types";

export const getTeamMemberList = async (
	page: number,
	size: number,
	sort: string
) => {
	return await fetchServer<void, TeamMemberList>(
		`/team-members?page=${page}&size=${size}&sort=${sort}`,
		{
			method: "GET",
		}
	);
};

export const getTeamMemberById = async (id: number) => {
	return await fetchServer<void, TeamMember>(`/team-members/${id}`, {
		method: "GET",
	});
};
