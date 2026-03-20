import InvestmentInputs from "./components/InvestmentInputs.jsx";
import InvestmentReturns from "./components/InvestmentReturns.jsx";

import { useState } from "react";

//when the value in the investments changes I need to re render this component as the investment returns should also re render. 
const INVESTMENT_INPUTS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {

  const [investmentData, setInvestmentData] = useState(INVESTMENT_INPUTS)

  //I need to pass down a function that updates the state of the investment dependent on the input that is being changed. 
  
  function handleInvestmentInputChange(event){
    const { name, value } = event.target;
    const numericValue = parseFloat(value);
    setInvestmentData((prevData) => ({
      ...prevData,
      [name]: numericValue,
    }));
  }

  return (
    <main>
      <InvestmentInputs investmentInputs={investmentData} handleInvestmentInputChange={handleInvestmentInputChange} />
      <InvestmentReturns investmentInputs={investmentData} />
    </main>
    
  )
}

export default App
