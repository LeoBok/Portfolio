import { 
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";
import Avatar from "../../utilities/images/avatar.png"

const Main = () => {
    return (
        <main className="text-center pt-16 px-4">
            <h2 className="text-5xl text-teal-500 py-7">Leonardo Boccali</h2>
            <h3 className="text-2xl py-5">Jr. Frontend Developer</h3>
            <p className="text-sm leading-8">
                I'm a Jr. Frontend Developer 🧑🏻‍💻 <br />
                I love creating simple but effective UX/UI interfaces 👨🏻‍🎨 <br />
                Experimenting with new technologies is a must 🧑🏻‍🚀
            </p>
            <section className="text-4xl pt-14 flex justify-center items-center gap-14">
                <a href="https://www.linkedin.com/in/leonardoboccali/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/LeoBok" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/_leo_bok/?next=%2F" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </section>
            <img
                src={Avatar}
                alt="My own avatar"
                className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 object-cover mt-10"
            />
        </main>
    )
}

export default Main