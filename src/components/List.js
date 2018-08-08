import React, { Component } from 'react';
import './List.css';

class List extends Component {

    render() {
        console.log('list props', this.props)
        const characterList = this.props.characterList
        console.log('character list in list', characterList)
        return (
            <div>
                <ul className='Character__list' >
                    {characterList.map(function (character, index) {
                        return (
                            <li 
                                key={index} 
                                className='Character'>
                                <h1 className='Character__name' >
                                    {character.name}
                                </h1>
                                <img 
                                    src={character.image} 
                                    alt={character.name} 
                                    className='Character__img' />
                                <span 
                                    className='Character__house' >
                                    {character.house}
                                </span>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        );
    }
}

export default List;