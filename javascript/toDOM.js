/* globals stores, totals */

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
        for(var j = 0; j < 13; j++){
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
    for(var k = 0; k < 14; k++) {
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