import { useState, useCallback } from 'react';
import type { OptionalAlertProps } from './useAlertStore';
export interface AlertModalProps {
    title: string;
    message: string;
    isOpen: boolean;
    otherProps?: OptionalAlertProps;
}


export const useAlertModal = () => {
    const [modalState, setModalState] = useState<Omit<AlertModalProps, 'isOpen'> | null>(null);

    const showAlert = useCallback((title: string, message: string,  otherProps?: OptionalAlertProps) => {
        setModalState({ title: title, message, otherProps });
    }, []);

    const hideAlert = useCallback(() => {
        setModalState(null);
    }, []);

    return {
        isOpen: !!modalState,
        modalState,
        showAlert,
        hideAlert,
    };
}; 