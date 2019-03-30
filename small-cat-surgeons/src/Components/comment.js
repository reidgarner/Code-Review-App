import React from 'react';

const Comment = (props) => {
    return (
      <div className="commentContainer">
        <form>
          <textarea type="text" name="commentBox" placeholder="Comment Here" className="commentInput" />
          <input value="Submit" type="submit" className="submitButton" />
        </form>
      </div>
    );
}

export default Comment