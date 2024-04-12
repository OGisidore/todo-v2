/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 11/04/2024 10:33:48
*/
import React, { FC, useEffect, Fragment, useState, } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import TodoList from '../../components/TodoList/TodoList';
import { generateID } from '../../Helpers/utiles';
import { addTodo } from '../../api/apiTodo';
import { Todo } from '../../models/Todo';


interface HomeProps {

}


const Home: FC<HomeProps> = () => {


  const [todo, setTodo] = useState<string>("")
  const [reload, setReload] = useState<boolean>(false)





  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (todo) {
      const data: Todo = {
        _id: generateID(),
        name: todo,
        isUpdating: false,
        createdAt: new Date()

      }
      await addTodo(data)
     
      setReload(true)


    }


  }

  const handleChange = (e: any) => {
    let todoName = e.target.value.trim()
    setTodo(todoName)

  }



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {



    }
    runLocalData()
  }, [])

  return (
    <Fragment>
      {

        <div className="Home ">
          <div className="container">
            <h1>Todo List Project</h1>
            <form id="todoForm"
              onSubmit={(e) => handleSubmit(e)} >
              <input

                onChange={(e) => handleChange(e)}
               
                type="text" name="todo" placeholder="Enter todo ..." id="todo" />
              <button className="btn btn-success" onClick={(e) => handleSubmit(e)}>Add Todo</button>
            </form>
            <TodoList refresh={reload} />
          </div>



        </div>
      }
    </Fragment>
  );
}

export default Home;