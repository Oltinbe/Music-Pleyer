let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let body = document.querySelector("body");
let ul = document.querySelector('ul');
let bt = document.getElementById('bt');

sun.onclick = function() {
    body.classList.remove('darkmode');
    moon.style.display = 'block';
    sun.style.display = 'none';
}

moon.onclick = function() {
    body.classList.add('darkmode');
    moon.style.display = 'none';
    sun.style.display = 'block';
}

bt.onclick = function () {
    ul.classList.toggle('active');
}


