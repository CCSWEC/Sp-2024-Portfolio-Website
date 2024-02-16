import {NavLink} from "react-router-dom"
const Nav = () => {


    return (
        <nav>
            <div>
                <NavLink className="navbar-brand" to="/"></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>>

    )
}

export default Nav;
