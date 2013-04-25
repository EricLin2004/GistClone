GT.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'gist/:id' : 'show'
  },

  index: function() {
    var that = this;

    var gistIndexView = new GT.Views.GistIndexView();

    GT.$el.html(gistIndexView.render().$el);
  },

  show: function() {

  }


});