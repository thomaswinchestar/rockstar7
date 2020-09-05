import React, { useState } from 'react';
import Header from './Header';
import Item from './Item';
import { List } from '@material-ui/core';
import Add from './Add';

const App = props => {
  const [ tasks, setTasks ] = useState([
    { _id: 1, subject: 'Milk', status: 0},
    { _id: 2, subject: 'Bread', status: 1},
    { _id: 3, subject: 'Butter', status: 0},
  ]);

  const add = subject => {
    const _id = tasks[tasks.length - 1]._id + 1;

    setTasks([
      ...tasks, { _id, subject, status: 0 }
    ]);
  }

  const remove = _id => () => {
    setTasks(tasks.filter(task => task._id !== _id ));
  }

  const toggle = _id => () => {
    setTasks(tasks.map(task => {
      if(task._id === _id) task.status = +!task.status;
      return task;
    }))
  }

  const clear = () => {
    setTasks(tasks.filter(task => task.status === 0 ));
  }

  return (
    <div>
      <Header
        clear={clear}
        count={tasks.filter(task => task.status === 0).length}
      />
      <Add add={add} />
      <List>
        {tasks.filter(task => task.status === 0).map(task => {
          return (
            <Item
              key={task._id}
              task={task}
              toggle={toggle}
              remove={remove}
            />
          );
        })}
      </List>
    </div>
  )
}

export default App;
