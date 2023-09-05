id.addEventListener("click", () => {
  alert("Pesquisa por ID realizada com sucesso!");
});
filtro.addEventListener("click", () => {
  alert("Pesquisa por FILTRO realizada com sucesso!");
});
addProduto.addEventListener("click", () => {
  document.getElementById('nome').value = '';
  document.getElementById('idpro').value = '';
  document.getElementById('valor').value = '';
  popup.classList.add("ativo");
});
fechar.addEventListener("click", () => {
  popup.classList.remove("ativo");
});
  add.addEventListener("click", () => {
    if ( 
      document.getElementById('nome').value === '' ||
      document.getElementById('idpro').value === '' ||
      document.getElementById('valor').value === '') {
        alert("Campos obrigatórios!");
      }
      else {
        popup.classList.remove("ativo");
        alert("Produto Adicionado!");
      }
  });


let editar = document.querySelectorAll(".editar");
let deletar = document.querySelectorAll(".deletar");

for (let i = 0; i < deletar.length; i++) {
  deletar[i].addEventListener("click", () => {
    let deletar = confirm("Deleja deletar este produto?");
    if (deletar) {
      alert("Produto Deletado!");
    }
  });
}

for (let i = 0; i < deletar.length; i++) {
  editar[i].addEventListener("click", () => {
    popup.classList.add("ativo");
    nome.value = "Atacado";
    idpro.value = "1502";
  });
}
