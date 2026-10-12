import React, { useState } from 'react';
import { shortenUrlApi } from '../services/api';

export default function Dashboard() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');

    const handleShorten = async (e) => {
        e.preventDefault();
        const { status, data } = await shortenUrlApi(originalUrl);
        if (status === 200 || status === 201) {
            const generatedShortUrl = data?.shortUrl ||
                 (data?.shortId ? `https://url-shortnerapp.vercel.app/api/v1/url/${data.shortId}` : '');

                setShortUrl(generatedShortUrl);
        } else {
            setError(data.error || "Failed to shorten URL");
            setShortUrl('');
        }
    };

    return (
        <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>URL Shortener Dashboard</h2>
            <form onSubmit={handleShorten}>
                <input type="text" placeholder="Enter Long URL" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} required style={{ width: '100%', padding: '8px', margin: '10px 0' }} />
                <button type="submit" style={{ width: '100%', padding: '10px', background: 'purple', color: 'white' }}>Shorten URL</button>
            </form>
            {shortUrl && (
                <p style={{ marginTop: '15px' }}>
                    Short URL: <a
                    href={shortUrl.startsWith('http') ? shortUrl : `https://${shortUrl}`} 
                    target="_blank" 
                    rel="noreferrer"
                    >
                    {shortUrl}
                    </a>
  
                </p>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
