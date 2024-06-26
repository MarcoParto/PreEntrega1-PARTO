import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

function NavBar({cartCount}) {
    return (
        <nav className="navbar navbar-expand-lg bg-custom-grey">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="src/assets/logo.png" alt="Logo" width="auto" height="100" class="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active navbar-custom-text" aria-current="page" href="#">Inicio</a>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link active navbar-custom-text" href="#">Productos</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                       <CardWidget cartCount={cartCount} />
                    </div>
                 </div>
            </div>
        </nav>
    )
}

export default NavBar