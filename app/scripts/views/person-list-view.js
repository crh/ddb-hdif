ddbHdif.Views.personListView = Backbone.View.extend({
  el: $('#person-list'),
  initialize: function() {
    this.collection = new ddbHdif.Collections.PersonCollection(ddbHdif.Collections.temp);
    this.render();
  },
  render: function() {
    var that = this;
    console.log('rendering list...');
    console.log(this.collection.models.length);
    _.each(this.collection.models, function(item) {
      that.renderPerson(item);
    }, this);
  },
  renderPerson: function(item) {
    var personView = new ddbHdif.Views.personView({
      model: item
    });
    this.$el.append(personView.render().el);
  }
});
