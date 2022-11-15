import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaSass,
    FaGithub
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiWebpack } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";

const Experience = () => {
    return (
        <section className="py-10 flex flex-col items-center">
            <div className="flex items-center text-2xl">
                <BiCodeCurly />
                <h2 className="pl-3">Frontend developer experience:</h2>
            </div>
                    
            <ul className="text-4xl py-5 grid grid-cols-3 grid-rows-3 gap-7 place-content-center">
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <FaHtml5 /> </li>
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <FaCss3Alt /> </li>
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <SiJavascript /> </li>
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <SiTailwindcss /> </li>
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <FaSass /> </li>
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <FaReact /> </li>
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <FaGithub /> </li>
                <li className="p-5 mx-auto shadow-lg dark:shadow-black rounded-md"> <SiWebpack /> </li>
            </ul>
        </section>
  )
}

export default Experience