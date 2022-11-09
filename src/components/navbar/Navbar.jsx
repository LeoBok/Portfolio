import Switch from "../switch/Switch";

const Navbar = () => {
    return (
        <ul className="flex items-center justify-between">
            <li>DevelopedByLeo</li>
            <li>
                <Switch />
            </li>            
        </ul>
    )
}

export default Navbar