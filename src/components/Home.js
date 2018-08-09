import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';
import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    console.log('props en home', this.props)
    
  }

  render() {
    const filterList = this.props.filterList;
    const input = this.props.input;
    const characterList = this.props.characterList;
    const newfilterList = [...filterList];
    console.log('filter list en home', input)
    if (characterList.length === 0) {
      return (
        <p>Loading</p>
      )
    } else if (input === '') {
      return (
        <CharacterList
          characterList={characterList}
        />
      )
    } else if (input !== '') {

      return (
        <ul className='Character__list' >
          {newfilterList.map(function (character, index) {
            console.log('character filtrado', character)
            return (
              <Link to={`/characterdetail/${character.id}`} key={index}>
					<li
						key={index}
						className='Character'>Card
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
					</Link>
            )
          }
          )}
        </ul>
      )
    }
  }
}

export default Home;
