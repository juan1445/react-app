import React from 'react';
import GeekConf from '../img/GeekConf.png';
import PortafolioDemo from '../img/Portafoliodemo.png';
import MusicApp from '../img/MusicApp.png';
import AcademiaG from '../img/AcademiaGeek.png';

const Portfolios = () => {
    return(
        <section className="container border-bottom">
        <div className="album py-5 bg-light">
            <div className="container">
                <h2 className="display-4 text-center titulo-responsive" id="Portafolio">Mi Portafolio</h2>
                <p className="text-center mb-5 ">Sitios Web, Apps y SEO</p>
                <div className="row">
                <div className="col-md-3">
                        <div className="card mb-4 shadow-sm">
                            <img className="img-fluid" src={AcademiaG} alt="" />
                            <div className="card-body">
                                <p className="card-text">Página web adaptada a todos los dispositivos en React para Academia Geek y Makaia</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="https://hackathon-academia-geek.netlify.com/"><button type="button" className="btn btn-sm btn-outline-secondary">Ver</button></a>
                                    </div>
                                    <small className="text-muted">2019</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-4 shadow-sm">
                            <img className="img-fluid" src={GeekConf} alt="" />
                            <div className="card-body">
                                <p className="card-text">Página web adaptada a todos los dispositivos para la Conferencia Geek</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <a href="https://geek-conf.netlify.com/"><button type="button" className="btn btn-sm btn-outline-secondary">Ver</button></a>
                                    </div>
                                    <small className="text-muted">2019</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-4 shadow-sm">
                            <img className="img-fluid" src={MusicApp} alt="" />
                            <div className="card-body">
                                <p className="card-text">Diseño moderno de una App de música online con la mejor experiencia de
                                    usuario y comodidad para tus clientes.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <a href="/"><button type="button" className="btn btn-sm btn-outline-secondary">Ver</button></a>
                                    </div>
                                    <small className="text-muted">2019</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-4 shadow-sm">
                            <img className="img-fluid" src={PortafolioDemo} alt="" />
                            <div className="card-body">
                                <p className="card-text">Portafolio minimalista en CSS puro con HTML y React</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <a href="https://portafolio-demo.netlify.com/"><button type="button" className="btn btn-sm btn-outline-secondary">Ver</button></a>
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
