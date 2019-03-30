import React, {Component} from 'react';
import './App.css';
import CodeSnippet from './Components/CodeSnippet.js';
import Comment from './Components/Comment.js';




class App extends Component {
  render () {
    return (
      <div className="App">
        <CodeSnippet />
        <Comment />
      </div>
    );
  }
}

export default App;
