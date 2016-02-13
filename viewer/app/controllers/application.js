import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  copyrightYear: computed({
    get() {
      return new Date().getFullYear();
    }
  })
});
