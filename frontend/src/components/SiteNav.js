import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import Icon from './Icons'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
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
  activeClass,
  navbarCss,
}) => (
    <Root theme={theme} invert={invert}>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light norden-navbar px-3 ${activeClass}`}>
        <div className="container">
          <div>
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
          <button className="navbar-toggler" type="button" onClick={navbarOpen} >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${navbarCss}`} id="navbarNav">
              <ul className="navbar-nav">
                {(menu.items || []).map(item => (
                  <li key={item.key} className="nav-item">
                    <Link to={item.to} onClick={onCloseMenu} className="nav-link">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
          <span className="navbar-text d-none d-xl-block">
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
        </div>
      </nav>
    </Root>
  )

export default SiteNav
