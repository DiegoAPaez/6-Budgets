import { SERVICES } from "../../data/services.ts";
import Card from "./Card.tsx";
import {useBudget} from "../../hooks/useBudget.tsx";
import type {ChangeEvent} from "react";
import WebDetails from "./WebDetails.tsx";

const ServiceList = () => {
    const {services, setServiceOption } = useBudget();

    const handleServiceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setServiceOption(name as 'seo' | 'ads' | 'web', checked);
    };

    return (
        <div className={'max-w-5xl mx-auto'}>
            <h2 className={'text-2xl mb-4'}>Select your services!</h2>
            <div className={'flex flex-col gap-4'}>
                {SERVICES.map((service) => (
                    <Card key={service.code}>
                        <div className={'flex flex-col md:flex-row justify-between py-4 gap-4'}>
                            <div>
                                <h3 className={'text-green-600 text-xl font-semibold'}>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                            <div className={'flex flex-row justify-end md:justify-between items-center gap-2'}>
                                <p className={'text-green-800 font-semibold mr-4'}>${service.price}</p>
                                <input
                                    className={'hover:cursor-pointer'}
                                    type="checkbox"
                                    id={service.code}
                                    name={service.code}
                                    onChange={handleServiceChange}
                                />
                                <label className={'hover:cursor-pointer'} htmlFor={service.code}>Add</label>
                            </div>
                        </div>
                        {(service.code === 'web' && services.web) && <WebDetails/>}
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ServiceList;