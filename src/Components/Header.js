import React, {Component} from 'react';
import '../App.css';
import {
    MDBBtn,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from "mdbreact";

const AuthTag = (isLoggedIn) => {

    if (isLoggedIn) {
        return (
            <MDBNavItem center>
                <MDBBtn href="/Login" color="red" size="sm">Logout</MDBBtn>
            </MDBNavItem>
        )
    } else {
        return (
            <MDBNavItem center>
                <MDBBtn href="/Login" size="sm">Login</MDBBtn>
            </MDBNavItem>
        )
    }

};

class Header extends Component {

    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {

        const isLoggedIn = localStorage.getItem('userId');

        console.log(localStorage.getItem('userId'));

        return (
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Neumont Ping Pong Club </strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right >
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
            </MDBNavbar>
        );
    }
}

export default Header;
