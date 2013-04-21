/**
 * CellsByRow example
 */

( function( window ) {

'use strict';

var Outlayer = window.Outlayer;

var CellsByRow = window.CellsByRow = Outlayer.create('cells-by-row');

var defaultOptions = Outlayer.prototype.options;

defaultOptions.columnWidth = 100;
defaultOptions.rowHeight = 100;

CellsByRow.prototype._create = function() {
  Outlayer.prototype._create.call( this );

  this.element.style.position = 'relative';
};

CellsByRow.prototype._prelayout = function() {
  this.getSize();

  this._getMeasurement( 'columnWidth', 'width' );
  this._getMeasurement( 'rowHeight', 'height' );

  this.cols = Math.floor( this.size.innerWidth / this.columnWidth );
  this.cols = Math.max( this.cols, 1 );

  this.itemIndex = 0;
};

CellsByRow.prototype.layoutItems = function( items, isInstant ) {
  if ( !items || !items.length ) {
    return;
  }

  // emit layoutComplete when done
  this._itemsOn( items, 'layout', function onItemsLayout() {
    this.emitEvent( 'layoutComplete', [ this, items ] );
  });

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    var column = this.itemIndex % this.cols;
    var row = Math.floor( this.itemIndex / this.cols );
    var x = column * this.columnWidth;
    var y = row * this.rowHeight;
    this._layoutItem( item, x, y, isInstant );
    this.itemIndex++;
  }

  // set container size
  var elemH = Math.ceil( this.itemIndex / this.cols ) * this.rowHeight;
  // add padding and border width if border box
  var elemSize = this.size;
  if ( elemSize.isBorderBox ) {
    elemH += elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }
  this.element.style.height = elemH + 'px';

};

// ----- Item ----- //

var Item = CellsByRow.Item;

Item.prototype._create = function() {
  this.css({
    position: 'absolute'
  });
};

})( window );