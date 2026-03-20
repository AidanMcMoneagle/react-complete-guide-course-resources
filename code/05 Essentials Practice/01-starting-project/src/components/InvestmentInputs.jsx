import InvestmentInput from "./InvestmentInput.jsx";

export default function InvestmentInputs({ investmentInputs, handleInvestmentInputChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <InvestmentInput label="Initial Investment" name="initialInvestment" value={investmentInputs.initialInvestment} handleInvestmentInputChange={handleInvestmentInputChange} />
                <InvestmentInput label="Annual Investment" name="annualInvestment" value={investmentInputs.annualInvestment} handleInvestmentInputChange={handleInvestmentInputChange} />
            </div>
            <div className="input-group">
                <InvestmentInput label="Expected Return" name="expectedReturn" value={investmentInputs.expectedReturn} handleInvestmentInputChange={handleInvestmentInputChange} />
                <InvestmentInput label="Investment Duration" name="duration" value={investmentInputs.duration} handleInvestmentInputChange={handleInvestmentInputChange} />
            </div>
        </section>
    );
}                       