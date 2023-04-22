const prompt = 'The capital city of France is...';
const apiKey = 'mP2j3ZHgltV3r2810zqA6lfntriMfURINBnFLww3';

generateQuizQuestions(prompt, apiKey)
  .then(questions => {
    if (questions !== null) {
      console.log('Generate 10 quiz questions');
      questions.forEach(question => {
        console.log(`- ${question}`);
      });
    } else {
      console.log('Failed to generate quiz questions.');
    }
  })
  .catch(error => {
    console.error(error);
  });

  