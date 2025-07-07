import { apiCall } from "./apiCall";

export const dataFotoPerum = async () => {
    const data = await apiCall.get('/foto_perum');
   
    return data;
}