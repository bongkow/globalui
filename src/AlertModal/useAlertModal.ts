import { useState, useCallback } from 'react';
import type { AlertType } from './alertTypes';

export interface AlertModalProps {
    title: string;
    message: string;
    isOpen: boolean;
    otherProps?: OptionalAlertModalProps;
}

interface OptionalAlertModalProps {
    imageUrl?: string;
    type?: AlertType;
    demension?:{width:number,height:number}
}

export const useAlertModal = () => {
    const [modalState, setModalState] = useState<Omit<AlertModalProps, 'isOpen'> | null>(null);

    const showAlert = useCallback((title: string, message: string, otherProps?: OptionalAlertModalProps) => {
        setModalState({ title, message, ...otherProps });
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