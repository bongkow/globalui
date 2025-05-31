// useAlertStore.ts
import { create } from 'zustand';  //"zustand": "^5.0.5",
import type { AlertType } from './alertTypes';

interface AlertState {
    isOpen: boolean;
    message: string;
    title?: string;
    imgUrl?: string;
    type?: AlertType;
    showAlert: (message: string, title?: string, imgUrl?: string, type?: AlertType) => void;
    hideAlert: () => void;
}

export const useAlertStore = create<AlertState>((set) => ({
    isOpen: false,
    message: '',
    title: undefined,
    imgUrl: undefined,
    type: undefined,
    showAlert: (message: string, title?: string, imgUrl?: string, type?: AlertType) => 
        set({
            isOpen: true,
            message,
            title,
            imgUrl,
            type,
        }),
    hideAlert: () => 
        set((state) => ({
            ...state,
            isOpen: false,
        })),
})); 