import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import './App.css';

const URL = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      input: '',
      filterList: [],
    }

    this.fetchNewList = this.fetchNewList.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.filterCharactersList = this.filterCharactersList.bind(this);
    this.renderCharacters = this.renderCharacters.bind(this);
  }

  componentDidMount() {
    this.fetchNewList();
  }

  fetchNewList() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        this.setState({
          characterList: data,
        })
        console.log('characterList', this.state)
      })
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    }, this.filterCharactersList)
    console.log('evento', event.target.value)
  }

  filterCharactersList() {
    console.log('en filter que es list', this.state.characterList)
    const characterList = [...this.state.characterList]
    const input = this.state.input
    const filteredArray = characterList.filter((character) =>
      character.name.includes(input)
    )
    this.setState({
      filterList: filteredArray,
    })
    console.log('filter array', filteredArray)
  }

  renderCharacters() {
    const filterList = [...this.state.filterList]
    if (this.state.characterList.length === 0) {
      return (
        <p>Loading</p>
      )
    } else if (this.state.input === '') {
      return (
        <CharacterList
          characterList={this.state.characterList}
        />
      )
    } else if (this.state.input !== '') {
      
      return (
          <ul className='Character__list' >
					{filterList.map(function (character, index) {
            console.log('character filtrado', character)
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
      )
    }
  }

  render() {
    console.log('app state', this.state.characterList)
    return (
      <main className="Main">
        <Filters
          handleInput={this.handleInput}
          inputState={this.state.input}
        />
        {this.renderCharacters()}
      </main>
    );
  }
}

export default App;
