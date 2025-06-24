import {Link} from "react-router-dom";
import ServiceList from "../components/budget/ServiceList.tsx";
import {useBudget} from "../hooks/useBudget.tsx";

const CalculatorPage = () => {
    const { totalPrice } = useBudget();
    return (
        <div className={'p-2'}>
            <header className={'w-4/5 mx-auto flex items-center justify-between mb-6 text-green-600'}>
                <h1 className={'text-4xl font-semibold'}>Budget Calculator</h1>
                <Link to="/" className={'font-semibold text-green-800'}>Back to Welcome</Link>
            </header>
            <div className={'bg-green-50 py-6 w-4/5 mx-auto rounded-lg shadow-md'}>
                <ServiceList />
                <div className="bg-green-200 rounded-lg max-w-5xl text-center mt-4 py-6 mx-auto">
                    <h2 className={'text-2xl'}>Total Budget: ${totalPrice.toFixed(2)}</h2>
                </div>
            </div>
        </div>
    );
}

export default CalculatorPage;