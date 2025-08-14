import { fetchServer } from "@/utils/fetch-server";
import type { Portfolio, PortfolioList } from "@/types/portfolio.types";

export const getPortfolioList = async (
	page: number,
	size: number,
	sort: string,
	search: string
) => {
	return fetchServer<void, PortfolioList>(
		`/portfolios?page=${page}&size=${size}&sort=${sort}&search=${search}`,
		{
			method: "GET",
		}
	);
};

export const getPortfolioById = async (id: number) => {
	return fetchServer<void, Portfolio>(`/portfolios/${id}`, {
		method: "GET",
	});
};
