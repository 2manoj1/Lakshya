import React, { Component, PropTypes } from 'react';
import { Tab, Row, Col, Nav, Navbar, NavbarBrand, NavItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import _ from 'underscore';
//import GallaryImageFbStore from '../../store/GallaryImageFbStore.js';

@inject('EventsFbStore')
@observer 
class Events extends Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.EventsFbStore.fetchEvents();
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    getTabContent(tabValue) {

        const AllEvents = this.props.EventsFbStore.eventData;
        let data;
        let self = this;
        if(tabValue == 0) {
            data = AllEvents.upcomingEvents;
        }
        else {
            data = AllEvents.pastEvents;
        }
        let allEventsDiv = [];
        if(data) {
        _.each(data, (item, key)=>{
            allEventsDiv.push(<ListGroupItem key={item.id} header={item.name}>{self.escape(item.description)}</ListGroupItem>);
        });
        return <ListGroup>{allEventsDiv}</ListGroup>;
    }
        else return null;

    }

    escape (val) {
    if (typeof(val)!="string") return val;
    return val      
        .replace(/\r\n/g, "<br />");
}


    render() {
        const tab1Content = this.getTabContent(0);
        const tab2Content = this.getTabContent(1);
        return (
            <div className="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                    <Row className="clearfix">
                        <Col sm={2}>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first">
                                    Upcoming Events
                                </NavItem>
                                <NavItem eventKey="second">
                                    Past Events
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    {tab1Content}
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {tab2Content}
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>

        );
    }
}


export default Events;