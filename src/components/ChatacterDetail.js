import React, { Component } from 'react';
import './CharacterDetail.css';

class CharacterDetail extends Component {
	render() { 
    const characterList = this.props.characterList;
    console.log('que hay en detail', characterList)
				return (
          
          <p>detalle</p>
          
					// <div
					// 	className='Character'>
					// 	<h1 className='Character__name' >
					// 		{character.name}
					// 	</h1>
					// 	<img
					// 		src={character.image}
					// 		alt={character.name}
					// 		className='Character__img' />
					// 	<span
					// 		className='Character__house' >
					// 		{character.house}
					// 	</span>
					// </div>
				)
			
	}
}
 
export default CharacterDetail;