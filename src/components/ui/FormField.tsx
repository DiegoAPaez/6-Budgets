interface FormFieldProps {
    label: string;
    id: string;
    type?: string;
    inputMode?: any;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const FormField: React.FC<FormFieldProps> = ({
                                                 label,
                                                 id,
                                                 type = "text",
                                                 inputMode = "text",
                                                 value,
                                                 onChange,
                                                 placeholder
                                             }) => {
    return (
        <div>
            <label className="font-bold mr-2" htmlFor={id}>
                {label}:
            </label>
            <input
                className="w-full md:w-auto border-2 border-green-200 rounded-lg py-1 px-2"
                type={type}
                inputMode={inputMode}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormField;