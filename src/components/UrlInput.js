import React, { useState } from 'react';

function UrlInput({ onShorten }) {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input.trim() === '') {
            alert('Please enter a URL');
            return;
        }
        onShorten(input);
        setInput('');
    };

    return ( <
        div >
        <
        input type = "text"
        placeholder = "Enter URL here"
        value = { input }
        onChange = {
            (e) => setInput(e.target.value) }
        style = {
            { width: '300px', padding: '8px' } }
        /> <
        button onClick = { handleSubmit }
        style = {
            { padding: '8px 16px', marginLeft: '10px' } } >
        Shorten <
        /button> <
        /div>
    );
}

export default UrlInput;