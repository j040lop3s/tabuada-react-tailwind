import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="w-full bg-[#585123] text-[#EEC170] p-4 flex justify-center gap-8 shadow-md z-50 absolute top-0">
            <Link to="/" className="font-bold text-xl hover:text-white transition-colors duration-300">
                Início
            </Link>
            <Link to="/tabuada" className="font-bold text-xl hover:text-white transition-colors duration-300">
                Tabuada
            </Link>
        </nav>
    );
};

export default Menu;