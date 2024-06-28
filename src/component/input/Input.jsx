import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, updateDataAction } from '../reducer/action/todo.action';

export default function Input() {
    let [todo, setTodo] = useState("")
    const dispatch = useDispatch();
    const editData = useSelector(state => state.editData);

    const sumbit = (event) => {
        event.preventDefault();
        if (editData.index !== -1) {
            dispatch(updateDataAction(editData.index, todo))
        } else {
            dispatch(addTodoAction(todo))
        }
        setTodo("")
    }

    useEffect(() => {
        setTodo(editData.data)
    }, [editData.index, editData.data])


    return (
        <div className="container mx-5 ">
            <section className='mt-5'>
            <form className='row g-3' onSubmit={sumbit} >
                <div className='col-8'>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Todo"
                        value={todo}
                        onChange={(event) => setTodo(event.target.value)} />
                </div>
                <div className="gap-2 col-2 ">
                    <button
                        type="submit"
                        className='btn btn-primary'
                        disabled={todo ? false : true}
                    >
                        {
                            editData.index > -1 ? "Update" : "Add"
                        }
                    </button>
                </div>
            </form>
        </section>
        </div>
    )
}
