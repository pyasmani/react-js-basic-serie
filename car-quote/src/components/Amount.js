import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export const Amount = ({ result }) => {
    const showAmount = ()=>{
        if(result){
            return (
                <div className="gran-total">
                   $<TransitionGroup component="span" className="result" >
                       <CSSTransition
                            classNames="result"
                            key={result}
                            timeout={{enter:500, exit:500}}>
                            <span>{result}</span>
                       </CSSTransition>
                   </TransitionGroup>
                </div>
            )
        }else{
            return null;
        }
    }
    return (
       <div>
           {showAmount()}
       </div>
    )
}
