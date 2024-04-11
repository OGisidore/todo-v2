
import { Todo } from "../models/Todo";

import { db } from "./database";

/************************** fonction d'ajout de todo ****************** */
export const addTodo = async (todo: Todo) => {
    try {
        await db.addData("todos", todo)
        return {
            isSuccess: true,
            message: "todo added succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de mise a jour de todo ****************** */

export const updateTodo = async (todo: Todo) => {
    try {
        await db.updateData("todos", todo)
        return {
            isSuccess: true,
            message: "todo updated succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recuperation  d'une todo ****************** */


export const getTodo = async (_id: number) => {
    try {
        const todo = await db.getData("todos", _id)
        return {
            isSuccess: true,
            result: todo
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de recuperation  de toutes les todos ****************** */

export const getAllTodo = async () => {
    try {
        const todos = await db.getAllData("todos")
        return {
            isSuccess: true,
            result: todos,
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de suppression  d'une todo ****************** */


export const deleteTodo = async (_id: number) => {
    try {
        await db.deleteData("todos", _id)
        return {
            isSuccess: true,
            message: "todo deleted succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recherche d'une todo ****************** */




/**************************fonction de recuperation de todo par page  ****************** */

// fonction de recuperation de todo par page 

