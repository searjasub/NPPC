import React, {Component} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdbreact';
import {withFirebase} from "../Firebase/";

const defaultState = {
    email: "slopez@student.neumont.edu",
    password: "Neumont2019"
};

class Login extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = defaultState;
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser(email, password) {
        this.props.firebase.doSignInWithEmailAndPassword(email, password)
            .then((response) => {
                localStorage.setItem('userId', response.user.uid);
                console.log(response.user)
            })
            .catch((error) => {
                this.setState({error: error.message});
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
                                <div className=" pt-3 grey lighten-2">
                                    <MDBRow className="d-flex justify-content-start">
                                        <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                            Log in
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
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Forgot
                                        <Link
                                            to="/forgot"
                                            className="dark-grey-text font-weight-bold ml-1"
                                         >
                                            Password?
                                        </Link>
                                    </p>
                                    <div className="text-danger">
                                        {this.state.error}
                                    </div>
                                    <div className="text-center mb-4">
                                        <MDBBtn
                                            color="danger"
                                            type="button"
                                            onClick={() => this.loginUser(email, password)}
                                        >
                                            Log in
                                        </MDBBtn>
                                    </div>
                                    <p className="font-small grey-text d-flex justify-content-center">
                                        Don't have an account?
                                        <a
                                            href="/signup"
                                            className="dark-grey-text font-weight-bold ml-1"
                                        >
                                            Sign up
                                        </a>
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}

export default withFirebase(Login);
