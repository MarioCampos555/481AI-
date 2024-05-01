import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';

const ImageGenerator = () => {
    const [imageURL, setImageURL] = useState(default_image);
    let inputRef = useRef(null);
    const[loading,setLoading] = useState(false) ; 

    const imageGenerator = async () => {
        const inputValue = inputRef.current.value;
        if (!inputValue.trim()) {
            return; // early exit if input is empty or just whitespace
        }

        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer ", // Consider moving this to an environment variable
                    "User-Agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: inputValue,
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
            // Handle errors appropriately in your UI as needed
        }
    };

    return (
        <div className='ai-image-generator'>
            <div className='header'>AI Image <span>Generator</span></div>
            <div className='img-loading'>
                <div className='image'><img src={imageURL} alt="" /></div>
                <div className='loading'>
                    <div className={loading?"loading-bar-full":"loading-bar"}></div>
                    <div className= {loading?"loading-text":"display-none"}></div>
                </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Search Here!' />
                <div className='generate-btn' onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
}

export default ImageGenerator;

