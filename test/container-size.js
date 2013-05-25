test( 'container size', function() {

  // test layout that just sets size
  var Sizer = Outlayer.create( 'sizer', {
    width: 220,
    height: 120
  });

  Sizer.prototype._sizeContainerPostLayout = function() {
    return {
      width: this.options.width,
      height: this.options.height
    };
  };

  var elem = document.querySelector('#container-size');

  var layout = new Sizer( elem );

  function checkSize( width, height ) {
    equal( elem.style.width, width + 'px', 'width = ' + width );
    equal( elem.style.height, height + 'px', 'height = ' + height );
  }

  checkSize( 220, 120 );

});
