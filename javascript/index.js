'use strict';

(function(module){
    
    let addStore = module.addStore;
    let initStoreForm = module.initStoreForm;

    let updateCounter = module.updateCounter;
    let updateFruitList = module.updateFruitList;

    initStoreForm(function onStoreAdded(fruit) {
        addStore(fruit);
        updateCounter();
        updateFruitList();
    });

})(window.module = window.module || {});

