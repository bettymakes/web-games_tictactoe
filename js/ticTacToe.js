$(document).ready(function(){
	// $('.square').mouseenter(function(){
	// 	$(this).css({
	// 		'background': 'blue',
	// 		'cursor': 'pointer'
	// 	});
	// });
	// $('.square').mouseleave(function(){
	// 	$(this).css({
	// 		'background': 'black',
	// 	});
	// });
	counter = 0;
	counterResult = counter % 2
	// Check Winner



	$(".square").on("mouseenter",function() {
		$(this).addClass("hover_square");
	});
	$(".square").on("mouseleave",function() {
		$(this).removeClass("hover_square");
	});

	$(".square").on("click", function() {
		counter++;
		var counterResult = counter % 2


	if (counter % 2 == 1) {
		$(this).addClass("1");
		$(this).text("X");
	
		if($("#a1").hasClass(counterResult) && $("#a2").hasClass(counterResult) && $("#a3").hasClass(counterResult)) {
			alert('Winner! Gagner!');
		}
	}
	
	else {
		$(this).addClass("0");
		$(this).text("O");
		if($("#a1").hasClass(counterResult) && $("#a2").hasClass(counterResult) && $("#a3").hasClass(counterResult)) {
			alert('Winner! Gagner!');
		}
	}



	});

});

// evaluate win or tie
// duplicate clicking on squares
// 
