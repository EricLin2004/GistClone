GT.Collections.GistFiles = Backbone.Collection.extend({
  model: GT.Models.GistFile,
  url: '/gistfiles.json'
});