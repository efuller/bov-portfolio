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
	    return Math.floor(Math.random() * 25);
    }

	function generateNewFact() {
	    const API_URL = `https://swapi.co/api/people/${generateRandomNumber()}`;

        const xhr = new XMLHttpRequest();
	    xhr.open('GET', API_URL);
	    xhr.onload = function() {
	        const response = JSON.parse(xhr.response);

	        if (xhr.status === 200) {
	            DOM.randomFact.innerHTML = response.name;
            } else {
	            DOM.randomFact.innerHTML = 'Oops! Looks like something when wrong!';
            }
        };
	    xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();
    }

	return {
		init: init
	}
})();