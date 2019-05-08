import React, {Component} from 'react';
import './App.css';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdbreact';
import {withFirebase} from "./components/Firebase";


const defaultState = {
    email: "",
    password: "",
    name: ""
};

class Login extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = defaultState;
    }

    onChange(event){
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const{email, password, name} = this.state;
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
                                              onChange={(event) => {this.onChange(event)}}/>
                                    <MDBInput label="Your display name"
                                              group
                                              type="text"
                                              validate value={name}/>
                                    <MDBInput
                                        label="Your password"
                                        group
                                        type="password"
                                        value={password}
                                        validate
                                        containerClass="mb-0"
                                    />
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        Forgot
                                        <a
                                            href="#!"
                                            className="dark-grey-text font-weight-bold ml-1"
                                        >
                                            Password?
                                        </a>
                                    </p>
                                    <div className="text-center mb-4 mt-5">
                                        <MDBBtn
                                            color="danger"
                                            type="button"
                                            className="btn-block z-depth-2"
                                        >
                                            Log in
                                        </MDBBtn>
                                    </div>
                                    <p className="font-small grey-text d-flex justify-content-center">
                                        Don't have an account?
                                        <a
                                            href="#!"
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
