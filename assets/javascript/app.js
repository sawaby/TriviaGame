var selectedQuestion = 0;

// objects of questions
var questions = [{
    question: "What is the population of Brazil?",
    choices: ["145 million", "199 million", "182 million", "205 million"],
    correctAnswer: 1,
    url: "assets/images/brazil.gif",
    incorrect: "assets/images/brazil.gif"

    	//"http://api.giphy.com/v1/gifs/search?q=population&api_key=dc6zaTOxFJmzC&limit=1",
    	//gif: gifs(this.url),

    
}, {
    question: "What is 27*14?",
    choices: ["485", "634", "408", "528"],
    correctAnswer: 2,
    url: "assets/images/brazil.gif",
    incorrect: "assets/images/brazil.gif"
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
    correctAnswer: 1,
    url: "assets/images/brazil.gif",
    incorrect: "assets/images/brazil.gif"
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0,
    url: "assets/images/brazil.gif",
    incorrect: "assets/images/brazil.gif"
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0,
    url: "assets/images/brazil.gif",
    incorrect: "assets/images/brazil.gif"
}];


function reset(){
	// $("#mylist").empty();
	// $("#image").empty();
	selectedQuestion = 0;
	// $("#image").hide();
	//$("#question").show();
	 //game(selectedQuestion);
	 //$("#questionBar").show();

}

var url;
var p = $('<p>');
function game(selectedQuestion){
	
	$("#mylist").empty();
	$("#question").empty();
	$("#image").hide();
	//$.each(questions, function(i){
		
	$.each(questions[selectedQuestion].choices, function(j){
		p.text(questions[selectedQuestion].question);
		$("#question").html(p);
		var li = $('<li/>');
		//li.addClass('liShow')
		li.text(questions[selectedQuestion].choices[j]);
		$("#mylist").append(li);

	});
	
		$("li").on("click", ansSelection);
		// on mouse over on each element
		$("li").hover(mouseOVER, mouseOUT);
	//});
	
}


//game(questions[0].giphy.url);
function timer(){

}
// reset();
//game(selectedQuestion);
// $("#start").on("click", function(){
// 	//game();
// 	$("#questionBar").show();
// 	$(this).hide();
// });
$(document).on("click","#start", function(){
	game(selectedQuestion);
	$("#gameover").empty();
	$("#questionBar").show();
	$(this).hide();
});

function ansSelection(){
//$("li").on("click", function(){
	//console.log(questions[selectedQuestion].correctAnswer);
	url = questions[selectedQuestion].url;
	var incorrectImage = questions[selectedQuestion].incorrect;
	console.log($(this).index());
	if($(this).index() == questions[selectedQuestion].correctAnswer){
		$("#mylist").empty();
		$("#question").html("Correct!");
		display(url);
		
	}else{
		$("#mylist").empty();
		$("#question").html("Nope! <br />");
		$("#question").append("The Correct Answer was: &nbsp;"+questions[selectedQuestion].choices[questions[selectedQuestion].correctAnswer]);
		display(url);
	}

	selectedQuestion++;
	if(selectedQuestion == 4){
		setTimeout(gameOver, 1000);
	}
	console.log(selectedQuestion+"selectedQuestion");
	setTimeout(function(){game(selectedQuestion);}, 1000);
}


//displaye image when the answer is clicked (will call the function)
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
function gameOver(){
	$("#question").empty();
	$("#gameover").html("Game Over. <br />");
	$("#gameover").show();
	$("#start").text("Restart").show();
	selectedQuestion = 0;
	$("#questionBar").hide();
	game(selectedQuestion);
	
	// reset();
	// $("#start").show();
}
