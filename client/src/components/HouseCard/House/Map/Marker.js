import React from 'react';

class Marker extends React.Component {
  componentDidMount() {
    this.props.map.addSource(this.props.id, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: this.props.coords
        }
      }
    });

    this.props.map.addLayer({
      id: `${this.props.id}-layer`,
      type: 'circle',
      source: this.props.id,
      paint: {
        'circle-radius': 15,
        'circle-color': this.props.color
      }
    });

    this.props.map.addLayer({
      id: `${this.props.id}-label`,
      type: 'symbol',
      source: this.props.id,
      layout: {
        'text-field': this.props.id
      },
      paint: {
        'text-halo-color': 'white',
        'text-halo-width': 1
      }
    });
  }

  render() {
    return null;
  }
}

export default Marker;
