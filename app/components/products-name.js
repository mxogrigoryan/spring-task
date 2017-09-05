import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    editProd() {
      this.get('edit')(this.get('product'));
    },
    delProd() {
      this.get('delete')(this.get('product'));
    }

  }
});
