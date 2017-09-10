import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { Row, Col, Jumbotron, Grid } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';


const SwiperDiv = (props) => {
    const params = {
        pagination: '',
        effect: 'coverflow',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: 2500,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    };
    return (<Swiper {...params}>
        {props.divb}
    </Swiper>);
}
@inject('GallaryImageFbStore')
@observer
class GallaryFb extends React.PureComponent {

    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.GallaryImageFbStore.fetchImage();
    }
    
    componentDidMount() {
          // GallaryImageFbStore.fetchImage();
    }
    
    getImagesSpan() {
        const Images  = this.props.GallaryImageFbStore.allImages;
        const imgDiv = [];
        let self = this;
        Images.forEach((img, key) => {
            if (key < 100) {
                imgDiv.push(<div key={img.id} onClick={self.openModal.bind(self, img.imgDetails.source)} style={{
                    width: "300px", height: "300px", backgroundImage: `url(${img.imgDetails.source})`, backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat"
                }}></div>);
            }
        })
        return imgDiv;
    }

    openModal(src) {
        this.imgElm.src = src;
        document.getElementById('myModal').style.display = "block";
    }

    closeModal() {
        document.getElementById('myModal').style.display = "none";
    }


    render() {
        const divb = this.getImagesSpan();

        if (divb.length > 2) {
            return (
            <Jumbotron>
            <div className='jarallax' data-jarallax='{"speed": -0.1}' style={{backgroundImage: "url('./assets/img/bg-wood.jpg')"}}>
             <Grid>
                <Row className="clearfix">
                    <Col sm={12}>
                     
                    <SwiperDiv params={this.params} divb={divb} />
                    
                    </Col>
                </Row>
               
                </Grid>
                 </div>

                    <div id="myModal" className="modal">
                        <div className="modal-content">
                        <span className="close cursor" onClick={this.closeModal.bind(this)}><i className="fa fa-times" aria-hidden="true"></i></span>
                            <div className="mySlides" style={{width:"100%", height:"inherit"}}>
                                <img ref={(img) => {this.imgElm = img}} src="" style={{width:"100%", height:"inherit"}} />
                            </div>
                        </div>
                    </div>
                
               </Jumbotron>

            );
        }
        else {
            return null;
        }
    }
}

GallaryFb.propTypes = {

};

export default GallaryFb;