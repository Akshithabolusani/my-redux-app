import React from "react";
//connect from react redux bring the store and connect to component
import { connect } from "react-redux";
 function Counter(props){
    console.log(props)
    return(
        <div className="p-5 m-5 border border-primary">
             {/* <h1>Counter:{props .CounterReducer.count}</h1>
            <button onClick={()=>{props.dispatch({type:"inc"})}}>increment</button>
             <button onClick={()=>{props.dispatch({type:"dec"})}}>decrement</button>  */}

              <h1>Counter: {props.count}</h1> {/* Access count directly from props */}
              <button onClick={() => props.increment()}>increment</button> 
              <button onClick={() => props.decrement()}>decrement</button> 
        </div>
    )
 }
 //export default connect((store)=>{return store})(Counter);

// // mapDispatchToProps: This function receives the `dispatch` function as its first argument
// // and should return an object where the keys are prop names and the values are functions
// // that dispatch actions. This makes your component more declarative and testable.
 function mapStateToProps (state) {return  state.CounterReducer} // Directly map count to a prop called 'count'
function mapDispatchToProps  (dispatch) {
  return {
    increment: () => dispatch({ type: "inc" }),
    decrement: () => dispatch({ type: "dec" }),
  }
}

// // Connect the Counter component to the Redux store
 export default connect(mapStateToProps, mapDispatchToProps)(Counter);