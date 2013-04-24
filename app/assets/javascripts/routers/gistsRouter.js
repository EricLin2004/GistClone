GT.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'gist/:id' : 'show'
  },

  index: function() {
    var that = this;
    console.log(GT.gists);

    var gistIndexView = new GT.Views.GistIndexView({
      gists: that.collection
    });

    that.$el.html(gistIndexView.render().$el);
  },

  show: function() {

  }


});