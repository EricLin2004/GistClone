GT.Views.NewGistFormView = Backbone.View.extend({
  events: {
    'click button.submit': 'submit',
    'click button.newBody': 'createNewBody'
  },

  render: function() {
    var that = this;

    that.gistForm = new Backbone.Form({
      model: that.model
    }).render();

    that.gistFileForms = [];

    // var gistFileArray[]
    // var gistFile1 = new GT.Models.GistFile();
    // var gistFile2 = new GT.Models.GistFile();
    // var gistFile3 = new GT.Models.GistFile();
    //
    // that.model.get("gistFiles").add(gistFile1);
    // that.model.get("gistFiles").add(gistFile2);
    // that.model.get("gistFiles").add(gistFile3);

    // that.gistFileForm1 = new GT.Views.NewGistFileFormView({
    //   model: gistFile1
    // }).render();
    //
    // that.gistFileForm2 = new GT.Views.NewGistFileFormView({
    //   model: gistFile2
    // }).render();
    //
    // that.gistFileForm3 = new GT.Views.NewGistFileFormView({
    //   model: gistFile3
    // }).render();

    that.$el.html(that.gistForm.el);
    // that.$el.append(that.gistFileForm1.el);
    // that.$el.append(that.gistFileForm2.el);
    // that.$el.append(that.gistFileForm3.el);

    $(that.gistForm.el).append("<button class='submit'>Submit</button>");
    $(that.gistForm.el).append("<button class='newBody'>New Body</button>");

    return that;
  },

  submit: function(event) {

    var that = this;
    that.gistForm.commit();

    _(that.gistFileForms).each(function(fileform){
      fileform.commit();
    });

    that.model.save();
    GT.gists.add(that.model);


  },

  createNewBody: function(event) {
    event.preventDefault();

    var that = this;
    var gistFile = new GT.Models.GistFile();

    that.model.get("gistFiles").add(gistFile);

    that.gistFileForm = new GT.Views.NewGistFileFormView({
      model: gistFile
    }).render();

    that.gistFileForms.push(that.gistFileForm);

    that.$el.append(that.gistFileForm.el);

  }
});