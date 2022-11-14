import { imgArray } from "../../utilities/array data/images_array";
import { BsArrowUpShort } from "react-icons/bs";

const Works = () => {
  return (
    <section className="flex flex-col justify-center items-center">
        <h2 className="text-2xl">My personal projects:</h2>
        <ul className="grid grid-cols-1 grid-rows-1 place-content-center space-y-7 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4">
          {
            imgArray.map(item => (
              <li className="px-7 py-4 space-y-5 shadow-lg dark:shadow-black rounded-md max-w-xl" key={item.id}>
                <h2 className="text-xl">{item.title}</h2>
                <img
                  src={item.imgSource}
                  alt={item.title}
                />
                <p className="flex flex-row">
                  <a className="flex flex-row items-center bg-teal-500 active:bg-teal-600 py-2 px-3" href={item.link} target="_blank" rel="noreferrer">
                   Watch Live <BsArrowUpShort className="ml-1 w-6 h-6 hover:rotate-90 active:rotate-90 duration-500" />
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