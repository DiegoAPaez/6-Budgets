import {type ReactNode, useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import type {ServiceOptions, WebsiteDetails} from "../utils/types.ts";
import { BudgetContext } from "./BudgetContext.tsx";

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
        totalPrice
    };

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
}