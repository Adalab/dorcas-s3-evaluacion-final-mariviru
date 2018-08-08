import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

class CharacterList extends Component {
	render() {
		console.log('list props', this.props)
		const characterList = this.props.characterList
		console.log('character list in list', characterList)
		return (
			<div>
				<ul className='Character__list' >
					<CharacterCard
						characterList={characterList}
					/>
				</ul>
			</div>
		);
	}
}

export default CharacterList;