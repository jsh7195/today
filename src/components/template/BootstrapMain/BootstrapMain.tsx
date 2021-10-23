import React from 'react';
import Header from './header/Header';
import Body from './body/Body';

const BootstrapMain = () => {
  return (
    <>
      <Header />
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <h1>
                Game Application<span>.</span>
              </h1>
              <h2>필요한 기능 Email로 주세요.(jsh7195gg@gmail.com)</h2>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <Body/>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>Game Application</span>
            </strong>
            <p>
              <strong>Email:</strong> jsh7195gg@gmail.com
              <br/>
            </p>
          </div>
          
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      {/* <div id="preloader"></div> */}
    </>
  );
};

export default BootstrapMain;
