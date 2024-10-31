import { Task } from "@/models/Task";
import HttpInterceptor from "@/service/http-interceptor";

const http = new HttpInterceptor();

export const saveTask = (
    task: Task,
    callback: (response: any) => void
): void => {
    const endpoint = `${import.meta.env.VITE_API_ENDPOINT}/todo/task`;

    http
        .post(endpoint, task)
        .then((response: any) => {
            callback(response);
        })
        .catch((error: { response: any }) => {
            callback(error.response);
        });
};



export const getTask = (
    callback: (response: any) => void
): void => {
    const endpoint = `${import.meta.env.VITE_API_ENDPOINT}/todo/task`;

    http
        .get(endpoint)
        .then((response: any) => {
            callback(response);
        })
        .catch((error: { response: any }) => {
            callback(error.response);
        });
};


export const updateTask = (
    id: number,
    data: Task,
    callback: (response: any) => void
): void => {
    const endpoint = `${import.meta.env.VITE_API_ENDPOINT}/todo/task/${id}`;

    http
        .put(endpoint, data)
        .then((response: any) => {
            callback(response);
        })
        .catch((error: { response: any }) => {
            callback(error.response);
        });
};


export const deleteTaskById = (
    id: number,
    callback: (response: any) => void
): void => {
    const endpoint = `${import.meta.env.VITE_API_ENDPOINT}/todo/task/${id}`;

    http
        .delete(endpoint)
        .then((response: any) => {
            callback(response);
        })
        .catch((error: { response: any }) => {
            callback(error.response);
        });
};

