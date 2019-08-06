import React from "react";


const HeroHome = () => {
  return (
    <React.Fragment>
      <div className="bg-color-home">
        <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-light bg-home">
          <div className="col-md-5 p-lg-5 mx-auto my-5 bg-color-home">
            <h1 className="display-4 font-weight-normal  titulo-responsive">
              Desarrollador Front-end y SEO
            </h1>
            <p className="lead font-weight-normal" />
            <a className="btn btn-primary btn-lg shadow font-weight-bold" href="https://wa.me/0573232933565">
            Contáctame
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroHome;
