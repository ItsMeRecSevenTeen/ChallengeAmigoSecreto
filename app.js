let amigosLista = [];

function agregarAmigo(){
    let entradaUsuario = document.getElementById('amigo').value;
    console.log(entradaUsuario);
    if(entradaUsuario === ''){
        alert('Por favor, Inserte un nombre');
        return;
    }else{
        amigosLista.push(entradaUsuario);
        document.querySelector('#amigo').value = '';

        let lista = document.querySelector('#listaAmigos');
        lista.innerHTML = '';

        for(var i = 0; i < amigosLista.length; i++){
            lista.innerHTML += `<li>${amigosLista[i]}<li/>`;
        }
    }
}

function sortearAmigo(){
    if(amigosLista.length === 0){
        alert("No hay ningun amigo, Agrega uno antes de continuar");
    }else{
        let amigoSecreto = amigosLista[Math.floor(Math.random() * amigosLista.length)];
        let parrafoResultado = document.querySelector('#resultado');
        parrafoResultado.innerHTML = `${amigoSecreto}`;
    }
}