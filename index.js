'use strict';

(function(module){
    let initStoreForm = module.initStoreForm

    initStoreForm(function(store) {
        console.log('add store called with', store);
    });

})(window.module = window.module || {});