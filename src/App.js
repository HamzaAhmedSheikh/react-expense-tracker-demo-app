import React from 'react';
import './App.css';
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { IncomeExpenses } from './Components/IncomeExpenses'
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'

// import useContext's Provider

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />   
     <div className='container'>
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction />
     </div>    
    </GlobalProvider>
  );
}

export default App; 

// 1st step make all ui and then import all components in src/App.js
// 2nd step add useState hooks in AddTransaction.js
// 3rd step make a folder in src/context and in context folder make a file called GlobalState.js 
// in GlobalState.js we make context api