'use client';

import Head from 'next/head';
import Link from 'next/link';
import './styles.scss';

const LandingPage = () => {

  return (
    <>
      <Head>
        <title>Aposta GPT - Dash FIFA</title>
      </Head>
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
                      href="/dashboard/fifa"
                      className="nav-link"
                    >
                      Dashboard FIFA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/app"
                      className="nav-link"
                    >
                      Preço
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/app" className="nav-link">
                      Acessar conta
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
      <header id="home" className="header" data-style="default">
        <div className="header-hero d-flex align-items-center text-light">
          <div className="container position-relative zi-1">
            <div className="row align-items-center">
              <div className="col-12 position-relative text-center zi-4 mb-8 mb-lg-10">
                <h1 className="display-md-4 display-xl-3 fw-600 lh-2 pt-12 mb-7 mb-lg-8">
                  <span className="d-block">
                    INTELIGENCIA ARTIFICIAL PARA E-SOCCER FIFA.
                  </span>
                </h1>
                <span className="d-block fw-500 lead-md-1 o-70 mb-7 mb-lg-8">
                  Aprimore suas apostas. Nossa I.A analisa uma extensa base de dados{" "}
                  <b style={{ color: "#6df663" }}>exclusivos do e-Soccer FIFA.</b>
                </span>
                <div>
                  <Link
                    href="/app"
                    className="btn-download btn btn-lg btn-sm-block btn-theme"
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="mr-4">
                        <div className="d-flex lead-5">
                          <i className="fas fa-coins" />
                        </div>
                      </div>
                      <div className="text-left lh-6 fw-500">
                        <span className="d-lg-block">Inicie com</span>
                        <strong className="fw-700">
                          <b style={{ color: "#6df663" }}>Créditos grátis</b>
                        </strong>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/app"
                    className="btn-download btn btn-lg btn-sm-block btn-theme"
                  >
                    <div className="d-flex align-items-center py-2">
                      <div className="mr-4">
                        <div className="d-flex lead-5">
                          <i className="far fa-user" />
                        </div>
                      </div>
                      <div className="text-left lh-6 fw-500">
                        <span className="d-lg-block">Acessar</span>
                        <strong className="fw-700">Sua conta</strong>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div id="how-it-works" className="col-12">
                <div className="theme-box">
                  <img src="/images/landing_page/device-hero.png" alt="Device" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pe-n overlay fadeIn ad-100ms zi-0" style={{ top: "25%" }}>
          <div className="grid-wrapper">
            <div className="grid grid-ibf">
              <div className="grid-fade" />
            </div>
            <div className="grid">
              <div className="grid-lines" />
            </div>
          </div>
        </div>
      </header>
      <main id="content-main" className="content-main">
        {/* new */}
        <section className="wn__section pb-9 pb-lg-10 pb-xl-11 pt-8 pt-lg-9 pt-xl-10">
          <div className="container">
            <div className="row gutters-y">
              <div className="col-sm-8 col-md-6 col-lg-4 mx-auto mb-4 mb-md-7 mb-lg-0">
                <div className="px-2 px-lg-3">
                  <div className="wn__icon mb-6">
                    <img src="/images/landing_page/01.png" alt="Icon" />
                  </div>
                  <h6 className="wn__title">Mantenha a consistência</h6>
                  <p>
                    O e-Soccer FIFA é um mercado onde as informações são escassas,
                    apostar pelo felling é estressante nesse mercado onde tudo muda
                    muito rápido.
                  </p>
                </div>
              </div>
              <div className="col-sm-8 col-md-6 col-lg-4 mx-auto mb-4 mb-md-7 mb-lg-0">
                <div className="px-2 px-lg-3">
                  <div className="wn__icon mb-6">
                    <img src="/images/landing_page/03.png" alt="Icon" />
                  </div>
                  <h6 className="wn__title">Aumente seus lucros</h6>
                  <p>
                    270% é a taxa média de aumento nos rendimentos dos apostadores
                    que utilizaram a IA apostaGPT e seus recursos para análise e
                    estatísticas.
                  </p>
                </div>
              </div>
              <div className="col-sm-8 col-md-6 col-lg-4 mx-auto">
                <div className="px-2 px-lg-3">
                  <div className="wn__icon mb-6">
                    <img src="/images/landing_page/02.png" alt="Icon" />
                  </div>
                  <h6 className="wn__title">Inteligencia artificial</h6>
                  <p>
                    Não é apenas uma análise de aposta, é uma decisão embasada em
                    estatísticas precisas para potencializar sua vitória, nosso
                    database é atualizados diariamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="p-relative pe-n">
          <div className="overlay fadeIn ad-100ms zi-0">
            <img
              src="/images/landing_page/bg-c-01.png"
              className="ovry-2 p-absolute l--6"
              alt="fx"
            />
          </div>
        </div>
        <section id="features" className="content-section text-center">
          <div className="container">
            <div className="row mb-6 mb-lg-9">
              <div className="col-12">
                <div>
                  <h5 className="text-secondary lead-lg-4">
                    Transformamos dados em decisões assertivas
                  </h5>
                  <h2 className="display-lg-4 mb-5 mb-md-6 mb-lg-7">
                    Nossa base de dados estatísticos é alimentada diariamente.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <img
                  src="/images/landing_page/app-1.png"
                  alt="App"
                  className="mb-2"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="content-section p-relative">
          {/* overlay */}
          <img
            src="/images/landing_page/bg-c-02.png"
            className="ovry-1 zi-0 p-absolute r-0 pe-n"
            alt="fx"
          />
          {/* /.overlay */}
          <div className="pb-8 pb-lg-9 pb-xl-12">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-8 mb-lg-0 ml-auto order-lg-2">
                  <div className="p-relative pl-lg-6">
                    <div className="w-fit-content ml-7 ml-lg-8">
                      <img src="/images/landing_page/f_01.png" alt="Photo" />
                    </div>
                    <div className="p-relative zi-4 mt--11">
                      <img
                        src="/images/landing_page/f_01-1.png"
                        className="img-sm"
                        alt="Photo"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="pr-lg-8">
                    <h5 className="text-secondary">Mas como funciona?</h5>
                    <h2 className="display-lg-5 mb-5 mb-md-6 mb-lg-7">
                      Interação descomplicada
                    </h2>
                    <p className="lead-md-2 fw-500 mb-0">
                      O Aposta GTP foi feito para ser simples para você e muito
                      complexo para a I.A. Convertemos sua pergunta em um prompt
                      avançado que cruza estatísticas atualizadas com dados
                      históricos e análises profundas via data science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-8 mb-lg-0 mr-auto">
                  <div>
                    <div className="block-bottom d-flex p-relative">
                      <div className="p-absolute zi-4 b-7 b-md-8 b-lg-10">
                        <img
                          src="/images/landing_page/f_01-2.png"
                          className="img-sm"
                          alt="Photo"
                        />
                      </div>
                      <div className="p-relative mr-3 ml-7 ml-lg-9 mr-lg-0">
                        <div className="rds" />
                        <img
                          src="/images/landing_page/f_02-1.png"
                          className="img-md p-relative"
                          alt="Photo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="pl-lg-8">
                    <div className="">
                      <div className="">
                        <h5 className="text-secondary">Deixe que a I.A decida</h5>
                        <h2 className="display-lg-5 mb-5">
                          Feita para quem não tem tempo
                        </h2>
                        <p className="lead-md-2 fw-500 mb-0">
                          Ao contrário dos esportes convencionais, os e-Soccer
                          exigem uma compreensão complexa e, muitas vezes, é difícil
                          se manter atualizado para realizar apostas a tempo. Nosso
                          sistema, feito para quem não tem tempo, oferece uma
                          solução ágil e eficiente, permitindo decisões informadas
                          mesmo para aqueles com agendas movimentadas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center px-4 px-md-7 px-lg-8">
          <div
            className="content-section p-relative bp-c br-n bs-c"
            style={{ background: "url(/images/landing_page/bg-1.jpg)" }}
          >
            <div className="overlay bg-dark o-95" />
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-xl-8 py-md-8 py-lg-10 mx-auto">
                  <div>
                    <h2 className="display-lg-4 mb-6">Inicie gratuitamente</h2>
                    <span className="d-block text-light mb-8 lead-md-1">
                      Teste de graça com{" "}
                      <strong style={{ color: "#6df663" }}>10 créditos</strong>
                    </span>
                  </div>
                  <div>
                    <Link
                      href="/app"
                      className="btn-download btn btn-lg btn-sm-block btn-theme"
                    >
                      <div className="d-flex align-items-center py-2">
                        <div className="mr-4">
                          <div className="d-flex lead-5">
                            <i className="fas fa-coins" />
                          </div>
                        </div>
                        <div className="text-left lh-6 fw-500">
                          <span className="d-none d-lg-block">Inicie com</span>
                          <strong className="fw-700">
                            <b style={{ color: "#6df663" }}>Créditos grátis</b>
                          </strong>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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

export default LandingPage;
