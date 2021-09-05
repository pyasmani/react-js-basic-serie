import React, {useRef}from 'react';

export const Form = ({addExpense}) => {
    const concept = useRef(null);
    const amount = useRef(null);
    const createExpense = (e)=>{
        e.preventDefault();
        const expense = {
            concept: concept.current.value,
            amount: amount.current.value,
            date: Date.now()
        }
        addExpense(expense);
    }
    
    return (
        <form onSubmit={createExpense}>
                    <h4>Add Your Expenses</h4>

                    <div className="field">
                         <label>Concept</label>
                         <input ref={concept} className="u-full-width" type="text" placeholder="Ej. Transportation" />
                    </div>
               
                    <div className="field">
                         <label>Amount</label>
                         <input type="number" ref={amount} className="u-full-width" placeholder="Ej. 300" step="0.01" />
                    </div>
               
                    <input className="button-primary u-full-width" type="submit" value="Add" />
               </form>

    )
}
