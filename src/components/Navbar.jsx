import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="nav">
            <nav className="nav-inner">
                <NavLink to ="/">
                    <strong>Coach Emilio</strong>
                </NavLink>
                
                <div className="nav-links">
                    <NavLink to ="/" end>Home</NavLink>
                    <NavLink to ="/about">About</NavLink>
                    <NavLink to ="/techs">Portfolio</NavLink>
                    <NavLink to ="/landing">Landing</NavLink>
                    <NavLink to ="/contact">Contact</NavLink>
                </div>
            </nav>
        </header>
    )
}