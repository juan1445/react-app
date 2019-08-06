import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <React.Fragment>
        <footer className="footer pt-3 mt-4 py-3 bg-primary text-white">
        <div className="container text-center">
            <div className="container align-items-center">
                <a className="text-white p-2" target="_blanck" href="https://twitter.com/thezule1445"><FontAwesomeIcon icon={['fab', 'twitter']} size="3x" className="p-2" /></a>
                <a className="text-white p-2" target="_blanck" href="https://github.com/juan1445"><FontAwesomeIcon icon={['fab', 'github']} size="3x" className="p-2" /></a>
                <a className="text-white p-3" target="_blanck" href="https://www.linkedin.com/in/juan1445"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="p-2" /></a>
            </div>
            <a className="navbar-btn btn btn-sm btn-outline-white lift ml-auto bg-white mt-3" href="/">DESCARGAR
                CV</a>
        </div>
    </footer>
            <div className="container-fluid text-center bg-light text-dark">
            <p className="my-0 py-4">Todos los derechos reservados JM - 2019</p>
        </div>
        </React.Fragment>
    );
}

export default Footer;