import API from './API';
import Home from '../views/home.hbs';
import Projects from '../views/projects.hbs';
import Articles from '../views/articles.hbs';

// const router = new Router();

export default {
	home(router) {
		const app = document.querySelector('.app');
		app.innerHTML = '';
		const el = document.createElement('div');

		const data = API.getBio();
		data.then((bio) => {
			el.innerHTML = Home({ data: bio });
			app.appendChild(el);
			router.active('#');
		});
	},
	projects(router) {
		const app = document.querySelector('.app');
		app.innerHTML = '';
		const el = document.createElement('div');

		const data = API.getProjects();
		data.then((projects) => {
			console.log(projects);
			el.innerHTML = Projects({ data: projects });
			app.appendChild(el);
			router.active('#projects');

			const activePanel = document.querySelector('.panel.active');
			const panel = activePanel.getAttribute('data-name');
			const btn = document.querySelector(`[data-panel="${panel}"`);
			btn.classList.add('active');
		});
	},
	articles(router) {
		const app = document.querySelector('.app');
		app.innerHTML = '';
		const el = document.createElement('div');

		const data = API.getArticles();
		data.then((articles) => {
			console.log(articles);
			el.innerHTML = Articles({ data: articles.slice(0, 3) });
			app.appendChild(el);
			router.active('#articles');
		});
	},
};
