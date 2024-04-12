
import React, { FC, useState } from 'react';
import './TodoItem.css';
import { Todo } from '../../models/Todo';
import { deleteTodo, updateTodo } from '../../api/apiTodo';


interface TodoItemProps {
  todoItem: Todo
  ondisplay:()=> void



}


const TodoItem: FC<TodoItemProps> = ({ todoItem, ondisplay }) => {

  const [isUpdating, setIsUpdating] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')



// update function
  const handleUpdate = async () => {
    if (!value.trim()) {
      alert('Please enter a valid todo name.');
      return;
    }
    const newTodoItem = {
      ...todoItem, name: value, updatedAt: new Date()
    }
    await updateTodo(newTodoItem)
    setIsUpdating(false)
    ondisplay()
  }

// deleted function 
  const handleDelete = async () => {
    await deleteTodo(todoItem._id)
    ondisplay()
  }
  return (
    <div className="TodoItem">
      <li>

        {/* verifier si c'est en cour de mise à jour adapter l'affichage */}
        {
          !isUpdating ?
            <>
              <span>{todoItem.name}</span>
              <button onClick={() => setIsUpdating(true)} className="btn btn-primary">Update</button>
            </>
            :
            <> <input defaultValue={todoItem.name} onChange={(e) => setValue(e.target.value)} type="text" name='todo' className='form-control' />
              <button onClick={handleUpdate} className="btn btn-success">Save</button></>
        }
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
      </li>
    </div>
  );
}

export default TodoItem;