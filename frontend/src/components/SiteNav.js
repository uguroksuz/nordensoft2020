import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import Icon from './Icons'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaAngleDown } from 'react-icons/fa';
// import { media, padding, width, zIndex } from "./vars"

const Root = styled.nav`
  ${({ invert, theme }) => `
    color: ${invert ? theme.background : theme.color};
  `};

  a {
    color: inherit;
    text-decoration: none;
  }
`

const prop = (getter, callback) => {
  let val
  try {
    val = getter()
  } catch (e) { }
  return callback(val)
}

const SiteNav = ({
  brand = {},
  contact = {},
  menu,
  onCloseMenu,
  invert,
  theme,
  navbarOpen,
  megamenuOpen,
  activeClass,
  navbarCss,
  megamenuCss
}) => (
    <Root theme={theme} invert={invert}>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light norden-navbar px-3 ${activeClass}`}>
        <div className="container">
          <div className="norden-logo order-lg-1">
            <Link to="/" onClick={onCloseMenu}>
              {prop(
                () => brand.logo.asset.url,
                url =>
                  url ? (
                    <img style={{ width: "9em" }} alt={brand.name || 'No name'} src={brand.logo.asset.url} className="d-inline-block align-top mr-3" />
                  ) : (
                      brand.name || 'No name'
                    )
              )}
            </Link>
          </div>
          <span className="navbar-socials order-lg-3">
            <a href={contact.linkedin ? contact.linkedin : '#'} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href={contact.facebook ? contact.facebook : '#'} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href={contact.whatsapp ? contact.whatsapp : '#'} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href={contact.email ? 'mailto:' + contact.email : '#'} rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </span>
          <button className="navbar-toggler order-lg-4" type="button" onClick={navbarOpen} >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`order-lg-2 ${navbarCss}`} id="navbarNav">
            <ul className="navbar-nav">
              {(menu.items || []).map(item => (
                <>
                  {(item.key === "650e3508826e") ?
                    <li key={item.key} onClick={megamenuOpen} className="nav-item dropdown-nord megamenu-li">
                      <div key={'list01'} className="nav-link">{item.title} <FaAngleDown /></div>
                      <div key={'list02'} className={`dropdown-menu megamenu ${megamenuCss}`}>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="row px-3">
                                <Link to={item.to} className="mb-3 paragraph">
                                  <div className="h5 font-weight-bold">{item.title}</div>
                                  <p>En moderne arkitektur —Magento webshop, JAMStack, Drupal, Wordpress hjemmeside, ERP integrationer og Mobil App Udvikling.</p>
                                </Link>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                  <Link to="/magento-webshop/" className="mr-1 mb-2 d-block paragraph">
                                    <div className="h5 font-weight-bold">Magento Webshop</div>
                                    <p> Vi designer og bygger Magento webshops. Har i brug for en ny eller forbedret webshop? </p>
                                  </Link>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                  <Link to="/jamstack/" className="mb-2 d-block paragraph">
                                    <div className="h5 font-weight-bold">JAMStack</div>
                                    <p> JAMStack design og udvikling.En JAMStack er ”Formel 1” inden for SEO og ydeevne! </p>
                                  </Link>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                  <Link to="/seo-optimering/" className="mr-1 mb-2 d-block paragraph">
                                    <div className="h5 font-weight-bold">SEO Optimering</div>
                                    <p> Vi tilbyder datadrevet SEO, hvor alt arbejde er transparent og målbart. </p>
                                  </Link>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                  <Link to="erp-integration" className="mb-2 d-block paragraph">
                                    <div className="h5 font-weight-bold">ERP integration</div>
                                    <p> NAV, SAP, C5, E-conomic, Dynamics GP eller Dynamics AX - Friheden til at vælge </p>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div key={'qicklink'} className="col-12 mt-5">
                                <div className="h5 pl-4 font-weight-bold">Hurtige links</div>
                                <Link to="/magento/" className="dropdown-item">Magento </Link>
                                <Link to="/magento-b2b-og-b2c-webshop/" className="dropdown-item">Something else here</Link>
                                <Link to="/wordpress-hjemmeside/" className="dropdown-item">Wordpress Hjemmeside</Link>
                                <Link to="/mobil-app-udvikling/" className="dropdown-item">Mobil App Udvikling</Link>
                                <Link to="/drupal-udvikling/" className="dropdown-item">Drupal Udvikling</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    :
                    <li key={item.key} className="nav-item">
                      <Link to={item.to} onClick={onCloseMenu} className="nav-link">
                        {item.title}
                      </Link>
                    </li>
                  }
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Root>
  )

export default SiteNav
