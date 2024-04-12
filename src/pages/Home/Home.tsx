
import React, { FC, useEffect, Fragment, useState, } from 'react';
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
      
      setReload(true)
    }
  }

  // stockage of the input set value on todo
  const handleChange = (e: any) => {
    let todoName = e.target.value.trim()
    setTodo(todoName)

  }



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      setReload(false)
      
    }
    runLocalData()
  }, [reload ,todo])

  return (
    <Fragment>
      {

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