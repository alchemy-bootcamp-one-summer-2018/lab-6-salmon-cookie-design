/* globals stores, totals */

'use strict';

(function(module) {

    function toDOM(html) {
        // create a template element
        var template = document.createElement('template');
        // set it's html prop, which has effect of 
        // browser turing html into DOM
        template.innerHTML = html;
        // use the "content" property to get the DOM
        return template.content;
    }

    module.toDOM = toDOM;
    module.html = String.raw;

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
    for(var i = 0; i < storeArray.length; i++){
        var rowHTML = '';
        rowHTML += `<tr>
        `;
        rowHTML += `<td>${storeArray[i]['name']}</td>
        `;
        for(var j = 0; j < 14; j++){
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
        `;
    for(var k = 0; k < 15; k++) {
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
storeTable;