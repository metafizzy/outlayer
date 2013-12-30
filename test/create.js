( function() {

'use strict';

var CellsByRow = window.CellsByRow;

test( 'create Layouts', function() {

  var Leiout = Outlayer.create('leiout');
  Leiout.Item.prototype.foo = 'bar';
  var elem = document.createElement('div');
  var lei = new Leiout( elem );
  var outlayr = new Outlayer( elem );

  equal( typeof CellsByRow, 'function', 'CellsByRow is a function' );
  equal( CellsByRow.namespace, 'cellsByRow', 'cellsByRow namespace' );
  equal( Outlayer.namespace, 'outlayer', 'Outlayer namespace unchanged' );
  equal( Leiout.namespace, 'leiout', 'Leiout namespace' );
  equal( CellsByRow.prototype.options.isResizeBound, true, 'isResizeBound option there' );
  equal( CellsByRow.prototype.options.columnWidth, 100, 'columnWidth option set' );
  strictEqual( Outlayer.prototype.options.columnWidth, undefined, 'Outlayer has no default columnWidth' );
  strictEqual( Leiout.prototype.options.columnWidth, undefined, 'Leiout has no default columnWidth' );
  equal( lei.constructor.Item, Leiout.Item, 'Leiout.Item is on constructor.Item' );
  equal( outlayr.constructor.Item, Outlayer.Item, 'outlayr.Item is still correct Item' );

});

})();
