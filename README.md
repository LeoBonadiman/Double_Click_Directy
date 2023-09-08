# Double_Click_Directy
Primeiro, você deve criar um diretório para o projeto e instalar as dependências necessárias:
Abra o terminal e crie um novo diretório para o projeto:
  mkdir fast-double-click-backend
  cd fast-double-click-backend
Inicialize um projeto Node.js e instale o Express:
  npm init -y
  npm install express --save
Neste exemplo, o back-end fornece duas rotas:
  /salvar-registro - Esta rota é usada para receber os registros enviados pelo front-end e salvá-los no arquivo registros.json.
  /registros - Esta rota é usada para obter todos os registros salvos no arquivo registros.json e enviá-los como resposta em formato JSON.
Agora, você pode iniciar o servidor back-end com o seguinte comando:
  node server.js
