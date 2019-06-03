import React, {Component} from 'react';
import '../App.css';
import {MDBBtn, MDBCollapse, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink} from "mdbreact";
import {withSession} from "./Session";
import {withFirebase} from "./Firebase";
const CustomHeader = (isLoggedIn) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar">
            <MDBNavbarBrand>
                <strong className="text-dark">Neumont Ping Pong Club </strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse}/>
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav right>
                    <MDBNavItem center>
                        <MDBBtn href="/tournament" size="sm">Tournament Sign Up</MDBBtn>
                    </MDBNavItem>
                    <MDBNavItem center>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem center>
                        <MDBNavLink to="/Information">Information</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem center>
                        <MDBNavbarNav>
                            <MDBNavLink to="/Ranking">Ranking</MDBNavLink>
                            {/*<MDBNavLink to="./Ranking">Ranking</MDBNavLink>*/}
                        </MDBNavbarNav>
                    </MDBNavItem>
                    <MDBNavItem center>
                        <MDBNavLink to="/Members">Members</MDBNavLink>
                    </MDBNavItem>

                    <AuthTag isLoggedIn={isLoggedIn}/>

                </MDBNavbarNav>
            </MDBCollapse>
        </nav>
    );
};

const AuthTag = ({user, onLogout}) => {
    if (user) {
        return (
            <MDBNavItem center>
                <MDBNavLink to="/Login" size="sm"
                onClick={onLogout}>Logout</MDBNavLink>
            </MDBNavItem>
        )
    } else {
        return (
            <MDBNavItem center>
                <MDBNavLink to="/Login" size="sm">
                    Login
                </MDBNavLink>
            </MDBNavItem>
        )
    }

};

class Header extends Component {
    constructor(props, context, onLogout) {
        super(props, context);
        this.onLogout = this.onLogout.bind(this);
    }

    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    onLogout = () => {
        this.props.firebase.doSignOut();
        // redirect right here
    };

    render() {

        const {user} = this.props.session.state;

        return (
            <header>

                <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">

                    <div class="container">
                        <p class="navbar-brand" ></p>

                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#basicExampleNav"
                                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="basicExampleNav">
                            <ul class="navbar-nav mr-auto smooth-scroll">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/information">Information</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/ranking">Ranking</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/tournament">Tournament Sign Up</a>
                                </li>
                                {user && (user.name)}
                                <AuthTag onLogout={this.onLogout} user={user}/>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div  class="view" className="imagen">
                </div>
            </header>
        );
    }
}

export default withFirebase(withSession(Header));
