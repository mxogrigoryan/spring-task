import Ember from 'ember';

export default Ember.Controller.extend({
  shopService: Ember.inject.service('shops'),
  addShop : false,
  saveShop : false,
  shop: {},
  actions : {

    addShop() {
      const add = document.getElementById('add');
      add.style.display = 'block';
    },

    saveShop() {
      if(!this.get('shopName'))  return;
      this.get('shopService').createShop(this.get('shopName'));
      this.set('shopName','');
      let add = document.getElementById('add');
      add.style.display = 'none';
    },
    editShop(shop) {
      this.set('shop', shop);
      const editForm = document.querySelector('#editForm');
      editForm.style.display = 'block';

      const input = document.querySelector('#editShop')
      input.value = shop.name;
    },
    changeShopName () {
      const input = document.querySelector('#editShop');
      this.set('shop.name',input.value);
      const editForm = document.querySelector('#editForm');
      editForm.style.display = 'none';
      this.get('shopService').updateShop();
    },


   cancel() {
     const editForm = document.querySelector('#editForm');
     editForm.style.display = 'none';
     return

   }


  }

});
