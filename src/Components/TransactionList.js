import React, { useContext } from 'react'
import  Transactions from './Transactions'

import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext)        
             
    return (
        <div>
          <h3> History </h3>  
           <ul id='list' className='list'>

           {transactions.map(transaction => (<Transactions
                                                    key={transaction.id}
                                                    transaction={transaction}/>
                                            ))}          
           </ul>
        </div>
    )
}
