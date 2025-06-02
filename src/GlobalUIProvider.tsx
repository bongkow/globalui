import React from 'react';
import AlertModal from './AlertModal/AlertModal';
import { useAlertStore } from './AlertModal/useAlertStore';

interface GlobalUIProviderProps {
    children: React.ReactNode;
}

export const GlobalUIProvider: React.FC<GlobalUIProviderProps> = ({ children }) => {
    const { isOpen, message, title, otherProps, hideAlert } = useAlertStore();

    return (
        <>
            {children}
            <AlertModal
                title={title || ''}
                isOpen={isOpen}
                onClose={hideAlert}
                message={message}
                otherProps={otherProps}
            />
        </>
    );
}; 