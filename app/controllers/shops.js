import Ember from 'ember';

export default Ember.Controller.extend({
  shopService: Ember.inject.service('shops'),
  addShop : false,
  saveShop : false,
  shop: {},
  actions : {

    addShop() {
      const service = this.get('shopService');
      let add = document.getElementById('add');
      add.style.display = 'block';
      service.updateShop();
    },

    saveShop() {
      if(!this.get('shopName'))  return;
      this.get('shopService').createShop(this.get('shopName'));
      this.set('shopName','');
      let add = document.getElementById('add');
      add.style.display = 'none';
    },
    editShop(shop) {
      const editForm = document.querySelector('#editForm');
      editForm.style.display = 'block';

      const input = document.querySelector('#editShop')
      input.value = shop.name;

      console.log(shop)

    },
   cancel() {
     const editForm = document.querySelector('#editForm');
     editForm.style.display = 'none';
     return

   },
    changeShopName (shop) {

      const input = document.querySelector('#editShop')
      shop.set('name', input.value);
      const editForm = document.querySelector('#editForm');
      editForm.style.display = 'none';

    }

  }

});
