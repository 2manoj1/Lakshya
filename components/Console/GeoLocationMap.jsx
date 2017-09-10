import _ from "underscore";
import {
  default as React,
  Component,
} from "react";


import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

var image = {
  url: './assets/img/favicon.ico',
  size: new google.maps.Size(71, 71),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(10, 0),
  scaledSize: new google.maps.Size(25, 25)
};
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 20.5937 , lng: 78.9629 }}
    mapTypeId={'roadmap'}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
        icon={image}
      />
    ))}
  </GoogleMap>
));

export default class GeoLocationMap extends Component {
constructor(props) {
    super(props);
    this.state = {
    markers: [{
      position: {
        lat: 12.9716,
        lng: 77.5946,
      },
      key: "Bangalore",
      defaultAnimation: 2,
      map: 'map',
      label: "Bangalore"
    },
    {
      position: {
        lat: 17.3850, 
        lng: 78.4867,
      },
      key: "Hyderabad",
      defaultAnimation: 2,
    },
    {
      position: {
        lat: 28.7041,
        lng: 77.1025,
      },
      key: "Delhi",
      defaultAnimation: 2,
    }],
  };

  this.handleMapLoad = this.handleMapLoad.bind(this);
  this.handleMapClick = this.handleMapClick.bind(this);
  this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
    
}

  

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      //console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        "Right click on the marker to remove it",
        "Also check the code!"
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (
      <div className="row-fluid">
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: "400px" }} />
          }
          mapElement={
            <div style={{ height: "400px" }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  }
}