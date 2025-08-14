export interface Page {
	size: number;
	number: number;
	totalElements: number;
	totalPages: number;
}

export interface Service {
	id: number;
	icon: string;
	name: string;
	description: string;
}

export interface ServiceRequest {
	name: string;
	description: string;
	icon: string | File | null;
}

export interface ServiceList {
	content: Service[];
	page: Page;
}
