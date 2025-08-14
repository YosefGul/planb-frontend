import { fetchServer } from "@/utils/fetch-server";
import type { Partner } from "@/types/partner.types";

export const getPartnerList = async () => {
	return fetchServer<void, Partner[]>(`/partners`, {
		method: "GET",
	});
};
