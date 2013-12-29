( function() {

'use strict';

var CellsByRow = window.CellsByRow;

test( 'create Layouts', function() {

  var Leiout = Outlayer.create('leiout');

  equal( typeof CellsByRow, 'function', 'CellsByRow is a function' );
  equal( CellsByRow.prototype.settings.namespace, 'cellsByRow', 'cellsByRow namespace' );
  equal( Outlayer.prototype.settings.namespace, 'outlayer', 'Outlayer namespace unchanged' );
  equal( Leiout.prototype.settings.namespace, 'leiout', 'Leiout namespace' );
  equal( CellsByRow.prototype.options.isResizeBound, true, 'isResizeBound option there' );
  equal( CellsByRow.prototype.options.columnWidth, 100, 'columnWidth option set' );
  strictEqual( Outlayer.prototype.options.columnWidth, undefined, 'Outlayer has no default columnWidth' );
  strictEqual( Leiout.prototype.options.columnWidth, undefined, 'Leiout has no default columnWidth' );

});

})();
