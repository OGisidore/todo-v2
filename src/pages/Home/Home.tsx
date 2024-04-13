
import React, { FC, useState, } from 'react';
import './Home.css';
import TodoList from '../../components/TodoList/TodoList';
import { generateID } from '../../Helpers/utiles';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';


interface HomeProps {

}


const Home: FC<HomeProps> = () => {


  const [todo, setTodo] = useState<string>("")
 const dispatch = useDispatch()

  // function qui gere l'ajout de todo 

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    //verifions si il y a quelque chose dans todo et gerer ensuite l'ajout

    if (todo) {
      dispatch({
        type: ADD_TO_STORAGE,
        key : "todos",
        payload :{
          _id: generateID(),
          name: todo,
          isUpdating: false,
          createdAt: new Date()

        }
      })
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