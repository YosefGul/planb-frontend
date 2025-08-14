export interface NotificationSubscriberRequest {
	email: string;
	phoneNumber?: string | null;
}

export interface NotificationSubscriber {
	id: number;
	email: string;
	phoneNumber: string;
}
