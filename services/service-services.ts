import type { Service, ServiceList } from "@/types/service.types";
import { fetchServer } from "@/utils/fetch-server";

export const getServiceList = (
	search: string,
	page: number,
	size: number,
	sort: string
) => {
	return fetchServer<void, ServiceList>(
		`/services?search=${search}&page=${page}&size=${size}&sort=${sort}`,
		{
			method: "GET",
		}
	);
};

export const getServiceById = (id: number) => {
	return fetchServer<void, Service>(`/services/${id}`, {
		method: "GET",
	});
};
