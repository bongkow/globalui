// useAlertStore.ts
import { create } from 'zustand';  //"zustand": "^5.0.5",
import type { AlertType } from './alertTypes';

export interface AlertState {
    title: string; // required
    message: string; // required
    isOpen: boolean; // required
    showAlert: (message: string, title?: string, otherProps?: OptionalAlertProps) => void;
    hideAlert: () => void;
    otherProps?: OptionalAlertProps;
}

export interface OptionalAlertProps{
    imgUrl?: string;
    type?: AlertType;
    demension?: {width:number,height:number};
}

export const useAlertStore = create<AlertState>((set) => ({
    isOpen: false,
    message: "",
    title: "",
    otherProps: undefined,
    showAlert: (message: string, title?: string, otherProps?: OptionalAlertProps) => 
        set({
            isOpen: true,
            message,
            title,
            otherProps
        }),
    hideAlert: () => 
        set((state) => ({
            ...state,
            isOpen: false,
        })),
})); 