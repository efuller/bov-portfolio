
/*
https://qa.moderndeveloper.com/t/i-suck-at-ui-design/2285/4

https://www.google.com/search?q=javascript+vanilla+javascript+router&oq=javascript+vanilla+javascript+router&aqs=chrome..69i57.7663j1j7&sourceid=chrome&ie=UTF-8

http://joakim.beng.se/blog/posts/a-javascript-router-in-20-lines.html
https://medium.com/frontend-fun/js-vanilla-script-spa-1b29b43ea475
https://github.com/SantiagoGdaR/vanilla-spa/tree/master/js
https://www.ynonperek.com/2017/08/24/vanilla-single-page-router-architecture/
http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash
http://read.humanjavascript.com/ch09-clientside-routing.html
 */
import Router from './components/Router';
const controller = {
	home() {
		console.log('home route');
	},
	projects() {
		console.log('projects', this);
	},
	skills() {
		console.log('skills');
	},
	articles() {
		console.log('articles');
	},
};


window.onload = function () {
	const router = new Router();
	router.register('#', controller.home);
	router.register('#projects', controller.projects);
	router.load();
};

if (module.hot) {
	module.hot.accept();
}