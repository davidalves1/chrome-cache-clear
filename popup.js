document.addEventListener('DOMContentLoaded', function() {

	var button = document.querySelector('#clear_cache');

	var clearChromeCache= function() {
		console.log('Limpando o cache.')
		chrome.browsingData.removeCache({}, function() {
			var message = document.querySelector('#message');

			message.innerHTML = '<p style="color: #1b5e20; text-align: center;">Sucesso!</p>';
		});
		console.log('Limpeza concluída!');
	}

	document.addEventListener('click', clearChromeCache);

}, false);