'use strict'

(function(module) {
    let form=document.getElementById('add-store');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let store = {
            location:
            min: elements.min.value,
            max: elements.max.value,
            avg: elements.avg.value,
            key: elements.key.value,
            dailyTotal: elements.dailyTotal.value,
        };
        addStore(store);

    });
}
    module.initStoreForm = initStoreForm;

})(window.module = window.module || {});