

function Store(name, key, minCust, maxCust, perSale) {
    this.name = name;
    this.key = key;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.perSale = perSale;
    this.perHour = null;
}

var pikePlace = new Store('Pike Place Market', 'pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 'seatac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 'seattlecenter', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 'caphill', 20, 38, 2.3);
var alki = new Store('Alki', 'alki', 2, 16, 4.6);
