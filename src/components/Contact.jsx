import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/contact.jpg" alt="Contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form action="">
                <form>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Jane Doe"
                    />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="JaneDoe@email.com"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Your Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      ></textarea>
                  </div>
                  <button type="submit" class="btn btn-outline-primary rounded-pill px-4">
                    Send Message <i className="fa fa-paper-plane ms-2"></i>
                  </button>
                </form>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
