const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configiration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_SECRET_KEY,
});


console.log('<<--- Hello Node.js ---->>');
console.log('*- openai api tutorial...');

const openai = new OpenAIApi(configiration);

const runPrompt = async () => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "파이썬이 궁금해.",
        max_tokens: 300,
        temperature: 0.2,
      });
    console.log('- completion:\n' + response.data.choices[0].text);
    console.log('\n- total tokens: ' + response.data.usage.total_tokens);
    console.log('*- completion ended...');
}
runPrompt();