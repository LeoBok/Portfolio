import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi"
import Hamburger from "../hamburger menu/Hamburger";

const Navbar = ({darkMode, setDarkMode}) => {
    const handleDarkMode = () => setDarkMode(prevDark => !prevDark);
    return (
        <nav>
            <ul className="flex items-center justify-between">
                <li>DevelopedByLeo</li>
                <li className="flex items-center">
                    <div className={`flex w-11 h-5 items-center mr-3 rounded-full transition-all duration-500 ${darkMode ? `bg-white` : `bg-gray-900`}`}>
                        <span className={`h-5 w-5 rounded-full flex justify-center items-center transition-all duration-300 ${darkMode ? `ml-6 bg-gray-900 text-slate-50` : `bg-slate-50`}`} onClick={handleDarkMode}>{ darkMode ? <HiOutlineMoon /> : <FiSun /> }</span>
                    </div>
                    <Hamburger />
                </li>
            </ul>
        </nav>
    )
}
export default Navbar