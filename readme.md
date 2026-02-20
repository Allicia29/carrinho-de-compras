##🛒 Carrinho de Compras (Pink Cart)
Um sistema de simulação de carrinho de compras desenvolvido em Node.js, utilizando módulos ES6 (import/export) para gerenciar itens, quantidades e cálculos de subtotais.

📋 Funcionalidades
O projeto permite realizar as seguintes operações logísticas de e-commerce:
Criação de Itens: Gera objetos de produtos com nome, preço e quantidade.
Adição ao Carrinho: Insere novos itens em uma lista de compras dinâmica.
Cálculo de Total: Soma o subtotal de todos os itens presentes no carrinho.
Remoção Integral: Deleta um item específico do carrinho utilizando o nome como referência.
Gerenciamento de Quantidade: Função preparada para diminuir a quantidade de itens ou removê-los por índice.
Exibição de Extrato: Lista os itens, preços unitários, quantidades e o valor calculado por linha.

🛠️ Estrutura do ProjetoO código está dividido em três partes principais para garantir a separação de responsabilidades:index.js: O ponto de entrada da aplicação que coordena o fluxo de compra e exibe os resultados no console.services/cart.js: Contém a lógica de negócio do carrinho (adicionar, remover, calcular total).services/item.js: Define a estrutura do objeto de produto e a lógica do subtotal ($preço \times quantidade$).

🚀 Como Executar
Certifique-se de ter o Node.js instalado em sua máquina.
Clone o repositório ou baixe os arquivos.
Navegue até a pasta do projeto via terminal.
Execute o comando:
Bashnode
index.js

💻 Exemplo de UsoNo arquivo index.js, o fluxo simula a compra de itens temáticos:Criação de uma "Pink Shirt", "Pink Pants" e "Pink Shoes".Inclusão desses itens no carrinho.Remoção de itens para limpeza do carrinho.Cálculo final do valor total.
