import {Link} from "react-router-dom";
import ServiceList from "../components/budget/ServiceList.tsx";
import {useBudget} from "../hooks/useBudget.tsx";
import BudgetForm from "../components/budget/BudgetForm.tsx";

const CalculatorPage = () => {
    const { totalPrice } = useBudget();
    return (
        <div className={'p-2'}>
            <header className={'w-4/5 mx-auto flex items-center justify-between mb-6 text-green-600'}>
                <h1 className={'text-4xl font-semibold'}>Budget Calculator</h1>
                <Link to="/" className={'font-semibold text-green-800'}>Back to Welcome</Link>
            </header>
            <div className={'bg-green-50 py-6 px-4 md:px-0 w-4/5 mx-auto rounded-lg shadow-md'}>
                <ServiceList />
                <div className="bg-green-200 rounded-lg max-w-5xl text-center mt-4 py-6 mx-auto">
                    <h2 className={'text-2xl'}>Total Budget: ${totalPrice.toFixed(2)}</h2>
                </div>
            </div>
            <BudgetForm/>
            <hr className={'border-1 border-dashed border-green-600 my-10 opacity-50 w-4/5 mx-auto'}></hr>
        </div>
    );
}

export default CalculatorPage;