var roulette = document.getElementById("roulette");
roulette.addEventListener('click', onClick, false);


function onClick() {
    this.removeAttribute('style');
    
    var deg = 500 + Math.round(Math.random() * 5000 * 2);
    
    var css = '-webkit-transform: rotate(' + deg + 'deg);';
    
    this.setAttribute(
        'style', css
    );
}