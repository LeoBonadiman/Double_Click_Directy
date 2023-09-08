// Suponha que você tenha uma matriz de registros (exemplo)
const registros = [
    { tempo: 1000, data: '01/05/2022', hora: '09:00:00' },
    { tempo: 1500, data: '02/05/2022', hora: '10:30:00' },
    // Adicione mais registros conforme necessário
];

document.addEventListener('DOMContentLoaded', function () {
    const listaRegistros = document.getElementById('listaRegistros');
    const dataFiltro = document.getElementById('dataFiltro');
    const ordenarPorHorarioAsc = document.getElementById('ordenarPorHorarioAsc');
    const ordenarPorHorarioDesc = document.getElementById('ordenarPorHorarioDesc');
    const ordenarPorTempoAsc = document.getElementById('ordenarPorTempoAsc');
    const ordenarPorTempoDesc = document.getElementById('ordenarPorTempoDesc');
    const voltarPaginaPrincipal = document.getElementById('voltarPaginaPrincipal');

    // Função para preencher a lista de registros
    function preencherListaRegistros() {
        // Limpar a lista atual
        listaRegistros.innerHTML = '';

        // Suponha que 'registros' seja a matriz de registros
        registros.forEach((registro, index) => {
            const li = document.createElement('li');
            li.textContent = `Tempo: ${registro.tempo} ms | Data: ${registro.data} | Hora: ${registro.hora}`;
            listaRegistros.appendChild(li);
        });
    }

    // Preencher a lista de registros inicialmente
    preencherListaRegistros();

    // Preencher o dropdown de filtro por data (assumindo que as datas não se repetem)
    const datasUnicas = Array.from(new Set(registros.map((registro) => registro.data)));
    datasUnicas.forEach((data) => {
        const option = document.createElement('option');
        option.value = data;
        option.textContent = data;
        dataFiltro.appendChild(option);
    });

    // Adicionar eventos de filtro e ordenação
    dataFiltro.addEventListener('change', () => {
        const dataSelecionada = dataFiltro.value;
        const registrosFiltrados = registros.filter((registro) => registro.data === dataSelecionada);
        preencherListaRegistros(registrosFiltrados);
    });

    ordenarPorHorarioAsc.addEventListener('click', () => {
        registros.sort((a, b) => (a.hora > b.hora ? 1 : -1));
        preencherListaRegistros();
    });

    ordenarPorHorarioDesc.addEventListener('click', () => {
        registros.sort((a, b) => (a.hora > b.hora ? -1 : 1));
        preencherListaRegistros();
    });

    ordenarPorTempoAsc.addEventListener('click', () => {
        registros.sort((a, b) => a.tempo - b.tempo);
        preencherListaRegistros();
    });

    ordenarPorTempoDesc.addEventListener('click', () => {
        registros.sort((a, b) => b.tempo - a.tempo);
        preencherListaRegistros();
    });

    // Adicionar evento para voltar à página principal
    voltarPaginaPrincipal.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirecionar para a página principal
    });
});
