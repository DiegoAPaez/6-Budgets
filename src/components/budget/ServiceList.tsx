import { SERVICES } from "../../data/services.ts";
import Card from "./Card.tsx";
import {useBudget} from "../../hooks/useBudget.tsx";
import type {ChangeEvent} from "react";
import WebDetails from "./WebDetails.tsx";
import type {ServiceOptions} from "../../utils/types.ts";

const ServiceList = () => {
    const {services, setServiceOption, annualDiscount, setAnnualDiscount, resetServices } = useBudget();

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
                                    checked={services[service.code as keyof ServiceOptions] || false}
                                    onChange={handleServiceChange}
                                />
                                <label className={'hover:cursor-pointer'} htmlFor={service.code}>Add</label>
                            </div>
                        </div>
                        {(service.code === 'web' && services.web) && <WebDetails/>}
                    </Card>
                ))}
                <div className={'flex justify-end items-center'}>
                    <button onClick={() => resetServices()} className="flex justify-center items-center bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white border border-green-800 hover:border-transparent rounded py-1 px-2 hover:cursor-pointer">Reset Services</button>
                </div>

                <div className={'flex flex-row justify-end items-center gap-2'}>
                    <input
                        type="checkbox"
                        id="annual"
                        checked={annualDiscount}
                        onChange={(e) => setAnnualDiscount(e.target.checked)}
                    />
                    <label htmlFor="annual">Annual Payment</label>
                </div>
            </div>
        </div>
    )
}

export default ServiceList;