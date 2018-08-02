'use strict';

(function(module){
    let addStore = module.addStore;
    let initStoreForm = module.initStoreForm;
    
    // initStoreForm()
    initStoreForm(function onStoreAdded(store) {
        addStore(store);
        console.log('store', store);


    });
    initStoreForm();

})(window.module = window.module || {});