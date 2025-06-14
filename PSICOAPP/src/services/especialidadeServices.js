import axios from 'axios';

const API_URL = 'http://localhost:3000/especialidades';

export default {
  getAllEspecialidades() {
    return axios.get(API_URL);
  },

  getEspecialidade(id) {
    return axios.get(`${API_URL}/${id}`);
  },

  createEspecialidade(especialidade) {
    return axios.post(API_URL, especialidade);
  },

  updateEspecialidade(id, especialidade) {
    return axios.put(`${API_URL}/${id}`, especialidade);
  },

  deleteEspecialidade(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
