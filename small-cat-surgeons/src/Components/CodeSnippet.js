import React, { Component } from 'react';

class CodeSnippet extends Component {
  render() {
    return (
      <div className="snippetContainer">
          <textarea type="text" name="codeSnippet" placeholder="Paste Your Code Here" className="codeInput" />
          <input value="Submit" type="submit" className="submitButton" />
      </div>
    );
  }
}

export default CodeSnippet