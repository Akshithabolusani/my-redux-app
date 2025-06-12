import React from "react";
//connect from react redux bring the store and connect to component
import { connect } from "react-redux";
 function Todolist(props){
    console.log(props)
    return(
        <div className="p-5 m-5 border-5 border-red">
            <h1>Todolist:</h1>
            <input type="text" id="d1"/>
            <button onClick={()=>{props.dispatch({type:"addtodo",payload:document.getElementById("d1").value})}}>ADDTODO</button>
        <ul>
            {
                props.TodolistReducer.todos.map((todos)=>{
                    return<li>{todos}</li>
                })
            }
        </ul>
        </div>
    )
 }
 export default connect((store)=>{return store})(Todolist);