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
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState<'none' | 'alphabetical' | 'date'>('none');
    const [annualDiscount, setAnnualDiscount] = useState(searchParams.get('annual') === 'true');

    const setServiceOption = (service: 'seo' | 'ads' | 'web', checked: boolean) => {
        setServices({
            ...services,
            [service]: checked,
        });
    };

    const resetServices = () => {
        setServices({
            seo: false,
            ads: false,
            web: false,
        })
    }

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
            annualDiscount,
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

        if (annualDiscount) {
            price = price * 0.8;
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
            annual: annualDiscount.toString(),
        });
    }, [services, webDetails, setSearchParams, annualDiscount]);

    const filteredAndSortedBudgets = budgets
        .filter(budget => budget.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortType === 'alphabetical') {
                return a.name.localeCompare(b.name);
            } else if (sortType === 'date') {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return 0;
        });

    const value = {
        services,
        setServiceOption,
        webDetails,
        updateWebDetails,
        totalPrice,
        budgets,
        addBudget,
        searchTerm,
        setSearchTerm,
        sortType,
        setSortType,
        filteredAndSortedBudgets,
        annualDiscount,
        setAnnualDiscount,
        resetServices
    };

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
}