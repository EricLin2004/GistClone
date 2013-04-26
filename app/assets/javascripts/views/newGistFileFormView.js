GT.Views.NewGistFileFormView = Backbone.View.extend({

  render: function() {
    var that = this;

    var gistFileForm = new Backbone.Form({
      model: that.model
    }).render();

    return gistFileForm;
  }

});