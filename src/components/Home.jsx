import React from 'react';

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="continer">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                    <h1 className="display-4 fw-bolder mb-4 text-center
                    text-white">Coffee Matches <br/>
                    for he who seeks 
                    luuuurve!</h1>
                    <p className="lead text-center fs-4 mb-5
                    text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium perferendis molestias qui, nobis illum et maiores quod iusto? Sequi mollitia sint laborum soluta facere error exercitationem cumque possimus autem harum?</p>
                    <div className="buttons d-flex justify-content-center">
                        <button className="btn btn-light me-4 
                        rounded-pill px-4 py-2">Get Quote</button>
                        <button className="btn btn-outline-light 
                        rounded-pill px-4 py-2">Our Services</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
