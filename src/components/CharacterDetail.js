import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CharacterDetail.css';

class CharacterDetail extends Component {
	render() {
		const {
			characterWithId,
			match,
		} = this.props;

		const detail = characterWithId[match.params.id];

		return (
			<section className='Character__detail-container' >
				<Link to='/' className='Character__detail-link'>
					<button className='Character__detail-backbutton' >Volver</button>
				</Link>
				<div className='Character__detail-main' >
					<div className='Character__detail-image'>
						<img
							src={detail.image}
							alt={detail.name} />
					</div>
					<div
						className='Character__detail'>
						<h1 className='Character__detail-name' >
							{detail.name}
						</h1>
						<div
							className='Character__detail-data'>
							<p className='Character__detail-text' >
								Casa: {detail.house}
							</p>
							<p className='Character__detail-text' >
								Nacimiento: {detail.yearOfBirth}
							</p>
							<p className='Character__detail-text' >
								Patronus: {detail.patronus}
							</p>
							<p className='Character__detail-alive' >
								Estado: {(detail.alive === true) ? 'VIVO' : 'MUERTO'}
							</p>
						</div>
					</div>
				</div>
			</section>
		)

	}
}

export default CharacterDetail;

CharacterDetail.propTypes = {
	characterWithId: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired,
};