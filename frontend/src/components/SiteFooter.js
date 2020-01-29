import { Link } from "gatsby"
import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import Img from "gatsby-image"

const SiteFooter = ({
  sanity,
  contentful,
  storyblok,
  sanityimage,
  forestry,
  dato,
  gatsby,
  nextjs,
  hugo,
  react,
  nodejs,
  netlify,
  nowblack,
  firebase,
  aws
}) => (

    <footer className="footer">
      <div className="container">
        <div className="logo-block">
          <div className="row">
            <div className="content">
              <div className="h6">TEKNOLOGIER VI BRUGER</div>
              <div className="h3">Forskønne internettet</div>
              <p> Når vi taler om "Stakken", taler vi ikke længere om operativsystemer, specifikke webservere, backend-programmeringssprog eller databaser. </p>
              <p>
                Jamstack handler ikke om specifikke teknologier.
                Det er en ny måde at opbygge websteder og apps, der leverer bedre ydelse, højere sikkerhed, lavere omkostninger ved skalering og en bedre udvikleroplevelse.
                </p>
            </div>
            <div className="logo-title">DATA KILDER</div>
            <div className="logo-container">
              <div className="logo-wrapper">
                <Img fluid={contentful.childImageSharp.fluid} style={{ width: '160px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={storyblok.childImageSharp.fluid} style={{ width: '160px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={sanityimage.childImageSharp.fluid} style={{ width: '110px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={forestry.childImageSharp.fluid} style={{ width: '160px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={dato.childImageSharp.fluid} style={{ width: '120px' }} />
              </div>
            </div>
            <div className="logo-title">BUILD</div>
            <div className="logo-container">
              <div className="logo-wrapper">
                <Img fluid={gatsby.childImageSharp.fluid} style={{ width: '160px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={nextjs.childImageSharp.fluid} style={{ width: '120px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={hugo.childImageSharp.fluid} style={{ width: '150px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={react.childImageSharp.fluid} style={{ width: '60px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={nodejs.childImageSharp.fluid} style={{ width: '120px' }} />
              </div>
            </div>
            <div className="logo-title">DEPLOY & CDN</div>
            <div className="logo-container">
              <div className="logo-wrapper">
                <Img fluid={netlify.childImageSharp.fluid} style={{ width: '130px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={nowblack.childImageSharp.fluid} style={{ width: '50px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={firebase.childImageSharp.fluid} style={{ width: '150px' }} />
              </div>
              <div className="logo-wrapper">
                <Img fluid={aws.childImageSharp.fluid} style={{ width: '70px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
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
            <div className="col-lg-3 col-md-6">
              <div className="footer-top-title"> Bankoplysninger </div>
              <div className="mb-3">
                <BlockContent blocks={sanity.siteExtra[0].footerContactBlockRaw || []} />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
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
