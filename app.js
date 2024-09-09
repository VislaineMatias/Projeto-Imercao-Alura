function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o texto digitado pelo usuário no campo de pesquisa.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio.
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem de erro.
    section.innerHTML = "Busca Inválida. Insira algo no campo de Pesquisa!";
      return; // Encerra a função.
    }

    // Converte o texto da pesquisa para letras minúsculas para facilitar a comparação.
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa variáveis para armazenar os resultados da busca.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos).
    for (let dado of dados) {
      // Converte o título, descrição e tags para letras minúsculas para facilitar a comparação.
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

      // Verifica se o texto da pesquisa está presente no título ou descrição.
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, cria um novo elemento HTML para exibir o resultado.
        resultados += `<div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}
            <a href=${dado.link} target="_blank"> Mais informações </a>
            </p>
        </div>`;
    }
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem.
    if (!resultados) {
    resultados = "<p> Nada Encontrado </p>";
    }

    // Atualiza o conteúdo da seção de resultados com os resultados da busca.
    section.innerHTML = resultados;
}
        