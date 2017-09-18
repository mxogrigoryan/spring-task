import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    editProd(id) {
      this.get('edit')(id);
    },
    delProd(product) {
      this.get('delete')(product);
    }

  }
});
