import { 
    FaLinkedin,
    FaGithub,
    FaInstagram
} from "react-icons/fa";

const Main = () => {
    return (
        <main className="text-center pt-20 px-4">
            <h2 className="text-5xl text-teal-500">Leonardo Boccali</h2>
            <h3 className="text-2xl">Jr. Frontend Developer</h3>
            <p className="text-md leading-8">
                I'm a Jr. Frontend Developer 🧑🏻‍💻 <br />
                I love creating simple but effective UX/UI interfaces 👨🏻‍🎨 <br />
                Experimenting with new technologies is a must 🧑🏻‍🚀
            </p>
            <section className="text-4xl flex justify-center items-center gap-14">
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
        </main>
    )
}

export default Main