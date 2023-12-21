import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State - single object
const initialState = {
    transactions: 
    [
    { id: 1, text: 'Flower', amount: -20},
    { id: 2, text: 'Salary', amount: 3000 },
    { id: 3, text: 'Book', amount: -20},
    { id: 4, text: 'Camera', amount: -300 },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) =>
{
  // dispatch: action creator to update state in reducer function
  const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions
function deleteTransaction(id)
{
  // dispatch to reducer an object with type DELETE_TRANSACTION and id as argument
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  });
}
function addTransaction(transaction)
{
  // dispatch to reducer an object with type DELETE_TRANSACTION and id as argument
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: transaction
  });
}

// global context and provider
// children: wrap all our components
// provider: provide state and actions to components it wraps around
return (<GlobalContext.Provider value={{
  // access from any component with useContext() hook
  transactions: state.transactions,
  deleteTransaction,
  addTransaction
}}>
  {children}
</GlobalContext.Provider>);
}