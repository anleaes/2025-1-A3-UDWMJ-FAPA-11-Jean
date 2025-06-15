import axios from 'axios';

const API_URL = 'http://localhost:3000/especialidades';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(especialidade) {
    return axios.post(API_URL, especialidade);
  },
  update(id, especialidade) {
    return axios.put(`${API_URL}/${id}`, especialidade);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
