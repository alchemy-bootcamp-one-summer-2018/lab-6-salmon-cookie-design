'use strict';

(function(module){
    let stores = module.stores;
    let stats = module.stats;
    let toDOM = module.toDOM;
    let html = module.html;


    // create a function we can call with data,
    // that returns DOM we can append into the 
    // document
    let renderBodFoot = function(row) {
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
                <td class="end-totals" style="background: navy; color: rgba(192, 192, 192, 1)">
                    ${row.cookiesPerDay}
                </td>
            </tr>
        `);
    };

    let renderHeader = function() {
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

    let thead = document.getElementById('stores-thead');
    let tbody = document.getElementById('stores-tbody');
    let tfoot = document.getElementById('stores-tfoot');

    let row;
    function htmlBuilder(containerArray, htmlElement) {
        for(let i = 0; i < containerArray.length; i++) {
            row = containerArray[i];
            let dom = renderBodFoot(row);
            htmlElement.appendChild(dom);
        }
    }

    let staticHeader = renderHeader();
    thead.appendChild(staticHeader);

    htmlBuilder(stores, tbody);
    htmlBuilder(stats, tfoot);



})(window.module = window.module || {});

