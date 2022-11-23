import axios from 'axios';
const base_URL = 'http://localhost:3000/clientes/login';

const login = async(credentials) => {
    const { data } = await axios.post(base_URL, credentials);
    return data;
};

export default { login };
