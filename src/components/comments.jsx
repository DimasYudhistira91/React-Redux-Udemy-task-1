import React from 'react';
import faker from 'faker'

const Comments = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Dimas
          </a>
          <div className="metadata">
            <span className="date">Today at 8.00pm</span>
          </div>
          <div className="text">Nice Post!</div>
        </div>
      </div>
    </div>
  );
}
 
export default Comments;