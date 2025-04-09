import { OpenAI } from 'openai';
import { OpenAIMessageDto } from '../models/dtos/openAIMessage.dto';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


const getChatResponse = async (messages: OpenAIMessageDto[]): Promise<string | null> => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // or 'gpt-4'
            messages: messages
        });

        return response.choices[0].message.content;
    } catch (error) {
        throw new Error(`Error fetching chat completion: ${error}`);
    }
}

const openAIRepository = {
    getChatResponse 
};

export default openAIRepository;

//https://platform.openai.com/docs/guides/responses-vs-chat-completions