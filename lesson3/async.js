window.onload = function() {

	$.get('../data/tweets.json').then(function(tweet){
		console.log(tweet);
		return $.get('../data/friends.json')
	}).then(function(friend){
		console.log(friend);
		return $.get('../data/videos.json')
	}).then(function(vid){
		console.log(vid);
	})
/*
function get(url) {
	return new Promise(function(resolve, reject) {
		let xhttp = new  XMLHttpRequest();
		xhttp.open('GET', url, true);
		xhttp.onload = function() {
			if(xhttp.status == 200) {
				resolve(JSON.parse(xhttp.response));
			} else {
				reject(xhttp.statusText);
			}
		};
		xhttp.onerror = function(){
			reject(xhttp.statusText);
		}
		xhttp.send();
	})
}

	let promise = get('../data/tweets.json');
	promise.then(function(tweets){
		console.log(tweets);
		return get('../data/friends.json')
	}).then(function(friends) {
		console.log(friends);
		return get('../data/videos.json')
	}).then(function(vid) {
		console.log(vid);		
	}).catch(function(error) {
		console.log(error);
	})
	*/

};