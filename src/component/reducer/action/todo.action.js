import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constant/todo.constant"

export const addTodoAction =(todo) =>({
    type: ADD_TODO,
    payload: todo

})
export const deleteTodoAction =(todo) =>({
    type: DELETE_TODO,
    payload: todo

})


export const editTodoAction = (index, data) =>({
    type: EDIT_TODO,
    payload :{
        data,
        index,
    }
})

export const  updateDataAction = (index, data) =>({
    type:UPDATE_TODO,
    payload:{
        index,
        data
    }
})