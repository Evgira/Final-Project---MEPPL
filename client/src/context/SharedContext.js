import React, { createContext, useReducer } from "react";
import { initialState, reduce } from "../reducers/Reducer";
export const UserContext = createContext();

export default function SharedContext({ children }) {
  const [state,dispatch]=useReducer(reduce,initialState)
  
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
