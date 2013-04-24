window.GT = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function (gists) {
    var that = this;
    console.log("before");
    that.gists = new GT.Collections.Gists(gists);
    console.log("after");

    new GT.Routers.GistsRouter();
    Backbone.history.start();

  }}