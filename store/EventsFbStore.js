import { observable, computed, reaction, action } from 'mobx';
import axios from "axios";
import _ from "underscore";
import moment from "moment";

class EventsFbStore {
    constructor() {

    }
    @observable eventData = {};
    pastEvents = [];
    upcomingEvents = [];

    @action fetchEvents(urlFbEvents = "https://graph.facebook.com/v2.9/Lakshya.changinglives?fields=events&access_token=147132012148263|wVRNpp3XrLPZu1-Krw8M72og_rY") {
        let self = this;
        axios.get(urlFbEvents)
            .then(function (response) {
                self.prepareEventsSources(response.data.events);
            })
            .catch(function (error) {
                console.log('error', error);
            });
    }

    prepareEventsSources(eData) {
        this.pastEvents = [];
        this.upcomingEvents = [];
        let self = this;
        let now = moment();
        _.each(eData.data, (event, i) => {
            let date = moment(event.start_time);
            if (now > date) {
                self.pastEvents.push(Object.assign({},event));
                
            } else {
               self.upcomingEvents.push(Object.assign({}, event));
            }
            
        });

        self.eventData = {"pastEvents": self.pastEvents,"upcomingEvents": self.upcomingEvents};
    }


}

const eventsFbStore = new EventsFbStore();

export default eventsFbStore;