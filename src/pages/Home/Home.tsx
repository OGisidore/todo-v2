
import React, { FC, useState, } from 'react';
import './Home.css';
import TodoList from '../../components/TodoList/TodoList';
import { generateID } from '../../Helpers/utiles';
import { addTodo } from '../../api/apiTodo';
import { Todo } from '../../models/Todo';


interface HomeProps {

}


const Home: FC<HomeProps> = () => {


  const [todo, setTodo] = useState<string>("")



  // function qui gere l'ajout de todo 

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    //verifions si il y a quelque chose dans todo et gerer ensuite l'ajout
    if (todo) {
      const data: Todo = {
        _id: generateID(),
        name: todo,
        isUpdating: false,
        createdAt: new Date()
      }
      await addTodo(data)
      e.target.reset()
      setTodo("")
    }
  }

  // stockage of the input set value on todo
  const handleChange = (e: any) => {
    let todoName = e.target.value.trim()
    setTodo(todoName)

  }





  return (
    <div className="Home ">
      <div className="container">
        <h1>Todo List Project</h1>
        <form id="todoForm"
          onSubmit={(e) => handleSubmit(e)} >
          <input
            defaultValue={todo}
            onChange={(e) => handleChange(e)}
            type="text" name="todo"
            placeholder="Enter todo ..." id="todo" />

          <button className="btn btn-success">Add Todo</button>
        </form>
        <TodoList  />
      </div>



    </div>

  );
}

export default Home;