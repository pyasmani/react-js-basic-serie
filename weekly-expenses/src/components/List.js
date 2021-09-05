import React from 'react';
import {Expense} from './Expense';

export const List = ({expenses}) => {
    return (
        <div className="expenses-incurred">
        <h2>Expenses</h2>
        {Object.keys( expenses ).map(key => (
             <Expense
                  key={key}
                  expense={expenses[key]}
             />
        ) ) }
   </div>

    )
}
