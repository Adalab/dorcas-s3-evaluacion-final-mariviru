import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gryffindor from '../images/gryffindor.png';
import hufflepuff from '../images/hufflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';
import crest from '../images/hp_crest.png';
import skull from '../images/skull.png';
import smile from '../images/smile.png';
import './CharacterDetail.css';

class CharacterDetail extends Component {
	render() {
		const {
			characterWithId,
			match,
		} = this.props;

		const detail = characterWithId[match.params.id];

		let houseCrest

		if (detail.house === "") {
			houseCrest = crest
		} else if (detail.house === "Gryffindor") {
			houseCrest = gryffindor
		} else if (detail.house === 'Slytherin') {
			houseCrest = slytherin
		} else if (detail.house === 'Hufflepuff') {
			houseCrest = hufflepuff
		} else if (detail.house === 'Ravenclaw') {
			houseCrest = ravenclaw
		}

		return (
			<section className='Character__detail-container' >
				<div className='Character__detail-main' >
					<img
						className='Character__detail-image'
						src={detail.image}
						alt={detail.name} />
					<div
						className='Character__detail'>
						<h1 className='Character__detail-name' >
							{detail.name}
						</h1>
						<div
							className='Character__detail-data'>
							<img
								className='Character__detail-house'
								src={houseCrest}
								alt={detail.house}
							/>
							<p className='Character__detail-text' >
								Nacimiento: {detail.yearOfBirth || 'Desconocido'}
							</p>
							<p className='Character__detail-text' >
								Patronus: {detail.patronus || 'Desconocido'}
							</p>
							<img
								className='Character__detail-alive'
								src={(detail.alive === true) ? smile : skull}
								alt={(detail.alive === true) ? 'vivo' : 'muerto'}
							/>
						</div>
					</div>
				</div>
				<Link to='/' className='Character__detail-link'>
					<button className='Character__detail-backbutton' >Volver</button>
				</Link>
			</section>
		)

	}
}

export default CharacterDetail;

CharacterDetail.propTypes = {
	characterWithId: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired,
};