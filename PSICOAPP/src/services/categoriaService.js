import axios from 'axios';

const API_URL = 'http://localhost:3000/categorias';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(categoria) {
    return axios.post(API_URL, categoria);
  },
  update(id, categoria) {
    return axios.put(`${API_URL}/${id}`, categoria);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
