test( 'origin', function() {

  'use strict';

  var CellsByRow = window.CellsByRow;

  var elem = document.querySelector('#origin');
  var layout = new CellsByRow( elem );

  function checkItemPosition( itemIndex, x, y ) {
    var itemElem = layout.items[ itemIndex ].element;
    var message = 'item ' + itemIndex + ' ';
    equal( itemElem.style.left, x + 'px', message + 'left = ' + x );
    equal( itemElem.style.top, y + 'px', message + 'top = ' + y );
  }

  checkItemPosition( 0,   0,   0 );
  checkItemPosition( 1, 100,   0 );
  checkItemPosition( 2,   0, 100 );

  layout.options.isOriginLeft = false;
  layout.on( 'layoutComplete', function() {
    checkItemPosition( 0, 100,   0 );
    checkItemPosition( 1,   0,   0 );
    checkItemPosition( 2, 100, 100 );
    start();
    return true; // bind once
  });
  stop();
  layout.layout();

});
