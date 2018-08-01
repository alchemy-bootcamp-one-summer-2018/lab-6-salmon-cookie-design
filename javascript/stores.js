'use strict';

(function(module) {

    let stores = [
        {
            name: 'Pike Place Market',
            key: 'pike',
            custPerHourMin: 23,
            custPerHourMax: 65,
            cookiesPerCust: 6.3,
        },
        {
            name: 'SeaTac Airport',
            key: 'seatac',
            custPerHourMin: 3,
            custPerHourMax: 24,
            cookiesPerCust: 1.2,
        },
        {
            name: 'Seattle Center',
            key: 'seattlecenter',
            custPerHourMin: 11,
            custPerHourMax: 38,
            cookiesPerCust: 3.7,
        },
        {
            name: 'Capitol Hill',
            key: 'caphill',
            custPerHourMin: 20,
            custPerHourMax: 38,
            cookiesPerCust: 2.3,
        },
        {
            name: 'Alki',
            key: 'alki',
            custPerHourMin: 2,
            custPerHourMax: 16,
            cookiesPerCust: 4.6,
        },
    ];

    let stats = [
        {
            name: 'Hourly Totals for All Locations',
            cookiesByHour: [],
            cookiesPerDay: [],

        },
    ];


    function custByHour(storeArray) {

        function getRandomHRs(min, max) {
            max = Math.floor(max);
            min = Math.ceil(min);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
        }

        for(let i = 0; i < storeArray.length; i++) {

            let hourArray = [];
            for(let hr = 0; hr < 13; hr++) {
                hourArray.push(getRandomHRs(storeArray[i]['custPerHourMin'], storeArray[i]['custPerHourMax']));
            }
            storeArray[i]['custByHour'] = hourArray;

        }
    }

    function cookiesByHour(storeArray) {
        for(let i = 0; i < storeArray.length; i++) {
            storeArray[i]['cookiesByHour'] = [];
            for(let hr = 0; hr < 13; hr++) {
                let hrSales = storeArray[i]['custByHour'][hr] * storeArray[i]['cookiesPerCust'];
                hrSales = hrSales.toPrecision(2);
                hrSales = parseFloat(hrSales);
                storeArray[i]['cookiesByHour'][hr] = hrSales;
            }
        }
    }

    function cookiesPerDay(storeArray) {

        for(let i = 0; i < storeArray.length; i++) {
            let rowSum = 0;
            for(let hr = 0; hr < 13; hr++) {
                rowSum += storeArray[i]['cookiesByHour'][hr];
            }
            storeArray[i]['cookiesPerDay'] = rowSum;
        }
    }

    function cookiesByHourTotals(storeArray, statsArray, statIndex, stat1, stat2) {
        for(let i = 0; i < 13; i++) {
            let columnTotal = 0;
            for(let j = 0; j < storeArray.length; j++) {
                columnTotal += storeArray[j]['cookiesByHour'][i];
            }
            statsArray[statIndex][stat1][i] = columnTotal;
        }

        // this should be a separate function called cookiesPerDayTotals or cookiesByHourTotalsTotal
        let rowSum = 0;

        for(let hr = 0; hr < 13; hr++) {
            rowSum += statsArray[statIndex][stat1][hr];
        }
        statsArray[statIndex][stat2].push(rowSum);

    }

    custByHour(stores);
    cookiesByHour(stores);
    cookiesPerDay(stores);
    cookiesByHourTotals(stores, stats, 0, 'cookiesByHour', 'cookiesPerDay');


    module.stores = stores;
    module.stats = stats;
    module.custByHour = custByHour;
    module.cookiesByHour = cookiesByHour;
    module.cookiesPerDay = cookiesPerDay;
    module.cookiesByHourTotals = cookiesByHourTotals;

})(window.module = window.module || {});