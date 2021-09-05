import React from 'react';

export const Expense = ({expense}) => {
    const {concept, amount} = expense;
    return (
        <li className="expenses">
        <p>
             {concept}
             <span className="expense"> $ {amount}</span>
        </p>      
   </li>

    )
}
