window.GT = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, gists, favorites) {
    var that = this;
    that.gists = new GT.Collections.Gists(gists);
    that.favorites = new GT.Collections.Favorites(favorites);
    // console.log(that.favorites);
    // console.log(that.gists);
    that.$el = $rootEl;

    new GT.Routers.GistsRouter();
    Backbone.history.start();

  }}