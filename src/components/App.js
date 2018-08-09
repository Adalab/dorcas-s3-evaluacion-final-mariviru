import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Filters from './Filters';
//import CharacterDetail from './CharacterDetail';
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
      })
      console.log('character list', this.state.characterList)
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    },this.filterCharactersList())
  }

  filterCharactersList() {
    const characterList = [...this.state.characterList];
    const input = this.state.input
    const filteredArray = characterList.filter((character) =>
      character.name.includes(input)
    )
    this.setState({
      filterList: filteredArray,
    })
  }

  render() {
    return (
      <main className="Main">
        <Filters
          handleInput={this.handleInput}
          inputState={this.state.input}
        />
        <CharacterList
          characterList={this.state.characterList}
          input={this.state.input}
          filterList={this.state.filterList}
        />
      </main>
    );
  }
}

export default App;
