import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
}

export const useFormValidation = () => {
    const [error, setError] = useState('');

    const validateForm = (formData: FormData): boolean => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
            setError('All fields are required');
            return false;
        }

        setError('');
        return true;
    };

    const clearError = () => setError('');

    return {
        error,
        validateForm,
        clearError,
        setError
    };
};