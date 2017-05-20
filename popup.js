document.addEventListener('DOMContentLoaded', function() {

	var button = document.querySelector('#btnClear');

	button.addEventListener('click', clearChromeCache);

	function clearChromeCache() {
		var message = document.querySelector('#message');

		message.innerHTML = '<span>-- Limpando... --</span>';
		
		chrome.browsingData.remove(
			{
				'since': 0 // Define que irá excluir desde o início
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