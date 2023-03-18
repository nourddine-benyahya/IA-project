export async function IA(ask) {

    //configuration OpenAI 
    const { Configuration, OpenAIApi } = require("openai");
    //key API
    const configuration = new Configuration({
        apiKey: '',
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: ask,
        temperature: 0.8,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.data.choices[0].text
    /*

    return "Morocco is a country located in North Africa. It has a long history and culture and is known for its beautiful scenery"

    */
}
