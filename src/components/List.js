import React, { Component } from 'react';

class List extends Component {

    render() {
        console.log('list props', this.props)
        const characterList = this.props.characterList
        console.log('character list in list', characterList)
        return (
            <div>
                <ul>
                    {characterList.map(function (character, index) {
                        return (
                            <li key={index} >{character.name}
                                <img src={character.image} alt={character.name}/>
                                <span>{character.house}</span>
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