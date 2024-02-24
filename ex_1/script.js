const mudarTexto = () => {
    const paragrafo = document.getElementById('paragrafo');
    const nome = prompt('Digite seu nome: ');

    paragrafo.innerText = `E ai ${nome}! Você está deixando seu site dinâmico.`
}