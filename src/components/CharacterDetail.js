import React, { Component } from 'react';
import './CharacterDetail.css';

class CharacterDetail extends Component {
    
    render() {
        console.log('detail props', this.props)
        const characterList = this.props.characterList;
        console.log('character list in detail', characterList)
        const {name, image, house} = characterList
        console.log('name list in detail', name)
        return (
            <div className='Character'>
				<h1 className='Character__name' >
                    {characterList.name}
                </h1>
                <img
                    src={characterList.image}
                    alt={characterList.name}
                    className='Character__img' />
                <span
                    className='Character__house' >
                    {characterList.house}
                </span>
            </div>
        )
    }
}

export default CharacterDetail;