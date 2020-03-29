import { store } from 'react-notifications-component';

interface INotificationOptions {
    title: string;
    message: string;
    type: string;
    duration?: number;
}
export const notify = (options: INotificationOptions) => {
    const { title, message, type, duration } = options;
    return store.addNotification({
        title,
        message,
        type,
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
            duration: duration || 10000,
            onScreen: true
        }
    });
};
