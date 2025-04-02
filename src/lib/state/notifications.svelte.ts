import { unsafeId } from '$lib/util';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface INotification {
	id: string;
	message: string;
	type: NotificationType;
}

export const notifications = $state<INotification[]>([]);

export function createNotification(
	message: string,
	type: NotificationType = 'error',
	deleteAfterMS = 5000
) {
	const id = unsafeId();
	notifications.push({
		id,
		message,
		type
	});
	if (deleteAfterMS > 0) {
		setTimeout(() => removeNotification(id), deleteAfterMS);
	}
	return id;
}

export function removeNotification(id: string): void {
	const index = notifications.findIndex((notification) => notification.id === id);

	if (index !== -1) {
		notifications.splice(index, 1);
	}
}
