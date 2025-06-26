import type {Budget} from "../../utils/types.ts";

const BudgetCard = ({budget} : {budget: Budget}) => {
    if (!budget) return null;
    const {name, email, phone, date, services, webDetails, price} = budget;
    const { seo, ads, web } = services;
    const { pages, languages } = webDetails || {};

    return (
        <div className="flex flex-col justify-between md:flex-row bg-white rounded-lg shadow-md p-4 max-w-5xl mx-auto mb-4">
            <div>
                <h3 className={'font-bold'}>{name}</h3>
                <p>Date: {new Date(date).toLocaleDateString()}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
            <div>
                <p className={'font-bold'}>Services:</p>
                <ul className={'list-disc list-inside'}>
                    {seo && <li>SEO Campaign</li>}
                    {ads && <li>Advertising Campaign</li>}
                    {web && <li>Website Creation</li>}
                </ul>

                {web && webDetails && (
                    <p>
                        <strong>Website Details:</strong> {pages} pages, {languages} languages
                    </p>
                )}
            </div>
            <div className={'self-center'}>
                <h3 className={'text-center'}>Total:</h3>
                <p className={'text-xl'}>
                    € <strong>{price.toFixed(2)}</strong>
                </p>
            </div>
        </div>
    )
}

export default BudgetCard;