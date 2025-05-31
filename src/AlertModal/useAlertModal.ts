import { useState, useCallback } from 'react';
import type { AlertType } from './alertTypes';

export interface AlertModalProps {
    title?: string;
    message: string;
    isOpen: boolean;
    imgUrl?: string;
    type?: AlertType;
}

export const useAlertModal = () => {
    const [modalState, setModalState] = useState<Omit<AlertModalProps, 'isOpen'> | null>(null);

    const showAlert = useCallback((message: string, title?: string, imgUrl?: string, type: AlertType = 'info') => {
        setModalState({ message, title, imgUrl, type });
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