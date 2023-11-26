
    function baixar() {
        // Substitua 'caminho/do/seu/arquivo' pelo caminho real do seu arquivo
        var arquivoUrl = 'folder.pdf';
        
        // Cria um elemento de âncora (link) temporário
        var link = document.createElement('a');
        link.href = arquivoUrl;
        link.download = 'folder'; // Substitua pelo nome desejado do arquivo

        // Adiciona o link ao corpo da página
        document.body.appendChild(link);

        // Simula um clique no link para iniciar o download
        link.click();

        // Remove o link do corpo da página
        document.body.removeChild(link);
    }