'use strict';

(function(module){
    let stores = module.stores;
    let toDOM = module.toDOM;
    let html = module.html;
    let totals = module.totals;



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

    let store;
    for(let i = 0; i < (stores.length); i++) {
        store = stores[i];

        let dom = render(store);

        table.appendChild(dom);
    }
    
    let footer = document.getElementById('table-foot');
    
    let dom = render(totals);
    
    footer.appendChild(dom);
    

    //
    // For adding stores
    //

    let addStore = module.addStore;
    let initStoreForm = module.initStoreForm;
    let updateStoreList = module.updateStoreList;

    initStoreForm(function onStoreAdded(store) {
        console.log('initStoreForm working');
        addStore(store);
        updateStoreList();
    });

})(window.module = window.module || {});