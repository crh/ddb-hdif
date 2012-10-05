ddbHdif.Views.personView = Backbone.View.extend({
  tagName: 'article',
  className: 'person-container',
  // template: new EJS({url: '/scripts/templates/person.ejs'}),
  template: $('#person-template').html(),
  render: function() {
    var tmpl = _.template(this.template);
    var model = this.model.toJSON();
    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  }
});
