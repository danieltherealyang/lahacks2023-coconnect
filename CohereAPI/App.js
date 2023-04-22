const cohere = require('cohere-ai');
cohere.init('mP2j3ZHgltV3r2810zqA6lfntriMfURINBnFLww3')

(async () => {
    const response = await cohere.generate({
      prompt: 'Based on the text,' + StoryGet(story) + 'Quiz me 10 questions',
    });
    console.log(response);
  })();