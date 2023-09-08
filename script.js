// Função para medir o tempo entre os cliques
function medirTempoDuploClique() {
    let primeiroClique = 0;
    
    // Função que será executada quando o botão for clicado
    function cliqueBotao() {
        if (primeiroClique === 0) {
            primeiroClique = Date.now(); // Marcar o tempo do primeiro clique
        } else {
            const segundoClique = Date.now(); // Marcar o tempo do segundo clique
            const tempoDecorrido = segundoClique - primeiroClique;
            
            // Enviar o tempo para o servidor (back-end) e salvar no arquivo JSON
            enviarTempoParaBackEnd(tempoDecorrido);
            
            // Redirecionar para a segunda página (você pode implementar isso)
            window.location.href = 'segundaPagina.html';
        }
    }
    
    return cliqueBotao;
}

// Adicionar evento de clique ao botão
document.getElementById('doubleClickButton').addEventListener('click', medirTempoDuploClique());
