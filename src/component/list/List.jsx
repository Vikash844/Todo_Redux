import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodoAction } from '../reducer/action/todo.action'
import { editTodoAction } from './../reducer/action/todo.action';

export default function Todolist() {
    let todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const editData = useSelector(state => state.editData)





    return (
        <section className='mt-5'>
            <ul className="list-group">
                {
                    todos.length > 0 ? todos.map((todo, index) => (
                        <li className="d-flex border px-3 py-2 my-2 mx-5 justify-content-between rounded " key={index} >
                            {todo}
                            <div>
                                <button
                                    className='btn btn-warning btn-sm me-2'
                                    onClick={() => dispatch(editTodoAction(index, todo))}
                                    disabled={editData.index !== -1 ? true : false}
                                >Edit</button>
                                <button
                                    className='btn btn-danger btn-sm'
                                    onClick={() => dispatch(deleteTodoAction(todo))}
                                    disabled={editData.index !== -1 ? true : false}
                                >Delete</button>
                            </div>
                        </li>
                    )) : <li className="list-group-item my-2">No list</li>
                }
            </ul>
        </section>
    )
}
