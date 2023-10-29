import { ToDoInput } from './components/ToDoInput';
import { ToDo } from './components/ToDo';
import { Title } from './components/Title/index';
import { ToDoList } from './components/ToDoList';
import React, { useState } from 'react';

function App() {

  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: 'Go to the Gym',
      completed: false
    },

    {
      id: 2,
      title: 'Takee a Bath',
      completed: false
    },

    {
      id: 3,
      title: 'Have a lunch',
      completed: false
    },

    {
      id: 4,
      title: 'Wash my teeth',
      completed: false
    },

    {
      id: 5, 
      title: 'Go to sleep',
      completed: false
    }

  ])

  const addToDo = (title) => {
    const lastId = toDos.length > 0 ? toDos[toDos.length - 1].id : 1;

    const newToDo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const toDoList = [...toDos]
    toDoList.push(newToDo)
    setToDos(toDoList);
  }

  const handleSetComplete = (id) => {
    const updateList = toDos.map(toDo => {
      if (toDo.id === id) {
        return {... toDo, completed: !toDo.completed}
      }
      return toDo;
    })

    setToDos(updateList);

  }

  const handleDelete = (id) => {
    const updateList = toDos.filter(toDo => toDo.id !== id);
    setToDos(updateList);
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-15 px-5">
      <div className="container flex flex-col max-w-xl"> 
        <Title />
        <ToDoInput addToDo = {addToDo} />
        <ToDoList 
          toDos={toDos} 
          handleSetComplete = {handleSetComplete}
          handleDelete = {handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
