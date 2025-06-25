interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    if (!message) return null;

    return (
        <div className="text-center font-bold italic py-1 mt-2 mx-auto bg-red-300 rounded-lg">
            {message}
        </div>
    );
};

export default ErrorMessage;