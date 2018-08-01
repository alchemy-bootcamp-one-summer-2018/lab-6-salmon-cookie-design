'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var table = document.getElementById('stores');
        
    var render = function(store){
        return toDOM(html`
            <tr><td>${store.name}</td>
                <td>${store.cookiesSoldPerHour[0]}</td>
                <td>${store.cookiesSoldPerHour[1]}</td>
                <td>${store.cookiesSoldPerHour[2]}</td>
                <td>${store.cookiesSoldPerHour[3]}</td>
                <td>${store.cookiesSoldPerHour[4]}</td>
                <td>${store.cookiesSoldPerHour[5]}</td>
                <td>${store.cookiesSoldPerHour[6]}</td>
                <td>${store.cookiesSoldPerHour[7]}</td>
                <td>${store.cookiesSoldPerHour[8]}</td>
                <td>${store.cookiesSoldPerHour[9]}</td>
                <td>${store.cookiesSoldPerHour[10]}</td>
                <td>${store.cookiesSoldPerHour[11]}</td>
                <td>${store.cookiesSoldPerHour[12]}</td>
                <td>${store.cookiesSoldPerHour[13]}</td>
                      
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