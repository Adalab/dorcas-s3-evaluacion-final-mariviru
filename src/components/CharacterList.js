import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

class CharacterList extends Component {
	render() {
		console.log('list props', this.props)
		const characterList = this.props.characterList;
		const filterList = this.props.filterList;
		console.log('character list in list', characterList)
		let returnedList;

		if (filterList.length === 0) {
			returnedList = characterList
		} else {
			returnedList = filterList
		}

		return (
			<div>
				<ul className='Character__list' >
					{returnedList.map(function (character, index) {
						return (
							<li key={index}>
								<CharacterCard
									name={character.name}
									image={character.image}
									house={character.house}
									id={index}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		);
	}
}

export default CharacterList;