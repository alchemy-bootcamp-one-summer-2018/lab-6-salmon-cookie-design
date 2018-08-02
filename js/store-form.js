
'use strict';

(function(module){
    let form = document.getElementById('new-store');
    let error = document.getElementById('form-error');
    
    console.log('test');
    //export an initStoreForm function that takes
    // an onStoreAdded callback function
    function initStoreForm(onStoreAdded) {

        //inside that function, subscribe to form submit event
        form.addEventListener('submit', function(event){

            //prevent the form from posting (preventDefault)
            event.preventDefault();

            let elements = form.elements;
            console.log(elements);

            //gather the form data into a new STORE object
            let store = {
                name: elements.name.value,
                minCustomers: elements.minCustomers.value,
                maxCustomers: elements.maxCustomers.value,
                avgSale: elements.avgSale.value
                
            };

            //respond to success or error
            try {
                error.textContent = '';
                onStoreAdded(store);
                form.reset();
                document.activeElement.blur();
                
            }
            catch (err) {
                error.textContent = err.message;
            }
        });
    }

    module.initStoreForm = initStoreForm;

})(window.module = window.module || {});


//call the onStoreAdded


//call the exported initStoreForm function from index.js???? 
//and pass a callback function that logs the new store

//validate that it works