function inverterLista (lista) {
    if(!Array.isArray(lista)){
        return "Função aceita apenas array como argumento."
    }

    let listaInvertida = new Array(lista.length);

    for(let i = 0; i < lista.length; i++){
        listaInvertida[lista.length -i -1] = lista[i];
    }

    return listaInvertida;
};

const melhoresJogadores = ["Neymar","gerard Piqué","mauro icardi","eder militão"];

const resultado = inverterLista(melhoresJogadores)
console.log(resultado);