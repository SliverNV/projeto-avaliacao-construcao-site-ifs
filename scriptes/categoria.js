id.addEventListener("click", () => {
  alert("Pesquisa por ID realizada com sucesso!");
});
filtro.addEventListener("click", () => {
  alert("Pesquisa por FILTRO realizada com sucesso!");
});

addProduto.addEventListener("click", () => {
  popup.classList.add("ativo");
});
fechar.addEventListener("click", () => {
  popup.classList.remove("ativo");
});
add.addEventListener("click", () => {

  if ( 
    document.getElementById('nome').value === '' ||
    document.getElementById('idcat').value === '' ) {
      alert("Campos Obrigatórios!");
    }
    else {
      
      document.getElementById('nome').value = '';
      document.getElementById('idcat').value = '';
      popup.classList.remove("ativo");
      alert("Categoria Adicionada!");
    }
 
});

let editar = document.querySelectorAll(".editar");
let deletar = document.querySelectorAll(".deletar");

for (let i = 0; i < deletar.length; i++) {
  deletar[i].addEventListener("click", function () {
    let deletar = confirm("Deseja deletar esta categoria?");
    if (deletar) {
      alert("Categoria Deletada!");
    }
  });
}

for (let i = 0; i < deletar.length; i++) {
  editar[i].addEventListener("click", () => {
    popup.classList.add("ativo");
    nome.value = "Atacado";
    idcat.value = "1502";
  });
}
