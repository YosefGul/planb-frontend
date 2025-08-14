export interface Page {
	size: number;
	number: number;
	totalElements: number;
	totalPages: number;
}

export interface TeamMember {
	id: number;
	name: string;
	title: string;
	quote: string;
	profilePhoto?: string;
	linkedinUrl?: string;
	orderNumber: number;
}

export interface TeamMemberList {
	content: TeamMember[];
	page: Page;
}
