'use strict';

(function(module){
    var stores = module.stores;
    var stats = module.stats;
    var toDOM = module.toDOM;
    var html = module.html;


    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    var renderBodFoot = function(row) {
        return toDOM(html`        
            <tr>
                <td>${row.name}</td>
                <td>${row.cookiesByHour[0]}</td>
                <td>${row.cookiesByHour[1]}</td>
                <td>${row.cookiesByHour[2]}</td>
                <td>${row.cookiesByHour[3]}</td>
                <td>${row.cookiesByHour[4]}</td>
                <td>${row.cookiesByHour[5]}</td>
                <td>${row.cookiesByHour[6]}</td>
                <td>${row.cookiesByHour[7]}</td>
                <td>${row.cookiesByHour[8]}</td>
                <td>${row.cookiesByHour[9]}</td>
                <td>${row.cookiesByHour[10]}</td>
                <td>${row.cookiesByHour[11]}</td>
                <td>${row.cookiesByHour[12]}</td>
                <td class="end-totals" style="background: navy">
                    ${row.cookiesPerDay}
                </td>
            </tr>
        `);
    };

    var renderHeader = function() {
        return toDOM(html`        
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
        `);
    };


    var thead = document.getElementById('stores-thead');
    var tbody = document.getElementById('stores-tbody');
    var tfoot = document.getElementById('stores-tfoot');


    

    var row;
    function htmlBuilder(containerArray, htmlElement) {
        for(var i = 0; i < containerArray.length; i++) {
            row = containerArray[i];
            console.log(row);
            var dom = renderBodFoot(row);
            htmlElement.appendChild(dom);
        }
    }

    var staticHeader = renderHeader();
    thead.appendChild(staticHeader);

    htmlBuilder(stores, tbody);
    htmlBuilder(stats, tfoot);



})(window.module = window.module || {});





// function storeTableCreator(storeArray, totalsArray) {

//     var tbodyHTML = '';
//     for (var i = 0; i < storeArray.length; i++) {
//         var rowHTML = '';
//         rowHTML += `<tr>
//         `;
//         rowHTML += `<td>${storeArray[i]['name']}</td>
//         `;
//         for (var j = 0; j < 13; j++) {
//             rowHTML += `<td>${storeArray[i]['cookiesByHour'][j]}</td>
//         `;
//         }
//         rowHTML += `<td>${storeArray[i]['cookiesPerDay']}</td>
//         `;
//         rowHTML += `</tr>
//         `;
//         tbodyHTML += rowHTML;
//     }

//     var tfootHTML = '';
//     { totalsObj['name'] }</td >

//     for (var k = 0; k < 14; k++) {
//         tfootHTML += `<td>${totalsArray[k]}</td>`;
//     }

// }
