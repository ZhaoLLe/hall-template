const api = '/api';
import axios from 'axios';
import qs from 'qs';
import { useCookies } from '@vueuse/integrations/useCookies';
import service from '@/utils/axios';

const cookies = useCookies();

export const gettoken = (params: any) => {
  return axios.post(`${api}/sso/getTtl`, qs.stringify(params));
};
export const getUdesk = (params: any) => {
  return axios.get(`${api}/udesk/get_params`, {
    headers: { token: cookies.get('ttl') },
    params,
  });
};
// 退出登陆
export const loginout = () => {
  return service.post(`${api}/user/logout`);
};
// 获取用户信息
export const getuserinfo = (params: any) => {
  return service.get(`${api}/user/info`, {
    headers: { token: cookies.get('ttl'), 'customer-code': '' },
    showloading: true,
    show404: true,
    params,
  });
};
// 获取商户配置
export const getCompanyConfig = (params: any) => {
  return service.post(`${api}/company/config`, qs.stringify(params));
};
//  能否终止结算单
export const companyServiceEntrance = (params: any) => {
  return service.get(`${api}/company/service/entrance`, { params });
};
