import { StaticQuery, graphql } from "gatsby"
import React from "react"
import SiteNav from "../components/SiteNav"
import { ModalStackContext, ThemeContext } from "../contexts"

const query = graphql`
  {
  sanity {
    company: CompanyInfo(id: "company-info") {
      brand {
        name
        logo {
          asset {
            url
          }
        }
      }
      contact {
        email
        facebook
        github
        instagram
        telephone
        twitter
        crunchbase
        whatsapp
        linkedin
      }
    }
  }
}
`

function mapDataToProps({ sanity = {} }) {
  return {
    brand: (sanity.company || {}).brand,
    contact: (sanity.company || {}).contact
  }
}

class SiteNavContainer extends React.Component {
  static contextType = ThemeContext

  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      activeClass: 'none',
      toggleNav: false,
      navbarCss: 'collapse navbar-collapse',
      data: props.data,
      isMenuOpen: false,
    }

    this.navbarOpen = this.navbarOpen.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    window.addEventListener('scroll', () => {
      let activeClass = 'none';
      if (window.scrollY >= 200) {
        activeClass = 'sticky';
      }
      if (this._isMounted) {
        this.setState({ activeClass });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  navbarOpen() {
    if (this.state.toggleNav) {
      if (this._isMounted) {
        this.setState({ navbarCss: 'collapse navbar-collapse', toggleNav: false });
      }
    } else {
      if (this._isMounted) {
        this.setState({ navbarCss: 'collapse navbar-collapse show', toggleNav: true })
        this._navbarOpen = true;
      }
    }
  }

  handleOpenMenu = incr => {
    incr()
    this.setState({ isMenuOpen: true })
  }

  handleCloseMenu = decr => {
    decr()
    this.setState({ isMenuOpen: false })
  }

  render() {
    return (
      <ModalStackContext.Consumer>
        {({ incr, decr }) => (
          <StaticQuery
            query={query}
            render={data => (
              <SiteNav
                {...mapDataToProps(data)}
                {...this.props}
                {...this.state}
                theme={this.context}
                onOpenMenu={() => this.handleOpenMenu(incr)}
                onCloseMenu={() => this.handleCloseMenu(decr)}
                navbarOpen={() => this.navbarOpen()}
              />
            )}
          />
        )}
      </ModalStackContext.Consumer>
    )
  }
}

export default SiteNavContainer
