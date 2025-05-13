import axios from "axios";

const API_URL =
  "https://6812a4be129f6313e20f24c8.mockapi.io/api-tienda/v1/users";

export default {
  getAll() {
    return axios.get(API_URL);
  },
  get(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  create(user) {
    return axios.post(API_URL, user);
  },
  update(id, user) {
    return axios.put(`${API_URL}/${id}`, user);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  },
};
