export interface OpenAIMessageDto {
    role: 'user' | 'assistant' | 'system';
    content: string;
}