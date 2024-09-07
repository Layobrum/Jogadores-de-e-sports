function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém a seção HTML onde a pesquisa será digitada
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for vazio
  if (campoPesquisa == "") {
    section.innerHTML = "<h3><span>Pesquise um jogador</span></h3>"
    return /*retorna o resultado ignorando o resto do código*/
  };

  // Inicializa strings vazias para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let jogo = "";

  //transforma o valor de campoPesquisa em letras minusculas para melhorar a busca
  campoPesquisa = campoPesquisa.toLowerCase();

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {

    //transforma os valores de resultado em letras minusculas para melhorar a busca
    titulo = dado.titulo.toLowerCase()
    jogo = dado.jogo.toLowerCase()

    // se o titulo do dado incluir o que foi pesquisado
    if (titulo.includes(campoPesquisa) || jogo.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado, formatando os dados de cada item
      resultados += `
      <div class="item-resultado">
        <h2>
          ${dado.titulo}
        </h2>
        <p> Jogo: ${dado.jogo}
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link_liquipedia} target="_blank">Saiba mais</a>
      </div>
      `;
    }
  }

  // se resultados for vazio ou não existir
  if (!resultados) {
    resultados = "<h3><span>Nenhum jogador encontrado</span></h3>"
    return
  }

  // Atribui a string com os resultados ao conteúdo HTML da seção
  section.innerHTML = resultados;
}
