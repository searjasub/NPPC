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


    // <img src="https://i.ibb.co/yPTd66V/bscs1.jpg" alt="bscs" style={{height: "130px"}}/>
    // <img src="https://i.ibb.co/pbKrjSg/bstm.jpg" alt="bstm" style={{height: "130px"}}/>
    // <img src="https://i.ibb.co/BwYQ8DX/bsgd.jpg" alt="bsgd"/>
    render() {
        return (
            <>
                <br/><br/><br/>
                <div className="container-fluid">
                    <MDBRow>
                        <MDBCol>
                            {/*SEARJASUB LOPEZ*/}
                            <MDBContainer >
                                <MDBCol style={{minHeight: '26rem', maxWidth: "22rem"}}>
                                    <MDBContainer className="text-center">
                                        <MDBCard className="" style={{height: "400px"}}>
                                            <img src="https://i.ibb.co/yPTd66V/bscs1.jpg" alt="bscs" style={{height: "130px"}}/>
                                            <MDBCardBody>
                                                <img src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" alt=""
                                                     className="rounded-circle" style={{height: "100px", width: "100px"}}/>
                                                <h4 className="font-weight-bold mb-3">Searjasub Lopez</h4>
                                                <h5 className="font-weight-bold text-primary">President</h5>
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
                                    <MDBContainer className="text-center">
                                        <MDBCard className="" style={{height: "400px"}}>
                                            <img src="https://i.ibb.co/z6YJgNz/bswd.jpg" alt="bswd" style={{height: "130px"}}/>
                                            <MDBCardBody>
                                                <img src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" alt=""
                                                     className="rounded-circle" style={{height: "100px", width: "100px"}}/>
                                                <h4 className="font-weight-bold mb-3">Jeffrey Rehm</h4>
                                                <h5 className="font-weight-bold text-success">Member</h5>
                                                <hr/>
                                                <ul className="list-inline py-2">
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
                                    <MDBContainer className="text-center">
                                        <MDBCard className="" style={{height: "400px"}}>
                                            <img src="https://i.ibb.co/HY9Pyj7/bsis.jpg" alt="bsis" style={{height: "130px"}}/>
                                            <MDBCardBody>
                                                <img src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" alt=""
                                                     className="rounded-circle" style={{height: "100px", width: "100px"}}/>
                                                <h4 className="font-weight-bold mb-3">Felix Martinez</h4>
                                                <h5 className="font-weight-bold text-success">Member</h5>
                                                <hr/>
                                                <ul className="list-inline py-2">
                                                    <li className="list-inline-item">
                                                        <a href="#!" className="p-2 fa-lg fb-ic">
                                                            <MDBIcon fab icon="twitch"/>
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