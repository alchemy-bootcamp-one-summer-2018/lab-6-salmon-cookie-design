'use strict';

(function(module){
    let stores = module.stores;
    let toDOM = module.toDOM;
    let html = module.html;
    let lastStores = stores.slice();

    let table = document.getElementById('table-body');

    let render = function(store) {
        return toDOM(html`        
            <tr>
                <td>${store.name}</td>
                <td>${store.macaronsPerHour[0]}</td>
                <td>${store.macaronsPerHour[1]}</td>
                <td>${store.macaronsPerHour[2]}</td>
                <td>${store.macaronsPerHour[3]}</td>
                <td>${store.macaronsPerHour[4]}</td>
                <td>${store.macaronsPerHour[5]}</td>
                <td>${store.macaronsPerHour[6]}</td>
                <td>${store.macaronsPerHour[7]}</td>
                <td>${store.macaronsPerHour[8]}</td>
                <td>${store.macaronsPerHour[9]}</td>
                <td>${store.macaronsPerHour[10]}</td>
                <td>${store.macaronsPerHour[11]}</td>
                <td>${store.macaronsPerHour[12]}</td>
                <td>${store.macaronsPerHour[13]}</td>
                <td class="totals">${store.storeTotals}</td>
            </tr>
        `);
    };

    function renderStore(store) {
        let dom = render(store);
        table.appendChild(dom);
    }

    function updateStoreTable() {
        for(let i = 0; i < (stores.length); i++) {
            let store = stores[i];
            if(lastStores.includes(store)) continue;
            renderStore(store);
        }

        lastStores = stores.slice();
        console.log('last stores', lastStores);
    }

    for(let i = 0; i < stores.length; i++) {
        renderStore(stores[i]);
    }

    module.updateStoreTable = updateStoreTable;



})(window.module = window.module || {});