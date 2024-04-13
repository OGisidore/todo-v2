
import React, { FC, useEffect } from 'react';
import './Home.css';
import TodoList from '../../components/TodoList/TodoList';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import TodoForm from '../../components/TodoForm/TodoForm';
import { getAllTodo } from '../../api/apiTodo';


interface HomeProps {

}


const Home: FC<HomeProps> = () => {


 const dispatch = useDispatch()

 const loadLocalData = async () =>{
  const dataResult = await getAllTodo()
  if(dataResult.isSuccess){
    
    dispatch({
      type: ADD_TO_STORAGE,
      key : "todos",
      unique: true,
      payload : dataResult.results
    })
  }
 }

 useEffect(()=>{
  loadLocalData()
 }, [])

  // function qui gere l'ajout de todo 






  return (
    <div className="Home ">
      <div className="container">
        <h1>Todo List Project</h1>
        <TodoForm/>
        <TodoList  />
      </div>
    </div>

  );
}

export default Home;