import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn JavaScript'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        }]
      };
    }
    render(){
      const notes = this.state.notes;
      return(
        <div>
          <button onClick={this.addNote} className="btn">+ New Task</button>
           <Notes notes={notes} />
        </div>
      )
    }
    addNote = () => {
      this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
  }]) });
  };
}
