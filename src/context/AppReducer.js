// reducer: how we specify state changes in response to actions in context
export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      // state is hovering components and sending what we want
      // payload is data we're sending
      case 'ADD_TRANSACTION':
      return {
        ...state,
        // we want intial transactions and new transaction
        // ...state.transactions: spread out all transactions
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
}