import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="nav">
            <nav className="nav-inner">
                <NavLink to ="/">
                    <strong>Tech Explorer</strong>
                </NavLink>
                
                <div className="nav-links">
                    <NavLink to ="/" end>Home</NavLink>
                    <NavLink to ="/techs">Techs</NavLink>
                    <NavLink to ="/about">About</NavLink>
                    <NavLink to ="/landing">Landing</NavLink>
                </div>
            </nav>
        </header>
    )
}