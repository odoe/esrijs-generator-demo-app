/*eslint no-unused-vars:0*/
import declare from 'dojo/_base/declare';
import domConstruct from 'dojo/dom-construct';

import _WidgetBase from 'dijit/_WidgetBase';
import _TemplatedMixin from 'dijit/_TemplatedMixin';

import config from 'app/config';
import Search from 'esri/dijit/Search';

// import i18n from 'dojo/i18n!./nls/Search';
import templateString from 'dojo/text!./templates/Search.html';

export default declare([
  _WidgetBase, _TemplatedMixin
], {

  templateString,
  baseClass: 'search',

  postCreate() {
    var opts = config.components.search.options;
    opts.map = this.get('map');
    var search = new Search(opts, this.dijitNode);
    this.set('search', search);
  },

  destroy() {
    this.search.destroy();
  }

});

