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
      characterWithId: [],
      input: '',
      filterList: [],
      select: '',
    }

    this.fetchNewList = this.fetchNewList.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.filterCharactersList = this.filterCharactersList.bind(this);
    this.filterHouse = this.filterHouse.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
        }, this.addId)
      })
  }

  addId() {
    const actualicedList = [...this.state.characterList];
    let characterListId = [];
    for (let i = 0; i < actualicedList.length; i++) {
      characterListId[i] = {
        ...actualicedList[i],
        id: i
      }
    }
    this.setState({
      characterWithId: characterListId
    })
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    }, this.filterCharactersList)
  }

  filterCharactersList() {
    console.log('en filter que es list', this.state.characterWithId)
    const actualicedList = [...this.state.characterWithId];
    const input = this.state.input;
    const filteredByName = actualicedList.filter((character) =>
      character.name.toLowerCase().includes(input.toLowerCase())
    )
    this.setState({
      filterList: filteredByName,
    })
  }

  handleSelect(event) {
    this.setState({
      select: event.target.value,
    }, this.filterHouse)
  }

  filterHouse() {
    const actualicedList = [...this.state.characterWithId];
    const select = this.state.select;
    const filterByHouse = actualicedList.filter((character) =>
      character.house === select
    )
    this.setState({
      filterList: filterByHouse,
    })
  }

  render() {
    return (
      <Switch>
        <Route
          exact path='/'
          render={props =>
            <main className="Main">
              <Filters
                handleInput={this.handleInput}
                handleSelect={this.handleSelect}
                inputState={this.state.input}
                selectValue={this.state.select}
              />
              <Home
                match={props.match}
                filterList={this.state.filterList}
                input={this.state.input}
                characterWithId={this.state.characterWithId}
                select={this.state.select}
              />
            </main>
          }
        />
        <Route
          path='/characterdetail/:id'
          render={props =>
            <CharacterDetail
              match={props.match}
              characterWithId={this.state.characterWithId}
            />
          }
        />
      </Switch>
    );
  }
}

export default App;
