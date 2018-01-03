window.onload = function() {

	// function callback(element) {
	// 	console.log(element)
	// }

	// let fruits = ['ban', 'orange', 'apple'];
	// fruits.forEach(callback)

$.ajax({
	type: "GET",
	url: "../data/tweets.json",
	success: function(data) {
		console.log(data);

			$.ajax({
		type: "GET",
		url: "../data/friends.json",
		success: function(data) {
			console.log(data);

				$.ajax({
			type: "GET",
			url: "../data/videos.json",
			success: function(data) {
				console.log(data);
			},
		
		error: function(jqXHR,textStatus,error) {
			console.log(error);
				}
			})
		},		
	error: function(jqXHR,textStatus,error) {
		console.log(error);
			}
		})
	 },
error: function(jqXHR,textStatus,error) {
	console.log(error);
		}
	})
};