function buscarCep() {
    var cep = document.getElementById("cep");
    var url = "http://viacep.com.br/ws/" + cep.value + "/json/";
    var logradouro = document.getElementById("logradouro");
    var complemento = document.getElementById("complemento");
    var bairro = document.getElementById("bairro");
    var localidade = document.getElementById("localidade");
    var uf = document.getElementById("uf");
    fetch(url, {method: 'GET'})
        .then(response => {
            response.json()
                .then(data => {
                    logradouro.value = data.logradouro;
                    complemento.value = data.complemento;
                    bairro.value = data.bairro;
                    localidade.value = data.localidade;
                    uf.value = data.uf;	
                })
        })

            .catch(err => {
                    logradouro.value = "";
                    complemento.value = "";
                    bairro.value = "";
                    localidade.value = "";
                    uf.value = "";
                    alert("UÉ! CEP não encontrado :(");
            }) 	
}
function enviaYcerrar() {
    if (confirm('Até uma nova consulta')) {
          window.close();
      }
  }