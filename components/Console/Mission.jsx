import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Row, Col, Nav, Navbar, NavItem, Grid } from "react-bootstrap";


const theStory = (
    <div>
        <p>
            Lakshya was the brain child of Kunal Kabra, Abhaya Rao and Aman Singh. With support from college friends, a small initiative was started. The aim was simple, to help underprivileged children. The strategy was a no-brainer, putting up rock shows at different venues, collecting charity for orphanages and donating. Members of Lakshya collaborated with other bands and a line up for the shows was decided.
Members then started approaching venues and after much effort, Forum Mall, Bangalore gave Lakshya its first show, three 20 minute slots in the centre of the mall.
Members also started approaching companies for sponsorship and Gallerypapers and radio channels for marketing but no one supported such small organizations.
With no support and marketing through word of mouth, Lakshya went into its first show. A rock act and a rap show was out up in the show and an amount of nearly Rs. 6000 was collected.
Two similar shows were put up in Bangalore Central Mall, Museum road soon after. The charity collected from these shows were used to celebrate festivals at Vishwas orphanage in JP Nagar, Bangalore as well bringing the children sweets, clothes, food items, etc.
</p>

        <p>
            With eyes on different things, Lakshya’s next event was a day long eye donation camp at Forum Mall, Bangalore. Where IT majors at that point termed eye donation camps with over a 100 eye donations as successful, during this eye donation camp the count went up to 520+ eye donations. A record of every donor was submitted at Prabha Eye Clinic, Jayanagar, Bangalore.
With a larger and a more experienced team, Lakshya returned to its original formula of putting up rock shows. The last show was put up at Forum Mall where the show went on for nearly two hours and the charity collected went upto Rs. 34000. Two computers and a Television were also donated.
</p>

        <p>
            With the collection, Lakshya supported Sneha Orphanage, Horamavu, Bangalore. Clothes were bought for each child, the TV and the computers were installed in the orphanage. Daily items like toothbrushes, soaps, undergarments, rice, pulses, etc were bought repeatedly for the next few months.
Members of Lakshya also contributed Rs. 12000 towards treatment of a maid suffering from cancer.
</p>
        <p>
            Looking back to the kind of effort made by the members of Lakshya and their friends, the kind of help provided at orphanages has been short lived. With bigger aims, Lakshya has been registered as a society with the primary aim of uplifting the children through traditional as well as vocational education.
    </p>
    </div>);

const belif = (
    <div>
        <p>
            Children are the future of our country. In a country like ours where there are many children deprived of basic needs, it becomes important for us to do whatever we can at a personal level. We believe that providing a platform where people can help is of utmost importance.  Our belief is simply that the future of the country could be bright if every child is educated and empowered to lead a successful life. The need to empower the underprivileged children is desperate and if we succeed in doing so, then it would bring about a change.
</p>
    </div>);

const ourVision = (
    <div>
        <p>
            In a country like ours where a huge part of the population is children, education is the most important for personal development of these children and the development of the country as a whole.The ultimate vision of Lakshya is to setup a center for vocational education as well as educate these children to clear school level exams to empower them to be successful in the world.
            </p>
    </div>);

const tabsInstance = (
    <Tab.Container defaultActiveKey={1} id="missionTab">
        <Row className="clearfix">
            <Col sm={2}>
                <Nav bsStyle="pills" stacked>
                    <NavItem eventKey={1}>
                        Our Story
                                </NavItem>
                    <NavItem eventKey={2}>
                        Belif
                                </NavItem>
                    <NavItem eventKey={3}>
                        Our Vision
                                </NavItem>
                </Nav>
            </Col>
            <Col sm={10}>
                <Tab.Content animation>
                    <Tab.Pane eventKey={1}>
                        {theStory}
                    </Tab.Pane>
                    <Tab.Pane eventKey={2}>
                        {belif}
                    </Tab.Pane>
                    <Tab.Pane eventKey={3}>
                        {ourVision}
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
);

class Mission extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row className="clearfix">
                <Col sm={12}>
                {tabsInstance}
                </Col>
            </Row>
            </Grid>
        );
    }
}


export default Mission;