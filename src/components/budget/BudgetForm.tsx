import {useState} from "react";
import {useBudget} from "../../hooks/useBudget.tsx";

const BudgetForm = () => {
    const { addBudget } = useBudget();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !phone.trim()) {
            setError('All fields are required');
            return;
        }

        addBudget(name, email, phone);
        setName('');
        setEmail('');
        setPhone('')
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 w-4/5 mx-auto mt-10" >
            <div className={'flex flex-col gap-4 md:gap-2 md:flex-row justify-between md:items-center'}>
                <div>
                    <label className={'font-bold mr-2'} htmlFor="client-name">Client Name:</label>
                    <input
                        className={'w-full md:w-auto border-2 border-green-200 rounded-lg py-1 px-2'}
                        type="text"
                        inputMode={'text'}
                        id="client-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter client name"
                    />
                </div>

                <div>
                    <label className={'font-bold mr-2'} htmlFor="client-email">E-mail:</label>
                    <input
                        className={'w-full md:w-auto border-2 border-green-200 rounded-lg py-1 px-2'}
                        type="text"
                        inputMode={'email'}
                        id="client-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter client e-mail"
                    />
                </div>

                <div>
                    <label className={'font-bold mr-2'} htmlFor="client-phone">Phone number:</label>
                    <input
                        className={'w-full md:w-auto border-2 border-green-200 rounded-lg py-1 px-2'}
                        type="text"
                        inputMode={'tel'}
                        id="client-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter client phone number"
                    />
                </div>
                <button type="submit" className="flex justify-center items-center bg-transparent hover:bg-green-600 text-green-800 font-semibold hover:text-white border border-green-800 hover:border-transparent rounded py-1 px-2 hover:cursor-pointer">Save Quote</button>

            </div>
            {error && <div className="text-center font-bold italic py-1 mt-2 mx-auto bg-red-300 rounded-lg">{error}</div>}
        </form>
    )
}
export default BudgetForm;