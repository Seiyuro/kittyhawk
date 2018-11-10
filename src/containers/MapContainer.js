import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFuc2VycmFubyIsImEiOiJjam9jMHhvZ3IyODd6M3FwYnpvcGwydmY4In0.7nCfYaFj9H2v7vk2k692mQ';

class Map extends React.Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      lng: -83.732124,
      lat: 42.279594,
      zoom: 13
    };
  }

  componentDidMount() {
      debugger;
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: document.getElementById('map'),
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}

export default Map
// ReactDOM.render(<Application />, document.getElementById('map'));