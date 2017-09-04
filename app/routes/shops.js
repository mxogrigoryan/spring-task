import Ember from 'ember';
export default Ember.Route.extend({
  shopService: Ember.inject.service('shops'),
  model () {
    let data =this.get('shopService').findAll();
    return data
  }
});
