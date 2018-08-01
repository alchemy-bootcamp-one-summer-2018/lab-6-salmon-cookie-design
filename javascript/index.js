'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var cookiesByHour = module.cookiesByHour;

    // reference the ul
    var table = document.getElementById('module-table');

    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(storeObj) {
        return toDOM(html`        
                <tr>
                    <td>${storeObj['name']}</td>
                    <td>${storeObj['cookiesByHour'][0]}</td>
                    <td>${storeObj['cookiesByHour'][1]}</td>
                    <td>${storeObj['cookiesByHour'][2]}</td>
                    <td>${storeObj['cookiesByHour'][3]}</td>
                    <td>${storeObj['cookiesByHour'][4]}</td>
                    <td>${storeObj['cookiesByHour'][5]}</td>
                    <td>${storeObj['cookiesByHour'][6]}</td>
                    <td>${storeObj['cookiesByHour'][7]}</td>
                    <td>${storeObj['cookiesByHour'][8]}</td>
                    <td>${storeObj['cookiesByHour'][9]}</td>
                    <td>${storeObj['cookiesByHour'][10]}</td>
                    <td>${storeObj['cookiesByHour'][11]}</td>
                    <td>${storeObj['cookiesByHour'][12]}</td>
                    <td>${storeObj['cookiesByHour'][13]}</td>
                    <td class="end-totals" style="background: navy">
                        ${storeObj['cookiesPerDay']}
                    </td>
                </tr>
        `);
    };

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);
        table.appendChild(dom);
    }

})(window.module = window.module || {});