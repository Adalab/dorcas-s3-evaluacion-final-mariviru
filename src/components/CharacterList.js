import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CharacterList.css';
import './CharacterCard.css';

class CharacterList extends Component {
	render() {
		const {
			characterWithId,
			filterList,
		} = this.props;

		let listToShow;

		if (filterList.length === 0) {
			listToShow = characterWithId
		} else {
			listToShow = filterList
		}

		return (
			<ul className='Character__list' >
				{listToShow.map(function (character) {
					return (
						<li key={character.id}>
							<Link to={`/characterdetail/${character.id}`}>
								<CharacterCard
									image={character.image}
									name={character.name}
									house={character.house}
								/>
							</Link>
						</li>
					)
				})}
			</ul>
		);
	}
}

export default CharacterList;

CharacterList.propTypes = {
	characterWithId: PropTypes.array.isRequired,
	filterList: PropTypes.array.isRequired,
};