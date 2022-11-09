import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi"

const Switch = () => {
    const [darkMode, setDarkMode] = useState(false)
    const handleDarkMode = () => setDarkMode(!darkMode);
    return (
        <div className={`flex w-12 h-6 rounded-full transition-all duration-500 ${darkMode ? `bg-slate-300` : `bg-gray-900`}`}>
            <span className={`h-6 w-6 rounded-full bg-slate-50 flex justify-center items-center transition-all duration-500 ${darkMode ? `ml-6 bg-gray-900 text-slate-50` : ``}`} onClick={handleDarkMode}>{ darkMode ? <HiOutlineMoon /> : <FiSun /> }</span>
        </div>
    )
}

export default Switch