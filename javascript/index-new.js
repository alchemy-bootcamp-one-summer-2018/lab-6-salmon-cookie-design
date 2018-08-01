'use strict';

(function(module){
    var stores = module.stores;
    var totals = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    // reference the ul
    var table = document.getElementById('module-table');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(stores, totals) {
        return toDOM(html`        
            <tbody>
                <tr>
                    <td>${stores.name}</td>
                    <td>main cells</td> x 13
                    <td class="end-totals" 
                        style="background: navy">
                        ${stores[i].cookiesPerDay}
                    </td>    
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Hourly Totals for All Locations</td>
                    <td style="background: navy">
                        total cells
                    </td> x 13
                    <td class="end-totals" 
                    style="background: navy">
                        ${totals.[14]}
                    </td>    
                </tr>
            </tfoot>
        `);
    };

    // loop each fruit
    var fruit;
    for(var i = 0; i < fruits.length; i++) {
        fruit = fruits[i];
        // make a fruit template instance
        var dom = render(fruit);

        // append it to the ul
        table.appendChild(dom);
    }

})(window.module = window.module || {});