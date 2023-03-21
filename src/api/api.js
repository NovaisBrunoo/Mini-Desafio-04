import axios from 'axios';

export default axios.create({
    baseURL: 'http://api-contacts.pedagogico.cubos.academy',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});