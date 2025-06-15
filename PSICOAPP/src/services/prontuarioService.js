import axios from 'axios';

const API_URL = 'http://localhost:3000/prontuarios';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(prontuario) {
    return axios.post(API_URL, prontuario);
  },
  update(id, prontuario) {
    return axios.put(`${API_URL}/${id}`, prontuario);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
