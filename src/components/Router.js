/**
 * const router = new Router();
 * router.register('#', () => {});
 * router.register('#projects', () => {});
 * router.load();
 */


class Router {
	constructor() {
		this.routes = [];
		this.bindEvents();
	}

	bindEvents() {
		window.addEventListener('hashchange', () => {
			const hash = location.hash;
			this.load(hash);
		});
	}

	load(hash = '#') {
		// Throw an error if there is not at least a route for #
		if (this.routes.length === 0) {
			throw new Error('There should be at least one registered route.');
		}

		// Should probably have a home route specified.
		const home = this.match('#');

		if (!home) {
			throw new Error('You should specify a route for home.');
		}

		if (location.hash) {
			hash = location.hash;
		}

		// If there is a route that matches, load that one.
		const matched = this.match(hash);

		// Load the # route as a fail safe.
		if (matched) {
			matched.cb();
			this.active(matched.name);
		} else {
			home.cb();
			this.active(home.name);
		}
	}

	match(hash) {
		return this.routes.find(route => route.name === hash);
	}

	active(hash) {
		const navElements = document.querySelectorAll('a[href*="#"]');
		navElements.forEach((el) => {
			el.classList.remove('active');
			if (el.getAttribute('href') === hash) {
				el.classList.add('active');
			}
		});
	}

	register(route, cb) {
		const newRoute = {
			name: route,
			cb,
		}

		this.routes.push(newRoute);
	}
}

export default Router;
