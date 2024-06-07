import axios from 'axios';
import { getToken } from '../localStorage/localStorageToken';
const createAuthenticatedRequest = async () => {
    const token = await getToken('authToken');

    return axios.create({
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
};

export default createAuthenticatedRequest;
