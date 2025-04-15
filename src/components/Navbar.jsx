import { Heart, Leaf, PawPrint, Shirt, Factory, Menu } from 'lucide-react';
import { useState, useEffect } from 'react'
import Placeholder from '../imgs/96.png';
import SearchBar from './SearchBar';
import DarkToggle from './DarkToggle';

const Navbar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleOpen = () => {
        setIsCollapsed(!isCollapsed);
    }


    return (
        <nav className={`h-screen bg-slate-500 text-slate-100 flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? "w-20" : "max-w-80"}`}>
            <div className="profileContainer flex px-5 py-10 justify-around flex-wrap border-b items-center">
                {!isCollapsed && (
                    <div className="flex items-center gap-3 flex-wrap">
                        <img src={Placeholder} alt="profileHeadshot" className="h-24 rounded-full" />
                        <div className="profileInfo">
                            <p className="text-sm tracking-wide">Guest</p>
                            <p className="text-xs tracking-wide uppercase">Guest@gmail.com</p>
                        </div>
                    </div>
                )}

            <button onClick={toggleOpen} className="ml-auto">
                <Menu className="h-6" />
            </button>
            </div>

            {!isCollapsed && <SearchBar />}

            <ul className="my-10 tracking-widest uppercase text-sm flex-col justify-items-center">
                <li className=" hover:bg-slate-300 px-5 py-3 mb-5 flex items-center rounded-md hover:cursor-pointer">
                    <Heart className="h-4" />{!isCollapsed && "Favorites"}</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <Leaf className="h-4 inline-flex" />{!isCollapsed && "Nature"}</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <PawPrint className="h-4 inline-flex" />{!isCollapsed && "Animals"}</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <Shirt className="h-4 inline-flex" />{!isCollapsed && "Fashion"}</li>
                <li className=" hover:bg-slate-300 px-5 py-3 flex items-center rounded-md hover:cursor-pointer">
                    <Factory className="h-4 inline-flex" />{!isCollapsed && "Industrial"}</li>
            </ul>

            <DarkToggle />
        </nav>
    )
}



export default Navbar;