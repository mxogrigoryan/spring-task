import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',

  actions: {
    delShop(shop) {
      this.get('del')(shop);
    },
    editShop(shopID) {
      this.get('edit')(shopID);
    }

  }
});
