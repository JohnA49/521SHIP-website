document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".quote-form");

    if (!form) return;

    const checkboxes = [
        ...form.querySelectorAll(
            'input[name="shipping_type"]'
        )
    ];

    const otherCheckbox =
        document.getElementById("shipping-other");

    const otherDetails =
        document.getElementById("other-shipping-details");

    const otherItems =
        document.getElementById("other-items");

    function updateShippingOptions() {

        const hasSelection =
            checkboxes.some(box => box.checked);

        checkboxes[0].setCustomValidity(
            hasSelection ? "" : "Select at least one shipping type."
        );

        otherDetails.hidden = !otherCheckbox.checked;

        otherItems.required = otherCheckbox.checked;

        if (!otherCheckbox.checked) {
            otherItems.value = "";
        }
    }

    checkboxes.forEach(box => {
        box.addEventListener("change", updateShippingOptions);
    });

    form.addEventListener("submit", () => {
        updateShippingOptions();

        if (!checkboxes.some(box => box.checked)) {
            checkboxes[0].reportValidity();
        }
    });

});
