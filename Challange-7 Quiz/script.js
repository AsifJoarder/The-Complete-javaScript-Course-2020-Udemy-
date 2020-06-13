

function Question (question,answer,correctAnswer){

    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;

}

Question.prototype.displayQuestion = function(){

    console.log(this.question);
    for (var i = 0 ; i<this.answer.length; i++){
        console.log(i +' : '+ this.answer[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if(this.correctAnswer == ans){
        console.log('Well Done !! Corrent Answer')
    }else{
        console.log('Wrong Answer , Try Again');
    }

}




var q1 = new Question('How is javascript ?', ['Hard','Boring','Fun','Illogical'],2);
var q2 = new Question('What is the 1+2 = ?',[5,3,6,],1);
var q3 = new Question('How to be healthy ?',['Do smoking','Drink Alcohol','Go to gym'],2);

var questions = [q1,q2,q3];

var value = Math.floor(Math.random()*questions.length);

questions[value].displayQuestion();

var ans = parseInt(prompt('give the correct answer'));

questions[value].checkAnswer(ans);





