'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var ul = document.getElementById('table-body');

    var render = function(stores) {
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
                <td class="totals">TBD</td>
            </tr>
        `);
    };

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];

        var dom = render(stores);

        ul.appendChild(dom);
    }

})(window.module = window.module || {});