document.addEventListener('DOMContentLoaded', function() {

	var button = document.querySelector('#btnClear');

	button.addEventListener('click', clearChromeCache);

	function clearChromeCache() {
		var message = document.querySelector('#message');

		var period = document.querySelector('#periodo').value;

		message.innerHTML = '<span>-- Limpando... --</span>';
		
		chrome.browsingData.remove(
			{
				'since': parseInt(period)
			}, {
				'appcache': document.querySelector('#cache').checked,
			    'cache': document.querySelector('#appCache').checked,
			    'cookies': document.querySelector('#cookies').checked
			}, function() {
				message.innerHTML = '<span>-- Concluído --</span>';

				setTimeout(function() { message.innerHTML = ''}, 2000);
			});
	}
}, false);