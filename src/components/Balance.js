import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  // each transaction is an object with an id, text, and amount
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  // reduce() turns array of values into a single value
  // takes callback function as argument - callback has 2 functions: accumulator and current array value
  // accumulator: value returned from previous iteration

  // reduce(): add the amounts together, toFixed(): rounds to 2 fixed decimal places
  // add negative numbers to reduce
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
        <h4> Your Balance </h4>
        <h1> ${total}</h1>
    </>
  )
}