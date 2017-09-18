import DS from 'ember-data';

export default DS.Model.extend({
  shop: DS.belongsTo('shop'),
  name: DS.attr('string'),
  qty: DS.attr('number'),
  price: DS.attr('number')
});
