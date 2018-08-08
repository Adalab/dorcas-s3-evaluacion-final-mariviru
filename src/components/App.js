import React, { Component } from 'react';
import List from './List';
import './App.css';

const URL = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characterList: [],
    }

    this.fetchNewList = this.fetchNewList.bind(this);
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

  render() {
    console.log('app state', this.state.characterList)
    return (
      <List
        characterList = {this.state.characterList}
      />
    );
  }
}

export default App;
