import React, {Component} from 'react';
import './App.css';
import {MDBBtn} from "mdbreact";

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

class Header extends Component {


    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Neumont Ping Pong Club   </strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right center>
                        <MDBNavItem center>
                            <MDBNavLink to="./">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem center>
                            <MDBNavLink to="./Information">Information</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem center>
                            <MDBNavLink to="./Ranking">Ranking</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem center>
                            <MDBBtn href="./Login" size="sm" >Login</MDBBtn>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Header;
