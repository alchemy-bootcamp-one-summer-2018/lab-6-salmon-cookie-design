'use strict';

(function(module){

    function toDom(html){
        var template = document.createElement ('template');
        template.innerHTML = html;
        return template.content;
    }

    module.toDom = toDom;
    module.html = String.raw;

}) (window.module = window.module || {});