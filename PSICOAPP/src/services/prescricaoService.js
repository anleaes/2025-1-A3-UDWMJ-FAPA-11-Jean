import axios from 'axios';

const API_URL = 'http://localhost:3000/prescricoes';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(prescricao) {
    return axios.post(API_URL, prescricao);
  },
  update(id, prescricao) {
    return axios.put(`${API_URL}/${id}`, prescricao);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
