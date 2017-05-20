document.addEventListener('DOMContentLoaded', function() {

	var button = document.querySelector('#btnClear');

	var clearChromeCache= function() {
		chrome.browsingData.remove(
			{
				"since": 0 // Define que irá excluir desde o início
			}, {
				"appcache": true,
			    "cache": true
			}, function() {
				var message = document.querySelector('#message');

				message.innerHTML = '<span>-- Cache limpo --</span>';

				setTimeout(function() { message.innerHTML = ''}, 2000);
			});
	}

	document.addEventListener('click', clearChromeCache);

}, false);