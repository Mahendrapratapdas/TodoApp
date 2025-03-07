import Logo from "../Assets/checklist.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-green-200 text-white h-16 flex justify-between items-center px-4">
            <div className="flex items-center gap-2 h-10">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
                <NavLink to="/"><h1 className="text-black font-bold text-lg">Todo App</h1></NavLink>
            </div>
            <div className="mr-4">
                <ul className="flex gap-4 text-black font-medium">
                    <li><NavLink to="/" className="hover:text-gray-400">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-gray-400">About</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;