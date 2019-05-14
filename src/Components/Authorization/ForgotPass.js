import React, {Component} from 'react';
import '../../App.css';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdbreact';
import {withFirebase} from "../Firebase/";

const defaultState = {
    email: "slopez@student.neumont.edu",
    loading: false,
    sent: false
};

const CardHeader = () => {

    return (
        <div className=" pt-3 grey lighten-2">
        <MDBRow className="d-flex justify-content-start">
            <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                Forgot Password
            </h3>
        </MDBRow>
    </div>
    );
};

const ForgotPasswordForm = ({email, loading, error, onChange, forgotPassword}) => {

    return (
        <MDBCardBody className="mx-4 mt-4">
            <MDBInput label="Your email"
                      group
                      name="email"
                      type="text"
                      validate
                      value={email}
                      onChange={(event) => {
                          onChange(event)
                      }}/>

            <div className="text-danger">
                {error}
            </div>
            <div className="text-center mb-4">
                <MDBBtn
                    disabled={loading}
                    color="danger"
                    type="button"
                    onClick={() => forgotPassword(email)}
                >
                    Send New Password
                </MDBBtn>
            </div>
        </MDBCardBody>
    );
};

class ForgotPass extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = defaultState;
        this.forgotPassword = this.forgotPassword.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    forgotPassword(email) {
        this.setState({loading: true});
        this.props.firebase.doPasswordReset(email)
            .then((error) => {
                this.setState({sent: true});

            })
            .catch((error) => {
                this.setState({
                    error: error.message,
                    loading: false
                });
            });
    }

    onChange(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {email, error, loading, sent} = this.state;
        return (
            <>
                <MDBContainer>
                    <MDBRow className="w-responsive mx-auto p-3 mt-2">
                        <MDBCol>
                            <MDBCard>
                                <CardHeader/>

                                { !sent ?
                                    <ForgotPasswordForm
                                        email={email}
                                        loading={loading}
                                        error={error}
                                        forgotPassword={this.forgotPassword}
                                        onChange={this.onChange}
                                    />
                                    :
                                    <div className="text-success m-5 h4">
                                        Password email sent!
                                    </div>
                                }

                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}

export default withFirebase(ForgotPass);
