import Ember from 'ember';
export default Ember.Controller.extend({
  product: {},
  totalPrice: Ember.computed('model.products.@each.price', 'model.products.@each.qty', function () {
    return this.get('model.products').reduce((res, p) => res + p.get('price') * p.get('qty'), 0)
  }),
  actions: {
    addProd() {
      const form = document.querySelector('#prodEditor');
      form.style.display = "block"
    },

    saveProd() {
      const form = document.querySelector('#prodEditor'),
        shop = this.get('model');
      const product = this.get('store').createRecord('product', {
        name: this.get('name'),
        price: this.get('price'),
        qty: this.get('qty'),
        shop
      });
      shop.get('products').pushObject(product);
      product.save().then(() => {
        shop.save().then(() => {
          this.set('name', '');
          this.set('qty', '');
          this.set('price', '');
          form.style.display = 'none';
        })
      });

    },

    editProd(id) {
      const edit = document.querySelector('#prodChange');
      this.get('store').findRecord('product', id).then(product => {
        edit.style.display = "block";
        this.set('product.id', product.get('id'));
        this.set('product.name', product.get('name'));
        this.set('product.price', product.get('price'));
        this.set('product.qty', product.get('qty'));
      })
    },
    changeProd() {
      const change = document.querySelector('#prodChange');
      this.get('store').findRecord('product', this.get('product.id')).then(product => {
        product.setProperties({
          name: this.get('product.name'),
          qty: this.get('product.qty'),
          price: this.get('product.price')
        });
        this.set('product', {});
        change.style.display = "none";
      });
    },
    cancelProd() {
      const change = document.querySelector('#prodChange');
      change.style.display = "none";
      return
    },

    delProd(product) {
      product.destroyRecord();
    },

  }
});
