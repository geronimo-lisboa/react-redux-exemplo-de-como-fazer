import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './js/store/store'
import {addArticle} from './js/actions/index';

class App extends Component {
  constructor(props){
    super(props);
    this.store = store; //Pra esse teste vou criar a store aqui mesmo. O certo seria ela ser global
    this.addArticle = addArticle; //pega a action que eu vou usar no testew
    this.store.subscribe( () => console.log('alteração no store'));//Isso aqui dispara quando houver alteração no store
    console.log(this.store.getState()); // Printa o estado inicial
    this.store.dispatch(this.addArticle({title:'foo', id:'1'}));//manda uma action pro store
    console.log(this.store.getState()); // Printa o estado inicial
  
    console.log("CONSTRUCTOR");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
