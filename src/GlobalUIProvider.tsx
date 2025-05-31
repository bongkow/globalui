import React from 'react';
import AlertModal from './AlertModal/AlertModal';
import { useAlertStore } from './AlertModal/useAlertStore';

interface GlobalUIProviderProps {
    children: React.ReactNode;
}

export const GlobalUIProvider: React.FC<GlobalUIProviderProps> = ({ children }) => {
    const { isOpen, message, title, imgUrl, type, hideAlert } = useAlertStore();

    return (
        <>
            {children}
            <AlertModal
                isOpen={isOpen}
                onClose={hideAlert}
                message={message}
                title={title}
                imgUrl={imgUrl}
                type={type}
            />
        </>
    );
}; 