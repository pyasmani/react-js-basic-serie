import React from 'react';
import { firstUpperCase } from '../helpers/helper';

export const Summary = (props) => {
    const { brand, plan, year } = props.data;
    const showSummary = () => {
        if (!brand || !plan || !year) {
            return null;
        } else {
            return (
                <div className="summary">
                    <h2>Car Summary</h2>
                    <li>Brand: {firstUpperCase(brand)}</li>
                    <li>Plan: {firstUpperCase(plan)}</li>
                    <li>Year: {year}</li>
                </div>
            )
        }
    }
    return (
        <div>
            {showSummary()}
        </div>
    )
}
