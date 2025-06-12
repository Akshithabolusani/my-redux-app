import React from "react";
//connect from react redux bring the store and connect to component
import { connect } from "react-redux";
 function Counter(props){
    console.log(props)
    return(
        <div className="p-5 m-5 border border-primary">
            <h1>Counter:{props .CounterReducer.count}</h1>
            <button onClick={()=>{props.dispatch({type:"inc"})}}>increment</button>
             <button onClick={()=>{props.dispatch({type:"dec"})}}>decrement</button>
        </div>
    )
 }
 export default connect((store)=>{return store})(Counter);