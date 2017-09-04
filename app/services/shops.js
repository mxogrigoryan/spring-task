import Ember from 'ember';
export function guidGenerator() {
  const guid = () => Math.random().toString(16).slice(2, 6);

  return guid() + guid() + '-' + guid() + '-' + guid() + '-' + guid() + '-' + guid() + guid()  + guid()
}
export default Ember.Service.extend({
  data : [],

  findAll(){
    this.set('data', JSON.parse(window.localStorage.getItem('shops') || '[]'));
    return this.get('data')
  },
  find(id){
    return this.findAll().find((shop) => shop.id === id);
  },
  createShop(name){
    let shop = Object.assign({id: guidGenerator()}, {name: name});
    this.get('data').pushObject(shop);
    this.updateShop();
    return shop
  },
  removeShop(shop){
    this.get('data').removeObject(shop);
    this.updateShop();
  },

  updateShop(){
      window.localStorage.setItem('shops', JSON.stringify(this.get('data')));

  }
});
