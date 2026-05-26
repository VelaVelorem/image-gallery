import useUnsplashImages from "../utils/api";

const Gallery = () => {

    const { images } = useUnsplashImages();

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((img) => (
                <img key={img.id} 
                src={img.urls.small} 
                alt={img.alt_description} 
                className="rounded-lg shadow-xl shadow-slate-800" />
            ))}
        </div>
    )
}

export default Gallery;