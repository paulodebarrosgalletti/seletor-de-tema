function toggleTheme() {
    const body = document.body;
    const ThemeIcon = document.getElementById("theme-icon")

    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
        ThemeIcon.textContent = "🌜";
    } else {
        ThemeIcon.textContent = "🌞";
    }
}