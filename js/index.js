'use strict';

(function(module){
    let stores = module.stores;
    let toDOM = module.toDOM;
    let html = module.html;
    let totalsPerHour = module.totalsPerHour;
    // reference the td
    let tBody = document.getElementById('stores-table-body');
    let tFoot = document.getElementById('stores-table-foot');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    let render = function(store) {
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
            <td class="location-totals">${store.storeTotals}</td>
        </tr>`);
    };
    
    // loop each store
    let store;
    for(let i = 0; i < stores.length; i++) {
        store = stores[i];
        let dom = render(store);
        tBody.appendChild(dom);
    }

    let dom = render(totalsPerHour);

    tFoot.appendChild(dom);

    module.render = render;

})(window.module = window.module || {});