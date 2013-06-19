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

	$(".square").on("mouseenter",function() {
		$(this).addClass("hover_square");
	});
	$(".square").on("mouseleave",function() {
		$(this).removeClass("hover_square");
	});

	$(".square").on("click", function() {
		counter++;

	if (counter % 2 == 1) {
		$(this).text("X");
	}
	
	else {
		$(this).text("O");
	}



	});

});