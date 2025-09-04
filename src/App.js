import React, { useState } from 'react';
import UrlInput from './components/UrlInput';
import ShortenedUrlDisplay from './components/ShortenedUrlDisplay';

function App() {
    const [shortUrl, setShortUrl] = useState('');

    const handleShorten = async(originalUrl) => {
        try {
            const response = await fetch('https://api.shrtco.de/v2/shorten?url=' + originalUrl);
            const data = await response.json();
            setShortUrl(data.result.full_short_link);
        } catch (error) {
            alert('Failed to shorten URL');
        }
    };

    return ( <
        div style = {
            { padding: 20 } } >
        <
        h1 > URL Shortener < /h1> <
        UrlInput onShorten = { handleShorten }
        /> <
        ShortenedUrlDisplay shortUrl = { shortUrl }
        /> <
        /div>
    );
}

export default App;