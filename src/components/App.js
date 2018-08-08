import React, { Component } from 'react';
import List from './List';
import Filters from './Filters';
import './App.css';

const URL = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
      input: '',
    }

    this.fetchNewList = this.fetchNewList.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
        },
        )
        console.log('characterList', this.state)
      })
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    console.log('app state', this.state.characterList)
    return (
      <main className="Main">
        <Filters
          handleInput={this.handleInput}
          inputState={this.state.input}
        />
        <List
          characterList={this.state.characterList}
        />
      </main>
    );
  }
}

export default App;
