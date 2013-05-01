( function() {

'use strict';

test( 'defaults / empty', function() {
  var empty = document.querySelector('#empty');
  var olayer = new Outlayer( empty );
  deepEqual( olayer.options, Outlayer.prototype.options, 'default options match prototype' );
  equal( typeof olayer.items, 'object', 'items is object' );
  equal( olayer.items.length, 0, 'zero items' );
  equal( Outlayer.data( empty ), olayer, 'data method returns instance' );
  ok( olayer.isResizeBound, 'isResizeBound' );
});

})();
