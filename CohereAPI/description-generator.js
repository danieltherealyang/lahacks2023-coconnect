require("dotenv").config();
const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY)

const generator = (async () => {
    const response = await cohere.generate({
      prompt: 'Based on the text,' + StoryGet(story) + 'Quiz me 10 questions',
    });
    console.log(response);
    return response.body.generations[].text;
    
  })();