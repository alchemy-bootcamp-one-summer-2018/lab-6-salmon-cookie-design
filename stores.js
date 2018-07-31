'use strict';

(function(module) {

    var locations = [{
        name: 'Pike Place Market',
        minCust: '23',
        maxCust: '65',
        avgCookies: '6.3',
        key: 'pike'
    }, {
        name: 'SeaTac Airport',
        minCust: '3',
        maxCust: '24',
        avgCookies: '1.2',
        key: 'seatac'
    }, {
        name: 'Seattle Center',
        minCust: '11',
        maxCust: '38',
        avgCookies: '3.7',
        key: 'seattlecenter'
    }, {
        name: 'Capitol Hill',
        minCust: '20',
        maxCust: '38',
        avgCookies: '2.3',
        key: 'caphill'
    }, {
        name: 'Alki',
        minCust: '2',
        maxCust: '16',
        avgCookies: '4.6',
        key: 'alki'
    }

    ];

        for(var i = 0; i < 14; i++) {
            locations[0].hours = [];
            var hours = Math.floor(Math.random() * (65 - 23)) + 23;
            console.log('random customers per hour:', hours);
            var custPerHour = [hours];
            console.log('array', custPerHour);
            custPerHour.push(hours);
            
            
            
            //var numCust = Math.floor((Math.random() + maxCust[i]) + minCust[i]);
        }
        
        module.locations = locations;
        
})(window.module = window.module || {});