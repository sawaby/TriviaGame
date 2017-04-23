// variables 
var selectedQuestion = 0;
var ansSelected = false;
var counter;
var url;
var p = $('<p>');
var second=10;
var correctSelection = 0;
var incorrectSelection = 0;
var unanswered = 0;

// objects of questions
var questions = [{
    question: "What is the population of Brazil?",
    choices: ["145 million", "199 million", "182 million", "205 million"],
    correctAnswer: 1,
    url: "assets/images/brazil1.gif",
    //incorrect: "assets/images/brazil.gif"
}, {
    question: "What is 27*14?",
    choices: ["485", "634", "408", "528"],
    correctAnswer: 2,
    url: "assets/images/math.gif",
    //incorrect: "assets/images/brazil.gif"
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
    correctAnswer: 1,
    url: "assets/images/tokio.gif",
    //incorrect: "assets/images/brazil.gif"
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0,
    url: "assets/images/nile.gif",
    //incorrect: "assets/images/brazil.gif"
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0,
    url: "assets/images/waterloo.gif",
    //incorrect: "assets/images/brazil.gif"
}];
clearInterval(counter);
// the main function which runs the actual game, adding question and the choices
function game(selectedQuestion){
	// calling timer 
	second = 10;
	counter = setInterval(timer, 1000);
	// clear displaye erea
	$("#mylist").empty();
	$("#question").empty();
	$("#image").hide();

	
	//display each question on the object list and its options 
	$.each(questions[selectedQuestion].choices, function(j){
		p.text(questions[selectedQuestion].question);
		$("#question").html(p);
		var li = $('<li/>');
		//li.addClass('liShow')
		li.text(questions[selectedQuestion].choices[j]);
		$("#mylist").append(li);
		ansSelected = false;


	});
	
	
	// creating event handler for li (choices of answers) and calling ansSelection()
	$("li").on("click", ansSelection);

	// when mouse overs on each element
	$("li").hover(mouseOVER, mouseOUT);	
}



$(document).on("click","#start", function(){

	game(selectedQuestion);
	$("#gameover").empty();
	$("#questionBar").show();
	$(this).hide();
});

// url = questions[selectedQuestion].url;
function ansSelection(){
	ansSelected = true;
	url = questions[selectedQuestion].url;
	//var incorrectImage = questions[selectedQuestion].incorrect;
	//console.log($(this).index());
	if($(this).index() == questions[selectedQuestion].correctAnswer){
		$("#mylist").empty();
		$("#question").html("Correct!");
		clearInterval(counter);
		display(url);
		correctSelection++;
		// second = 30;
		// setTimeout(timer, 1000);
		
	}else{
		$("#mylist").empty();
		$("#question").html("Nope! <br />");
		$("#question").append("The Correct Answer was: &nbsp;"+questions[selectedQuestion].choices[questions[selectedQuestion].correctAnswer]);
		clearInterval(counter);
		display(url);
		incorrectSelection++;
		
		
	}
	
	selectedQuestion++;
	if(selectedQuestion <= 4){
		//console.log(selectedQuestion+"selectedQuestion");
		setTimeout(function(){game(selectedQuestion);}, 1000);
		//second = 31;
		//setTimeout(timer, 1000);

	}else{
		//clearInterval(counter);
		//clearTimeout(timer);
		//second = 31;
		setTimeout(gameOver, 1000);

	}
}


//displaye image when the answer is clicked (this function will be called)
function display(url){
	$("#image").attr("src", url);
	$("#image").show();
}

//if mouse over the elements change the style
function mouseOVER(){
	$(this).addClass('liShow');
}
//if mouse out of the elements change the style back to normal
function mouseOUT(){
	$(this).removeClass('liShow');
}
// timer function add a timer of 30 seconds on the DOM and reset it when the answer is not selected
function timer(){
	if(second >= 0){
		$("#displayTime").html("Time Remaining: "+second+" Seconds");
		second--;
		
	}
	

	if (second === 0 && ansSelected === false && selectedQuestion === 4) {
    	console.log("game over due to not selecting"+selectedQuestion);
    	clearInterval(counter);
    	//clearTimeout(timer);
    	gameOver();
    	//second = 30;
    }
	if (second === 0 && ansSelected === false) {
      $("#displayTime").html("Time Remaining: "+second+" Seconds <br />");
      $("#displayTime").append("Out of Time!");
      //second = 31;
      $("#mylist").empty();
	 // $("#question").html("Nope! <br />");
	  $("#question").html("The Correct Answer was: &nbsp;"+questions[selectedQuestion].choices[questions[selectedQuestion].correctAnswer]);
	  clearInterval(counter);
	  url = questions[selectedQuestion].url;
	  unanswered++;
	  display(url);
	  //$("#image").hide();
      selectedQuestion++;
      if(selectedQuestion <= 4){
      	setTimeout(function(){game(selectedQuestion);}, 1000);
      }
      
    }
    
}

//game over function will also reset the game
function gameOver(){
	$("#question").empty();
	$("#gameover").html("All Done! Here is how you did. <br /><br />").css("font-size", "18px");
	$("#gameover").append("Correct Answers: "+correctSelection+"<br />");
	$("#gameover").append("Incorrect Answers: "+incorrectSelection+"<br />");
	$("#gameover").append("unanswered: "+unanswered+"<br />");
	$("#gameover").show();
	$("#start").text("Restart").show();
	selectedQuestion = 0;
	correctSelection = 0;
	incorrectSelection = 0;
	unanswered = 0;
	//second = 30;
	clearInterval(counter);
    //clearTimeout(timer);
	$("#questionBar").hide();
	game(selectedQuestion);
	
}