import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';
import './Home.css';
import './CharacterCard.css';


class Home extends Component {

  render() {
    const {
      characterWithId,
      filterList,
      input,
      select,
    } = this.props;

    if (characterWithId.length === 0) {
      return (
        <p>Loading</p>
      )
    } else {
      return (
        <CharacterList
          characterWithId={characterWithId}
          filterList={filterList}
          input={input}
          select={select}
        />
      )
    }
  }
}


export default Home;

Home.propTypes = {
  filterList: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired,
  characterWithId: PropTypes.array.isRequired,
  select: PropTypes.string.isRequired,
};