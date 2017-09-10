import React from "react";
import Paper from 'material-ui/Paper';

const style = {
    position: "absolute",
    height: 100,
    width: "99%",
    textAlign: 'center',
    display: 'inline-block',
    bottom: 0,

};

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="contuctus">

                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-lg-5">
                        <h3>About Us</h3>
                        <p><a href="#ourmission">Our Mission</a></p>
                        <p><a href="#ourteam">Our Team</a></p>
                        <p><a href="#events">Our Events</a></p>

                    </div>
                    <div className="col-xs-6 col-sm-5 col-lg-5">
                        <h3>Contact</h3>
                        <p><span className="glyphicon glyphicon-map-marker"></span><span> Bangalore, India</span></p>
                        <p><span className="glyphicon glyphicon-phone"></span><span> +91 95906 92898</span></p>
                        <p><span className="glyphicon glyphicon-envelope"></span> <span>info@lakshyachanginglives.org</span></p>
                    </div>
                    <div className="col-xs-1 col-sm-2 col-lg-2">
                        <a className="up-arrow" href="#myCarousel" data-toggle="tooltip" title="TO TOP">
                            <span className="glyphicon glyphicon-chevron-up"></span>
                        </a>
                    </div>
                </div>

            </footer>
        );
    }

}