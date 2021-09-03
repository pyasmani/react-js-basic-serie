import React, { useRef } from 'react'

export const Form = ({quoteInsuranceInfo}) => {

    const quoteInsurance = (e)=>{
        e.preventDefault();
        const plan = planBasicRef.current.checked ? 'basic': 'full';
        const formValues = {
            brand: brandRef.current.value,
            year: yearRef.current.value,
            plan
        }
        quoteInsuranceInfo(formValues);
    }
    const brandRef = useRef(null);
    const yearRef = useRef(null);
    const planBasicRef = useRef(null);
    const planFullRef = useRef(null);

    return (
        <form className="cotizar-auto" onSubmit={quoteInsurance} >
        <div className="field">
            <label>Brand</label>
          <select name="brand" ref={brandRef}>
            <option value="european">Europeo</option>
            <option value="american">Americano</option>
            <option value="asian">Asiatico</option>
        </select>
        </div>

        <div className="field">
            <label>Year</label>
            <select name="year" ref={yearRef}>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
            </select>
        </div>
        <div className="field">
            <label>Plan:</label>
            <input type="radio" name="plan" ref={planBasicRef} value="basic"/> Basic
            <input type="radio" name="plan" ref={planFullRef} value="full"/> Full
        </div>

        <button type="submit" className="button">Quote</button>
    </form>

    )
}
