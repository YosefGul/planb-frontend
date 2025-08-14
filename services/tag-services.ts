import { fetchServer } from "@/utils/fetch-server";
import type { TagList, Tag } from "@/types/tag.types";

export const getTagList = (
	search: string,
	page: number,
	size: number,
	sort: string
) => {
	return fetchServer<void, TagList>(
		`/tags?search=${search}&page=${page}&size=${size}&sort=${sort}`,
		{
			method: "GET",
		}
	);
};

export const getTagById = (id: number) => {
	return fetchServer<void, Tag>(`/tags/${id}`, {
		method: "GET",
	});
};
