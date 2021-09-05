import '../css/app.css';
import '../css/normalize.css';
import '../css/skeleton.css';
import { useState } from 'react';
import { Form } from './Form';
import { Header } from './Header';
import { List } from './List';
import { ControlBudget } from './ControlBudget';

function App() {

 const [state, setstate] = useState({
    budget:300,
    remanent:300,
    expenses:{}
  })

  const addExpense = (expense)=>{
    const expenses = {...state.expenses};
    expenses[`expense${Date.now()}`] = expense;
    let decrease = Number(expense.amount);
    let remanent = state.remanent - decrease;
    setstate({
      ...state,
      expenses,
      remanent
    });
    
  }

  return (
    <div className="App container">
      <Header title="Weekly Expenses"/>
      <div className="main-content content">
          <div className="row">
            <div className="one-half column">
                <Form addExpense = {addExpense}/>
            </div>
            <div className="one-half column">
                <List expenses= {state.expenses}/>
                <ControlBudget budget={state.budget} remanent={state.remanent}/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
