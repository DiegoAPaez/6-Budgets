import {useEffect} from "react";

interface HelpModalProps {
    onClose: () => void;
    title: string;
    content: string;
}

const HelpModal = ({onClose, title, content} : HelpModalProps) => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        }
    }, [onClose]);

    return (
        <div onClick={onClose} className={'fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex items-center justify-center z-50'}>
            <div className={'bg-white rounded-lg max-w-2xl w-11/12 max-h-screen overflow-y-auto shadow-lg'} onClick={(e) => e.stopPropagation()}>
                <div className={'flex justify-between items-center py-2 px-4'}>
                    <h2 className={'text-xl font-bold'}>{title}</h2>
                    <button className={'font-bold close-button hover:cursor-pointer px-3 py-1 hover:text-white hover:bg-green-800 rounded-lg'} onClick={onClose}>X</button>
                </div>
                <div className="modal-body" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}
export default HelpModal