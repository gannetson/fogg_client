import Ember from 'ember';

export default Ember.Component.extend({
  //elementId: 'regions_div',

  didInsertElement: function(){
    "use strict";
    google.load("visualization", "1", {packages:["geochart"]});
    google.setOnLoadCallback(function () {
      //var data = google.visualization.arrayToDataTable([
      //  ["NL"],
      //  ["BE"]
      //]);
      //var options = {};
      //var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      //chart.draw(data, options);
      });
  }
});
