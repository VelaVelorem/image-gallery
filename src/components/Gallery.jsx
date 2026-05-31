import useUnsplashImages from "../utils/api";

const Gallery = () => {

    const { images } = useUnsplashImages();

    return (
        <div className="md:columns-3 sm:columns-2 lg:columns-4 p-3">
            {images.map((img) => (
                <img key={img.id} 
                src={img.urls.small} 
                alt={img.alt_description} 
                className="rounded-lg shadow-xl shadow-slate-800 mb-6" />
            ))}
        </div>
    )
}

export default Gallery;