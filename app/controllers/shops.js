import Ember from 'ember';

export default Ember.Controller.extend({
  addShop: false,
  saveShop: false,
  shop: {},
  actions: {

    addShop() {
      const add = document.getElementById('add');
      add.style.display = 'block';
    },

    saveShop() {
      if (!this.get('shopName'))  return;
      const shop = this.get('store').createRecord('shop', {
        name: this.get('shopName')
      });
      shop.save().then(() => {
        this.set('shopName', '');
        let add = document.getElementById('add');
        add.style.display = 'none';
      })

    },
    editShop(shopId) {
      this.get('store').findRecord('shop', shopId).then(shop => {
        this.set('shop', shop);
        const editForm = document.querySelector('#editForm');
        editForm.style.display = 'block';
        const input = document.querySelector('#editShop');
        input.value = this.get('shop.name');
      });


    },
    changeShopName () {
      const input = document.querySelector('#editShop'),
            editForm = document.querySelector('#editForm');
      this.set('shop.name', input.value);
      this.get('shop').save().then(() => {
        editForm.style.display = 'none';
      })
    },
    cancel() {
      const editForm = document.querySelector('#editForm');
      editForm.style.display = 'none';
      return

    },
    delShop(shop) {
      shop.get('products').forEach((product) => {
        product.destroyRecord();
      })
      shop.destroyRecord();

    }
  }

});
