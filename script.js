var hamburguer = document.querySelector(".hamburguer");

document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
});


document.querySelector("#qtd").addEventListener("change",  atualizarPreco);
document.querySelector("#js").addEventListener("change",  atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change",  atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change",  atualizarPreco);
document.querySelector("#prazo").addEventListener("change",  () => {
    const prazo = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
    atualizarPreco()
});

function atualizarPreco(){
    const qtd = document.querySelector("#qtd").value;
    let valor = qtd * 100 ;

    const temJs = document.querySelector("#js").checked;
    if ( temJs ){
        valor *= 1.1;
    }

    const layoutSim = document.querySelector("#layout-sim").checked;
    if ( layoutSim ) {
        valor += 500;
    }

    const prazo = document.querySelector("#prazo").value;
    let taxaUrgencia = 1 - prazo * 0.1;
    valor *= 1 + taxaUrgencia;

    document.querySelector("#preco-total").innerHTML = `R$ ${valor.toFixed(2)}`; 
}
