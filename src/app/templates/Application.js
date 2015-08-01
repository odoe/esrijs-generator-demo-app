/*eslint no-unused-vars:0*/
import declare from 'dojo/_base/declare';

import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';

import config from 'app/config';

import MapView from 'app/components/map/WebMapView';
import Legend from 'app/components/legend/View';
import Search from 'app/components/search/View';

import templateString from 'dojo/text!./Application.html';

function doc(id) {
  return document.getElementById(id);
}

export default declare([
  _WidgetBase, _TemplatedMixin
], {
  templateString,
  widgetsInTemplate: true,

  postCreate() {
    var mapnode = doc('map-view');
    var legendnode = doc('legend-view');
    var mapOptions = this.get('mapOptions');
    var map = new MapView(config.webmap, mapnode);
    var legend = new Legend({}, legendnode);
    var search = new Search({map: map.map}, doc('search-div'));

    this.set('mapWidget', map);
    this.set('legendWidget', legend);
    this.set('searchWidget', search);
  },
  destroy() {
    this.legendWidget.destroy();
    this.mapWidget.destroy();
    this.searchWidget.destroy();
  }
});
