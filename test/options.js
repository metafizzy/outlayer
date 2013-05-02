( function() {

'use strict';

test( 'options', function() {
  var container = document.querySelector('#options');
  var olayer = new Outlayer( container, {
    isInitLayout: false,
    itemOptions: {
      transitionDuration: '600ms'
    }
  });

  var item = olayer.items[0];

  ok( !olayer._isLayoutInited, 'olayer is not layout initialized' );
  equal( item.options.transitionDuration, '600ms', 'item option set');

});

})();
