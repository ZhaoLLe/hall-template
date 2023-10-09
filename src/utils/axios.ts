import axios from 'axios';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useStorage } from '@vueuse/core';
import { useRouter } from 'vue-router';

const cookies = useCookies();

const visitorSign = useStorage('visitor-sign', '');
const companyId = useStorage('company_id', '');

const router = useRouter();

const service = axios.create({
  timeout: 50000,
  headers: {
    token: cookies.get('ttl'),
    'visitor-sign': visitorSign.value || '',
    'customer-code': companyId.value || '',
  },
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      router.push({ path: '/login' });
    }
    return Promise.reject(error);
  },
);

export default service;
