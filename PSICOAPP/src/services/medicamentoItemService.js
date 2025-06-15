import axios from 'axios';

const API_URL = 'http://localhost:3000/medicamentoItens';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(item) {
    return axios.post(API_URL, item);
  },
  update(id, item) {
    return axios.put(`${API_URL}/${id}`, item);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
