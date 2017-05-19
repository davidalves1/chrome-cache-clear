document.addEventListener('DOMContentLoaded', function() {

	var button = document.querySelector('#clear_cache');

	var clearChromeCache= function() {
		chrome.browsingData.removeCache({}, function() {
			var message = document.querySelector('#message');

			message.innerHTML = '<p style="color: #1b5e20; text-align: center;">Clear chache!</p>';
		});

		chrome.browsingData.remove(
			{
				"since": 0
			}, {
				"appcache": true,
			    "cache": true
			}, function() {
				var message = document.querySelector('#message');

				message.innerHTML = '<p style="color: #1b5e20; text-align: center;">Clear cookies!</p>';
			});
	}

	document.addEventListener('click', clearChromeCache);

}, false);