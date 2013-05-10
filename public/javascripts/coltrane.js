$('.submit_test').click(function (e) {
	e.preventDefault();
	var questions = [];
	var answers = [];
	var numbers = [1, 31, 61, 91, 121, 151, 181, 211];
	for (var i = 0; i < numbers.length; i++) {
		var string = 'input[name=question_'+numbers[i]+']:checked';
		var answer = $(string).val() || 0;
		answer = parseInt(answer, 10);
		if (!answer) {
			var result = "You need to complete all the questions!";
		}
		answers[numbers[i]] = answer;
	}
	console.log(answers);
	//var n1_neo = neo31-neo1-neo61+neo91-neo121+neo151-neo181+neo211;
	$('.results').html(result);
	$('body').scrollTop($('.results').offset().top);
});