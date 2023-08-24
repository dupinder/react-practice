
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
import './App.css'

import { useState } from 'react';

export default function App() {


  const [newItem, setNewItem] = useState("Item 1");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    
    if(newItem === "") {
      alert("Todo name shouldn't be empty");
      return;
    }

    const id = todoList.length + 1;
    const newTodo = [...todoList, {id: id, title: newItem, completed: false}];
    setTodoList(newTodo);
    setNewItem("");
  };

  const toggleTodo = (id, e) => {
    todoList.map( t => {
      if(t.id == id){
        t.completed = !t.completed;
        console.log("tid"+t.id+" is checked : " + t.completed)
      }
    })
  }

  const deleteMe = id => {
    todoList.filter(t => t.id === id).pop();
  }

  const navBar = {
    appName: "Todo Practice",
    navItems: ["Home", "About", "Contact", "Login", "Register"]
  }

  return (
    <>

    <Navbar appName={navBar.appName} navItems={navBar.navItems} />

      <h1>Todo Practice App</h1>
      <div className="container center row">
        <div className="todo-container card pt-3 mb-3">
          <form className="" id="add-todo" name="add-todo" onSubmit={handleSubmit} >
            <div className="m-3">
              <label htmlFor="todo-name" className="form-label">Todo Name</label>
              <input className="form-label" value={newItem} id="todo-name" name="todo-name" onChange={e => setNewItem(e.target.value)}></input>
              <button className='btn btn-primary'>Add Todo</button>
            </div>
          </form>

          <div><h3>Todos</h3></div>

         
          <div className='todo-container card pt-3 mb-3'>

            {todoList.map( (t) => {
              return (
                <div className='todo-row-container'>
                  <span className="checkbox-container">
                  <input type="checkbox" onChange={e => toggleTodo(t.id, e)} id={t.id} name={t.title} value={t.title}></input>
                  </span>
                  <label htmlFor="vehicle1"> <div className="todo-label ml-3 mr-3">{t.title}</div></label>
                  <button className="btn btn-danger" onClick={ () => deleteMe(t.id)}> Delete</button>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </>
  )
}


