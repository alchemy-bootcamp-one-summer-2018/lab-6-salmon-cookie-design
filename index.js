'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;
    var totals = module.totals;

    // reference the ul
    var tbody = document.getElementById('tbody');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(stores) {
        return toDOM(html`        
            <tr>
            <td>${stores.name}</td>
                <td>${stores.hours[0]}</td>
                <td>${stores.hours[1]}</td>
                <td>${stores.hours[2]}</td>
                <td>${stores.hours[3]}</td>
                <td>${stores.hours[4]}</td>
                <td>${stores.hours[5]}</td>
                <td>${stores.hours[6]}</td>
                <td>${stores.hours[7]}</td>
                <td>${stores.hours[8]}</td>
                <td>${stores.hours[9]}</td>
                <td>${stores.hours[10]}</td>
                <td>${stores.hours[11]}</td>
                <td>${stores.hours[12]}</td>
                <td>${stores.hours[13]}</td>
            </tr>
        `); //Need to rewrite this so the stores.name is a <th> and programmatically populates
            //from a for loop. Rewrite the <td> to populate from a for loop, also.
            
    };

    var render = function(stores) {
        return toDOM(html`        
            <tr>
            <td>${stores.name}</td>
                <td>${stores.hours[0]}</td>
                <td>${stores.hours[1]}</td>
                <td>${stores.hours[2]}</td>
                <td>${stores.hours[3]}</td>
                <td>${stores.hours[4]}</td>
                <td>${stores.hours[5]}</td>
                <td>${stores.hours[6]}</td>
                <td>${stores.hours[7]}</td>
                <td>${stores.hours[8]}</td>
                <td>${stores.hours[9]}</td>
                <td>${stores.hours[10]}</td>
                <td>${stores.hours[11]}</td>
                <td>${stores.hours[12]}</td>
                <td>${stores.hours[13]}</td>
            </tr>
        `); //Need to rewrite this so the stores.name is a <th> and programmatically populates
            //from a for loop. Rewrite the <td> to populate from a for loop, also.
            
    };

    // loop each store
    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        // make a store template instance?
        console.log(store);
        var dom = render(store);
        console.log(dom);
        // append it to the tbody
        tbody.appendChild(dom);
        // this SHOULD loop across stores to grab an individual store, and populate each row
        // of the table using its name, and hourly average sales in an HTML table.
    }
    

})(window.module = window.module || {});