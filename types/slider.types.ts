import type { Tag } from "./tag.types";

export interface Page {
	size: number;
	number: number;
	totalElements: number;
	totalPages: number;
}

export interface Slider {
	id: number;
	name: string;
	description: string;
	excerpt: string;
	image: string;
	tags: Tag[];
}

export interface SliderList {
	content: Slider[];
	page: Page;
}
