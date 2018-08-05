
'use strict';

(function(module){
    let stores = module.stores;
    let toDom = module.toDom;
    let html = module.html;
    let hourlyStoreTotals = module.hourlyStoreTotals;
    console.log ('is hourly showing here!', hourlyStoreTotals);

    let tr = document.getElementById('stores-id');
    let tfoot = document.getElementById('foot-id');
    

    let render = function(store) {
        return toDom(html`  
    <tr>
        <td>${store.name}</td>
        <td>${store.cookiesPerHour[0]}</td>
        <td>${store.cookiesPerHour[1]}</td>
        <td>${store.cookiesPerHour[2]}</td>
        <td>${store.cookiesPerHour[3]}</td>
        <td>${store.cookiesPerHour[4]}</td>
        <td>${store.cookiesPerHour[5]}</td>
        <td>${store.cookiesPerHour[6]}</td>
        <td>${store.cookiesPerHour[7]}</td>
        <td>${store.cookiesPerHour[8]}</td>
        <td>${store.cookiesPerHour[9]}</td>
        <td>${store.cookiesPerHour[10]}</td>
        <td>${store.cookiesPerHour[11]}</td>
        <td>${store.cookiesPerHour[12]}</td>
        <td>${store.cookiesPerHour[13]}</td>
        <td>${store.total}</td>
        <td>${store.totalsRow}</td>
    
    </tr> 
    
    `); 

    }; 

    let store;
    for(let i = 0; i < stores.length; i++) {
        store = stores[i];
        let dom = render(store);
        tr.appendChild(dom);
    } 

    let totalsRow = render(hourlyStoreTotals);
    tfoot.appendChild(totalsRow);


})(window.module = window.module || {});

