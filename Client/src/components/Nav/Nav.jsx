import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"
import './Nav.css'


const Nav = ({ onSearch, logout }) => {
    return (
        <nav className="nav">
        <div className="nav-left">
            <button className="form-button1">
                <Link to="/home">Home</Link>
            </button>
            <button className="form-button1">
                <Link to="/favorites">Favorites</Link>
            </button>
        </div>

        <div className="nav-center">
            <button className="form-button2">
                <SearchBar onSearch={onSearch} />
            </button>
        </div>

        <div className="nav-right">

            <button className="form-button1">
                <Link to="/about">About</Link>
            </button>
            <button className="form-button3" onClick={logout}>
                Log Out
            </button>
        </div>
        </nav>
    );
};
export default Nav;
