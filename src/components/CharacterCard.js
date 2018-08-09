import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CharacterCard.css';

class CharacterCard extends Component {
	render() { 
		const characterList = this.props.characterList;
		return ( 
			characterList.map(function (character, index) {
				character.id = index
				console.log('character', character)
				return (
					<Link to={`/characterdetail/${character.id}`} key={index}>
					<li
						key={index}
						className='Character'>
						<img
							src={character.image}
							alt={character.name}
							className='Character__img' />
						<h1 className='Character__name' >
							{character.name}
						</h1>
						<span
							className='Character__house' >
							{character.house || 'Casa Desconocida'}
						</span>
					</li>
					</Link>
				)
			}
			)
		 );
	}
}
 
export default CharacterCard;

CharacterCard.propTypes = {
  characterList: PropTypes.array.isRequired,
};