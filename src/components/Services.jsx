import React from 'react';

const Services = () => {
    return(
        <section className="py-8 py-md-11 border-bottom mt-5 mb-5 pb-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up">
                        <div className="icon text-primary mb-3">
                        </div>
                        <h3 className="mb-5">
                            Front-End Desarrollador
                        </h3>
                        <p className="text-muted mb-6 mb-md-0">
                            Manejo HTML,CSS, JS, Bootstrap y Reac.js entre otras herramientas que me permitiran
                            realizarle una página web adaptada a todos los dispositivos, para ver mas ejemplos por favor
                            ir a la sección de proyectos.
                        </p>
                        <p className="mt-5"><a className="btn btn-primary btn-md" href="/">Saber más</a></p>
                    </div>
                    <div className="col-12 col-md-4 aos-init aos-animate shadow" data-aos="fade-up" data-aos-delay="50">
                        <div className="icon text-primary mb-3">
                        </div>
                        <h3 className="mb-5">
                            Diseños modernos
                        </h3>
                        <p className="text-muted mb-6 mb-md-0">
                            Es bueno estar a la vanguardia con los mejores diseños, minimalistas y modernos, hoy en día
                            es de vital importancia contar con una página web esteticamente bonita y agradable para los
                            clientes o lectores, de esto dependeran las ventas de su sitio.
                        </p>
                        <p className="mt-5"><a className="btn btn-primary btn-md" href="/">Saber más</a></p>
                    </div>
                    <div className="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon text-primary mb-3">
                        </div>
                        <h3 className="mb-5">
                            SEO Analísta
                        </h3>
                        <p className="text-muted mb-0">
                            A quien no le gustaría estar en la primera página de Google ?, para esto es el SEO, todos
                            nos dicen que debemos tener nuestra página, pero nadie nos habla del SEO
                            teniendo en cuenta que sin este practicamente no vamos a llegar a nuestros clientes
                            potenciales.
                        </p>
                        <p className="mt-5"><a className="btn btn-primary btn-md" href="/">Saber más</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;