import { Link } from "gatsby"
import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const SiteFooter = ({sanity, items = [], theme }) => (
  <footer className="footer">
    <div className="footer-top py-5">

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img alt={'Norden Soft'} src={sanity.siteExtra[0].footerLogo.asset.url} className="d-inline-block align-top mr-3" />
            <div className="my-3">
              {typeof sanity.siteExtra[0].footerTextRaw != 'undefined' ? <BlockContent blocks={sanity.siteExtra[0].footerTextRaw} /> : null}
            </div>
            <div className="footer-top-title my-3">Følg os</div>
            <div className="footer-social">
              <a href={sanity.company.contact.linkedin ? sanity.company.contact.linkedin : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href={sanity.company.contact.facebook ? sanity.company.contact.facebook : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href={sanity.company.contact.whatsapp ? sanity.company.contact.whatsapp : '#'} className="footer-icon" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-top-title"> Bankoplysninger </div>
            <div className="mb-3">
              <BlockContent blocks={sanity.siteExtra[0].footerContactBlockRaw || []} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-top-title"> Find os </div>
            <BlockContent blocks={sanity.siteExtra[0].footerFindBlockRaw || []} />
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-left">
            © 2016 – {new Date().getFullYear()} NordenSoft by Development  | <Link to="/privacypolicy">Privatlivspolitik</Link>
          </div>
          <div className="col-md-6 text-right">
            © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
                  {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default SiteFooter
