$(document).ready(function(){
  getQuote();  
 
  function getQuote(){
    
    var quotesArray=["Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.@Buddha",
                  
                  "Whatever the mind of man can conceive and believe, it can achieve. @Napoleon Hill",
                  
                  "Strive not to be a success, but rather to be of value. @Albert Einstein",
                 "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.  @Robert Frost",
                  "Life isn’t about getting and having, it’s about giving and being. @Kevin Kruse",
                 "We become what we think about. @Earl Nightingale",
                  "I am not a product of my circumstances. I am a product of my decisions. @Stephen Covey",
                  "You can never cross the ocean until you have the courage to lose sight of the shore. @Christopher Columbus",
                  "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. @Maya Angelou",
                  "The two most important days in your life are the day you are born and the day you find out why. @Mark Twain",
                  " People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. –Zig Ziglar",
                  "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. @Aristotle",
                  "Everything has beauty, but not everyone can see. @Confucius",
                  "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. @Unknown",
                  " I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. @Leonardo da Vinci",
                  "You take your life in your own hands, and what happens? A terrible thing, no one to blame. @Erica Jong",
                  "The person who says it cannot be done should not interrupt the person who is doing it. @Chinese Proverb",
                  
                
                  
                 ]; 
    
 
  /*  Generate a random number */
  var randomNumber= Math.floor(Math.random()*quotesArray.length);
  
  /* get a single quote containing author from randomly generated array */
  var singleQuote = quotesArray[randomNumber];
  
  /* store single quote and their corresponing author in a single array*/
  var singleQuoteArray = singleQuote.split('@');
    
  $('.quote-saying').text(singleQuoteArray[0]);
    $('.quote-author').text(singleQuoteArray[1]);
    
  };
  
  $("#quoteButton").on("click",function(){
    getQuote();
  });
  
});

