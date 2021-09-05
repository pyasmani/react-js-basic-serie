import React,{Fragment} from 'react'
import { Budget } from './Budget'
import { Remanent } from './Remanent';

export const ControlBudget = (props) => {
    const { budget, remanent } = props;
    return (
        <Fragment>
            <Budget
            budget={budget}
            />
            <Remanent
            budget={budget}
            remanent={remanent}
            />
        </Fragment>

    )
}
