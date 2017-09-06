import Ember from 'ember';
import {guidGenerator} from '../services/shops';
export default Ember.Controller.extend({
  shopService: Ember.inject.service("shops"),
  product: {},
  totalPrice: Ember.computed('model.products.@each.price','model.products.@each.qty', function () {
    return this.get('model').products && this.get('model').products.reduce((res, {qty, price}) => res + qty * price, 0)
  }),
  actions: {
    addProd() {
      const form = document.querySelector('#prodEditor');
      form.style.display = "block"
    },

    saveProd() {
      const form = document.querySelector('#prodEditor'),
        name = document.querySelector('#productName'),
        qty = document.querySelector('#productQty'),
        price = document.querySelector('#productPrice'),
        service = this.get('shopService'),
        model = this.get('model');
      if (!model.products) {
        this.set('model.products', []);
      }

      this.set('product.name', name.value);
      this.set('product.qty', qty.value);
      this.set('product.price', price.value);

      const product = this.get('product');

        this.set('product.id', guidGenerator());
        model.products.pushObject(product);

      name.value = '';
      qty.value = '';
      price.value = '';
      form.style.display = 'none';
      this.set('product', {});
      service.updateShop();
    },


    editProd(product) {
      const edit = document.querySelector('#prodChange'),
        name = document.querySelector('#editName'),
        qty = document.querySelector('#editQty'),
        price = document.querySelector('#editPrice');

      edit.style.display = "block";
      name.value = product.name;
      qty.value = product.qty;
      price.value = product.price;
      this.set('product', product)

    },
    changeProd() {
      const change = document.querySelector('#prodChange'),
        name = document.querySelector('#editName'),
        qty = document.querySelector('#editQty'),
        price = document.querySelector('#editPrice');

      this.set('product.name', name.value);
      this.set('product.qty', qty.value);
      this.set('product.price', price.value);
      change.style.display = "none";
      this.get('shopService').updateShop();
      name.value = '';
      qty.value = '';
      price.value = '';

    },
    cancelProd() {
      const change = document.querySelector('#prodChange');
      change.style.display = "none";
      return
    },

    delProd(product) {
      const products = this.get('model.products');
      products.removeObject(product);
      this.get('shopService').updateShop();
    },

  }
});
