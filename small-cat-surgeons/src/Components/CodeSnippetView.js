import React from 'react';
import SnippetWComment from './SnippetWComment';

const CodeSnippetView = (props) => {

    return (
      <div className="snippetContainer">
          <div className="snippetList">
            {props.snippets.map(snippet=> <SnippetWComment snippet={snippet} key={'snippet' + snippet.id}></SnippetWComment>)}
          </div>
      </div>
    );
  }


export default CodeSnippetView