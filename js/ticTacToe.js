$(document).ready(function(){

	counter = 1;

	$(".square").on("mouseenter",function() {
		$(this).addClass("hover_square");
	});
	$(".square").on("mouseleave",function() {
		$(this).removeClass("hover_square");
	});

	$(".square").on("click", function() {
		function checkWinner(){
			//winning rows
			if($("#a1").hasClass(counterResult) && $("#a2").hasClass(counterResult) && $("#a3").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}
			if($("#b1").hasClass(counterResult) && $("#b2").hasClass(counterResult) && $("#b3").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}
			if($("#c1").hasClass(counterResult) && $("#c2").hasClass(counterResult) && $("#c3").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}

			//winning columns
			if($("#a1").hasClass(counterResult) && $("#b1").hasClass(counterResult) && $("#c1").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}
			if($("#a2").hasClass(counterResult) && $("#b2").hasClass(counterResult) && $("#c2").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}
			if($("#a3").hasClass(counterResult) && $("#b3").hasClass(counterResult) && $("#c3").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}

			//diagonal
			if($("#a1").hasClass(counterResult) && $("#b2").hasClass(counterResult) && $("#c3").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}
			if($("#a3").hasClass(counterResult) && $("#b2").hasClass(counterResult) && $("#c1").hasClass(counterResult)) {
				alert('Winner! Gagner!');
			}
		}


		if(counter % 2 == 1 ){
			var counterResult = 'classA';		
		} else {
			var counterResult = 'classB';
		}



		if (counter == 9){
			$(this).text("X");
			alert("Tie Game Bro");
		}

		else if (counter % 2 == 1) {
			if (!$(this).hasClass("clicked")) {
				$(this).addClass(counterResult);
				$(this).addClass("clicked");
				$(this).text("X");
				checkWinner();
				counter++;
			}

		}
		
		else {
			if (!$(this).hasClass("clicked")) {
				$(this).addClass(counterResult);
				$(this).addClass("clicked");
				$(this).text("O");
				checkWinner();
				counter++;
				}
			}
		});

	

});

