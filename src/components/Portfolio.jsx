import React from 'react';
import GeekConf from '../img/GeekConf.png';
import PortafolioDemo from '../img/Portafoliodemo.png';
import PerfilesConf from '../img/PerfilesConf.png';

const Portfolios = () => {
    return(
        <section className="container border-bottom">
        <div className="album py-5 bg-light">
            <div className="container">
                <h2 className="display-4 text-center titulo-responsive" id="Portafolio">Mi Portafolio</h2>
                <p className="text-center mb-5 ">Sitios Web, Apps y SEO</p>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="img-fluid" src={GeekConf} alt="" />
                            <div className="card-body">
                                <p className="card-text">Página web adaptada a todos los dispositivos para la empresa
                                    ImportacionesJM</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                                    </div>
                                    <small className="text-muted">2019</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="img-fluid" src={PerfilesConf} alt="" />
                            <div className="card-body">
                                <p className="card-text">Diseño moderno de una tienda online con la mejor experiencia de
                                    usuario y seguridad para tus clientes.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                                    </div>
                                    <small className="text-muted">2019</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <img className="img-fluid" src={PortafolioDemo} alt="" />
                            <div className="card-body">
                                <p className="card-text">Luego de 6 meses de trabajo en SEO, esta página logra los
                                    primeros resultados de Google, lo cual aumento en 300% las ventas mensuales.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                                    </div>
                                    <small className="text-muted">2019</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Portfolios;
