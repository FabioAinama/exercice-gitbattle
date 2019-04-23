import React from 'react';
import RepoGrid from './RepoGrid';
import {fetchPopularRepo} from '../utils/api';

class Popular extends React.Component {
	// Initialisation du state via le constructor, les repos est set à null
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};
	}

	// Après le render(), componentDidMount() est appelé, celui-ci appelle notre fonction qui fera le call à l'api Github, une fois la réponse obtenue (.then(...)) on set le nouveau state avec le tableau obtenu
	componentDidMount() {
		fetchPopularRepo().then(repos => {
			this.setState({
				repos
			})
		});
	}

	render() {
		// Si this.state.repos n'est pas null, je renvoie le composant RepoGrid
		return (
			<div>
				{this.state.repos ? <RepoGrid repos={this.state.repos} /> : null}
			</div>
		)
	}
}

export default Popular;