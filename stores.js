'use strict';

(function(module) {

    function createSalesData (min, max, avg) {
        //Takes the max and min number of customers per time and calculates a random
        //# in that range - then multiplies by the average number of items bought
        //feed in the data for each store into this function to generate random
        //hourly sales data points
    
        return Math.floor(
            (
                ((Math.random() * (max - min + 1)) + min) * avg
            )
        );    
    }
    
    function store(name, key, min, max, avg, len) {
        this.name = name;
        this.key = key;
        this.min = min;
        this.max = max;
        this.avg = avg;
    
        var hours = [];
        var finalHours = 0;
        for (var h = 0; h < len; h++) {
            hours.push(createSalesData(min, max, avg));
        }

        for (var a = 0; a < len; a++) {
            finalHours += hours[a];
        }
    
        this.hours = hours;
        this.finalHours = finalHours;
    };
    
    var pikeStore = new store('Pike Place Market', 'pike', 23, 65, 6.3, 14);
    var seatacStore = new store('SeaTac Airport', 'seatac', 3, 24, 1.2, 14);
    var seattleStore = new store('Seattle Center', 'seattlecenter', 11, 38, 3.7, 14);
    var capitolStore = new store('Capitol Hill', 'caphill', 20, 38, 2.3, 14);
    var alkiStore = new store('Alki', 'alki', 2, 16, 4.6, 14);
    
    var stores = [pikeStore, seatacStore, seattleStore, capitolStore, alkiStore];
    var totals = [];
    var finalTotal = 0;

    for(let i = 0; i < 14; i++) {
        var total = 0;
        for(let h = 0; h < stores.length; h++) {
            total += stores[h].hours[i];
        }
        totals.push(total);
    }
    for(let i = 0; i < totals.length; i++) {   
        finalTotal += totals[i];
    }
    totals.push(finalTotal);
    console.log(totals);
    module.totals = totals;
    module.stores = stores;

})(window.module = window.module || {});