import axios from 'axios';

const API_URL = 'http://localhost:3000/pacientes';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(paciente) {
    return axios.post(API_URL, paciente);
  },
  update(id, paciente) {
    return axios.put(`${API_URL}/${id}`, paciente);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
