import { Heart, Leaf, PawPrint, Shirt, Factory } from 'lucide-react';
import Placeholder from '../imgs/96.png';

const Navbar = () => {
    return ( 
        <nav className="max-w-80 h-screen bg-slate-500 text-slate-100 flex-col">
            <div className="profileContainer flex px-5 py-10 justify-around flex-wrap border-b items-center">
                <div className="profileImg"><img src={Placeholder} alt="profileHeadshot" className="h-24 max-h-24" /></div>
                
                <div className="profileInfo">
                <p className="text-lg tracking-wide">Username</p>
                <p className="text-sm tracking-wide uppercase">username@gmail.com</p></div>
            </div>

            
            <ul className="py-10 tracking-widest uppercase text-sm flex-col justify-items-center">
                <li className=" hover:bg-slate-300 px-5 py-3 mb-5 flex items-center rounded-md hover:cursor-pointer">
                    <Heart className="h-4"/>Favorites</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <Leaf className="h-4 inline-flex"/>Nature</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <PawPrint className="h-4 inline-flex"/>Animals</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <Shirt className="h-4 inline-flex"/>Fashion</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <Factory className="h-4 inline-flex"/>Industrial</li>
            </ul>
        </nav>
    )
}

export default Navbar;