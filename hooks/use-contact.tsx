import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "@/services/contact-services";
import { toast } from "sonner";
import type { ContactRequest } from "@/types/contact.types";

export const useCreateContact = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (contactInfo: ContactRequest) => createContact(contactInfo),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["contact-list"] });
			toast.success("İletişim formu başarıyla gönderildi");
		},
		onError: () => {
			toast.error("İletişim formu gönderilirken bir hata oluştu");
		},
	});
};
