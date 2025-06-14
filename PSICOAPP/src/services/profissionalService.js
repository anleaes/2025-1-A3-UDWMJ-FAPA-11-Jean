import axios from 'axios';

const API_URL = 'http://localhost:3000/profissionais';

export default {
    listar() {
        return axios.get(API_URL);
    },
    buscarPorId(id) {
        return axios.get(`${API_URL}/${id}`);
    },
    criar(profissional) {
        return axios.post(API_URL, profissional);
    },
    atualizar(id, profissional) {
        return axios.put(`${API_URL}/${id}`, profissional);
    },
    excluir(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
};