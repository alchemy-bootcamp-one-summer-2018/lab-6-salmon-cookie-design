'use strict';

(function(module) {
    let stores = module.stores;
    let toDOM = module.toDOM;
    let html = module.html;
    // let totals = module.totals;

    let table = document.getElementById('stores');         
    let render = function(store){
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
                <td class="totals">${store.storeTotals}</td>
                      
            </tr>
        `);
    };
    let store;
    for(let i = 0; i < stores.length; i++) {
        store = stores[i];
        let dom = render(store);
        table.appendChild(dom);
    }
    module.render = render;
    
})(window.module = window.module || {});