import type {ReactNode} from "react";

const Card = ({ children } : {children : ReactNode}) => {
    return (
        <div className={'bg-white shadow-md rounded-lg p-4'}>
            {children}
        </div>
    )
}
export default Card;