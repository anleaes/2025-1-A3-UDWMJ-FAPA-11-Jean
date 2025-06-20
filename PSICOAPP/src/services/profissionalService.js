import axios from 'axios';

const API_URL = 'http://localhost:3000/profissionais';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(profissional) {
    return axios.post(API_URL, profissional);
  },
  update(id, profissional) {
    return axios.put(`${API_URL}/${id}`, profissional);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
