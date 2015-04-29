function showUrl () {
	chrome.tabs.query({ currentWindow: true, active: true }, showtab);
//	chrome.tabs.getCurrent (showtab);
}

function showtab (tabs) {
	try {
		var tabInfo = tabs[0];
		var url = tabInfo ? tabInfo.url || "" : "";
		if (url) {
			//http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?s=books&ie=UTF8&qid=1430010972&sr=1-1&keywords=clean+code		
			var regex = /http:\/\/www.amazon.com\/.*\/dp\/([0-9]*)\/.*/;
			//var matches = url.match (regex);
			var matches = regex.exec (url);
			if (matches) {
				var nyLibUrl = "https://catalog.nypl.org/search~S1/?searchtype=X&searcharg=" + matches[1];
				//document.getElementById ("url").textContent = nyLibUrl;
				chrome.tabs.create({ url: nyLibUrl });
			}
		} 
	}
	catch (e) {
		alert (e);
	}
}

document.addEventListener('DOMContentLoaded', function () {
	showUrl	();
});
