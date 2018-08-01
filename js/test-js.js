for(let i = 0; i < stores.length; i++) {
    stores[i].macaronsPerHour = [];
    for(let j = 0; j < 14; j++) {
        var macaronsThisHour = Math.ceil((parseFloat(stores[i].customers[j])) * (parseFloat(stores[i].avg)));
        stores[i].macaronsPerHour.push(macaronsThisHour);
    }
}
 for(let i = 0; i < stores.length; i++) {
    stores[i].storeTotals = [];
    var storeTotal = totally(stores[i].macaronsPerHour);
    stores[i].storeTotals.push(storeTotal);
}
 module.stores = stores;

var totals = [];
for(var i = 0; i < 14; i++) {
    var total = 0;
     for(var j = 0; j < stores.length; j++) {
        total += stores[j].macaronsPerHour[i];
    }
    totals.push(total);
}
 var grandTotal = totally(totals);
 function totally(totals) {
    var grandTotal = 0;
    for(var j = 0; j < 14; j++) {
        grandTotal += totals[j];
    } 
    return grandTotal;
}

module.totals = {
    name: 'Totals',
    macaronsPerHour: totals,
    storeTotals: grandTotal
};