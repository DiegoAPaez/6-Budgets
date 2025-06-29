import { createContext } from "react";
import type {Budget, ServiceOptions, WebsiteDetails} from "../utils/types.ts";

interface BudgetContextType {
    services: ServiceOptions;
    setServiceOption: (service: 'seo' | 'ads' | 'web', checked: boolean) => void;

    webDetails: WebsiteDetails;
    updateWebDetails: (field: 'pages' | 'languages', value: number) => void;

    totalPrice: number;

    budgets: Budget[];
    addBudget: (name: string, client: string, phone: string) => void;

    searchTerm: string;
    setSearchTerm: (term: string) => void;
    sortType: 'none' | 'alphabetical' | 'date';
    setSortType: (type: 'none' | 'alphabetical' | 'date') => void;
    filteredAndSortedBudgets: Budget[];
}

export const BudgetContext  = createContext<BudgetContextType | undefined>(undefined);