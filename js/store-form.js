'use strict';

(function(module){
    let form = document.getElementById('add-store');
    let error = document.getElementById('form-error');

    function initStoreForm(onStoreAdded) {

        form.addEventListener('submit', function(event) {
            // #1 Prevent default posting of the form
            event.preventDefault();
    
            // #2 Gather up data
            let elements = form.elements;
    
            let store = {
                name: elements.name.value,
                minCust: elements.min.value,
                maxCust: elements.max.value,
                avgCookies: elements.avg.value
            };
    
            // #3 Call action
            try {
                error.textContent = '';

                onStoreAdded(store);
                // #4 Process success or failure
                form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // #4 Process success or failure
                error.textContent = err.message;
            }
    
        });
    }

    module.initStoreForm = initStoreForm;
    

})(window.module = window.module || {});