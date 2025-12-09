const userEmail = document.getElementById("email");
const displayEmail = document.getElementById("email-display");
const submitBtn = document.getElementById("submit");
const displayUserEmail = document.getElementById("user-email-display");

const myEmail = "janetdoe@gmail.com";

function maskEmail(email) {
    const atIndex = email.indexOf("@");
    if (atIndex < 1) return "Invalid email!";

    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    if (username.length <= 2) {
        return username[0] + "*".repeat(username.length - 1) + domain;
    }

    const maskedMiddle = "*".repeat(username.length - 2);
    return username[0] + maskedMiddle + username[username.length - 1] + domain;
}

// Display example email
displayEmail.innerText = maskEmail(myEmail);

// Real-time masking as user types
userEmail.addEventListener("input", () => {
    const emailValue = userEmail.value.trim();
    displayUserEmail.innerText = emailValue ? maskEmail(emailValue) : "";
});

// Optional: keep submit button functionality
submitBtn.addEventListener("click", () => {
    const emailValue = userEmail.value.trim();
    displayUserEmail.innerText = maskEmail(emailValue);
});
