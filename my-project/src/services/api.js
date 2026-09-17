export const API_URL = 'https://apifinancontrol-phi.vercel.app';
export async function apiFetch(baseUrl, endpoint, method = 'GET', body = null){
    const token = localStorage.getItem('token')

    const headers = {
        'content-Type':'application/json',
        ...(token && { Authorization: `Bearer ${token}`}),
    }

    const config = {
        method,
        headers,
        ...(body && { body: JSON.stringify(body)}),
    }

    const response = await fetch(`${baseUrl} ${endpoint}`, config)

    if(!response.ok) {
        const erroData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Erro ${response.sytatus}: Falha na requisição`);
    }

    if (response.status === 204) return null
    
    return response.json()

}