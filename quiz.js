/*Write a program which allows the user to build a quiz. Your program should include at least (4) types of objects:

QuizQuestion. QuizQuestion should include variables to hold a question and an answer. 

ScoreKeeper. ScoreKeeper should hold the quiz score and should include methods to increase the score (if the user gets a question right) or decrease the score (if the user gets a question wrong).

Quiz, which should a collection of QuizQuestions and a ScoreKeeper object.

Your program should allow the user to create and then take their quiz.*/
var sget = require('sget');
var clear = require('clear');

var Quiz = {

	questions: [],
	playerName: "Player",
	totalQuestions: 0,
	desiredQuestions: 1,

	QuizQuestion: function(question, correctAnswer, otherAnswers){
		var question = this.question;
		var correctAnswer = this.correctAnswer;
		var answers = [correctAnswer];
		if (otherAnswers.constructor === Array){
			answers.concat(otherAnswers);
		}
		else
		{
			for (var i = 1; i<arguments.length; i++)
				answers.push(arguments[i]);
		}
	},

	ScoreKeeper: function(){
		score = 0;
		correct = function(points){
			this.score+=points;
		}
		incorrect = function(points){
			this.score-=points;
		}
	},

	createQuestion: function(){
		var totalChoices = 4;
		var otherAnswers = [];
		var question = sget("What question would you like to ask? ").trim();
		var correctA nswer = sget("What is the correct answer to this question? ").trim();
		for(i = 0; i<(totalChoices-1);i++)
			otherAnswers.push(sget("Please enter incorrect choice #"+i+": ").trim());
		this.questions.push(new this.QuizQuestion(question, correctAnswer, otherAnswers));
		console.log("Thank you for creating question #"+this.totalQuestions);
	},

	init: function(){
		console.log("Welcome to the Hastily-Made-Quiz-O-Rama (TM)");
		this.playerName = sget("What is your name?").trim();
		this.desiredQuestions = parseInt(sget("How many questions would you like to create?"));
		if (isNaN(this.desiredQuestions))
			this.desiredQuestions = 1;
		var i = 0;
		while(i < this.desiredQuestions){
			this.createQuestion();
			i++;}
		console.log(this.questions);

	}


}


Quiz.init();