/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/04/2024 13:19:54
*/
import React, { FC, useEffect, useState } from 'react';
import './TodoList.css';
// import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../models/Todo';
// import { getTodos } from '../../redux/selectors/Selectors';
import { getAllTodo } from '../../api/apiTodo';


interface TodoListProps {
 
}


const TodoList : FC<TodoListProps> = () =>{
  const [todos , setTodos] = useState <Todo[]>([])





    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        const data : any = await getAllTodo()
        console.log(data.results);
        
        setTodos(data.results)
        
        

      }
      runLocalData()
    })

  return (
      <div className="TodoList">
          <ul id="todoList">
            {
              todos?.map((todo:Todo)=>{
                return <TodoItem key={todo._id} todoItem={todo} />
              })
            }
            

            </ul>
      </div>
  );
}

export default TodoList;