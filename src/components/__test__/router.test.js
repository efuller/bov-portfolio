import Router from '../Router';

test('should new-up a Router class', () => {
	const router = new Router();
	expect(router).toHaveProperty('routes');
});

test('register(): should register new route', () => {
	const cb = jest.fn();
	const route = {
		name: '#',
		cb,
	};

	const router = new Router();
	router.register('#', cb);
	expect(router.routes[0]).toMatchObject(route);
});

test('match(): should return a matched router', () => {
	const cb = jest.fn();
	const home = {
		name: '#',
		cb,
	};

	const projects = {
		name: '#projects',
		cb,
	};

	const router = new Router();
	router.register('#', cb);
	router.register('#projects', cb);

	expect(router.match('#')).toMatchObject(home);
	expect(router.match('#projects')).toMatchObject(projects);
});

test('load() should load a matching route', () => {
	const cb1 = jest.fn();
	const cb2 = jest.fn();
	const router = new Router();

	router.register('#', cb1);
	router.register('#projects', cb2);

	router.load();
	expect(cb1).toHaveBeenCalledTimes(1);
	expect(cb2).toHaveBeenCalledTimes(0);
});

test('load(): should throw an error if no routes are registered', () => {
	const router = new Router();

	expect(() => router.load()).toThrow('There should be at least one registered route.');
});

test('load(): should throw an error if no home route is registered', () => {
	const router = new Router();
	router.register('#projects', () => {});

	expect(() => router.load()).toThrow(/^You should specify a route for home.$/);
});

test('load(): load the home route if there are no other matches', () => {
	const cb = jest.fn();
	const router = new Router();
	router.register('#', cb);
	router.register('#projects', () => {});

	router.load();
	expect(cb).toHaveBeenCalledTimes(1);
	router.load('#something');
	expect(cb).toHaveBeenCalledTimes(2);
});
