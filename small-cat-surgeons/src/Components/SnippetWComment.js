import React from 'react';

const SnippetWComment = (props) => {

    return (
      <div className="snippetWComment">
        <div className="card">
          <div>{props.snippet.title}</div>
          <div>{props.snippet.codeSnippet}</div>
        </div>
      </div>
    );
  }


export default SnippetWComment