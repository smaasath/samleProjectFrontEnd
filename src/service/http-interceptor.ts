import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

class HttpInterceptor {
    private instance: AxiosInstance;

    constructor() {
        const defaultOptions: AxiosRequestConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };

        this.instance = axios.create(defaultOptions);

        this.instance.interceptors.request.use(
            async (request: InternalAxiosRequestConfig) => {
                // You can modify the request here if needed
                return request;
            },
        );

        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error: AxiosError) => {
                if (!error.response) {
                    console.error('[ERROR]', '[HTTP Interceptor, Network Error]', error);
                } else {
                    const status = error.response.status;
                    console.error('[ERROR]', '[HTTP Interceptor, Status Code]', status);

                    switch (status) {
                        case 401:
                            console.error('[ERROR]', '[HTTP Interceptor, Unauthorized]');
                            break;
                        // You can add more cases for other status codes if needed
                        default:
                            console.error('[ERROR]', '[HTTP Interceptor, Other Status Code]', status);
                            break;
                    }
                }
                return Promise.reject(error);
            }
        );
    }

    public getInstance(): AxiosInstance {
        return this.instance;
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.get<T>(url, config);
    }

    public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.post<T>(url, data, config);
    }

    public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.put<T>(url, data, config);
    }

    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.delete<T>(url, config);
    }
}

export default HttpInterceptor;
