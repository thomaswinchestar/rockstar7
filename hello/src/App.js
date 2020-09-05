import React from 'react';

import Item from './Item';

import List from './List';

class App extends React.Component {
state = {
  data: [
    { _id: 1, name : 'Mg Mg'},
    { _id: 2, name : 'Kyaw Kyaw'},
    { _id: 3, name : 'Win Naing'},
  ]
}

input = React.createRef();
add = () => {
  const name = this.input.current.value;
  const last = this.state.data.length - 1;
  const _id = this.state.data[last]._id + 1;
  this.setState({
    data: [ ...this.state.data, { _id, name } ]
  });
}

remove = _id => () => {
   this.setState({
     data: this.state.data.filter(user => user._id !== _id)
   });
}

  render(){
    return (
      <div>
          <h1>Hello React</h1>
          <List>
              {this.state.data.map(user => {
                return(
                  <Item
                      key={user._id}
                      _id={user._id}
                      name={user.name}
                      remove={this.remove}
                  />
                )
              })}
          </List>
          <input type="text" ref={this.input}/>
          <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default App;
