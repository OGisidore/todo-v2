/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/04/2024 13:19:54
*/
import React, { FC, useEffect, useState } from 'react';
import './TodoItem.css';
import { Todo } from '../../models/Todo';
import { deleteTodo, updateTodo } from '../../api/apiTodo';


interface TodoItemProps {
  todoItem: Todo



}


const TodoItem: FC<TodoItemProps> = ({ todoItem }) => {

  const [isUpdating, setIsUpdating] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {


    }
    runLocalData()
  }, [value])
  const handleUpdate = async () => {
    const newTodoItem = {
      ...todoItem, name: value, updatedAt: new Date()
    }
    await updateTodo(newTodoItem)
    setIsUpdating(false)
  }
  const handleDelete = async () => {
    await deleteTodo(todoItem._id)
  }
  return (
    <div className="TodoItem">
      <li>
        {
          !isUpdating ?
            <>
              <span>{todoItem.name}</span>
              <button onClick={() => setIsUpdating(true)} className="btn btn-primary">Update</button>
            </>
            :
            <> <input onChange={(e) => setValue(e.target.value)} type="text" name='todo' className='form-control' />
              <button onClick={handleUpdate} className="btn btn-success">Save</button></>
        }
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </li>
    </div>
  );
}

export default TodoItem;