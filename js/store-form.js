'use strict';

(function(module){
    let form = document.getElementById('add-store');
    let error = document.getElementById('form-error');

    function initStoreForm(onStoreAdded) {
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let elements = form.elements;

            let store = {
                location: elements.location.value,
                min: elements.min.value,
                max: elements.max.value,
                avgCookiesSoldPerHour: elements.avgCookiesSoldPerHour.value
            };

            console.log('store object', store);

            try {
                error.textContent = '';
                onStoreAdded(store);
                form.requestFullscreen();
                document.activeElement.blur();
            }
            catch (err) {
                error.textContent = err.message;
            }
        });
    }
    module.initStoreForm = initStoreForm;

})(window.module = window.module || {});