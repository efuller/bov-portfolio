export default (function() {
	const DOM = {};

	function init() {
		console.log('hi');
		cacheDOM();
		bindEvents();

		generateNewFact();
	}

	function cacheDOM() {
        DOM.randomFact = document.getElementById('random-fact');
        DOM.generate = document.getElementById('generate');
	}

	function bindEvents() {
        DOM.generate.addEventListener('click', generateNewFact);
	}

	function generateRandomNumber() {
	    return Math.floor(Math.random() * 200);
    }

	function generateNewFact() {
	    const API_URL = `http://numbersapi.com/${generateRandomNumber()}`;

        const xhr = new XMLHttpRequest();
	    xhr.open('GET', API_URL);
	    xhr.onload = function() {
	        const response = xhr.response;

	        if (xhr.status === 200) {
	            DOM.randomFact.innerHTML = response;
            } else {
	            DOM.randomFact.innerHTML = 'Oops! Looks like something when wrong!';
            }
        };
        xhr.send();
    }

	return {
		init: init
	}
})();