import React from 'react'
import { useState } from 'react';

// we will create a piece of state, let's call it text then we will write a 
//function to manipulate that piece of state let's call it setText and we want to
//set this to use state and it will be initially an empty string, because in Add transaction the
//input will be text-a string.

//Then I will do the same thing for the amount(in AddTransaction i have atext input
//and an amount input which is a number. So initially the amount input will be a number as 0)


function AddTransaction() {
    const [text,setText] = useState('');
    const[amount,setAmount] = useState(0);
// Then I want to connect those states to my input: text and amount.
//   So I can start with adding value to my input as value={text} and value= {amount}
//Whenever the user enters a text or amount to the form, it needs to update the data--so I 
//need a function to update the text and amount value whenever there is a change. which is onChange
//in the imput field I need onChange = {(e) => setText(e.target.value)} .target.value will give us
//whatever the user types in the input field.

  return (
    <div>
        <h3> Add new transaction </h3>
        <form>
            <div className="form-control">
                <label htmlFor="text"> Text </label>
                <input 
                      type="text"                    
                      placeholder="Enter text.."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount (negative-expense , positive-income)
                </label>
                <input 
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                />            
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction