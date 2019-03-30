import React, {Component} from 'react';
import './App.css';
import CodeSnippet from './Components/CodeSnippet';
import Comment from './Components/Comment';
import CodeSnippetView from './Components/CodeSnippetView';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

class App extends Component {

constructor () {
  super();
  this.state ={
    snippets: null,
    codeSnippet: '',
    title: '',
  }
}

componentDidMount() {
  this.refreshList();
}
refreshList = () => {
  axios
    .get("http://localhost:8000/api/code/")
    .then(res => this.setState({ todoList: res.data }))
    .catch(err => console.log(err));
};

onSubmitSnippet = item => {
  this.toggle();
  if (item.id) {
    axios
      .put(`http://localhost:8000/api/code/${item.id}/`, item)
      .then(res => this.refreshList());
    return;
  }
  axios
    .post("http://localhost:8000/api/code/", item)
    .then(res => this.refreshList());
};

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
