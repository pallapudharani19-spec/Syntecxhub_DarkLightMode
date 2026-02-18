const toggle = document.getElementById("themeToggle");
const body = document.body;

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
} else {
    body.classList.add("light");
}

// Toggle theme
toggle.addEventListener("change", function () {
    if (this.checked) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    }
});