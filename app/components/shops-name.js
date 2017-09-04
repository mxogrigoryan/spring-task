import Ember from 'ember';

export default Ember.Component.extend({
  shopService: Ember.inject.service('shops'),
  tagName: 'li',

  actions: {
    delShop () {
      this.get('shopService').removeShop(this.get('shop'));
    },
     editShop() {
       this.get('edit')(this.get('shop'));
     },

  }
});
