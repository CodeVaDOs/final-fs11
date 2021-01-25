import React from 'react';
// import mapboxgl from 'mapbox-gl';

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    // mapboxgl.accessToken =
    //   'pk.eyJ1IjoiYWxpY2VhdGQyZCIsImEiOiJjaXRwa2Z2aW0wMDBoMzNxZnhzMjRweWY4In0.2IxUsrVVbFKal0J8OZSeOg';
    // const map = new mapboxgl.Map({
    //   container: this.mapContainer,
    //   style: 'mapbox://styles/mapbox/streets-v9',
    //   center: [13.342817, 52.488648],
    //   zoom: 14.6
    // });
    //
    // map.on('load', (...args) => {
    //   this.setState({ map });
    // });
  }

  render() {
    const style = {
      height: '400px',
      width: '453px',
      marginRight: '20px',
      borderRadius: '20px'
    };

    return (
      <div
        style={style}
        ref={x => (this.mapContainer = x)}>
        {this.state.map &&
        this.props.children &&
        React.Children.map(
          this.props.children,
          child =>
            React.cloneElement(child, {
              map: this.state.map
            })
        )}
      </div>
    );
  }
}

export default Map;
