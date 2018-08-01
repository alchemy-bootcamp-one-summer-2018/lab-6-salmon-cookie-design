(function(module)) {

    funtion toDOM(html) {
        var template = document.createElement ('template');
        template.innerHTML = html;
        return template.content;
    }

    module.toDOM = toDOM;
    module.html = string.raw;
}