window.onload = function() {

	let http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			// console.log(JSON.parse(http.response))
		}
	}

	http.open("GET", "data/tweets.json", true);
	http.send();
	


	//Jquery method
	$.get('data/tweets.json',function(data) {
		console.log(data);
	})


};