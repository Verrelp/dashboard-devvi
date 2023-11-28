import axios from "axios";
import { getCookie } from "@/utils/cookies";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})



export const getCakes = async () => {
    try {
        const response = await api.get('/api/cakes');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

