import {Link} from "react-router-dom";

const WelcomePage = () => {
    return (
        <div className={'text-center max-w-3xl mx-auto p-4'}>
            <h1 className={'text-4xl mb-4 text-green-600'}>Welcome to Budget Calculator</h1>
            <p>
                This application helps freelance programmers generate quotes for their clients.
                You can select from various services and customize them according to your needs.
            </p>
            <div className={'text-left my-4 mx-0 p-3 bg-green-50 border-2 border-green-700 rounded-xl'}>
                <h2>Features:</h2>
                <ul className={'list-disc list-inside'}>
                    <li>Select from multiple service options</li>
                    <li>Customize website development with pages and languages</li>
                    <li>Save multiple quotes for different clients</li>
                    <li>Search and sort your saved quotes</li>
                    <li>Apply discounts for annual budgets</li>
                    <li>Share quotes via URL</li>
                </ul>
            </div>
            <div className="mt-6">
                <Link to="/calculator" className={'bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded'}>
                    Start Creating Your Budget
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;