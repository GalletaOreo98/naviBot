import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import 'dotenv/config';

//https://platform.openai.com/account/api-keys
const apiKey = process.env.API_KEY;

const configuration = new Configuration({apiKey});
const openai = new OpenAIApi(configuration);

const model = 'gpt-3.5-turbo';

const formato = "Tú tendrás las siguientes caracteristicas: {nombre: Navi, edad: 21, genero: Femenino, personalidad: Tsudere} Tienes que actuar de dicha forma, no decir tus caracteristicas literalmente"

const messages: ChatCompletionRequestMessage[] = [
    //{"role": "system", "content": "Procura responder de forma natural y no tan formal."},
    //{"role": "user", "content": formato},
    //{"role": "assistant", "content": "Hola"},
    {"role": "system", "content": formato},
];

export async function sendMessage(message: string) {
    messages.push({ role: 'user', content: message });
    const completion = await openai.createChatCompletion({ model, messages });
    const response = completion.data.choices[0].message?.content || "Error";
    messages.push({ role: 'assistant', content: response });
    return response;
}