'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var table = document.getElementById('stores');

    var render = function(stores) {
        return toDOM(html`
            <tr>
                <td>${store.name}</td>
                <td>${stores.cookieSalesPerStore[0]}</td> 
                <td>${stores.cookieSalesPerStore[1]}</td>
                <td>${stores.cookieSalesPerStore[2]}</td>
                <td>${stores.cookieSalesPerStore[3]}</td> 
                <td>${stores.cookieSalesPerStore[4]}</td>
                <td>${stores.cookieSalesPerStore[5]}</td>
                <td>${stores.cookieSalesPerStore[6]}</td> 
                <td>${stores.cookieSalesPerStore[7]}</td>
                <td>${stores.cookieSalesPerStore[8]}</td>
                <td>${stores.cookieSalesPerStore[9]}</td> 
                <td>${stores.cookieSalesPerStore[10]}</td>
                <td>${stores.cookieSalesPerStore[11]}</td>
                <td>${stores.cookieSalesPerStore[12]}</td> 
                <td>${stores.cookieSalesPerStore[13]}</td>
            </tr>
        `);
    }; 

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);
        table.appendChild(dom);
    }


})(window.module = window.module || {});