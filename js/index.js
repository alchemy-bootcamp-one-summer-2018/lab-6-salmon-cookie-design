'use strict';

(function(module){

    let addStore = module.addStore;
    let initStoreForm = module.initStoreForm;
    let updateStoreTable = module.updateStoreTable;

    initStoreForm(function onStoreAdded(store) {
        console.log('initStoreForm working');
        addStore(store);
        updateStoreTable();
    });

})(window.module = window.module || {});