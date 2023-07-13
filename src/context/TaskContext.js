import { createContext,useReducer } from "react";
export const TaskContext=createContext();
const taskReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            const id=Math.random()*100;
            let task={...action.payload,id}
            return {...state,taskList:[...state.taskList,task]}
        case 'REMOVE_TASK':
            let list=state.taskList.filter((task)=>task.id!==action.payload.id)
            return{...state,taskList:list}
        case 'UPDATE_TASK':
            let updatelist=state.taskList.
            map((task)=>task.id===action.payload.id?action.payload:task)
            console.log('up',updatelist);
            console.log(action.payload)
            return{...state,taskList:[...updatelist]}
        case 'GET_TASKS':
            return state.taskList
        case 'SET_SELECTED_TASK':
            return {...state,selectedTask:{...action.payload}}
        case 'GET_SELECTED_TASK':
            return state.selectedTask
        default:
            return state
    }
}

export const TaskContextProvider=({children})=>{
   const[state,dispatch]=useReducer(taskReducer,{
    taskList:[],
    selectedTask:[]
   })
    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
            </TaskContext.Provider>
    )

}