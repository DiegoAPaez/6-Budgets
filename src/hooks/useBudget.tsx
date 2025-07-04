import {useContext} from "react";
import {BudgetContext} from "../context/BudgetContext.tsx";

export const useBudget = () => {
    const context = useContext(BudgetContext);
    if (context === undefined) {
        throw new Error('useBudget must be used within a BudgetProvider');
    }
    return context;
};