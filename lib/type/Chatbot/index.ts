export type ChatMessageType = {
    id: string;
    sender: 'user' | 'bot';
    content: string;
    timestamp: Date;
};

export type ChatBotResponseType = {
    messages: ChatMessageType[];
    isLoading: boolean;
};