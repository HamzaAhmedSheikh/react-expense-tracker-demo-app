import React, { createContext,useReducer } from 'react'

// import AppReducer function

import  AppReducer from './AppReducer'

// InitialState

const InitialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context

export const GlobalContext = createContext(InitialState)

// Provider component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState)

    // Actions that are going to make call to our reducer funtion

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id //  any data we want to sent to it which is going to be the id
        })
    }

   return(
       <GlobalContext.Provider value={{
           transactions: state.transactions,
           deleteTransaction
       }}>
           {children}
       </GlobalContext.Provider>
   ) 
}
      


