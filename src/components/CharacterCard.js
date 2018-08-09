import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

class CharacterCard extends Component {
	render() {
		const returnedList = this.props;
		console.log('returned en card', this.props)
		const returnedObject = {
			...returnedList,
			id: returnedList.id
		}
		return (
			<Link to={`/characterdetail/${returnedObject.id}`}>
				<div className='Character'>
					<h1 className='Character__name' >
						{returnedObject.name}
					</h1>
					<img
						src={returnedObject.image}
						alt={returnedObject.name}
						className='Character__img' />
					<span
						className='Character__house' >
						{returnedObject.house}
					</span>
				</div>
			</Link>
		)

	}
}

export default CharacterCard;