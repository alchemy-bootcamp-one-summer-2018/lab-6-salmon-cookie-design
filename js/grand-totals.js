'use strict';

(function(module) {
    
    let totals = module.totals;
    let render = module.render;

    let footer = document.getElementById('table-footer');
    let footDom = render(totals);
    footer.appendChild(footDom);
    
})(window.module = window.module || {});