import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';

const ImageGenerator = () => {
    const [imageURL, setImageURL] = useState(default_image);
    const [loading, setLoading] = useState(false);
    const [style, setStyle] = useState('random');  // new state for style
    let inputRef = useRef(null);

    const imageGenerator = async () => {
        setLoading(true);  // set loading true on start
        const inputValue = inputRef.current.value;
        if (!inputValue.trim()) {
            setLoading(false);
            return; // early exit if input is empty or just whitespace
        }

        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer ",
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputValue} in ${style} style`,  // Append style to the prompt
                    n: 1,
                    size: "512x512",
                }),
            });

            const data = await response.json();
            const imageUrl = data.data[0]?.url; // Using optional chaining for safety
            if (imageUrl) {
                setImageURL(imageUrl);
            }
        } catch (error) {
            console.error("Failed to generate image:", error);
        }
        setLoading(false);  // set loading false after completion
    };

    return (
        <div className='ai-image-generator'>
            <div className='header'>AI Image <span>Generator</span></div>
            <div className='img-loading'>
                <div className='image'><img src={imageURL} alt="Generated" /></div>
                {loading && <div className='loading-overlay'><div className='loading-spinner'></div></div>}
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='SEARCH HERE!' />
                <select onChange={(e) => setStyle(e.target.value)} className='style-selector'>
                    <option value="random">Random</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="anime">Anime</option>
                    <option value="realistic">Realistic</option>
                </select>
                <div className='generate-btn' onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
}

export default ImageGenerator;


