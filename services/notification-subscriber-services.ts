import { fetchClient } from "@/utils/fetch-client";
import type {
	NotificationSubscriberRequest,
	NotificationSubscriber,
} from "@/types/notification-subscriber.types";

export const createNotificationSubscriber = async (
	subscriberInfo: NotificationSubscriberRequest
) => {
	return fetchClient<NotificationSubscriberRequest, NotificationSubscriber>(
		`/notification-subscribers`,
		{
			method: "POST",
			body: subscriberInfo,
		}
	);
};
