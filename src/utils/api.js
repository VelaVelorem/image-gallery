import { useEffect, useState } from 'react';

const useUnsplashImages = () => {
    const unsplashKEY = import.meta.env.VITE_UNSPLASH_KEY;
    const baseURL = 'https://api.unsplash.com/photos/random?count=15';
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(baseURL, {
                headers: { 
                    Authorization: `Client-ID ${unsplashKEY}`
                },
            });

            const data = await response.json();
            setImages(data);
        }

        fetchImages();
    }, []);

    return { images };
}

export default useUnsplashImages;