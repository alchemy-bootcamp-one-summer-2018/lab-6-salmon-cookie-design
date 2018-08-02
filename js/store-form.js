'use strict';

(function(module){
    let form = document.getElementById('form');
    let error = document.getElementById('form-error');

    function initStoreForm(onStoreAdded) {

        console.log('initStoreForm working');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            console.log('submit listener working');

            let elements = form.elements;

            let store = {
                name: elements.name.value,
                min: elements.min.value,
                max: elements.max.value,
                avg: elements.avg.value
            };
            
            console.log('storeObject', store);

            try {
                error.textContent = '';
                onStoreAdded(store);
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                error.textContent = err.message;
                console.error(err);
            }

        });
    }

    module.initStoreForm = initStoreForm;

})(window.module = window.module || {});

// let x = module.initStoreForm;
// x();