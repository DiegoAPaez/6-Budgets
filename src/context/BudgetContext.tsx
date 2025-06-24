import { createContext } from "react";
import type { ServiceOptions, WebsiteDetails } from "../utils/types.ts";


interface BudgetContextType {
    services: ServiceOptions;
    setServiceOption: (service: 'seo' | 'ads' | 'web', checked: boolean) => void;

    webDetails: WebsiteDetails;
    updateWebDetails: (field: 'pages' | 'languages', value: number) => void;

    totalPrice: number;
}

export const BudgetContext  = createContext<BudgetContextType | undefined>(undefined);