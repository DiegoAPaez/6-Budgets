import {type ReactNode, useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import type {Budget, ServiceOptions, WebsiteDetails} from "../utils/types.ts";
import { BudgetContext } from "./BudgetContext.tsx";
import {useLocalStorage} from "../hooks/useLocalStorage.tsx";

export const BudgetProvider = ({children} : {children : ReactNode}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [services, setServices] = useState<ServiceOptions>({
        seo: searchParams.get('seo') === 'true',
        ads: searchParams.get('ads') === 'true',
        web: searchParams.get('web') === 'true',
    });
    const [webDetails, setWebDetails] = useState<WebsiteDetails>({
        pages: parseInt(searchParams.get('pages') || '1', 10),
        languages: parseInt(searchParams.get('languages') || '1', 10),
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [budgets, setBudgets] = useLocalStorage<Budget[]>('budgets', []);

    const setServiceOption = (service: 'seo' | 'ads' | 'web', checked: boolean) => {
        setServices({
            ...services,
            [service]: checked,
        });
    };

    const updateWebDetails = (field: 'pages' | 'languages', value: number) => {
        setWebDetails({
            ...webDetails,
            [field]: value,
        });
    };

    const addBudget = (name: string, email: string, phone: string) => {
        const newBudget: Budget = {
            id: Date.now().toString(),
            name,
            email,
            phone,
            services,
            price: totalPrice,
            date: new Date().toISOString(),
            ...(services.web && { webDetails }),
        };

        setBudgets([...budgets, newBudget]);
    };

    useEffect(() => {
        let price = 0;

        if (services.seo) price += 300;
        if (services.ads) price += 400;
        if (services.web) {
            price += 500;
            price += (webDetails.pages + webDetails.languages) * 30;
        }

        setTotalPrice(price);

        setSearchParams({
            seo: services.seo.toString(),
            ads: services.ads.toString(),
            web: services.web.toString(),
            ...(services.web && {
                pages: webDetails.pages.toString(),
                languages: webDetails.languages.toString(),
            }),
        });
    }, [services, webDetails, setSearchParams]);

    const value = {
        services,
        setServiceOption,
        webDetails,
        updateWebDetails,
        totalPrice,
        budgets,
        addBudget
    };

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
}