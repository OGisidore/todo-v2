import { GlobalState } from "./types/globalState";

export const getTodos = (state : GlobalState)=> state.storage?.todos