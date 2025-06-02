import { useEffect, useRef } from 'react';
import type { AlertModalProps } from './useAlertModal';
import { ALERT_TYPE_CONFIG } from './alertTypes';

interface AlertModalComponentProps extends AlertModalProps {
    onClose: () => void;
}

const AlertModal = ({ title, message, isOpen, onClose, otherProps }: AlertModalComponentProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    // Use plain white background with black text when no type is provided
    const alertConfig = otherProps?.type ? ALERT_TYPE_CONFIG[otherProps.type] : {
        icon: '',
        bgColor: 'bg-white',
        textColor: 'text-black',
        borderColor: 'border-gray-200'
    };

    return (
        <dialog
            ref={dialogRef}
            className={`AlertModalDialog fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/20 backdrop:backdrop-blur-[2px] p-0 rounded-lg shadow-xl m-0 overflow-y-auto`}
            style={{
                width: otherProps?.demension?.width || '450px',
                height: otherProps?.demension?.height || '250px'
            }}
            onCancel={onClose}
        >
            <div className="AlertModal1 px-3 py-3 w-full h-full bg-white border border-gray-200 rounded-lg relative">
                <CloseButton onClose={onClose} />
                <div className="AlertModal2flex justify-start items-start gap-2">
                    <div className="AlertModal3 flex-grow">
                        {title && (
                            <div className={`AlertTitle ${alertConfig.bgColor} -mx-3 -mt-5 px-3 pt-5 pb-3 rounded-t-lg border-b ${alertConfig.borderColor} flex flex-row justify-between items-center`}>
                                <h3 className={`text-lg font-medium leading-6 ${alertConfig.textColor} flex items-center gap-2`}>
                                    {otherProps?.type && (
                                        <div className={`flex-shrink-0 ${alertConfig.textColor}`}>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d={alertConfig.icon} />
                                            </svg>
                                        </div>
                                    )}
                                    {title}
                                </h3>
                                
                            </div>
                        )}
                        <div className="flex gap-1 justify-start items-start mt-4">
                            {otherProps?.imgUrl && (
                                <div className="flex-shrink-0 w-1/5 h-full max-h-[calc(100%-2rem)]">
                                    <img 
                                        src={otherProps?.imgUrl} 
                                        alt="Alert"
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            )}
                            <p className="text-md text-justify text-gray-700 flex-grow">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

const CloseButton = ({ onClose }: { onClose: () => void }) => {
    return (
        <button
            onClick={onClose}
            className="CloseButton absolute text-gray-400 hover:text-gray-500 focus:outline-none"
            style={
                {position: 'absolute', right: '4px', top: '4px'}
            }
        >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <   path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    );
};

export default AlertModal;