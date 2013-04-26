GT.Routers.GistsRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'gist/new' : 'new',
    'gist/:id' : 'show'
  },

  index: function() {
    var that = this;

    var gistIndexView = new GT.Views.GistIndexView();

    GT.$el.html(gistIndexView.render().$el);
  },

  new: function() {
    var that = this;


    var newGistFormView = new GT.Views.NewGistFormView({
      model: new GT.Models.Gist()
    });


    GT.$el.html(newGistFormView.render().$el);
  },

  show: function() {
    console.log("In Show");
  }


});