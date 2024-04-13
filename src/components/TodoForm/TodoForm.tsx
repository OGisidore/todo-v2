/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:04:52
*/
import React, { FC, useState } from 'react';
import './TodoForm.css';
import { addTodo } from '../../api/apiTodo';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { generateID } from '../../Helpers/utiles';
import { Todo } from '../../models/Todo';
import { useDispatch } from 'react-redux';


interface TodoFormProps {

}


const TodoForm: FC<TodoFormProps> = () => {

  const [todo, setTodo] = useState<Todo | null>({
    _id: generateID(),
    name: "",
  })
  const dispatch = useDispatch()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    //verifions si il y a quelque chose dans todo et gerer ensuite l'ajout

    if (todo?.name) {
      addTodo({ ...todo, createdAt: new Date() })
      dispatch({
        type: ADD_TO_STORAGE,
        key: "todos",
        payload: {
          ...todo,
          createdAt: new Date()

        }
      })
      e.target.reset()
      setTodo({
        _id: generateID(),
        name: "",
      })
    }
  }



  // stockage of the input set value on todo
  const handleChange = (e: any) => {
    setTodo({ ...todo, name: e.target.value.trim() })

  }
  return (
    <div className="TodoForm">
      <form id="todoForm"
        onSubmit={(e) => handleSubmit(e)} >
        <input
          defaultValue={todo?.name}
          onChange={(e) => handleChange(e)}
          type="text" name="todo"
          placeholder="Enter todo ..." id="todo" />

        <button className="btn btn-success">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;