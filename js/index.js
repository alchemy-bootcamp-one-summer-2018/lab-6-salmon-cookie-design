'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;
    // reference the ul
    var tBody = document.getElementById('stores-table');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(stores) {
        return toDOM(html`
        <tr>
            <td>${stores.name}</td>
            <td>${stores.cookiesSalesPerStore[0]}</td>
            <td>${stores.cookiesSalesPerStore[1]}</td>
            <td>${stores.cookiesSalesPerStore[2]}</td>
            <td>${stores.cookiesSalesPerStore[3]}</td>
            <td>${stores.cookiesSalesPerStore[4]}</td>
            <td>${stores.cookiesSalesPerStore[5]}</td>
            <td>${stores.cookiesSalesPerStore[6]}</td>
            <td>${stores.cookiesSalesPerStore[7]}</td>
            <td>${stores.cookiesSalesPerStore[8]}</td>
            <td>${stores.cookiesSalesPerStore[9]}</td>
            <td>${stores.cookiesSalesPerStore[10]}</td>
            <td>${stores.cookiesSalesPerStore[11]}</td>
            <td>${stores.cookiesSalesPerStore[12]}</td>
            <td>${stores.cookiesSalesPerStore[13]}</td>
        </tr>`);
    };
    
    // loop each store
    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);
        tBody.appendChild(dom);
    }

})(window.module = window.module || {});