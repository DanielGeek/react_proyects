
class Markers {

  constructor() {
    this.actives = {};
  }

  addMarker(marker) {
    console.log('marker en admarker', marker)
    this.actives[marker.id] = marker;
    return marker;
  }

  removeMaker( id ) {
    // delete property in obj
    delete this.actives[id];
  }

  updateMarker( marker ) {
    this.actives[marker.id] = marker;
  }

}

module.exports = Markers;