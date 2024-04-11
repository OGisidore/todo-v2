import { getItem, setItem } from "../../services/localStorage.service";
import { ADD_TO_STORAGE, REMOVE_FROM_STORAGE } from "../actions/actionTypes";
import { StorageAction } from "../actions/types";


const storage = getItem("storage")
const initState: any = storage ? storage : {
    
};

  
 
export const storageReducers = (state = initState,
    action: StorageAction = { type: null, key: null, payload: null }) => {
    switch (action.type) {
        case ADD_TO_STORAGE:
            if (action.key) {
               
                    if (!state[action.key]) {
                        state[action.key] = []

                    }
                    const existing = state[action.key]
                        .find((exist: any) => exist._id === action.payload?._id)
                    if (!existing) {
                        state[action.key].push(action.payload)


                    }



            }
            setItem("storage", state)
            return { ...state }

            break;
        case REMOVE_FROM_STORAGE:
            if (action.key) {
                
                     if (state[action.key]) {
                    // state[action.key] = []
                    const index = state[action.key]
                        .findIndex((exist: any) => exist._id === action.payload?._id)
                    console.log(index);


                    if (index !== -1) {
                        state[action.key] = state[action.key].filter((data: any) => data._id !== action.payload?._id)
                    }

                }
           
                }
               
            setItem("storage", state)
            return { ...state }
            break;

        default:
            return state
            break;
    }
}