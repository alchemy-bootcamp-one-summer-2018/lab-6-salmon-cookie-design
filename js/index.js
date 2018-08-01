'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;
    //var totals = module.totals
    //<td class = "totals"> ${store.storeTotals}</td>

    var table = document.getElementById('stores');

    var render = function(store) {
        return toDOM(html`
            <tr>
                <td>${store.name}</td>
                <td>${store.cookieSalesPerStore[0]}</td> 
                <td>${store.cookieSalesPerStore[1]}</td>
                <td>${store.cookieSalesPerStore[2]}</td>
                <td>${store.cookieSalesPerStore[3]}</td> 
                <td>${store.cookieSalesPerStore[4]}</td>
                <td>${store.cookieSalesPerStore[5]}</td>
                <td>${store.cookieSalesPerStore[6]}</td> 
                <td>${store.cookieSalesPerStore[7]}</td>
                <td>${store.cookieSalesPerStore[8]}</td>
                <td>${store.cookieSalesPerStore[9]}</td> 
                <td>${store.cookieSalesPerStore[10]}</td>
                <td>${store.cookieSalesPerStore[11]}</td>
                <td>${store.cookieSalesPerStore[12]}</td> 
                <td>${store.cookieSalesPerStore[13]}</td>
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