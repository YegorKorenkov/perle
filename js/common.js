$(document).ready(function() {
	$(".popup").magnificPopup();
	$(".buy-button").on('click', function(e) {
		let parent = $(this).closest("div.product");
		$("#product_name").val(parent[0].getElementsByTagName('p')[0].innerText);
	});
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	$("#form").submit(function(e) {
		var data = $(this).serialize()

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data
		}).done(function() {
			alert("Спасибо за заказ!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 1000);
		});
	});
});
