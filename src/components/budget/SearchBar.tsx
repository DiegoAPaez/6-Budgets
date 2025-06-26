import {useBudget} from "../../hooks/useBudget.tsx";

const SearchBar = ()=> {
    const { searchTerm, setSearchTerm, setSortType } = useBudget();
    return (
        <div className={'flex flex-col gap-2 items-center justify-between md:flex-row bg-white rounded-lg shadow-md p-4 max-w-5xl mx-auto mb-4'}>
            <h3 className={'text-green-600 text-xl font-semibold'}>Saved Budgets</h3>
            <div className={'flex flex-col md:flex-row items-center gap-2 w-full md:w-auto'}>
                <div>
                    <input
                        className={'py-1 px-2 border border-green-800 rounded focus:outline-none focus:ring-2 focus:ring-green-600'}
                        type="text"
                        placeholder="Search budgets..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <button
                        className={'hover:bg-green-600 text-green-800 font-semibold hover:text-white border border-green-800 hover:border-transparent rounded py-1 px-2 hover:cursor-pointer'}
                        onClick={() => setSortType('alphabetical')}>Sort by Name</button>
                    <button
                        className={'hover:bg-green-600 text-green-800 font-semibold hover:text-white border border-green-800 hover:border-transparent rounded py-1 px-2 hover:cursor-pointer'}
                        onClick={() => setSortType('date')}>Sort by Date</button>
                    <button
                        className={'hover:bg-green-600 text-green-800 font-semibold hover:text-white border border-green-800 hover:border-transparent rounded py-1 px-2 hover:cursor-pointer'}
                        onClick={() => setSortType('none')}>Reset Sorting</button>
                </div>
            </div>
        </div>
    )
}
export default SearchBar