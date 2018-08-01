'use strict';

(function(module){
    var stores = module.stores;
    var toDOM = module.toDOM;
    var html = module.html;

    var cookiesByHour = module.cookiesByHour;


    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var render = function(storeObj) {
        return toDOM(html`        
                <tr>
                    <td>${storeObj.name}</td>
                    <td>${storeObj.cookiesByHour[0]}</td>
                    <td>${storeObj.cookiesByHour[1]}</td>
                    <td>${storeObj.cookiesByHour[2]}</td>
                    <td>${storeObj.cookiesByHour[3]}</td>
                    <td>${storeObj.cookiesByHour[4]}</td>
                    <td>${storeObj.cookiesByHour[5]}</td>
                    <td>${storeObj.cookiesByHour[6]}</td>
                    <td>${storeObj.cookiesByHour[7]}</td>
                    <td>${storeObj.cookiesByHour[8]}</td>
                    <td>${storeObj.cookiesByHour[9]}</td>
                    <td>${storeObj.cookiesByHour[10]}</td>
                    <td>${storeObj.cookiesByHour[11]}</td>
                    <td>${storeObj.cookiesByHour[12]}</td>
                    <td>${storeObj.cookiesByHour[13]}</td>
                    <td class="end-totals" style="background: navy">
                        ${storeObj['cookiesPerDay']}
                    </td>
                </tr>
        `);
    };


    
    var tbody = document.getElementById('module-table');

    var store;
    for(var i = 0; i < stores.length; i++) {
        store = stores[i];
        var dom = render(store);
        tbody.appendChild(dom);
    }

})(window.module = window.module || {});





function storeTableCreator(storeArray, totalsArray) {
    var theadHTML = `
                <thead>
                    <tr>
                        <th>Locations</th>
                        <th>6am</th>
                        <th>7am</th>
                        <th>9am</th>
                        <th>10am</th>
                        <th>11am</th>
                        <th>12pm</th>
                        <th>1pm</th>
                        <th>2pm</th>
                        <th>3pm</th>
                        <th>4pm</th>
                        <th>5pm</th>
                        <th>6pm</th>
                        <th>7pm</th>
                        <th>Location Totals</th>
                    </tr>
                </thead>
                `;

    var tbodyHTML = '';
    for (var i = 0; i < storeArray.length; i++) {
        var rowHTML = '';
        rowHTML += `<tr>
        `;
        rowHTML += `<td>${storeArray[i]['name']}</td>
        `;
        for (var j = 0; j < 13; j++) {
            rowHTML += `<td>${storeArray[i]['cookiesByHour'][j]}</td>
        `;
        }
        rowHTML += `<td>${storeArray[i]['cookiesPerDay']}</td>
        `;
        rowHTML += `</tr>
        `;
        tbodyHTML += rowHTML;
    }

    var tfootHTML = '';
    tfootHTML += `<tfoot>
                        <td>Hourly Totals for All Locations</td>

        `;
    for (var k = 0; k < 14; k++) {
        tfootHTML += `<td>${totalsArray[k]}</td>`;
    }
    tfootHTML += `</tfoot>
    `;
    var table = `<table>
                    ${theadHTML} 
                    ${tbodyHTML} 
                    ${tfootHTML}
                </table>`;
    return table;
}

var storeTable = storeTableCreator(stores, totals['hours']);

document.getElementById('sales-table').innerHTML = storeTable;