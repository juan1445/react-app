import React from 'react';

const Subscription = () => {
    return(
        <section className="container mb-5 mt-5 text-center align-items-center">
            <div className="row align-items-center">
                <div className="col-lg-6 offset-md-3">
                    <h4 className="eyebrow mb-3">Quieres saber mas de mi?</h4>
                    <p className="mb-5"> si te gusta mi trabajo </p>
                    <div className="input-group pt-3  my-5">
                        <input type="text" className="form-control form-control-lg" placeholder="Correo electronico"
                            aria-label="Subscribe" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="button-addon2">Subscribirse</button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscription;