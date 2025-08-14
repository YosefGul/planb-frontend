export interface Page {
	size: number;
	number: number;
	totalElements: number;
	totalPages: number;
}

export interface Tag {
	id: number;
	name: string;
}

export interface TagList {
	content: Tag[];
	page: Page;
}
