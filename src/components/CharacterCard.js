import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

class CharacterCard extends Component {
	
	render() {
		const returnedList = this.props;
		console.log('returned in card', returnedList)
		return (
			<Link to={`/characterdetail/${returnedList.id}`}>
				<div className='Character'>
					<h1 className='Character__name' >
						{returnedList.name}
					</h1>
					<img
						src={returnedList.image}
						alt={returnedList.name}
						className='Character__img' />
					<span
						className='Character__house' >
						{returnedList.house}
					</span>
				</div>
			</Link>
		)

	}
}

export default CharacterCard;