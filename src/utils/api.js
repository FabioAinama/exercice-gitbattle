// Nous permet de récupérer tout les repositories

const fetchPopularRepo = () => {
	// Utiliser vos id/secret respectifs
	const id = '49d5fee0b7970dd57d75';
	const secret = 'a77bca0a77eae6012f0e0764d0e9cd5d39aa20ac';
	const params = `?client_id=${id}&client_secret=${secret}`;
	return fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:&sort=stars&order=desc&type=Repositories${params}`)
		.then(res => res.json())
		.then(data => data.items)
}

export {fetchPopularRepo};