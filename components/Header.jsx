import React from "react";
import { Navbar, MenuItem, Nav, NavDropdown, NavItem } from "react-bootstrap";
import Scrollspy from 'react-scrollspy'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNav: 1
        }
        /* <Navbar inverse collapseOnSelect fixedTop fluid id="myNavBar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><img style={{
                            position: "relative",
                            top: "-25px"
                        }} src="/assets/img/logo_r.png" /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight bsStyle="pills" activeKey={this.state.activeNav}
                        onSelect={(eventKey) => {
                            let hrefValue = "#";
                            switch (eventKey) {
                                case 1:
                                    hrefValue = "#myCarousel"
                                    break;
                                case 2:
                                    hrefValue = "#ourmission"
                                    break;
                                case 3:
                                    hrefValue = "#gallary"
                                    break;
                                case 4:
                                    hrefValue = "#helpus"
                                    break;
                                case 5:
                                    hrefValue = "#contuctus"
                                    break;
                            }
                            window.location = hrefValue;
                            this.setState({
                                activeNav: eventKey
                            })
                        }}>
                        <NavItem eventKey={1} href="#myCarousel">HOME</NavItem>
                        <NavItem eventKey={2} href="#ourmission">OUR MISSION</NavItem>
                        <NavItem eventKey={3} href="#gallary">GALLARY</NavItem>
                        <NavItem eventKey={4} href="#helpus">HELP US</NavItem>
                        <NavItem eventKey={5} href="#contuctus">CONTUCT US</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            */
    }

    render() {
        return (


            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="/assets/img/pp/logo.png" style={{
                                height: "95px",
                                top: "-13px",
                                position: "relative"
                            }} />
                        </a>
                    </div>
                    <div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#myCarousel"><i className="fa fa-home"></i><span>HOME</span></a></li>
                                <li><a href="#ourmission"><i className="fa fa-bullseye"></i><span>OUR MISSION</span></a></li>
                                <li><a href="#gallary"><i className="fa fa-camera-retro"></i><span>GALLARY</span></a></li>
                                <li><a href="#events"><i className="fa fa-calendar"></i><span>EVENTS</span></a></li>
                                <li><a href="#contuctus"><i className="fa fa-address-book"></i><span>CONTACT US</span></a></li>
                                <li><a href="#"><i className="fa fa-heart"></i><span>Donate Now</span></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>



        );
    }

}