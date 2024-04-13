
import React, { FC, useEffect, useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../models/Todo';
import { getAllTodo } from '../../api/apiTodo';


interface TodoListProps {
  
}


const TodoList: FC<TodoListProps> = ({  }) => {


  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const data: any = await getAllTodo()
      console.log(data.result);
      setTodos(data.result)
    }
    runLocalData()
  }, [])


// function to refresh the content
  const displayContent = async ()=>{
    const data: any = await getAllTodo()
      console.log(data.result);
      setTodos(data.result)
  }

  return (
    <div className="TodoList">
      <ul id="todoList">
        {
          todos?.map((todo: Todo) => {
            return <TodoItem key={todo._id} ondisplay={displayContent} todoItem={todo} />
          })
        }


      </ul>
    </div>
  );
}

export default TodoList;