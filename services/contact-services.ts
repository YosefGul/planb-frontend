import { fetchClient } from "@/utils/fetch-client";
import type { Contact, ContactRequest } from "@/types/contact.types";

export const createContact = async (contactInfo: ContactRequest) => {
	return fetchClient<ContactRequest, Contact>(`/contact`, {
		method: "POST",
		body: contactInfo,
	});
};
