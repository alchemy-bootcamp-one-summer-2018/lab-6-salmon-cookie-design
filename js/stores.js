/* exports sSOMETHING */

(function(module) {
    
    var stores = [{
        name: 'Pike Place Market',
        key: 'pike',
        minCust: 23,
        maxCust: 65,
        avgCookies: 6
    }, {
        name: 'SeaTac Airport',
        key: 'seatac',
        minCust: 3,
        maxCust: 24,
        avgCookies: 1
    }, {
        name: 'Seattle Center',
        key: 'seattlecenter',
        minCust: 11,
        maxCust: 38,
        avgCookies: 4
    }, {
        name: 'Capitol Hill',
        key: 'caphill',
        minCust: 20,
        maxCust: 38,
        avgCookies: 2
    }, {
        name: 'Alki',
        key: 'alki',
        minCust: 2,
        maxCust: 16,
        avgCookies: 5
    }];

    // var numCust = Math.floor((Math.random() * stores.arrayPosition[i].minCust) + stores.arrayPosition[i].maxCust);

    // stores[0].hours = [];
    // var hours = Math.floor(Math.random() * (65 - 23)) + 23;
    // console.log('random hours', hours);

    //        var hours = Math.floor(Math.random() * (stores[i].maxCust - stores[i].minCust)) + stores[i].minCust;
    
    //var storeOneCustPerHour = [];

    // module.stores = stores;

    //build another four loop to loop through all the stores

    var randomHoursArray = [];
    var cookieSalesArray = [];

    for(var j = 0; j < stores.length; j++) {
        for(var i = 0; i < 14; i++) {
            var custPerHours = Math.floor(Math.random() * (stores[j].maxCust - stores[j].minCust)) + stores[j].minCust;
            var cookieSales = custPerHours * stores[j].avgCookies;
            console.log('cookie sales:', cookieSales); 
            
            randomHoursArray.push(custPerHours);
            cookieSalesArray.push(cookieSales);
            // cookieSalesArray.push(cookieSales);
            // names.property
        }
        console.log('random cust per hour array', randomHoursArray);
        console.log('cookie sales per hour array', cookieSalesArray);
    }











    // var seaTacHoursArray = [];

    // for(var i = 0; i < 14; i++) {
    //     var hours = Math.floor(Math.random() * (stores[1].maxCust - stores[1].minCust)) + stores[1].minCust;
    //     seaTacHoursArray.push(hours);
    // }
    // console.log('seaTac random cust per hour array', seaTacHoursArray);

    // var seattleCenterHoursArray = [];

    // for(var i = 0; i < 14; i++) {
    //     var hours = Math.floor(Math.random() * (stores[1].maxCust - stores[1].minCust)) + stores[1].minCust;
    //     seattleCenterHoursArray.push(hours);
    // }
    // console.log('seattleCenter random cust per hour array', seattleCenterHoursArray);

    // var capitolHillHoursArray = [];

    // for(var i = 0; i < 14; i++) {
    //     var hours = Math.floor(Math.random() * (stores[1].maxCust - stores[1].minCust)) + stores[1].minCust;
    //     capitolHillHoursArray.push(hours);
    // }
    // console.log('capitolHill random cust per hour array', capitolHillHoursArray);














    module.stores = stores;


})(window.module = window.module || {});