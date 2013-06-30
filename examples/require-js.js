requirejs.config({
  paths: {
    "classie": "../components/classie/classie",
    "eventie": "../components/eventie/eventie",
    "doc-ready": "../components/doc-ready/doc-ready",
    "eventEmitter": "../components/eventEmitter/EventEmitter",
    "get-style-property": "../components/get-style-property/get-style-property",
    "get-size": "../components/get-size/get-size",
    "matches-selector": "../components/matches-selector/matches-selector",
    "outlayer": "../"
  }
});

requirejs( [ '../outlayer' ], function( Outlayer ) {

  console.log( typeof Outlayer );

});
