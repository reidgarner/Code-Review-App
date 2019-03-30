import React from 'react';

const CodeSnippet = (props) => {
    return (
      <div className="snippetContainer">
        <form className="addSnippet" onSubmit={props.onSubmitSnippet}>
          <input type="text" name="title" placeholder="Topic" className="codeTitle" />
          <textarea type="text" name="codeSnippet" placeholder="Paste Your Code Here" className="codeInput" />
          <input value="Submit" type="submit" className="submitButton" />
        </form>
      </div>
    );
}

export default CodeSnippet