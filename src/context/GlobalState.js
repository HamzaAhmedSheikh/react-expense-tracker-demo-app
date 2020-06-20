import React, { createContext,useReducer } from 'react'

// import AppReducer function

import  AppReducer from './AppReducer'

// InitialState

const InitialState = {
    transactions: []
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

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction 
       })
    }

   return(
       <GlobalContext.Provider value={{
           transactions: state.transactions,
           deleteTransaction,
           addTransaction
       }}>
           {children}
       </GlobalContext.Provider>
   ) 
}
      


