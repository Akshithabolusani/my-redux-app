import { combineReducers,createStore } from "redux";//create store import chesthav andhilo combine redcucer
//combine redcucer ni import cheyali
import CounterReducer from "./Counter.reducer";
import TodolistReducer from "./Todolist.reducer";
//store ni oka varaiable ki assign chesi createstore lo combinereducers ni pass chesthav
var store=createStore(combineReducers({CounterReducer,TodolistReducer}))
 export default store;
