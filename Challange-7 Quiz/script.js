

(function (){

    function Question (question,answer,correctAnswer){

        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.score = 0;
    
    }
    
    Question.prototype.displayQuestion = function(){
    
        console.log(this.question);
        for (var i = 0 ; i<this.answer.length; i++){
            console.log(i +' : '+ this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        if(this.correctAnswer == ans){
            this.score += 1;
            console.log('Well Done !! Corrent Answer');
            console.log('Your current score is : ' + this.score);
            console.log('-------------------------');

        }else{
            console.log('Wrong Answer , Try Again');
            console.log('Your current score is : ' + this.score);
            console.log('-------------------------');
        }
    
    }


   
    
    
    
    
    var q1 = new Question('How is javascript ?', ['Hard','Boring','Fun','Illogical'],2);
    var q2 = new Question('What is the 1+2 = ?',[5,3,6,],1);
    var q3 = new Question('How to be healthy ?',['Do smoking','Drink Alcohol','Go to gym'],2);
    
    function nextQuestion(){
    var questions = [q1,q2,q3];
    
    var value = Math.floor(Math.random()*questions.length);
    
    questions[value].displayQuestion();
    
    var ans = prompt('give the correct answer');
    
    if(ans !== 'exit'){
        questions[value].checkAnswer(parseInt(ans));
        nextQuestion();

    }
    
    }
    
    nextQuestion();

}) ();


