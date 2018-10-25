// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Let's see how well you are prepared!</p>",
        "results": "",// Write here what you want to dispaly before Try Again Button
        "level1":  "Wao! You are real champion!",
        "level2":  "Very Good!.",
        "level3":  "Satisfactory. Next time prepared well.",
        "level4":  "Not prepared??",
        "level5":  "God!! You need to work extremely hard kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following indicates the maximum number of entities that can be involved in a relationship?",
            "a": [
                {"option": "Minimum cardinality",           "correct": false},
                {"option": "Maximum cardinality",           "correct": true},
                {"option": "ERD",                           "correct": false},
                {"option": "Greater Entity Count (GEC)",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span>The correct answer is Maximum cardinality</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In a one-to-many relationship, the entity that is on the one side of the relationship is called a(n) ________ entity.",
            "a": [
                {"option": "parent",               "correct": true},
                {"option": "child",                 "correct": false},
                {"option": "instance",               "correct": false},
                {"option": "subtype",               "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span> The correct answer is parent</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "SQL views can be used to hide:",
            "a": [
                {"option": "columns and rows only.",           "correct": true},
                {"option": "complicated SQL syntax only",                  "correct": true},
                {"option": "Database",  "correct": false},
                {"option": "Table only",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> The correct answer is:columns and rows only,  complicated SQL syntax only, Table only</p>" // no comma here
        },
        { // Question 4
            "q": "Which of the following refers to an entity in which the identifier of one entity includes the identifier of another entity?",
            "a": [
                {"option": "Weak entity",    "correct": false},
                {"option": "Strong entity",     "correct": false},
                {"option": "ID-dependent entity",      "correct": true},
                {"option": "ID-independent entity",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> Absolutely Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. The correct answer is 'ID-dependent entity'</p>" // no comma here
        },
        { // Question 5
            "q": "A ________ is a program that performs some common action on database data and that is stored in the database.",
            "a": [
                {"option": "trigger",               "correct": false},
                {"option": "stored procedure",     "correct": true},
                {"option": "pseudofile",            "correct":false },
                {"option": "None of the above is correct", "correct": false}// no comma here
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>ERRRR!</span> The correct answer is: stored procedure</p>" // no comma here
        },
        { // Question 6
            "q": "A foreign key is which of the following?",
            "a": [
                {"option": "Any attribute",               "correct": false},
                {"option": "The same thing as a primary key",     "correct": false},
                {"option": "An attribute that serves as the primary key of another relation",            "correct":true },
                {"option": "An attribute that serves no purpose", "correct": false}
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>ERRRR!</span>The correct answer is: An attribute that serves as the primary key of another relation</p>" 
        },
        { // Question 7
            "q": "The entity integrity rule states that:",
            "a": [
                {"option": "no primary key attribute may be null",    "correct": true},
                {"option": "no primary key can be composite",     "correct": false},
                {"option": "no primary key may be unique",      "correct": false},
                {"option": "no primary key may be equal to a value in a foreign key",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> Absolutely Correct!</p>",
            "incorrect": "<p><span>Sorry. You lose.</span> The correct answer is: no primary key attribute may be null</p>" // no comma here
        }// No comma here
    ]
};
