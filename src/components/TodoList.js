import React from "react"
import '../App.css';


export default function TodoList(props) {

  const todoTest = props.todoItems.map(item => (
    <div className="d-flex justify-content-evenly align-items-center text-wrap border-bottom py-2" id={item.id}>
      <h1 className="col px-4">
        {item.text}
      </h1>
      <button type="button" className="btn-close" aria-label="Close" onClick={() => props.deleteItem(item.id)}></button>
    </div>
  ))

  return (
    <div className='container mt-5 shadow-lg w-50'>
        {todoTest} 
        <div className="row my-3 py-2 text-center align-items-center">
            <div className="col totalItems">
              <p>{props.todoItems.length} items left in list</p>
            </div>
            <div className="col totalItems">
              <button type="button" className="btn btn-outline-danger totalItems" onClick={() => props.clearItems()}>Clear List</button>
            </div>
        </div>
    </div>
  )
}
