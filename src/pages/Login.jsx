import React, { useState } from 'react';
import { loginApi } from '../services/api';

export default function Login({ setPage, setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const { status, data } = await loginApi({ email, password });
        if (status === 200) {
            localStorage.setItem("token", data.token); // Token save karna verifytoken ke liye zaroori hai[span_13](start_span)[span_13](end_span)
            setIsAuthenticated(true);
            setPage('dashboard');
        } else {
            setMessage(data.error || "Invalid credentials");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
                <button type="submit" style={{ width: '100%', padding: '10px', background: 'green', color: 'white' }}>Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
}