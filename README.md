# AV2 – Banco de Dados NoSQL MongoDB

**Aluno:** Henrique Gregorio  
**Projeto:** TechStore – Loja de Hardware

## 1. Descrição do projeto
O projeto TechStore simula um banco de dados de uma loja de hardware, armazenando produtos, informações técnicas, avaliações e pedidos de clientes.

## 2. Banco de dados
Nome do banco: `ProjetoAV2_HenriqueGregorio_TechStore`

## 3. Coleções
- **Produtos:** armazena informações dos produtos, preços, categorias, especificações e avaliações.
- **Pedidos:** armazena os pedidos dos clientes, produtos comprados, quantidades, pagamentos e status.

## 4. Recursos utilizados
- `insertOne` e `insertMany` para inserir documentos.
- `find` para realizar consultas.
- `updateOne` e `updateMany` para atualizar dados.
- `$push` para adicionar informações em arrays.
- `deleteOne` para excluir documentos.
- Aggregation Pipeline com `$match`, `$unwind`, `$group`, `$sum`, `$project` e `$sort`.

## 5. Estruturas NoSQL
O projeto utiliza documentos com objetos embutidos e arrays, além de estruturas diferentes entre documentos, demonstrando a flexibilidade do MongoDB, que não exige que todos os documentos tenham exatamente os mesmos campos.

## 6. Vantagens do MongoDB
O MongoDB permite uma estrutura de dados flexível, facilita a alteração dos dados conforme a necessidade e suporta escalabilidade horizontal, podendo distribuir dados entre diferentes servidores.

## 7. Objetivo
Demonstrar na prática a criação e manipulação de um banco de dados NoSQL, utilizando operações de inserção, consulta, atualização, exclusão e agregação.
