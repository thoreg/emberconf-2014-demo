export default Ember.Route.extend({
  beforeModel: function(transition) {
    this.replaceWith('one-time-password.delivery');
  }
});