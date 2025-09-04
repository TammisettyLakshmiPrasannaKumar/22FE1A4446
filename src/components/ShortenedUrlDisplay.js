import React from 'react';

function ShortenedUrlDisplay({ shortUrl }) {
    if (!shortUrl) return null;

    return ( <
        div style = {
            { marginTop: 20 }
        } >
        <
        h3 > Shortened URL: < /h3> <
        a href = { shortUrl }
        target = "_blank"
        rel = "noopener noreferrer" > { shortUrl } <
        /a> < /
        div >
    );
}

export default ShortenedUrlDisplay;