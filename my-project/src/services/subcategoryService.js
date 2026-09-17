import { apiFetch, API_URL } from "./api.js";

export const subcategoriaService = {
    getAll: async () => {
        return await apiFetch(API_URL `/subcategorias`)
    },

    creat: async (data) => {
        return await apiFetch(API_URL `/subcategorias`, 'POST', data)
    },

    update: async (id, data) => {
        return await apiFetch(API_URL `/subcategorias/${id}`, 'PUT', data)
    },

    delete: async (id) => {
        return await apiFetch(API_URL `/subcategorias/${id}`, 'DELETE')
    }
}