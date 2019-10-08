import React from 'react';
import faker from 'faker';

const Comments = (props) => {
  const { author, date, text } = props;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Comments;
