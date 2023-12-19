import { FC, PropsWithChildren } from 'react';

interface IHeaderFifaPage {
  title?: string;
  subTitle?: string;
  minorTitle?: string;
}

const HeaderFifaPage: FC<PropsWithChildren<IHeaderFifaPage>> = async ({ title, subTitle, minorTitle, children }) => (
  <header id="home" className="header" data-style="default">
    <div className="header-hero d-flex align-items-center text-light">
      <div className="container position-relative zi-1">
        <div className="row align-items-center">
          <div className="col-12 position-relative text-center zi-4 mb-8 mb-lg-10">
            {children ? <>{children}</> :
              <>
                <h1 className="display-md-4 display-xl-3 fw-600 lh-2 pt-12 mb-7 mb-lg-8">
                  <span className="d-block">
                    {title}
                  </span>
                </h1>
                <span className="d-block fw-500 lead-md-1 o-70 mb-7 mb-lg-8">
                  {subTitle} {" "}
                  <b style={{ color: "#6df663" }}>{minorTitle}</b>
                </span>
              </>
            }
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
);

export default HeaderFifaPage;
