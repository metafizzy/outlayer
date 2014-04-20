var CellsByRow = require('../cells-by-row')
var docReady = require('doc-ready');

docReady( function() {
  var basic = document.querySelector('#basic');
  var layout = new CellsByRow( basic ); 
  var button = document.querySelector('button');
  var isToggled = false;
  button.onclick = function() {
    isToggled = !isToggled;
    basic.style.width = isToggled ? '800px' : '400px';
    layout.layout();
  }
});

