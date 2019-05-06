import React, {Component} from 'react';
import './App.css';
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";

class Footer extends Component {

    render() {
        return (
            <>
                <MDBFooter color="" className="font-small pt-1 page-footer text-dark">
                    <hr className="mb-1"/>
                    <MDBContainer className="text-center text-md d-flex justify-content-between">
                        <MDBCol className=" text-md">
                            <MDBRow lg="4" className="mb-0">
                                <h6 className="text-uppercase font-weight-bold">
                                    Neumont Ping Pong Club
                                </h6>
                            </MDBRow>
                            <MDBRow>
                                <p>147 S Main Street, Salt Lake City, UT</p>
                            </MDBRow>
                            {/*<MDBCol md="2" lg="1" className="mx-auto mt-3">*/}
                            {/*    <a href="https://discord.gg/6GNDy2r" target="_blank">*/}
                            {/*        <MDBIcon fab icon="discord" md="8"/>*/}
                            {/*    </a>*/}
                            {/*</MDBCol>*/}
                        </MDBCol>

                        <MDBCol className="d-flex align-items-center">
                            <p className="text-center grey-text">
                                &copy; {new Date().toDateString()} Copyright: Searjasub Lopez
                            </p>
                        </MDBCol>
                    </MDBContainer>
                </MDBFooter>
            </>
        );
    }
}

export default Footer;