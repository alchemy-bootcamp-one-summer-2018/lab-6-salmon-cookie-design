'use strict';

(function(module){
    let initStoreForm = module.initStoreForm;
    let addStore = module.addStore;

    initStoreForm(function onStoreAdded(store) {
        addStore(store);
        console.log('store', store);
    });

})(window.module = window.module || {});