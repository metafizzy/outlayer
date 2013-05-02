( function() {

'use strict';

var CellsByRow = window.CellsByRow;

test( 'layout', function() {

  var cellsLayout = new CellsByRow( document.querySelector('#layout') );
  var items = cellsLayout.items;
  ok( cellsLayout._isLayoutInited, '_isLayoutInited' );

  cellsLayout.on( 'layoutComplete', function onLayout( obj, layoutItems ) {
    equal( true, true, 'layoutComplete event did fire' );
    equal( obj, cellsLayout, 'event-emitted argument matches instance' );
    equal( layoutItems.length, items.length, 'event-emitted items matches layout items length' );
    strictEqual( layoutItems[0], items[0], 'event-emitted items has same first item' );
    var len = layoutItems.length - 1;
    strictEqual( layoutItems[ len ], items[ len ], 'event-emitted items has same last item' );
    start();
    return true; // bind once
  });

  stop();
  cellsLayout.options.columnWidth = 60;
  cellsLayout.options.rowHeight = 60;
  cellsLayout.layout();

});

})();
