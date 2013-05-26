( function() {

'use strict';

var CellsByRow = window.CellsByRow;

test( 'create CellsByRow', function() {

  equal( typeof CellsByRow, 'function', 'CellsByRow is a function' );
  equal( CellsByRow.prototype.settings.namespace, 'cellsByRow', 'cellsByRow namespace' );
  equal( Outlayer.prototype.settings.namespace, 'outlayer', 'Outlayer namespace unchanged' );
  equal( CellsByRow.prototype.options.isResizeBound, true, 'isResizeBound option there' );
  equal( CellsByRow.prototype.options.columnWidth, 100, 'columnWidth option set' );

});

})();
