import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
    return(
    <section className="border-bottom mb-5 text-center">
        <div className="container mb-5">
            <h2 className="display-3 text-center mb-5 titulo-responsive" id="Habilidades">Habilidades</h2>
            <a className="text-dark p-3" href="/"><FontAwesomeIcon icon={['fab', 'css3']} size="7x" className="p-2" color="blue"/></a>
            <a className="text-dark p-3" href="/"><FontAwesomeIcon icon={['fab', 'html5']} size="7x" className="p-2" color="orange" /></a>
            <a className="text-dark p-3" href="/"><FontAwesomeIcon icon={['fab', 'bootstrap']} size="7x" className="p-2" color="purple" /></a>
            <a className="text-dark p-3" href="/"><FontAwesomeIcon icon={['fab', 'js']} size="7x" className="p-2" color="yellow" /></a>
            <a className="text-dark p-3" href="/"><FontAwesomeIcon icon={['fab', 'react']} size="7x" className="p-2" color="aqua" /></a>
        </div>
    </section>
    );
}

export default Skills;