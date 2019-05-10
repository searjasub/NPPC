import React, {Component} from 'react';
import '../../App.css';
import {MDBBadge, MDBContainer, MDBListGroup, MDBListGroupItem} from "mdbreact";

class Ranking extends Component {

    render() {
        return (
            <>
                <br/><br/><br/><br/>
                <MDBContainer>
                    <MDBListGroup className="w-responsive mx-auto p-3 mt-2">
                        <MDBListGroupItem active className="d-flex justify-content-between align-items-center">
                            Name
                            <MDBBadge
                                color="secondary"
                                pill>Wins
                            </MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                            Searjasub Lopez
                            <MDBBadge
                                color="primary" pill>
                                3
                            </MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                            Kagen Fontenot
                            <MDBBadge color="primary"
                                      pill>2
                            </MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                            Felix Martinez
                            <MDBBadge color="primary"
                                      pill>2
                            </MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                            Jeff Rehm
                            <MDBBadge color="primary"
                                      pill>1
                            </MDBBadge>
                        </MDBListGroupItem>

                    </MDBListGroup>
                </MDBContainer>
                <br/><br/><br/><br/>
            </>
        );
    }
}

export default Ranking;
