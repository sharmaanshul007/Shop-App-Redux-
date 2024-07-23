import {FaShoppingCart} from "react-icons/fa";
import Logo from '../Images/logo.png'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const {cart} = useSelector((state) => state)
    return (
        <div>
            <nav className="flex flex-row ml-[12rem] mt-2 text-white h-20 max-w-[900px] mx-auto p-2  justify-between ">
                <div className="ml-5">
                <NavLink to="/"><img src= {Logo} width={200} height={100}></img></NavLink>
                </div>
                <div className="flex p-4 gap-4 items-center space-x-6 mr-5 relative">
                    <NavLink to="/"><p>Home</p></NavLink>
                    <NavLink to="/cart"><FaShoppingCart className="text-2xl"></FaShoppingCart>
                    {
                        cart.length > 0 ? (<span className="absolute top-3 right-3 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce text-white rounded-full">{cart.length}</span> ) : (<span></span>)
                    }
                           
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;