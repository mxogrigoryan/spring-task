import Ember from 'ember';
import {guidGenerator} from '../services/shops';
export default Ember.Controller.extend({
  shopService: Ember.inject.service("shops"),
  product: {},
  actions: {
    editor() {
      const form = document.querySelector('#prodEditor');
      form.style.display = "block";
    },


    // addProduct(e) {
    //   const form = document.querySelector('#productEditor'),
    //     name = document.querySelector('#productName'),
    //     qty = document.querySelector('#productQty'),
    //     price = document.querySelector('#productPrice');
    //   if(!Ember.isBlank(name.value) && !Ember.isBlank(qty.value) && !Ember.isBlank(price.value)) {
    //     const service = this.get('shopService');
    //     const model = this.get('model');
    //
    //     if(!model.products) {
    //       this.set('model.products', []);
    //     }
    //
    //     this.set('product.name', name.value);
    //     this.set('product.qty', qty.value);
    //     this.set('product.price', price.value);
    //
    //     const product = this.get('product');
    //     if(!product.id) {
    //       this.set('product.id', guidGenerator());
    //       model.products.pushObject(product);
    //     }
    //
    //     service.update();
    //
    //     form.classList.remove('visible');
    //     name.value = '';
    //     qty.value = '';
    //     price.value = '';
    //     this.set('product', {});
    //   }
    //
    //   e.preventDefault();
    // },
    editProd(product) {
      const form = document.querySelector('#prodEditor'),
        name = document.querySelector('#productName'),
        qty = document.querySelector('#productQty'),
        price = document.querySelector('#productPrice');

      name.value = product.name;
      qty.value = product.qty;
      price.value = product.price;

      this.set('product', product);

      form.classList.add('visible');
    },
    // changeProd() {
    //   const form = document.querySelector('#prodEditor'),
    //     name = document.querySelector('#productName'),
    //     qty = document.querySelector('#productQty'),
    //     price = document.querySelector('#productPrice');
    //
    // },
    // changeShopName () {
    //   const input = document.querySelector('#editShop');
    //   this.set('shop.name',input.value);
    //   const editForm = document.querySelector('#editForm');
    //   editForm.style.display = 'none';
    //   this.get('shopService').updateShop();
    // },
    delProd(product) {
      const products = this.get('model.products');
      // const ind = products.findIndex((p) => p === product);
      products.removeObject(product);
      this.get('shopService').update();
    },
    summary() {
      return 10;
    }
  }
});
