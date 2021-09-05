import React from 'react';
import { checkBudget } from '../helpers/helper';

export const Remanent = (props) => {
    const { budget, remanent } = props;
    return (
        <div className={checkBudget(budget, remanent)}>
            Remanent: $ {remanent}
        </div>
    )
}
