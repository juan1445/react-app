import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
    return(
        <header className="container-fluid bg-light py-2">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand font-weight-bold" href="/">JUAN ZULETA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto font-weight-bold">
                        <li className="nav-item active"><a className="nav-link" href="/">INICIO</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Habilidades">HABILIDADES</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Portafolio">PORTAFOLIO</a></li>
                    </ul>
                    <a className="navbar-btn btn btn-sm btn-outline-primary lift ml-auto font-weight-bold" href="/">DESCARGAR
                        CV</a>
                </div>
            </div>
        </nav>
        <div className="btn-whatsapp">
        <a href="https://wa.me/0573232933565"><FontAwesomeIcon icon={['fab', 'whatsapp']} size="4x" className="" color="green"/></a>
        </div>
    </header>
    );
}

export default Header;