import { useEffect, useState } from 'react';

const api = () => {
    const baseURL = "";
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const result = await fetch(baseURL);
            const data = await result.json();
            console.log(data);
            setImages(data);
        }
        fetchImages();
    }, [])
}

export default api;