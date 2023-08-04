### IMPORTANTE

debloy na versel https://front-gedsoncs.vercel.app/

para iniciar a aplicação localmente é necessário acessar a pasta front iniciar com o conamdo npm install depois npm run dev e acessar a porta local do aparelho na WEB

Documentação do Frontend
Introdução
Neste documento, apresentamos a documentação para o frontend da aplicação de cadastro de clientes e contatos. Descrevemos as principais funcionalidades, fluxos de trabalho e componentes do frontend, além de fornecer instruções para execução e configuração do projeto.

Sobre o Frontend
O frontend é a interface de usuário da aplicação de cadastro de clientes e contatos. Ele permite que os usuários interajam com a API para realizar operações de cadastro, atualização e exclusão de clientes e seus respectivos contatos.

Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
Axios: Cliente HTTP para fazer requisições à API.
React Hook Form: Biblioteca para gerenciar formulários de forma eficiente.
Zod: Biblioteca para validação de esquemas de dados.
Context API: Gerenciamento de estado global da aplicação.
Toastify: Exibição de notificações na interface.
Tailwind CSS: Framework de CSS para estilização responsiva.

Funcionalidades
A aplicação frontend oferece as seguintes funcionalidades:

Cadastro de Usuário: Permite o cadastro de novos usuários, fornecendo informações como nome, email, senha e telefone.

Login de Usuário: Permite que os usuários façam login na aplicação fornecendo suas credenciais.

Listagem de Usuário: Exibe os dados do usuário logado, incluindo nome, email, telefone.

Atualização de Usuário: Permite que o usuário atualize suas informações, como email, nome, senha e telefone.

Deleção de Usuário: Permite que o usuário exclua sua conta da aplicação.

Cadastro de Contato: Permite que o usuário cadastre novos contatos associados ao seu perfil, fornecendo nome, email e telefone.

Listagem de Contatos: Exibe a lista de contatos vinculados ao usuário logado.

Atualização de Contato: Permite que o usuário atualize as informações de um contato existente.

Deleção de Contato: Permite que o usuário exclua um contato da lista.

Fluxo de Trabalho
O fluxo de trabalho básico da aplicação é o seguinte:

O usuário pode se cadastrar ou fazer login na aplicação.

Após o login, o usuário é redirecionado para a página de listagem de contatos.

O usuário pode visualizar, cadastrar, atualizar e excluir contatos associados à sua conta.

O usuário também pode atualizar suas informações pessoais e, se desejar, excluir sua conta.

Configuração e Execução
Siga os passos abaixo para configurar e executar o frontend da aplicação:

Certifique-se de ter o Node.js instalado em sua máquina.

Clone o repositório do frontend.

Navegue até o diretório do frontend no terminal.

Execute o seguinte comando para instalar as dependências:
npm install

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

npm run dev
