import React, { Component } from 'react'
import { IoMdClose } from 'react-icons/io';
import { FaRegCheckCircle } from 'react-icons/fa';
import { StaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import axios from "axios";

export default class floatForm extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            formClass: '',
            buttonClass: '',
            data: null,
            submitting: false,
            status: null
        }

        this._toggleForm = this._toggleForm.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleServerResponse = this.handleServerResponse.bind(this);
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

    handleServerResponse = (ok, msg, form) => {
        this.setState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };

    handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        this.setState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/e53e9ce1-d771-4f80-9f81-cb173dd20b15",
            data: new FormData(form)
        })
            .then(r => {
                this.handleServerResponse(true, "Din besked er blevet sendt!", form);
            })
            .catch(r => {
                this.handleServerResponse(false, r.response.data.error, form);
            });
    };


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
                                {this.state.status && (
                                    <div className="form-submit-ok">
                                        <div className="icon-container">
                                            <FaRegCheckCircle />
                                        </div>
                                    </div>
                                )}
                                <button className="float-form-close" onClick={this._toggleForm}>
                                    <IoMdClose />
                                </button>
                            </div>
                            <div className="float-form-content">
                                <BlockContent blocks={data.sanity.allSiteExtras[0].contactFormTextRaw || []} />
                                <form onSubmit={this.handleOnSubmit}>
                                    <input type="text" name="name" placeholder="Dit navn" />
                                    <input type="email" name="email" placeholder="Din email" />
                                    <input type="text" name="phone" placeholder="Dit telefonnummer" />
                                    <button className="btn" disabled={this.state.submitting} type="submit">START DIN VÆKST HER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            />
        )
    }
}