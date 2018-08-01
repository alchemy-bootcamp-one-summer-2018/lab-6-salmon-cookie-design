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





function storeRowCreator(storeArray, totalsArray) {
    var tbodyHTML = '';
    for(var i; i < storeArray.length; i++){
        var rowHTML = '';
        rowHTML += `<tr>
`           ;
        rowHTML += `<td>${storeArray[i]['name']}</td>
`           ;
        for(var j = 0; j < 14; i++){
            rowHTML += `<td>${storeArray[i]['cookiesByHour'][j]}</td>
`           ;
        }
        rowHTML += `<td>${storeArray[i]['cookiesPerDay']}</td>
`           ;
        rowHTML += `</tr>
`           ;
        tbodyHTML += rowHTML;
    }
    return tbodyHTML;
}
    
var storeRows = storeRowCreator(stores, totals['hours']);
storeRows;