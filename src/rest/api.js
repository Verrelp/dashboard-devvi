import axios from "axios";
import { getCookie } from "@/utils/cookies";
import { toast } from 'react-toastify';

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

export const postCakes = async ({
    name, description, price, image, category
  }) => {
    try {
        const response = await api.post('/api/cakes', {
          user_id: 3,
          name,
          description,
          price,
          category,
          image: image
        });
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
  }

  export const deleteCake = async ({ cake_id }) => {
    try {
        const response = await api.delete('/api/cakes/' + cake_id);
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
  }


  export const getOrders = async () => {
    try {
        const response = await api.get('/api/orders');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getCountOrders = async () => {
    try {
        const response = await api.get('/api/orders/count');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getUsers = async () => {
    try {
        const response = await api.get('/api/users');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

export const getCountUsers = async () => {
    try {
        const response = await api.get('/api/users/count');
        return response.data.data;
    } catch (error) {
        throw error;
    }
}


export const deleteUser = async ({ user_id }) => {
    try {
        const response = await api.delete('/api/users/' + user_id);
        return response.data;
    } catch (error) {
        if (error) {
            alert(error.response.data.message);            
        }
    }
  }