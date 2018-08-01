'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var table = document.getElementById('stores');
        
    var render = function(store){
        return toDOM(html`
            <tr>${store.name}</tr>
        `);
    };
    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);
        // append it to the ul (TABLE?)
        table.appendChild(dom);
    }

})(window.module = window.module || {});