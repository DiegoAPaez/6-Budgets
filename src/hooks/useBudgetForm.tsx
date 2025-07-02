import { useState } from 'react';
import { useBudget } from './useBudget';
import { useFormValidation } from './useFormValidation';

export const useBudgetForm = () => {
    const { addBudget, resetServices, services } = useBudget();
    const { error, validateForm, clearError, setError } = useFormValidation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        clearError();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { name, email, phone };

        if (!validateForm(formData)) {
            return;
        }

        if (!services.seo && !services.ads && !services.web) {
            setError('At least one service must be selected');
            return;
        }

        addBudget(name, email, phone);
        resetForm();
        resetServices();
    };

    return {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        error,
        handleSubmit
    };
};