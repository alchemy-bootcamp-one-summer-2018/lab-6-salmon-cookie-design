'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;
    var totals = module.totals;



    var table = document.getElementById('table-body');

    var render = function(store) {
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
    for(var i = 0; i < (stores.length); i++) {
        store = stores[i];

        let dom = render(store);

        table.appendChild(dom);
    }


    var footer = document.getElementById('table-foot');
        
    let dom = render(totals);

    footer.appendChild(dom);

    // var render = function(totals) {
    //     return toDOM(html`        
    //         <tr>
    //             <td>${total.name}</td>
    //             <td>${total.macaronsPerHour[0]}</td>
    //             <td>${total.macaronsPerHour[1]}</td>
    //             <td>${total.macaronsPerHour[2]}</td>
    //             <td>${total.macaronsPerHour[3]}</td>
    //             <td>${total.macaronsPerHour[4]}</td>
    //             <td>${total.macaronsPerHour[5]}</td>
    //             <td>${total.macaronsPerHour[6]}</td>
    //             <td>${total.macaronsPerHour[7]}</td>
    //             <td>${total.macaronsPerHour[8]}</td>
    //             <td>${total.macaronsPerHour[9]}</td>
    //             <td>${total.macaronsPerHour[10]}</td>
    //             <td>${total.macaronsPerHour[11]}</td>
    //             <td>${total.macaronsPerHour[12]}</td>
    //             <td>${total.macaronsPerHour[13]}</td>
    //             <td class="totals">${tbd}</td>
    //         </tr>
    //     `);
    // };

    // var total;
    // for(var i = 0; i < totals.length; i++) {
    //     total = totals[i];

    //     var dom = render(totals);

    //     table.appendChild(dom);
    // }

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