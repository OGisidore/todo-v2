/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/04/2024 13:19:54
*/
import React, { FC, useEffect, useState } from 'react';
import './TodoItem.css';
import { Todo } from '../../models/Todo';


interface TodoItemProps {
  todoItem: Todo

}


const TodoItem: FC<TodoItemProps> = ({ todoItem }) => {

  const [isUpdating, setIsUpdating] = useState<boolean>(false)



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      setIsUpdating(true)

    }
    runLocalData()
  })

  return (
    <div className="TodoItem">
      <li>
        {
          !isUpdating ?
            <>
              <span>{todoItem.name}</span>
              <button className="btn btn-primary">Update</button>
            </>
            :
            <> <input type="text" name='todo' className='form-control' />
              <button className="btn btn-success">Save</button></>
        }
        <button className="btn btn-danger">Delete</button>
      </li>
    </div>
  );
}

export default TodoItem;