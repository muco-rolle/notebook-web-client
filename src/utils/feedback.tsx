import { notification } from "antd";

interface NotifyProps {
    type: string;
    message: string;
    description: string;
    duration?: number;
}

export const notify = ({ type, message, duration, description }: NotifyProps) =>
    notification[type]({
        message,
        duration,
        description: description.replace("GraphQL error: ", ""),
    });
