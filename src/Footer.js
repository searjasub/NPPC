import React, {Component} from 'react';
import './App.css';
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";

class Footer extends Component {

    render() {
        return (
            <>
                <MDBFooter color="mdb-color" className="font-small pt-4 mt-3">
                    <MDBContainer className="text-center text-md">
                        <MDBRow className="text-center text-md-left mt-3 pb-3">
                            <MDBCol lg="4" className="mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Neumont Ping Pong Club
                                </h6>
                                <p>
                                    If you have any question you can reach us in Discord.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="1" className="mx-auto mt-3">
                                <div className="text-left text-md-right">
                                    <a className="btn-floating btn-lg rgba-white-slight">
                                        <i className="fab fa-discord" onClick="https://discord.gg/6GNDy2r" />
                                    </a>
                                </div>
                            </MDBCol>

                            <MDBCol md="4" lg="2" xl="3" className="mx-auto mt-3">
                                <p>
                                    <i className="fa fa-home mr-3"/><br/>147 S Main Street, Salt Lake City, UT
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow className="d-flex align-items-center">
                            <MDBCol md="8" lg="8">
                                <p className="text-center text-md-left grey-text">
                                    &copy; {new Date().getFullYear()} Copyright: Searjasub Lopez
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBFooter>
            </>
        );
    }
}

export default Footer;