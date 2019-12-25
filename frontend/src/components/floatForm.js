import React, { Component } from 'react'
import { IoMdClose } from 'react-icons/io';
import { StaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

export default class floatForm extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            formClass: '',
            buttonClass: '',
            data: null,
        }

        this._toggleForm = this._toggleForm.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ buttonClass: 'show-float-form' });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    _toggleForm() {
        if (this.state.formOpen) {
            if (this._isMounted) {
                this.setState({ formOpen: false, formClass: '', buttonClass: 'show-float-form' });
            }
        } else {
            this.setState({ formOpen: true, formClass: 'show-float-form', buttonClass: '' });
        }
    }



    render() {
        return (
            <StaticQuery
                query={graphql`
                    query floatform {
                        sanity {
                            allSiteExtras {
                            contactFormTextRaw
                            contanctFormImage {
                                asset {
                                    url
                                }
                            }
                            contactFormButtonImage {
                                asset {
                                    url
                                }
                            }
                            }
                        }
                    }
                `}
                render={data => (
                    <div>
                        <button className={`float-form-button btn ${this.state.buttonClass}`} onClick={this._toggleForm}>
                            <img className="img-fluid"
                                src={data.sanity.allSiteExtras[0].contactFormButtonImage.asset.url}
                                alt="button-icon"
                            />
                        </button>
                        <div className={`float-form ${this.state.formClass}`}>
                            <div className="float-form-head">
                                <img
                                    src={data.sanity.allSiteExtras[0].contanctFormImage.asset.url}
                                    className="attachment-full size-full img-fluid"
                                    alt="header"
                                />
                                <button className="float-form-close" onClick={this._toggleForm}>
                                    <IoMdClose />
                                </button>
                            </div>
                            <div className="float-form-content">
                                <BlockContent blocks={data.sanity.allSiteExtras[0].contactFormTextRaw || []} />
                                <form
                                    name="contact"
                                    method="post"
                                    data-netlify="true"
                                >
                                    <input type="text" name="name" placeholder="Dit navn" />
                                    <input type="email" name="email" placeholder="Din email" />
                                    <input type="text" name="phone" placeholder="Dit telefonnummer" />
                                    <button className="btn" type="submit">START DIN VÆKST HER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            />
        )
    }
}