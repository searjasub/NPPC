import React, {Component} from 'react';
import './App.css';
import {MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdbreact";

class Members extends Component {

    state = {
        flipped1: false,
    };

    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({[cardId]: !this.state[cardId]});
    };

    render() {
        return (
            <>
                <br/><br/><br/>
                <div className="container">
                    <MDBRow>
                        <MDBCol>
                            {/*SEARJASUB LOPEZ*/}
                            <MDBContainer >
                                <MDBCol style={{minHeight: '26rem', maxWidth: "22rem"}}>
                                    <MDBContainer className="text-center m-4">
                                        <MDBCard className="" style={{height: "560px"}}>
                                            <img src="https://i.ibb.co/CQy9Hkg/bscs1.jpg" alt="bscs" style={{height: "130px"}}/>
                                            <MDBCardBody>
                                                <img src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" alt=""
                                                     className="rounded-circle" style={{height: "100px", width: "100px"}}/>
                                                <h4 className="font-weight-bold mb-3">Searjasub Lopez</h4>
                                                <h5 className="font-weight-bold text-primary">President</h5>
                                                <hr/>
                                                <p>
                                                    From Santiago, Chile. 24 years living in earth. Married almost 3 years ago.
                                                    Father of little Sear (19 Months) and baby Kai (2 Weeks)
                                                </p>
                                                <hr/>
                                                <ul className="list-inline py-2">
                                                    <li className="list-inline-item">
                                                        <a href="#!" className="p-2 fa-lg fb-ic">
                                                            <MDBIcon fab icon="facebook-f"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="http://www.linkedin.com/in/searjasub" className="p-2 fa-lg li-ic"
                                                           target="_blank">
                                                            <MDBIcon fab icon="linkedin"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBContainer>
                                </MDBCol>
                            </MDBContainer>
                        </MDBCol>
                        <MDBCol>
                            {/*JEFFREY REHM*/}
                            <MDBContainer >
                                <MDBCol style={{minHeight: '26rem', maxWidth: "22rem"}}>
                                    <MDBContainer className="text-center m-4">
                                        <MDBCard className="" style={{height: "560px"}}>
                                            <img src="https://i.ibb.co/z6YJgNz/bswd.jpg" alt="bscs" style={{height: "130px"}}/>
                                            <MDBCardBody>
                                                <img src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" alt=""
                                                     className="rounded-circle" style={{height: "100px", width: "100px"}}/>
                                                <h4 className="font-weight-bold mb-3">Jeffrey Rehm</h4>
                                                <h5 className="font-weight-bold text-success">Member</h5>
                                                <hr/>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat tenetur odio suscipit non commodi vel eius veniam maxime?
                                                </p>
                                                <hr/>
                                                <ul className="list-inline py-2">
                                                    <li className="list-inline-item">
                                                        <a href="#!" className="p-2 fa-lg fb-ic">
                                                            <MDBIcon fab icon="facebook-f"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="" className="p-2 fa-lg li-ic"
                                                           target="_blank">
                                                            <MDBIcon fab icon="linkedin"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBContainer>
                                </MDBCol>
                            </MDBContainer>
                        </MDBCol>
                        <MDBCol>
                        {/*FELIX MARTINEZ*/}
                            <MDBContainer >
                                <MDBCol style={{minHeight: '26rem', maxWidth: "22rem"}}>
                                    <MDBContainer className="text-center m-4">
                                        <MDBCard className="" style={{height: "560px"}}>
                                            <img src="https://i.ibb.co/Vp2gV4G/bsis.jpg" alt="bscs" style={{height: "130px"}}/>
                                            <MDBCardBody>
                                                <img src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" alt=""
                                                     className="rounded-circle" style={{height: "100px", width: "100px"}}/>
                                                <h4 className="font-weight-bold mb-3">Felix Martinez</h4>
                                                <h5 className="font-weight-bold text-success">Member</h5>
                                                <hr/>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat tenetur odio suscipit non commodi vel eius veniam maxime?
                                                </p>
                                                <hr/>
                                                <ul className="list-inline py-2">
                                                    <li className="list-inline-item">
                                                        <a href="#!" className="p-2 fa-lg fb-ic">
                                                            <MDBIcon fab icon="facebook-f"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="" className="p-2 fa-lg li-ic"
                                                           target="_blank">
                                                            <MDBIcon fab icon="linkedin"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBContainer>
                                </MDBCol>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </div>
            </>
        );
    }
}

export default Members;