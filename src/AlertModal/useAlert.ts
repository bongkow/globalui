import { useAlertStore } from './useAlertStore';

export const useAlert = () => {
    const { showAlert, hideAlert } = useAlertStore();
    return { showAlert, hideAlert };
}; 