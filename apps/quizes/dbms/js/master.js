// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
        
    // apply custom option this quiz
   
   
                checkAnswerText:  'Check My Answer!',
                nextQuestionText: 'Next Question',
                backButtonText: '',
                completeQuizText: 'Get My Result!',
                tryAgainText: 'Try Again!',
                questionCountText: 'Question %current of %total',
                preventUnansweredText: 'You must select at least one answer.',
                questionTemplateText:  '%count. %text',
                scoreTemplateText: '%score / %total',
                nameTemplateText:  '<span>Quiz: </span> DBMS',
                skipStartButton: false,
                numberOfQuestions: 5,
                //Default: null; - the number of questions to load from the question set in the JSON object, defaults to null (all questions); Note: If you set this to an integer, you'll probably also want to set randomSortQuestions to true to ensure that you get a mixed set of questions each page load.
                randomSortQuestions: true,
                //Default: false; - whether or not to randomly sort questions ONLY
                randomSortAnswers: true,
                //Default: false; - whether or not to randomly sort answers ONLY
                preventUnanswered: true,
                //Default: false; - prevents submitting a question with zero answers
                disableScore: false,
                disableRanking: false,
                scoreAsPercentage: false,
                perQuestionResponseMessaging: true,
                //Default: true; - Displays correct / incorrect response messages after each question is submitted.
                perQuestionResponseAnswers: false,
                // Default: false; - Keeps the answer options in display after the question is submitted. Note: this should be used in tandem with perQuestionResponseMessaging
                completionResponseMessaging: false,
                //Default: false; - Displays all questions and answers with correct or incorrect response messages when the quiz is completed.
                
    });
    
    
    
});
