window.onload = function(){
    let heading = document.createElement("h1");
    let heading_text = document.createTextNode("Meu Título");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}

let itens = []
let inputItem = document.getElementById("item_compra")
let listaItens = document.getElementById("lista_itens")
let listaPosts = document.getElementById("lista_posts")

function armazenar(){
    itens.push({item:inputItem.value})
    localStorage.setItem("itensCompra", JSON.stringify(itens))
    console.log(itens)
    alert("Armazenado com Sucesso!!");
}

function listar(){
    let lista = JSON.parse(localStorage.getItem("itensCompra"))
    for(let i = 0;i < lista.length; i++){
        console.log(lista[i].item)
        let itemLista = document.createElement("li")
        itemLista.textContent = lista[i].item
        listaItens.appendChild(itemLista)

    }
    console.log(lista)
}

function buscarDadosAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const itemLista = document.createElement("li")
            itemLista.textContent = item.title
            listaPosts.appendChild(itemLista)
        });
    })
}