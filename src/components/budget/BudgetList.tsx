import {useBudget} from "../../hooks/useBudget.tsx";
import BudgetCard from "./BudgetCard.tsx";

const BudgetList = () => {
    const { budgets } = useBudget();

    if (budgets.length === 0) {
        return <h3 className={'text-center font-bold'}>No saved budgets yet.</h3>;
    }

    return (
            <div className="bg-green-50 py-6 px-4 md:px-0 w-4/5 mx-auto rounded-lg shadow-md">
                {budgets.map((budget) => (
                    <BudgetCard key={budget.id} budget={budget}/>
                ))}
            </div>
    );
};

export default BudgetList;