import React from 'react'

function AddTransaction() {
  return (
    <div>
        <h3> Add new transaction </h3>
        <form>
            <div className="form-control">
                <label htmlFor="text"> Text </label>
                <input 
                      type="text"
                      placeholder="Enter text..."
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount (negative-expense , positive-income)
                </label>
                <input 
                        type="number"
                        placeholder="Enter amount..."
                />            
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction