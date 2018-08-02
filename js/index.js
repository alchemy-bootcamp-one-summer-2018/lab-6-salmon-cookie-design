'use strict';

(function(module){
    let stores = module.stores;
    console.log('stores', stores);
    let toDOM = module.toDOM;
    let html = module.html;

    let table = document.getElementById('stores');

    let render = function(stores) {
        return toDOM(html`
                <tr>
                    <td> ${stores.name}</td>
                    <td> ${stores.hours[0]} </td>
                    <td> ${stores.hours[1]} </td>
                    <td> ${stores.hours[2]} </td>
                    <td> ${stores.hours[3]} </td>
                    <td> ${stores.hours[4]} </td>
                    <td> ${stores.hours[5]} </td>
                    <td> ${stores.hours[6]} </td>
                    <td> ${stores.hours[7]} </td>
                    <td> ${stores.hours[8]} </td>
                    <td> ${stores.hours[9]} </td>
                    <td> ${stores.hours[10]} </td>
                    <td> ${stores.hours[11]} </td>
                    <td> ${stores.hours[12]} </td>
                    <td> ${stores.hours[13]} </td>
                    <td> ${stores.hours[14]} </td>
                    <td> ${stores.dailyTotal} </td>

                </tr>
        `);
    };
    
    
    let store;
    for(let i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);

        table.appendChild(dom);
    }

    //console.log(dom);
    //table.appendChild(dom);
})(window.module = window.module || {});

//add store form in its store form function
//function(onStoreAdded) {
//let
//}
