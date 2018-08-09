import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Filters from './Filters';
import Home from './Home';
import CharacterDetail from './CharacterDetail';
import './App.css';

const URL = 'https://hp-api.herokuapp.com/api/characters';

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

  
  render() {
    return (
      <main className="Main">
        <Filters
          handleInput={this.handleInput}
          inputState={this.state.input}
        />
        <Switch>
          <Route
            exact path='/'
            render={props =>
              <Home
                match={props.match}
                filterList={this.state.filterList}
                input={this.state.input}
                characterList={this.state.characterList}
              />
            }
          />
          <Route
            path='/characterdetail/:id'
            render={props =>
              <CharacterDetail
                match={props.match}
                characterList={this.state.characterList}
              />
            }
          />
        </Switch>
      </main>
    );
  }
}

export default App;
