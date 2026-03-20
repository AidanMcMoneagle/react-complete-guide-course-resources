export default function InvestmentInput({ label, name, value, handleInvestmentInputChange }){
    return(
        <>
         <label htmlFor={name}>{label}</label>
         <input type="number" name={name} value={value} onChange={handleInvestmentInputChange} />
        </>
    )
}