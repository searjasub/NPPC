import React, {Component} from 'react';
import '../../App.css';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdbreact';
import {withFirebase} from "../Firebase/";

const defaultState = {
    email: "",
    password: ""
};

class Signup extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = defaultState;
        this.createUser = this.createUser.bind(this);
    }

    createUser(email, password) {
        this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
            .then((response) => {
                localStorage.setItem('userId', response.user.uid);

            })
            .catch((error) => {
                this.setState({error: error.message});
                console.log(error)
            });
    }

    onChange(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {email, password} = this.state;
        return (
            <>
                <MDBContainer>
                    <MDBRow className="w-responsive mx-auto p-3 mt-2">
                        <MDBCol>
                            <MDBCard>
                                <div className=" p-3 grey lighten-2">
                                    <MDBRow className="d-flex justify-content-start">
                                        <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                           Sign up
                                        </h3>
                                    </MDBRow>
                                </div>
                                <MDBCardBody className="mx-4 mt-4">
                                    <MDBInput label="Your email"
                                              group
                                              name="email"
                                              type="text"
                                              validate
                                              value={email}
                                              onChange={(event) => {
                                                  this.onChange(event)
                                              }}/>
                                    <MDBInput
                                        label="Your password"
                                        group
                                        type="password"
                                        value={password}
                                        name="password"
                                        validate
                                        containerClass="mb-0"
                                        onChange={(event) => {
                                            this.onChange(event)
                                        }}
                                    />
                                    <div className="text-danger">
                                        {this.state.error}
                                    </div>
                                    <div className="text-center mb-4">
                                        <MDBBtn
                                            color="danger"
                                            type="button"
                                            onClick={() => this.createUser(email, password)}
                                        >
                                            Sign up
                                        </MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}

export default withFirebase(Signup);
