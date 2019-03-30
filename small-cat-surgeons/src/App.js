import React, {Component} from 'react';
import './App.css';
import CodeSnippet from './Components/CodeSnippet';
import Comment from './Components/Comment';
import CodeSnippetView from './Components/CodeSnippetView';
import {Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

constructor () {
  super();
  this.state ={
    snippets: null,
    codeSnippet: '',
    title: '',
  }
}

compentDidMount(){

}

onSubmitSnippet = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  let newSnippet = {
    codeSnippet: formData.get('Code')
  }
  return fetch('',{
    method:'POST',
    headers:{
      'Content-Type': "application/json"
    },
    body: JSON.stringify(newSnippet)
  })
  .then(response => response.json())
  .then(response => {
    this.setState({
      snippets: [...this.state.snippets, response[0]]
    })
  })
}



  render () {
    return (
      <div className="App">
        <CodeSnippet onSubmitSnippet={this.onSubmitSnippet} />
        <Comment />
        {this.state.snippets ? <Route exact path = "/" render= {() => <CodeSnippetView snippets={this.state.snippets} />} /> : null }
      </div>
    );
  }
}

export default App;
