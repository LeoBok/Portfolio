import { imgArray } from "../../utilities/array data/images_array";
import { BsArrowUpShort } from "react-icons/bs";
import { useState } from "react";

const Works = () => {
  const [idNum, setIdNum] = useState(null);

  return (
    <section>
        <h2 className="text-2xl font-semibold text-center mb-5">My projects:</h2>
        <ul className="lg:px-20 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 place-items-center gap-10">
          {
            imgArray.map(item => (
              <li onMouseEnter={() => setIdNum(item.id)} onMouseLeave={() => setIdNum(null)} className={`p-6 space-y-6 shadow-lg dark:shadow-black sm:max-w-xl lg:w-lg ${item.id === idNum ? `opacity-100 transition duration-300 ease-in-out` : `lg:opacity-70` }`} key={item.id}>
                <h2 className="text-xl">{item.title}</h2>
                <img
                  src={item.imgSource}
                  alt={item.title}
                />
                <p className="flex items-center">
                  <a className="text-xs flex py-2 px-2 bg-teal-500 active:bg-teal-600 rounded-sm" href={item.link} target="_blank" rel="noreferrer">
                    Watch Live <BsArrowUpShort className="flex hover:rotate-90 active:rotate-90 duration-500 w-4 h-4" />
                  </a>
                </p>
              </li>
            ))
          }
        </ul>
    </section>
  )
}

export default Works