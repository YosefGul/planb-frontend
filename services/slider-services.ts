import { fetchServer } from "@/utils/fetch-server";
import type { SliderList, Slider } from "@/types/slider.types";

export const getSliderList = (page: number, size: number, sort: string) => {
	return fetchServer<void, SliderList>(
		`/sliders?page=${page}&size=${size}&sort=${sort}`,
		{
			method: "GET",
		}
	);
};

export const getSliderById = (id: number) => {
	return fetchServer<void, Slider>(`/sliders/${id}`, {
		method: "GET",
	});
};
