import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gryffindor from '../images/gryffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';
import crest from '../images/hp_crest.png';
import './CharacterCard.css';

class CharacterCard extends Component {
	render() {
		const {
			name,
			image,
			house,
		} = this.props;

		let houseCrest

		if (house === "") {
				houseCrest = crest
		} else if (house === "Gryffindor") {
				houseCrest = gryffindor
		} else if (house === 'Slytherin') {
				houseCrest = slytherin
		} else if (house === 'Hufflepuff') {
				houseCrest = hufflepuff
		} else if (house === 'Ravenclaw') {
				houseCrest = ravenclaw
		}

		return (
			<div
				className='Character'>
				<img
					src={image}
					alt={name}
					className='Character__img' />
				<h1 className='Character__name' >
					{name}
				</h1>
				<img
					className='Character__house'
					src={houseCrest}
					alt={house}
				/>
			</div>

		);
	}
}

export default CharacterCard;

CharacterCard.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	house: PropTypes.string.isRequired,
};