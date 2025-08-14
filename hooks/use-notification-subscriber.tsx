import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNotificationSubscriber } from "@/services/notification-subscriber-services";
import { toast } from "sonner";
import type { NotificationSubscriberRequest } from "@/types/notification-subscriber.types";

export const useCreateNotificationSubscriber = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (subscriberInfo: NotificationSubscriberRequest) =>
			createNotificationSubscriber(subscriberInfo),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["notification-subscriber-list"],
			});
			toast.success("Aboneliğiniz başarıyla kaydedildi");
		},
		onError: (error: any) => {
			const message =
				error?.message ||
				"Aboneliğiniz kaydedilirken bir hata oluştu, daha sonra tekrar deneyiniz";
			toast.error(message);
		},
	});
};
