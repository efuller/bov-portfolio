import axios from 'axios';

class API {
	constructor() {
		this.url = '../data.json';
	}

	getBio() {
		return axios.get(this.url)
			.then((res) => {
				const { bio } = res.data;
				return bio;
			});
	}

	getProjects() {
		return axios.get(this.url)
			.then((res) => {
				const { projects } = res.data;
				return projects;
			});
	}

	getArticles() {
		return axios.get('http://ericfuller.net/wp-json/wp/v2/posts')
			.then(res => res.data);
	}
}

export default new API();
