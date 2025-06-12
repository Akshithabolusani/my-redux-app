const intialstate={ 
   todos:["get veggies","pay bills","clean house"]//ekkada intial values icchinav

}

 function TodolistReducer(state=intialstate,action){//reducer ki state,action untundahi
         if(action.type="addtodo"){
            //todos=statelo unnavi(...statetodos) +update(action.payload) chesinavi laaga but indhilo ila rastham
            return{todos:[...state.todos,action.payload]}

         }
          
 }
 export default TodolistReducer;