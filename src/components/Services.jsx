import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our
                <b> Awesome</b>Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                    <i className="fa fa-heart-o fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Love</h5>
                  <p class="card-text lead">
                    We have a HUGE database of beautfiul singles, and will intro you to those we believe you are highly compatible with
                  </p>
                </div>
              </div>
            </div><div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Intros</h5>
                  <p class="card-text lead">
                    We believe in true love. We believe in soul mates. And we belive your perfect match is out there
                  </p>
                </div>
              </div>
            </div><div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                    <i className="fa fa-file-o fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">Discrete</h5>
                  <p class="card-text lead">
                    Discretion is key. Your membership with Coffee Matches is NEVER communicated publicly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
