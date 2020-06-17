import React from 'react';
import './App.css';
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { IncomeExpenses } from './Components/IncomeExpenses'
import { TransactionList } from './Components/TransactionList'

function App() {
  return (
    <div>
      <Header />   
     <div className='container'>
       <Balance />
       <IncomeExpenses />
       <TransactionList />
     </div>    
    </div>
  );
}

export default App;
