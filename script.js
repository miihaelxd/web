const form = document.getElementById("signup-form");
const success = document.getElementById("success");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const team = document.getElementById("team").value;

    let valid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("team-error").textContent = "";

    if (name === "") {
        document.getElementById("name-error").textContent = "Kirjoita nimi.";
        valid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("email-error").textContent = "Kirjoita kelvollinen sähköpostiosoite.";
        valid = false;
    }

    if (team === "") {
        document.getElementById("team-error").textContent = "Valitse joukkue.";
        valid = false;
    }

    if (valid) {
        form.classList.add("hidden");
        success.classList.remove("hidden");
    }
});