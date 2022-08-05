import React from 'react'
//pull global state
import { GlobalContext } from "./GlobalState";
import {useContext } from "react";
import  Transaction  from "./Transaction";


function TransactionList() {
    const { transactions } = useContext(GlobalContext);
  return (
    <div>
        <h3> History </h3>
        <ul id="list" className="list">
          {transactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction} /> ))}
 
        </ul>
    </div>
  )
}

export default TransactionList;