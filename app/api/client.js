import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.76.180:9000/api',
});

export default apiClient;
