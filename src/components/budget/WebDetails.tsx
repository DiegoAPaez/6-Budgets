import {useBudget} from "../../hooks/useBudget.tsx";

const WebDetails = () => {
    const { webDetails, updateWebDetails } = useBudget();
    const { pages, languages } = webDetails;

    const handleIncrement = (field: 'pages' | 'languages') => {
        const currentValue = field === 'pages' ? pages : languages;
        updateWebDetails(field, currentValue + 1);
    }

    const handleDecrement = (field: 'pages' | 'languages') => {
        const currentValue = field === 'pages' ? pages : languages;
        if (currentValue > 1) {
            updateWebDetails(field, currentValue - 1);
        }
    }

    const handleInputChange = (field: 'pages' | 'languages', value: string) => {
        const numValue = parseInt(value, 10);
        if (!isNaN(numValue) && numValue >= 1) {
            updateWebDetails(field, numValue);
        }
    };

    return (
        <div className={'flex flex-col gap-4'}>
            <div className={'flex flex-wrap items-center justify-end gap-4'}>
                <label htmlFor="pages">Number of Pages:</label>
                <div className={'flex items-center gap-2'}>
                    <button className={'flex justify-center items-center bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white w-6 h-6 border border-green-600 hover:border-transparent rounded hover:cursor-pointer'} onClick={() => handleDecrement('pages')}>-</button>
                    <input
                        className={'text-center w-10 appearance-none bg-white shadow-md rounded-lg'}
                        type="text"
                        inputMode={'numeric'}
                        id="pages"
                        min="1"
                        value={pages}
                        onChange={(e) => handleInputChange('pages', e.target.value)}
                    />
                    <button className={'flex justify-center items-center bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white w-6 h-6 border border-green-600 hover:border-transparent rounded hover:cursor-pointer'} onClick={() => handleIncrement('pages')}>+</button>
                </div>
            </div>

            <div className={'flex flex-wrap items-center justify-end gap-4'}>
                <label htmlFor="languages">Number of Languages:</label>
                <div className="flex items-center gap-2">
                    <button className={'flex justify-center items-center bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white w-6 h-6 border border-green-600 hover:border-transparent rounded hover:cursor-pointer'} onClick={() => handleDecrement('languages')}>-</button>
                    <input
                        className={'text-center w-10 appearance-none bg-white shadow-md rounded-lg'}
                        type="text"
                        inputMode={'numeric'}
                        id="languages"
                        min="1"
                        value={languages}
                        onChange={(e) => handleInputChange('languages', e.target.value)}
                    />
                    <button className={'flex justify-center items-center bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white w-6 h-6 border border-green-600 hover:border-transparent rounded hover:cursor-pointer'} onClick={() => handleIncrement('languages')}>+</button>
                </div>
            </div>
        </div>
    )
}

export default WebDetails;