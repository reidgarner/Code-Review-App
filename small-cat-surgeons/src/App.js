import React, {Component} from 'react';
import './App.css';
import addSnippet from './Components/addSnippet.js';
import comment from './Components/comment.js';




class App extends Component {
  render () {
    return (
      <div className="App">
        <addSnippet />
        <comment />
      </div>
    );
  }
}

export default App;
