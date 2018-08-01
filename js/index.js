'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;
    var totals = module.totals;

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
                <td class="totals">${store.storeTotals}</td>
            </tr>
        `);
    };

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];

        var dom = render(stores);

        ul.appendChild(dom);
    }

//     var ul = document.getElementById('table-body');

//     var render = function(totals) {
//         return toDOM(html`        
//             <tr>
//                 <td>${total.name}</td>
//                 <td>${total.hourTotals[0]}</td>
//                 <td>${total.hourTotals[1]}</td>
//                 <td>${total.hourTotals[2]}</td>
//                 <td>${total.hourTotals[3]}</td>
//                 <td>${total.hourTotals[4]}</td>
//                 <td>${total.hourTotals[5]}</td>
//                 <td>${total.hourTotals[6]}</td>
//                 <td>${total.hourTotals[7]}</td>
//                 <td>${total.hourTotals[8]}</td>
//                 <td>${total.hourTotals[9]}</td>
//                 <td>${total.hourTotals[10]}</td>
//                 <td>${total.hourTotals[11]}</td>
//                 <td>${total.hourTotals[12]}</td>
//                 <td>${total.hourTotals[13]}</td>
//                 <td class="totals">${}</td>
//             </tr>
//         `);
//     };

//     var total;
//     for(var i = 0; i < totals.length; i++) {
//         total = totals[i];

//         var dom = render(totals);

//         ul.appendChild(dom);
//     }

//     <tr>
//     <td>Hourly Totals for All Locations</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td>500</td>
//     <td class="totals">7000</td>
// </tr>

})(window.module = window.module || {});