import axios from 'axios';

const API_URL = 'http://localhost:3000/atendimentos';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(atendimento) {
    return axios.post(API_URL, atendimento);
  },
  update(id, atendimento) {
    return axios.put(`${API_URL}/${id}`, atendimento);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
