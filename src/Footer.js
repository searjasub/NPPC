import React, {Component} from 'react';
import './App.css';
import {MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow} from "mdbreact";

class Footer extends Component {

    render() {
        return (
            <>
                <MDBFooter color="mdb-color" className="font-small pt-1 page-footer">
                    <MDBContainer className="text-center text-md">
                        <MDBRow className="text-center text-md mt-3 pb-3">
                            <MDBCol lg="4" className="mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Neumont Ping Pong Club
                                </h6>
                                <p>
                                    If you have any question you can reach us in Discord.
                                </p>
                            </MDBCol>
                            <MDBCol md="2" lg="1" className="mx-auto mt-3">
                                <a href="https://discord.gg/6GNDy2r" target="_blank">
                                    <MDBIcon fab icon="discord" md="8"/>
                                </a>
                            </MDBCol>

                            <MDBCol className="mx-auto mt-3">
                                <p>147 S Main Street, Salt Lake City, UT</p>
                            </MDBCol>
                        </MDBRow>
                        <hr/>
                        <MDBRow className="d-flex align-items-center">
                            <MDBCol>
                                <p className="text-center grey-text">
                                    &copy; {new Date().toDateString()} Copyright: Searjasub Lopez
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