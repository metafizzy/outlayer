( function() {


test( 'hide-without-opacity', function() {

  var container = document.querySelector('#hide-item-without-opacity');
  var layout = new Outlayer( container, {
    itemSelector: '.item',
    transitionDuration: '0.001s',
    hiddenStyle: {
      transform: 'translateY(200px)'
    },
    visibleStyle: {
      transform: 'transformY(0)'
    }
  });
  var item = layout.getItem( container.querySelector( '.item' ) );
  stop();
  item.hide();
  setTimeout(function() {
    equal( container.querySelector( '.item' ).style.display, "none" );
    start();
  }, 150);

});

})();
