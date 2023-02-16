import { createContext, useReducer } from "react";

const intialState = {
  name: "Brady",
  list: []
}

const DataContext = createContext()

const DataContextProvider = (props) => {

  const reducer = (state, action) => {
    switch(action.type) {
      case "CHANGENAME":
        console.log("CHANGE NAME", action.payload)
        return {...state, name: action.payload}
      default: 
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContext
export {DataContextProvider}