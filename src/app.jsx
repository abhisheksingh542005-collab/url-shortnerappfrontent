import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
    const [page, setPage] = useState('login');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
            setPage('dashboard');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setPage('login');
    };

    return (
        <div>
            <Navbar setPage={setPage} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <div style={{ padding: '20px' }}>
                {page === 'register' && <Register setPage={setPage} />}
                {page === 'login' && <Login setPage={setPage} setIsAuthenticated={setIsAuthenticated} />}
                {page === 'dashboard' && isAuthenticated && <Dashboard />}
            </div>
        </div>
    );
}