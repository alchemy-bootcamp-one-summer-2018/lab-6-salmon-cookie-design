(function(module){

    let totalsPerHour = module.totalsPerHour;
    let render = module.render;
    // reference the td
    let tFoot = document.getElementById('stores-table-foot');
    let dom = render(totalsPerHour);

    tFoot.appendChild(dom);


})(window.module = window.module || {});