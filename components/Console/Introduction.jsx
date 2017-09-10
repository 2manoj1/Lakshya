import React, { Component, PureComponent } from 'react';
import { Row, Col, Jumbotron, Grid } from 'react-bootstrap';

class Introduction extends PureComponent {
    render() {
        return (
            
            <Jumbotron>
             <Grid>
                <Row className="clearfix">
                    <Col sm={4}>
                        <div className="fb-page" data-href="https://www.facebook.com/Lakshya.changinglives" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Lakshya.changinglives" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Lakshya.changinglives">Lakshya-Changing Lives</a></blockquote></div>

                    </Col>
                    <Col sm={8}>
                    <div className="text-white">
                        <h2>Lakshya</h2>
                        <p>Started by a group of like minded individuals,<font color="#9ecf39"> Lakshya</font> aims at helping <font color="greenyellow">orphans</font> and <font color="#9ecf39">underprivileged children</font> in their upliftment through education. We are contributing to help children obtain basics like clothes and good food but also working to help them get educated through tie ups, contributions.</p>
                        <p>We have also associated with an eye clinic and conducted a successful eye donation camp with over 500 eye donations.</p>
                        <p>Lakshya is committed to bringing about a change in any and every way possible.</p>
                        <p>People often talk about doing some form of charity but never know where to start. Help out by making a small donation to our fund, or you can do more by getting involved with us in our effort. These children are the future of our country and no contribution is small. <font color="#9ecf39">Spread the word, its time for a change.</font></p>
                    </div>
                    </Col>
                    
                </Row>
                {/*
                <Row>
                        <Col sm={12}>
                            <div className
                                ="fb-comments" data-href="http://facebook.com/Lakshya.changinglives" data-numposts="5"></div>
                        </Col>
                    </Row>
                */}
                 </Grid>
                 
            </Jumbotron>
        );
    }
}

export default Introduction;