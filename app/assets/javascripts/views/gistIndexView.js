GT.Views.GistIndexView = Backbone.View.extend({
  events: {
    "click ul.favList button": "favorite"
  },

  render: function() {
    var that = this;

    var renderedContent = JST["gists/index"]({
      gists: GT.gists
    });

    that.$el.html(renderedContent);

    return that;
  },

  favorite: function(el) {
    var $clickedButton = $(el.target);
    var that = this;

    var desiredStatus = $clickedButton.text()

    if(desiredStatus === "Unfavorite"){
      $.ajax({
        type: "DELETE",
        url: '/gists/' + $clickedButton.attr("data-gistid") +
             '/favorites/' + $clickedButton.attr("data-favid"),
        success: function(favId) {
          var toDelete = GT.favorites.where({id: favId})
          GT.favorites.remove(toDelete);
          that.render();
        }
      });
    }else{
      $.post(
        '/gists/' + $clickedButton.attr("data-gistid") + '/favorites.json',
        function (favorite) {
          GT.favorites.add(favorite);
          that.render();
        });
    }

  }
});