const intialState={ 
    count:0

}

 function CounterReducer(state=intialState,action){//reducer ki state,action untundahi
         if(action.type==="inc"){
            return{count:state.count+1}//count=count+1 laaga but indhilo ila rastham

         }
          if(action.type==="dec"){
            return{count:state.count-1}//count=count-1 laaga but indhilo ila rastham
         }
         return state
 }
 export default CounterReducer;