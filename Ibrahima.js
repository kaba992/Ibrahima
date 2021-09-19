//Animation Titre

const text = document.querySelector(".titre");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    console.log(span);
    span.classList.add('fades');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer)
    timer = null;
}
//Animation défilement pages
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Verre cassé
(function () {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#contact");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
       // console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
