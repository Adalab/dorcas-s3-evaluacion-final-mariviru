import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.css';

class CharacterCard extends Component {
	render() {
		const {
			name,
			image,
			house,
		} = this.props;
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
				<span
					className='Character__house' >
					{house || 'Casa Desconocida'}
				</span>
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