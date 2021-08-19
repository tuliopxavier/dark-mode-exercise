export function lightMode() {
    document.documentElement.setAttribute('style', '');

    document.querySelectorAll('li').forEach(function(item) {
        item.style.color = '';
    });

    document.querySelector('h6').innerText = 'Dark Mode';
};

export function darkMode() {
    document.querySelector('h1').style.backgroundClip = 'text';
    document.documentElement.setAttribute('style', 
        `--primary-color: #848;
        --background-color: #0d0d0d;
        --background-li: #131313;`);

    document.querySelectorAll('li').forEach(function(item) {
        item.style.color = 'white';
    });
    document.querySelector('h6').innerText = 'Light Mode:';
};