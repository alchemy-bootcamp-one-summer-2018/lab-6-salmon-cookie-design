'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;
    var locations = Object.keys(stores);
    // reference the ul
    var tBody = document.getElementById('stores-table');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var renderTable = function(store) {
        return toDOM(html`
        <tr>
            <td>${store.location}</td>
            <td>${store.hours[0]}</td>
            <td>${store.hours[1]}</td>
            <td>${store.hours[2]}</td>
            <td>${store.hours[3]}</td>
            <td>${store.hours[4]}</td>
            <td>${store.hours[5]}</td>
            <td>${store.hours[6]}</td>
            <td>${store.hours[7]}</td>
            <td>${store.hours[8]}</td>
            <td>${store.hours[9]}</td>
            <td>${store.hours[10]}</td>
            <td>${store.hours[11]}</td>
            <td>${store.hours[12]}</td>
            <td>${store.hours[13]}</td>
            <td>${store.location}</td>
        </tr>`);
    };
    
    // loop each store
    var store;
    for(var i = 0; i < locations.length; i++) {
        store = stores[locations[i]];
        var dom = renderTable(store);
        tBody.appendChild(dom);
    }

})(window.module = window.module || {});