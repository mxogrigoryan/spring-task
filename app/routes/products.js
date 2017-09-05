import Ember from 'ember';

export default Ember.Route.extend({
  shopService: Ember.inject.service('shops'),
  model(params) {
    const model = this.get('shopService').find(params.shop_id);
    Object.defineProperty(model, 'totalPrice', {
      get() {
        return this.products.reduce((res, {qty, price}) => res + qty * price, 0);
      }
    });
    return model;
  }
});
// import Ember from 'ember';
// import {guidGenerator} from './services/shops';
// let product = Ember.Object.extend({
//   id: guidGenerator(),
//   shopId:'',
//   name: '',
//   quantity: 0,
//   price: 0
// });
//
// export default Ember.Route.extend({
//   model: //function(params) {
//     // var product1 = product.create({
//     //   name: 'product1',
//     //   quantity: 3,
//     //   price: 100
//     // });
//     // var product2 = product.create({
//     //   name: 'product2',
//     //   quantity: 5,
//     //   price: 200
//     // });
//     // var product3 = product.create({
//     //   name: 'product3',
//     //   quantity: 7,
//     //   price: 300
//     // });
//     return [product1, product2, product3];
//   }
// });
