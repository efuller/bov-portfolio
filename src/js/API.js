import axios from 'axios';

class API {
	constructor() {
		this.url = `${__dirname}src/data.json`;
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
}

export default new API();
