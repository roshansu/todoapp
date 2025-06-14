import React from "react";
import ReactDom from "react-dom/client";
import { useState } from "react";

function App(){

    const [value, setValue] = useState("");
    const [todo, addTodo] = useState([]);

    function addTask(){
        if(value === '') return;
        addTodo([...todo, value]);
        setValue('');
    }

    function delTask(key){
        addTodo([...todo.filter((val,i)=>i!=key)]);
        setValue('');
    }



    return(
        <div className="todo">
            <h1>todo App</h1>
            <div className="but">
                <input value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Enter todo"/>
                <button onClick={addTask}>Add</button>
            </div>

           {
            todo.map((val, ind)=>(
                <div key={ind}  className="tasks">
                <div  className="list">
                    <i className="fa-regular check fa-circle"></i>
                    <p>{val}</p>
                </div>
                <i onClick={(e)=>delTask(ind)} className="fa-solid del fa-trash"></i>
            </div>
            ))
           }
          
        </div>
    )
}

export default App