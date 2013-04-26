GT.Models.Gist = Backbone.RelationalModel.extend({
  schema: {
    title: 'Text',
  },

  urlRoot: "/gists",

  relations: [
    {
      type: Backbone.HasMany,
      key: "gistFiles",
      relatedModel: "GT.Models.GistFile",
      collectionType: "GT.Collections.GistFiles",
      reverseRelation: {
        key: "gist",
        keySource: "gist_id",
        includeInJSON: "id"
      }
    }
  ],

  toJSON: function() {
    return {"model": _.clone(this.attributes)};
  }
});