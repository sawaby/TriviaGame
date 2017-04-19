var selectedQuestion = 0;

// objects of questions
var questions = [{
    question: "What is the population of Brazil?",
    choices: ["145 million", "199 million", "182 million", "205 million"],
    correctAnswer: 1,
    url: "assets/images/brazil.gif"
    

    	//"http://api.giphy.com/v1/gifs/search?q=population&api_key=dc6zaTOxFJmzC&limit=1",
    	//gif: gifs(this.url),

    
}, {
    question: "What is 27*14?",
    choices: ["485", "634", "408", "528"],
    correctAnswer: 2,
    url: "assets/images/brazil.gif"

}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
    correctAnswer: 1,
    url: "assets/images/brazil.gif"
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0,
    url: "assets/images/brazil.gif"
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0,
    url: "assets/images/brazil.gif"
}];
console.log("hello");
//gifs(questions[0].giphy.url);
// var myurl = "http://api.giphy.com/v1/gifs/population?api_key=dc6zaTOxFJmzC"
// //console.log(questions[0].giphy.gif);
// gifs(myurl);
function reset(){


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
	//});
	
}
$("li").hover(function(){
	$(this).addClass('liShow');
});

//game(questions[0].giphy.url);
function timer(){

}

game(selectedQuestion);
$("#start").on("click", function(){
	//game();
	$("#questionBar").show();
	$(this).hide();
});


function ansSelection(){
//$("li").on("click", function(){
	//console.log(questions[selectedQuestion].correctAnswer);
	url = questions[selectedQuestion].url;

	console.log($(this).index());
	if($(this).index() == questions[selectedQuestion].correctAnswer){
		console.log($(this).index());
		//var p = 
		display(url);
		//$("#image").show();
	}
	selectedQuestion++;
	console.log(selectedQuestion+"selectedQuestion");
	setTimeout(function(){game(selectedQuestion);}, 2000);
}




function display(url){
	$("#image").attr("src", url);
	$("#image").show();
	//$("#image").append("img");
	//$("#question").show();
	console.log(url);


}
//var queryURL = "http://api.giphy.com/v1/gifs/search?q=population&api_key=dc6zaTOxFJmzC&limit=1";
function gifs(gif){

	console.log("gif"+gif);
    $.ajax({
    	dataType: "jsonp",
    	url: gif,
    	method: "GET"
    }).done(function(response) {

      $("#image").attr("src",response.Images.url);

      console.log(response);
    });

}