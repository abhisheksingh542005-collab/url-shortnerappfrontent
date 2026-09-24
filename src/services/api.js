const API_BASE_URL = "http://localhost:7000";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token") || "";
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
};

export const registerApi = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    return { status: response.status, data: await response.json() };
};

export const loginApi = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    return { status: response.status, data: await response.json() };
};

export const shortenUrlApi = async (originalUrl) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/url/shorten`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ originalUrl })
    });
    return { status: response.status, data: await response.json() };
};

