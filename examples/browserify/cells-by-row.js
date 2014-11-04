var docReady = require('doc-ready');
var CellsByRow = require('../cells-by-row');

docReady( function() {
  ( function() {
    var container = document.querySelector('#basic');
    var layout = new CellsByRow( container );
  })();
  ( function() {
    var container = document.querySelector('#bottom-right');
    var layout = new CellsByRow( container, {
      isOriginLeft: false,
      isOriginTop: false
    });
  })();
});

