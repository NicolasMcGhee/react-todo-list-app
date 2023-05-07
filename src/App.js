import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import Background from './components/Background';
import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return [];
    }
  })
  const [todoItem, setTodoItem] = useState("")


  const [darkMode, setDarkMode] = useState(false)
  
  function ToggleMode() {
    setDarkMode(darkMode => !darkMode)
  }

  function addToList(todoItem) {

    if (todoItem !== "")
    {
      setTodoItems([...todoItems, 
      {
       id: todoItems.length + 1,
       text: todoItem
      }])
    }
  }


  function deleteItem(id) {
    const removeItem = todoItems.filter((todo) => {
      return todo.id !== id
    })
    setTodoItems(removeItem)
  }

  function clearItems() {
    setTodoItems([])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems))
  }, [todoItems])
  console.log(todoItems)

  return (
    <>
        <Background
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          addToList={addToList}
        />
        <TodoList 
          todoItem={todoItem}
          setTodoItem={setTodoItem}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          deleteItem={deleteItem}
          clearItems={clearItems}
        />
        
    </>
  );
}

export default App;
