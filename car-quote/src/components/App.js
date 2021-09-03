import React, { useState } from 'react';
import { Header } from './Header';
import { Form } from './Form';
import { Amount } from './Amount';
import { Summary } from './Summary';
import { calcBrand, getPlan, getYearDifference } from '../helpers/helper';
function App() {

  const quoteInsuranceInfo = (quote) => {
    const { brand, plan, year } = quote;
    let result = 2000;
    const diffYear = getYearDifference(year);
    result -= ((diffYear * 3) * result) / 100;
    result = calcBrand(brand) * result;
    let incrementPlan = getPlan(plan);
    result = parseFloat(incrementPlan * result).toFixed(2);
    setstate({ data: quote, result });
  }

  const [state, setstate] = useState({ result: '', data: {} });

  return (
    <div className="container">
      <Header
        title="Car Quote Calculator"
      />
      <div className="container-form">
        <Form quoteInsuranceInfo={quoteInsuranceInfo} />
        <Summary data={state.data} result={state.result} />
        <Amount result={state.result} />
      </div>
    </div>
  );
}

export default App;
