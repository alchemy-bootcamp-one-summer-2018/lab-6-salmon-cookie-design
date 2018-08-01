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
    var render = function(store) {
        return toDOM(html`
        <tr>
            <td>${store.name}</td>
            <td>${store.cookiesSalesPerHour[0]}</td>
            <td>${store.cookiesSalesPerHour[1]}</td>
            <td>${store.cookiesSalesPerHour[2]}</td>
            <td>${store.cookiesSalesPerHour[3]}</td>
            <td>${store.cookiesSalesPerHour[4]}</td>
            <td>${store.cookiesSalesPerHour[5]}</td>
            <td>${store.cookiesSalesPerHour[6]}</td>
            <td>${store.cookiesSalesPerHour[7]}</td>
            <td>${store.cookiesSalesPerHour[8]}</td>
            <td>${store.cookiesSalesPerHour[9]}</td>
            <td>${store.cookiesSalesPerHour[10]}</td>
            <td>${store.cookiesSalesPerHour[11]}</td>
            <td>${store.cookiesSalesPerHour[12]}</td>
            <td>${store.cookiesSalesPerHour[13]}</td>
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