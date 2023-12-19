import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import './styles.scss';

const DashboardFifaLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-affix">
        <div className="container">
          <div className="row">
            <div className="logo-header col-auto col-sm-auto text-lg-left ml-lg-0">
              <a className="navbar-brand logo" href="/">
                <img
                  src="/images/app-logo.png"
                  alt="Logo"
                  className="app-logo logo-light"
                />
                <img src="/images/logo.png" className="logo-fl" alt="Logo" />
              </a>
            </div>
            <div className="col-12 col-lg-auto ml-lg-auto">
              <div className="menu-mobile">
                <ul className="nav navbar-nav mr-6 mr-lg-0">
                  <li className="nav-item">
                    <Link
                      href="/app"
                      className="nav-link"
                    >
                      Acessar GPT
                    </Link>
                  </li>
                  <li className="nav-item social-media">
                    <a
                      href="https://www.instagram.com/apostagpt"
                      target="_blank"
                      className="nav-link"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="nav-item social-media">
                    <a
                      href="https://www.tiktok.com/@apostagpt"
                      target="_blank"
                      className="nav-link"
                    >
                      <i className="fab fa-tiktok" />
                    </a>
                  </li>
                  <li className="nav-item social-media">
                    <a
                      href="https://www.youtube.com/@apostagpt"
                      target="_blank"
                      className="nav-link"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="nav-item social-media">
                    <a
                      href="https://www.facebook.com/profile.php?id=61553393369121&mibextid=LQQJ4d"
                      target="_blank"
                      className="nav-link"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
      {/* /.main */}
      {/* footer */}
      <footer className="footer">
        <img
          className="f-shape p-absolute r-0 b--10 pe-n"
          src="/images/landing_page/fr-bg.png"
          alt="FX"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="fw-500">
                © Todos os direitos reservados - 2023 <span id="year" /> Aposta GPT
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* /.footer */}
    </>
  );
};

export default DashboardFifaLayout;
