'use strict';

(function(module){
    let addStore = module.addStore;
    let initStoreForm = module.initStoreForm;

    initStoreForm(function onStoreAdded(store) {
        addStore(store);
        console.log('init test', store);

    });
    

})(window.module = window.module || {});