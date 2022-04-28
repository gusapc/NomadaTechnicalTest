import axios from 'axios';
import env from '../../config/env';

export default {
	async getUser() {
		return await axios({
			method: 'get',
			url: `${env.nomada}/get-key/apcgus@gmail.com`,
		});
	},

	async getActor({ uri, key }) {
		let url = `${env.nomada}/upload`;
		let localUri = uri;
		let filename = localUri.split('/').pop();
		let match = /\.(\w+)$/.exec(filename);
		let type = match ? `image/${match[1]}` : `image`;
		let sendData = new FormData();
		sendData.append('file', { type: type, uri: uri, name: filename });
		let options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				nomada: key,
			},
		};
		options.body = sendData;
		options['headers']['Content-Type'] = 'multipart/form-data';
		return await fetch(url, options).then((res) => res);
		// let params = {
		// 	url: '/upload',
		// 	method: 'post',
		// 	baseURL: 'https://whois.nomada.cloud',
		// 	headers: {
		// 		nomada: key,
		// 		'content-type': 'multipart/form-data',
		// 	},
		// 	data: sendData,
		// };
		// return await axios(params);
	},

	async getActorByName({ actorName }) {
		const data = { query: actorName, api_key: env.api_key };
		const queries = this.makeQueryParams(data);
		let url = `${env.themoviedb}/search/person?${queries}`;
		return await axios({ method: 'get', url });
	},

	makeQueryParams(params) {
		let queries = '';
		for (var key in params) {
			queries += `${key}=${params[key]}&`;
		}
		return queries;
	},
};
