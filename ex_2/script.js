const number = document.getElementById('number');
const paragrafo = document.getElementById('paragrafo');
let num = parseInt(number.innerText);

const incrementar = () => {
    num++;
    paragrafo.style.display = 'block'
    number.innerText = num;
}

const zerar = () => {
    num = 0;
    paragrafo.style.display = 'none';
    // number.innerText = num;


}