import useUnsplashImages from "../utils/api";

const Gallery = () => {

    const { images } = useUnsplashImages();

    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((img) => (
                <img key={img.id} src={img.urls.small} alt={img.alt_description} className="rounded-lg" />
            ))}
        </div>
    )
}

export default Gallery;