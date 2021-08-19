import { lightMode, darkMode } from "./toggle.js";

let toggle = document.querySelector('input[name="toggle"]');

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        darkMode();
    } else {
        lightMode();
    };
});
