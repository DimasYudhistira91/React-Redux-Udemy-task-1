import React, { Component } from 'react';
import Comments from './components/comments';
import ApprovalCard from './components/approvalCard';

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <Comments
            author="Dimas"
            date="Today at 08.00pm"
            text="Awesome!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comments
            author="Yudhis"
            date="Tomorrow at 07.00am"
            text="Marvelous!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comments
            author="Nida"
            date="May 3rd at 4.30pm"
            text="Luar binasa!"
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;