import React, { useState } from 'react';
import { registerApi } from '../services/api';

export default function Register({ setPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const { status, data } = await registerApi({ email, password });
        if (status === 201) {
            setMessage("Registration Successful! UserID: " + data.UserId);
            setTimeout(() => setPage('login'), 2000);
        } else {
            setMessage(data.error || "Registration failed");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
                <button type="submit" style={{ width: '100%', padding: '10px', background: 'blue', color: 'white' }}>Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
}