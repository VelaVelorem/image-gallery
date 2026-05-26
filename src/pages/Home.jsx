import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

const Home = () => {
    return (
        <>
        <div className="flex gap-4">
        <Navbar className="flex-initial" />
        <Gallery className="flex-auto" />
        </div>
        </>
    )
}

export default Home;