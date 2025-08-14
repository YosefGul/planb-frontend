export interface Page {
	size: number;
	number: number;
	totalElements: number;
	totalPages: number;
}

export interface Asset {
	asset?: string;
	isCovered: boolean;
}

export interface Portfolio {
	id: number;
	name: string;
	description: string;
	excerpt: string;
	outSourceLink?: string;
	publishDate: string;
	assets?: Asset[];
}

export interface PortfolioList {
	content: Portfolio[];
	page: Page;
}
