
import React, { FC, useState } from 'react';
import './TodoItem.css';
import { Todo } from '../../models/Todo';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE, REMOVE_FROM_STORAGE } from '../../redux/actions/actionTypes';


interface TodoItemProps {
  todo: Todo
}


const TodoItem: FC<TodoItemProps> = ({ todo }) => {

  const [isUpdating, setIsUpdating] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')


const dispatch = useDispatch()
// update function
  const handleUpdate = async () => {
    console.log(value);
    
    if (!value.trim()) {
      return;
    }
    const newTodoItem = {
      ...todo, name: value, updatedAt: new Date()
    }
    dispatch({
      type:ADD_TO_STORAGE,
      key : "todos",
      payload : newTodoItem
    })
    
    setIsUpdating(false)

  }

// deleted function 
  const handleDelete = async () => {
    dispatch({
      type:REMOVE_FROM_STORAGE,
      key : "todos",
      payload : todo
    })
    
   
  }
  return (
    <div className="TodoItem">
      <li>

        {/* verifier si c'est en cour de mise à jour adapter l'affichage */}
        {
          !isUpdating ?
            <>
              <span>{todo.name}</span>
              <button onClick={() => setIsUpdating(true)} className="btn btn-primary">Update</button>
            </>
            :
            <> <input defaultValue={todo.name} onChange={(e) => setValue(e.target.value)} type="text" name='todo' className='form-control' />
              <button onClick={handleUpdate} className="btn btn-success">Save</button></>
        }
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </li>
    </div>
  );
}

export default TodoItem;