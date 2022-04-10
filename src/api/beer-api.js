import axios from 'axios';

const fetchData = async (url, setBeersCb, setErrorCb) => {
	try {
		const { data: beers } = await axios.get(url);
		setBeersCb(beers);
	} catch (error) {
		setErrorCb(true);
		console.log(error);
	}
}

const postData = async (url, data, setPostSuccess, setPostError) => {
	try {
		const { status, body } = await axios({
			method: 'post',
			url,
			headers: {
				'Content-Type': 'application/json'
			},
			data,
		});
		console.log('GOT STATUS', status);
		if (status === 200) {
			setPostSuccess(true);
		} else {
			setPostError(`Error ${status}, ${body}`);
		}
	} catch (error) {
		console.log('ERROR', `[${error}]`);
		setPostError(`${error}`);
	}
}

export { fetchData, postData }
