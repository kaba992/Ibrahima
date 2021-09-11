const text = document.querySelector(".titre");
const strText = text.textContent;
console.log(strText);
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
