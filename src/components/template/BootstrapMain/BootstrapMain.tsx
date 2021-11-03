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
                Game App<span>.</span>
              </h1>
              <h2>필요한 기능 Email로 주세요.(jsh7195gg@gmail.com)</h2>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div>
              <iframe
                title="main"
                src="https://ads-partners.coupang.com/widgets.html?id=524418&template=carousel&trackingCode=AF7065418&subId=&width=680&height=140"
                width="680"
                height="140"
                frameBorder="0"
                scrolling="no"
                referrerPolicy="unsafe-url"
              ></iframe>
            </div>
            <div className="row">
              <Body />
            </div>
          </div>
        </section>
      </main>
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}
        >
          <iframe
            title="coupa1"
            src="https://coupa.ng/bZicV8"
            width="160"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="rice"
            src="https://coupa.ng/b6Bijd"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="coupa3"
            src="https://coupa.ng/b6Bckf"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="salchistake"
            src="https://coupa.ng/b0aDkt"
            width="160"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="cokezero"
            src="https://coupa.ng/b9kcPP"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="pepsizero"
            src="https://coupa.ng/b9kcZL"
            width="120"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <br />
        </div>
        <div>
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
          제공받습니다.
        </div>
      </div>
      <br />
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>Game Application</span>
            </strong>
            <p>
              <strong>Email:</strong> jsh7195gg@gmail.com
              <br />
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
