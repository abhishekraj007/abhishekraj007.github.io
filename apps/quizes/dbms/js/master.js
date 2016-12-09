// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz();
    
    // apply custom option this quiz
    checkAnswerText("Check My Answer!");
    nextQuestionText("Next Question");
    completeQuizText("Get Your Result!");
    tryAgainText("Try Again!");
    preventUnansweredText("Please select atleast one!");
    numberOfQuestions(5);
    randomSortQuestions(true);
    randomSortAnswers(true);
    preventUnanswered(true);
    perQuestionResponseMessaging(true);
    // Default: true; - Displays correct / incorrect response messages after each question is submitted.
    completionResponseMessaging(false);
    //Default: false; - Displays all questions and answers with correct or incorrect response messages when the quiz is completed.
    disableRanking (false); 
    //Default: false; - Removes the ranking leve from the final results display. Eliminates the need for an element with class quizLevel in the markup, as well as the need for JSON values for level1 through level5.
    
    
});
