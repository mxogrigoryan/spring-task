import Ember from 'ember';

export default Ember.Route.extend({
  shopService: Ember.inject.service('shops'),
  model(params) {
    const model = this.get('shopService').find(params.shop_id);
    return model;
  },
});


