import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';
import './Home.css';
import './CharacterCard.css';


class Home extends Component {
  constructor(props) {
    super(props);
    console.log('props en home', this.props)
  }

  render() {
    const filterList = this.props.filterList;
    const input = this.props.input;
    const characterList = this.props.characterList;
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
          {filterList.map(function (character, index) {
            console.log('character filtrado', character)
            return (
              <Link to={`/characterdetail/${character.id}`} key={index}>
                <li
                  key={index}
                  className='Character'>
                  <img
                    src={character.image}
                    alt={character.name}
                    className='Character__img' />
                  <h1 className='Character__name' >
                    {character.name}
                  </h1>

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

Home.propTypes = {
  filterList: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired,
  characterList: PropTypes.array.isRequired,
};