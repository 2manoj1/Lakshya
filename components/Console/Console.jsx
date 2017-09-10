import React from "react";
import { observer } from 'mobx-react';



import SocialAside from "./SocialAside.jsx";
import ImageSlider from "./ImageSlider.jsx";
import Mission from "./Mission.jsx";
import Introduction from "./Introduction.jsx";
import GallaryFb from "./GallaryFb.jsx";
import GeoLocationMap from "./GeoLocationMap.jsx";
import Events from "./Events.jsx";
import {Row, Col} from 'react-bootstrap';

export default class Console extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <SocialAside />
                <ImageSlider />
                <section id="ourmission" style={{paddingTop: "0"}}>
                  <div className='jarallax' data-jarallax='{"speed": 0.2, "imgWidth": 1920, "imgHeight": 1200}' style={{backgroundImage: "url('./assets/img/bg-grey.jpg')"}}>
                        <Introduction />
                        </div>
                        <div className='jarallax' data-jarallax='{"speed": -0.2}' style={{backgroundImage: "url('./assets/img/bg-white.jpg')"}}>
                        <Mission />
                        </div>
                </section>
                <section id="gallary" style={{paddingTop: "0"}}>
               
                        <GallaryFb  />
                </section>
                
                <section id="events">
                        <Events />
                </section>
                <section>
                        <GeoLocationMap />
                </section>
            </div>
        );
    }

}