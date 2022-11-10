import { useState } from "react";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }
    return (
        <div onClick={handleIsOpen} className="">
            <span className={`w-8 h-1 block mb-1 bg-gray-900 dark:bg-slate-50 rounded transition ease-in-out duration-500 ${isOpen ? `-rotate-45 translate-y-2` : ``}`}></span>
            <span className={`w-8 h-1 mt-1 mb-1 block bg-gray-900 dark:bg-slate-50 rounded transition ease-in-out duration-500 ${isOpen ? `bg-transparent dark:bg-transparent` : ``}`}></span>
            <span className={`w-8 h-1 mt-1 block bg-gray-900 dark:bg-slate-50 rounded transition ease-in-out duration-500 ${isOpen ? `rotate-45 -translate-y-2` : ``}`}></span>
        </div>
    )
}

export default Hamburger