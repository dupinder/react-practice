import React from "react";
import { useState } from 'react';

export default function TodoApp() {

    const [todoList, setTodoList] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedTodoList = [...todoList, {id: todoList.length+1, title: newItem}];
      setTodoList(updatedTodoList);
    }

    const deleteMe = (e) => {
      console.log(e.target.id);
      const updatedTodoList = todoList.filter((t) => {
        console.log(t.id);
        console.log(e.target.id);
        console.log(t.id !== e.target.id);
        return t.id !== parseInt(e.target.id);
      });
      console.log(updatedTodoList);
      setTodoList(updatedTodoList);
    }

    return (
      <>
        <div className="container center row">
          <h1>Create Todos</h1>

          <div className="todo-container card">
            <form className="" id="todo-form" name="todo-form" onSubmit={handleSubmit}>
              <div className="m-3">
                <label htmlFor="todo-name" className="form-label">Explain Todo</label>
                <input className="form-label" value={newItem} id="todo-name" name="todo-name" onChange={e => setNewItem(e.target.value)}></input>
                <button className='btn btn-primary'>Add Todo</button>
              </div>
            </form>
          </div>

          <hr/>
          <div className="todo-list-container card row">
            {
              todoList.map( (t) => {
                return (
                  <div className='todo-row-container' id={t.id}>
                    <span className="checkbox-container">
                      <input type="checkbox" id={t.id} name={t.title} value={t.title}></input>
                    </span>
                    <label htmlFor="vehicle1"> <div className="todo-label ml-3 mr-3">{t.title}</div></label>
                    <button className="btn btn-danger" id={t.id} onClick={deleteMe}> Delete</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    );
}



// <h1>Todo Practice App</h1>
//             <div className="container center row">
//             <div className="todo-container card pt-3 mb-3">
//                 <form className="" id="add-todo" name="add-todo" onSubmit={handleSubmit} >
//                 <div className="m-3">
//                     <label htmlFor="todo-name" className="form-label">Todo Name</label>
//                     <input className="form-label" value={newItem} id="todo-name" name="todo-name" onChange={e => setNewItem(e.target.value)}></input>
//                     <button className='btn btn-primary'>Add Todo</button>
//                 </div>
//                 </form>

//                 <div><h3>Todos</h3></div>

                
//                 <div className='todo-container card pt-3 mb-3' id="todo-container">

//                 {todoList.map( (t) => {
//                     return (
//                     <div className='todo-row-container' id={t.id}>
//                         <span className="checkbox-container">
//                         <input type="checkbox" onChange={e => toggleTodo(t.id, e)} id={t.id} name={t.title} value={t.title}></input>
//                         </span>
//                         <label htmlFor="vehicle1"> <div className="todo-label ml-3 mr-3">{t.title}</div></label>
//                         <button className="btn btn-danger" onClick={ () => deleteMe(t.id)}> Delete</button>
//                     </div>
//                     )
//                 })}
                
//                 </div>
//             </div>
//             </div>