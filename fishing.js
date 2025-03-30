document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("multiStepForm");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const phoneInput = document.getElementById("phone");
    const submitBtn = document.getElementById("submitStep1");
    const smsField = document.getElementById("smsCode");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Stop form submission

        const iinValue = document.getElementById("iin").value.trim();
        const phoneValue = phoneInput.value.trim();

        if (iinValue && phoneValue) {
            // Hide step 1 and show step 2
            step1.style.display = "none";
            step2.style.display = "block";

            // Simulate SMS sending (replace with actual API call if needed)
            alert("Код отправлен на номер " + phoneValue);
        } else {
            alert("Пожалуйста, заполните оба поля!");
        }
    });

    form.addEventListener("submit", function (event) {
        const smsValue = smsField.value.trim();
        if (!smsValue) {
            event.preventDefault();
            alert("Введите код из SMS!");
        }
    });
});