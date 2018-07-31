'use strict';

(function(module) {

    var stores = [{
        name: 'Pike Place Market',
        min: '23',
        max: '65',
        avg: '6.3',
        key: 'pike'
    }, {
        name: 'SeaTac Airport',
        min: '3',
        max: '24',
        avg: '1.2',
        key: 'seatac'    
    }, {
        name: 'Seattle Center',
        min: '11',
        max: '38',
        avg: '3.7',
        key: 'seattercenter'    
    }, {
        name: 'Capitol Hill',
        min: '20',
        max: '38',
        avg: '2.3',
        key: 'caphill'    
    }, {
        name: 'Alki',
        min: '2',
        max: '16',
        avg: '4.6',
        key: 'Alki'    
    }];

    
    console.log('hours working');
    for(var i = 0; i < stores.length; i++) {
        stores[i].sales = [];
        for(var j = 0; j < 14; j++) {
            var salesThisHour = Math.floor(Math.random() * parseInt(stores[i].max));
            stores[i].sales.push(salesThisHour);
        }
    }


    // hours();
    console.log('stores', stores);

    module.stores = stores;

})(window.module = window.module || {});

console.log('module working', module.stores);