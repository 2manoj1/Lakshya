import React, { Component } from 'react';
import _ from "underscore";

class ImageSlider extends Component {
    static defaultProps = {
        imgObj : [{
            imgSrc: 'l1.jpg',
            imgMsgHearder: '<span class="bg-white">"Our<em> MISSION</em> is to<em> HELP</em></span>',
            imgMsgDesc: '<strong class="bg-white">those who<em> NEED</em> It"</strong>'
        },
        {
            imgSrc: 'l2.jpg',
            imgMsgHearder: '<span class="bg-white">"MAKE every CHILD</span>',
            imgMsgDesc: '<strong class="bg-white">HAPPY"</strong>'
        },
        {
            imgSrc: 'l3.jpg',
            imgMsgHearder: '<span class="bg-white">"HELP us<em> EMPOWER them,</em></span>',
            imgMsgDesc: '<strong class="bg-white">MOTIVATE them"</strong>'
        },
        {
            imgSrc: 'l4.jpg',
            imgMsgHearder: '<span class="bg-white">"TOGETHER we can CHANGE</span>',
            imgMsgDesc: '<strong class="bg-white">Many young LIVES"</strong>'
        },
        {
            imgSrc: 'l5.jpg',
            imgMsgHearder: '<span class="bg-white">"TOGETHER we can make</span>',
            imgMsgDesc: '<strong class="bg-white">a DIFFERENCE"</strong>'
        },
        {
            imgSrc: 'l6.jpg',
            imgMsgHearder: '<span class="bg-white">"Watch them SMILE</span>',
            imgMsgDesc: '<strong class="bg-white">and SHOW them HOPE"</strong>'
        },
        {
            imgSrc: 'l7.jpg',
            imgMsgHearder: '<span class="bg-white">"come JOIN us...</span>',
            imgMsgDesc: '<strong class="bg-white">a LITTLE can be ALOT"</strong>'
        },
        {
            imgSrc: 'l8.jpg',
            imgMsgHearder: '<span class="bg-white">"Be LAKSHYA,</span>',
            imgMsgDesc: '<strong class="bg-white">be the CHANGE."</strong>'
        }
        ]
    };

    getImages() {
        let self = this;
        return _.map(self.props.imgObj, (imgItem, key) => {
            return (
                <div key={key} className={key == 0 ? "item active pickgradient" : "item pickgradient"}>
                    <img className="carousel-img" src={"/assets/img/" + imgItem.imgSrc} style={{ width: "100%", height: "auto", maxHeight: "470px", overflow: "hidden"}} />
                    <div className="container">
                    <div className="carousel-caption">
                        <h1 dangerouslySetInnerHTML={{__html: imgItem.imgMsgHearder}}></h1>
                        <h1 dangerouslySetInnerHTML={{__html:imgItem.imgMsgDesc}}></h1>
                    </div>
                    </div>
                </div>
            )
        })
    }

    getIndicators() {
        let self = this;
        return _.map(self.props.imgObj, (imgItem, key) => {
            return (
                <li key={key} data-target="#myCarousel" data-slide-to={key} className={key == 0 ? "active" : ''}></li>
            )
        });
    }

    render() {
        if(this.props.imgObj) {
                return(

            <div className="container-fluide" id="home">
            <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                {/*<ol className="carousel-indicators">
                    {this.getIndicators()}
                </ol>*/}

                <div className="carousel-inner">

                    {this.getImages()}


                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev" >
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        );
    }
    return <div></div>
    }
}

export default ImageSlider;