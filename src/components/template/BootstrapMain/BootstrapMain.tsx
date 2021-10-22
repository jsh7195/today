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
                Powerful Digital Solutions With Gp<span>.</span>
              </h1>
              <h2>We are team of talented digital marketers</h2>
            </div>
          </div>

          <div
            className="row gy-4 mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line"></i>
                <h3>
                  <a href="">Lorem Ipsum</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line"></i>
                <h3>
                  <a href="">Dolor Sitema</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line"></i>
                <h3>
                  <a href="">Sedare Perspiciatis</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-paint-brush-line"></i>
                <h3>
                  <a href="">Magni Dolores</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line"></i>
                <h3>
                  <a href="">Nemos Enimade</a>
                </h3>
              </div>
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
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>
                    Gp<span>.</span>
                  </h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA
                    <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>Gp</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default BootstrapMain;
