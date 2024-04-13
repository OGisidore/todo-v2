
import React, { FC} from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../models/Todo';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/selectors/Selectors';


interface TodoListProps {

}


const TodoList: FC<TodoListProps> = () => {
  const todos = useSelector(getTodos)

  

  return (
    <div className="TodoList">
      <ul id="todoList">
        {
          todos?.map((todo: Todo) => {
            return <TodoItem key={todo._id} todo={todo} />
          })
        }


      </ul>
    </div>
  );
}

export default TodoList;