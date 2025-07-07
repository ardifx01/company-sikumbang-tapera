import { apiCall } from "./apiCall";

export const properties = async () => {
    const data = await apiCall.get('/perum?sortBy=created%20desc');

    return data.data
}