'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;
    //var totals = module.totals;

    var table = document.getElementById('stores');

    let render = function(store) {
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
                <td class="totals">${store.dailyStoreTotal}</td>
            </tr>
        `);
    }; 


    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);
        table.appendChild(dom);
    }

    // var total;
    // for(let i = 0; i < 14; i++) {
    //     total = totals[i];
    //     let dom = render(totals);
    //     tfoot.appendChild(dom);
    // }

    
    


})(window.module = window.module || {});