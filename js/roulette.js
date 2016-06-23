var spinner = document.getElementById("spinner");
spinner.addEventListener('click', onClick, false);


function onClick() {
    this.removeAttribute('style');
    
    var deg = Math.abs(500 + Math.round(Math.random() * 5000 * 2));
    
    var css = '-webkit-transform: rotate(' + deg + 'deg);';
    
    this.setAttribute(
        'style', css
    );
}