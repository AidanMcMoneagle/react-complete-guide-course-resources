import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function InvestmentReturns({investmentInputs}){

    //need to create an array of return data for each year of the investment. 
    const annualData = calculateInvestmentResults(investmentInputs);

    return(
        <table id="investment-returns">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Investment</th>
                    <th>Total Interest</th>
                    <th>Total Returns</th>
                </tr>
            </thead>
            <tbody>
                {annualData.map((data, index) => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.annualInvestment)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}