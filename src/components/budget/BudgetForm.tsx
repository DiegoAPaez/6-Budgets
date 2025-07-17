import React from "react";
import { useBudgetForm } from "../../hooks/useBudgetForm.tsx";
import FormField from "../ui/FormField.tsx";
import ErrorMessage from "../ui/ErrorMessage.tsx";

const BudgetForm: React.FC = () => {
    const {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        error,
        handleSubmit,
    } = useBudgetForm();

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-4 w-4/5 mx-auto mt-10"
        >
            <div className="flex flex-col gap-4 md:gap-2 md:flex-row justify-between md:items-center">
                <FormField
                    label="Client Name"
                    id="client-name"
                    value={name}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="Enter client name"
                />

                <FormField
                    label="E-mail"
                    id="client-email"
                    inputMode="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Enter client e-mail"
                />

                <FormField
                    label="Phone number"
                    id="client-phone"
                    inputMode="tel"
                    type="number"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    placeholder="Enter client phone number"
                />
                <button
                    type="submit"
                    className="flex justify-center items-center bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white border border-green-800 hover:border-transparent rounded py-1 px-2 hover:cursor-pointer"
                >
                    Save Quote
                </button>
            </div>
            <ErrorMessage message={error} />
        </form>
    );
};

export default BudgetForm;
