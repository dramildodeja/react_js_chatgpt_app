import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_CHATGPT_API_KEY
});
const openai = new OpenAIApi(configuration);

export const processorResponse = async (request) => {
  const openAIResponse = await openai.createCompletion({
    model: "gpt-3.5-turbo-instruct",//gpt-3.5-turbo-instruct-0914
    temperature: 1,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    prompt: request,
  }).catch((err) => console.log(err));
  console.log("Raw response from OpenAIApi", JSON.stringify(openAIResponse));
  return openAIResponse.data.choices[0].text;
}
