import React, {Component} from 'react';
import './App.css';
import CodeSnippet from './Components/CodeSnippet.js';
import Comment from './Components/Comment.js';






class App extends Component {

constructor () {
  super();
  this.state ={
    codeSnippet: '',
    snippets: null
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
      </div>
    );
  }
}

export default App;
