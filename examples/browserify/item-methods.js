var docReady = require('doc-ready');
var Outlayer = require('../../');
var eventie = require('eventie');

docReady( function() {
  var basic = document.querySelector('.container');
  var layout = new Outlayer( basic );
  var item = layout.items[0];

  var revealButton = document.querySelector('#reveal');
  var hideButton = document.querySelector('#hide');
  var moveButton = document.querySelector('#move');

  eventie.bind( revealButton, 'click', function() {
    item.reveal();
  });

  eventie.bind( hideButton, 'click', function() {
    item.hide();
  });

  eventie.bind( moveButton, 'click', function() {
    var x = Math.random() * 400;
    var y = Math.random() * 200;
    item.moveTo( x, y )
  });

});

