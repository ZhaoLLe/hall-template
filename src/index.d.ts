import { AxiosRequestConfig } from 'axios';
/**
 * 自定义扩展axios模块
 * @author Maybe
 */
declare module 'axios' {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<T>;
  }
  interface IAxios<D> {
    retCode: 22000 | 22001;
    message: string;
    data: D;
  }
  export interface AxiosResponse<T = any> extends IAxios<D> {}

  export interface AxiosRequestConfig<T = any> extends AxiosRequestConfig<T> {
    showloading?: boolean;
    show404?: boolean;
  }
}
