$(document).ready(function() {
	
	$("#btn").on("click", function(){
		
		$.ajax({
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
			type: "GET",
			data: {
				cat: "famous",
				count: "1",
			},
			dataType: 'json',
			success: function(quotes) {
				$(".insert-quote").html(quotes.quote);
				$(".insert-author").html("- " + quotes.author);
				$("#tweet").attr("href", "https://twitter.com/intent/tweet?text="+quotes.quote+" -"+quotes.author);
				$("#quote-box").attr("style", "background-color: #8F"+(Math.floor(Math.random() * (99 - 10 + 1) + 10))+(Math.floor(Math.random() * (99 - 10 + 1) + 10))+";");
			},
			beforeSend: function(xhr) {
		   xhr.setRequestHeader("X-Mashape-Authorization", "tLoCsKtopemshNeZYqkzFIYU45dvp1WHQRrjsnmBOsG4EMUvoE");
		  }
		});
	});

	$("#btn").on("click", function(){
		$(".refresh").toggleClass("rotate");
	});

});