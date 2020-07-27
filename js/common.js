$(document).ready(function() {
	$(".popup").magnificPopup();
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	$("#form").submit(function(e) {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thanks for order");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 1000);
		});
	});
});
