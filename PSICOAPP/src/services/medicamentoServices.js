import axios from 'axios';

const API_URL = 'http://localhost:3000/medicamentos';

export default {
  getAll() {
    return axios.get(API_URL).then(res => res.data);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`).then(res => res.data);
  },
  create(medicamento) {
    return axios.post(API_URL, medicamento);
  },
  update(id, medicamento) {
    return axios.put(`${API_URL}/${id}`, medicamento);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}