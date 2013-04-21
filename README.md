# Outlayer

_Layout class_

Outlayer is a base layout class for layout libraries like [Packery](http://packery.metafizzy.co) and [Masonry](http://masonry.desandro.com)

Outlayer libraries work with a container element and children item elements.

``` html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  ...
</div>
```

## Outlayer.create()

``` js
var LayoutClass = Outlayer.create( namespace );
// for example
var Masonry = Outlayer.create('masonry');
```

+ `namespace` _{String}_
+ returns `LayoutClass` _{Function}_

Create a new layout class. `namespace` is used for jQuery plugin, and for declarative initialization

## Layout methods

### addItems

### reloadItems

### getItemElements

### layout

### getSize

### _getMeasurement

### layoutItems

### _itemsOn

### bindResize

### unbindResize

### resize

### addItems

### appended

### prepended

### getItem

### remove

### destroy

## Declarative

An Outlayer layout class can be initialized via HTML, by setting a class of `.js-namespace` on the element. Options can be set via a `data-namespace-options` attribution. For example:

``` html
<!-- var Masonry = Outlayer.create('masonry') -->
<div class="js-masonry" data-masonry-options='{ "itemSelector": ".item", "columnWidth": 200 }'>
  ...
</div>
```

## Layout.data()

## jQuery plugin
