
// ======================================================
// AV2 PRATICA - TECHSTORE
// Cenario: E-Commerce de Tecnologia e Hardware
// Banco de dados NoSQL - MongoDB
// ======================================================


// ======================================================
// ETAPA 1 - ARQUITETURA, MODELAGEM E POVOAMENTO
// ======================================================

// Seleciona o banco de dados
use("ProjetoAV2_HenriqueGregorio_TechStore");

// Cria as colecoes somente se ainda nao existirem
if (!db.getCollectionNames().includes("Produtos")) {
    db.createCollection("Produtos");
}

if (!db.getCollectionNames().includes("Pedidos")) {
    db.createCollection("Pedidos");
}

// Limpa os dados antigos deste projeto para evitar duplicacoes
db.Produtos.deleteMany({ projeto: "ProjetoAV2_HenriqueGregorio_TechStore" });
db.Pedidos.deleteMany({ projeto: "ProjetoAV2_HenriqueGregorio_TechStore" });


// ------------------------------------------------------
// 1.1 - Inserindo um produto com insertOne()
// ------------------------------------------------------

db.Produtos.insertOne({
    projeto: "ProjetoAV2_HenriqueGregorio_TechStore",
    nome: "RTX 4060",
    categoria: "Placa de Video",
    preco: 1899.90,
    estoque: 10,
    ativo: true,

    // Documento incorporado: especificacoes tecnicas
    especificacoes: {
        memoria: "8 GB",
        tipo: "GDDR6",
        fabricante: "NVIDIA"
    },

    // Array de avaliacoes
    avaliacoes: [
        { cliente: "Lucas", nota: 5 },
        { cliente: "Ana", nota: 4 }
    ]
});


// ------------------------------------------------------
// 1.2 - Inserindo varios produtos com insertMany()
// ------------------------------------------------------

db.Produtos.insertMany([
    {
        projeto: "ProjetoAV2_HenriqueGregorio_TechStore",
        nome: "SSD NVMe 1TB",
        categoria: "Armazenamento",
        preco: 499.90,
        estoque: 20,
        ativo: true,

        // Especificacoes deste produto
        especificacoes: {
            capacidade: "1 TB",
            interface: "NVMe",
            leitura: "3500 MB/s"
        },

        avaliacoes: [
            { cliente: "Pedro", nota: 5 }
        ]
    },

    {
        projeto: "ProjetoAV2_HenriqueGregorio_TechStore",
        nome: "Memoria RAM 16GB",
        categoria: "Memoria",
        preco: 279.90,
        estoque: 30,
        ativo: true,

        especificacoes: {
            capacidade: "16 GB",
            tipo: "DDR4",
            frequencia: "3200 MHz"
        },

        avaliacoes: []
    },

    {
        projeto: "ProjetoAV2_HenriqueGregorio_TechStore",
        nome: "Teclado Mecanico",
        categoria: "Perifericos",
        preco: 350.00,
        estoque: 15,
        ativo: true,

        especificacoes: {
            switch: "Red",
            conexao: "USB",
            layout: "ABNT2"
        },

        avaliacoes: [
            { cliente: "Carlos", nota: 4 }
        ]
    },

    {
        projeto: "TechStoreAV2",
        nome: "Mouse Gamer",
        categoria: "Perifericos",
        preco: 149.90,
        estoque: 25,
        ativo: true,

        // Exemplo de especificacoes com tipos diferentes
        especificacoes: {
            dpi: 12000,
            conexao: "USB",
            peso: "85g"
        },

        avaliacoes: [
            { cliente: "Julia", nota: 5 }
        ]
    }
]);


// ------------------------------------------------------
// 1.3 - Inserindo pedidos com insertMany()
// ------------------------------------------------------

db.Pedidos.insertMany([
    {
        projeto: "TechStoreAV2",
        cliente: "Joao Silva",
        cidade: "Campinas",
        status: "Concluido",

        // Documento incorporado: pagamento
        pagamento: {
            forma: "Pix",
            pago: true
        },

        // Array de produtos comprados
        itens: [
            {
                produto: "RTX 4060",
                categoria: "Placa de Video",
                quantidade: 1,
                preco: 1899.90
            },
            {
                produto: "SSD NVMe 1TB",
                categoria: "Armazenamento",
                quantidade: 1,
                preco: 499.90
            }
        ]
    },

    {
        projeto: "TechStoreAV2",
        cliente: "Maria Souza",
        cidade: "Artur Nogueira",
        status: "Concluido",

        pagamento: {
            forma: "Cartao",
            pago: true
        },

        itens: [
            {
                produto: "Memoria RAM 16GB",
                categoria: "Memoria",
                quantidade: 2,
                preco: 279.90
            }
        ]
    },

    {
        projeto: "TechStoreAV2",
        cliente: "Pedro Costa",
        cidade: "Campinas",
        status: "Concluido",

        pagamento: {
            forma: "Pix",
            pago: true
        },

        itens: [
            {
                produto: "Teclado Mecanico",
                categoria: "Perifericos",
                quantidade: 1,
                preco: 350.00
            },
            {
                produto: "Mouse Gamer",
                categoria: "Perifericos",
                quantidade: 1,
                preco: 149.90
            }
        ]
    },

    {
        projeto: "TechStoreAV2",
        cliente: "Ana Lima",
        cidade: "Mogi Mirim",
        status: "Cancelado",

        pagamento: {
            forma: "Boleto",
            pago: false
        },

        itens: [
            {
                produto: "Mouse Gamer",
                categoria: "Perifericos",
                quantidade: 1,
                preco: 149.90
            }
        ]
    }
]);


// ======================================================
// ETAPA 2 - CONSULTAS DE LEITURA E FILTROS (find)
// ======================================================


// ------------------------------------------------------
// 2.1 - find() com operador de comparacao $gt
// Busca produtos com preco maior que 300
// ------------------------------------------------------

db.Produtos.find({
    projeto: "TechStoreAV2",
    preco: { $gt: 300 }
});


// ------------------------------------------------------
// 2.2 - find() com operador $in
// Busca produtos de duas categorias
// ------------------------------------------------------

db.Produtos.find({
    projeto: "TechStoreAV2",
    categoria: { $in: ["Perifericos", "Memoria"] }
});


// ------------------------------------------------------
// 2.3 - find() com projecao
// Exibe apenas nome, categoria e preco
// Oculta o campo _id
// ------------------------------------------------------

db.Produtos.find(
    { projeto: "TechStoreAV2" },
    { _id: 0, nome: 1, categoria: 1, preco: 1 }
);


// ======================================================
// ETAPA 3 - MANIPULACAO E MANUTENCAO DE DADOS
// ======================================================


// ------------------------------------------------------
// 3.1 - updateOne() com $set
// Atualiza o preco de um unico produto
// ------------------------------------------------------

db.Produtos.updateOne(
    { projeto: "TechStoreAV2", nome: "Mouse Gamer" },
    { $set: { preco: 129.90 } }
);


// ------------------------------------------------------
// 3.2 - updateMany() com $set
// Adiciona garantia de 12 meses aos perifericos
// ------------------------------------------------------

db.Produtos.updateMany(
    { projeto: "TechStoreAV2", categoria: "Perifericos" },
    { $set: { garantiaMeses: 12 } }
);


// ------------------------------------------------------
// 3.3 - updateOne() com $push
// Adiciona uma avaliacao nova sem apagar as anteriores
// ------------------------------------------------------

db.Produtos.updateOne(
    { projeto: "TechStoreAV2", nome: "RTX 4060" },
    {
        $push: {
            avaliacoes: {
                cliente: "Henrique",
                nota: 5
            }
        }
    }
);


// ------------------------------------------------------
// 3.4 - deleteOne() com filtro
// Exclui o pedido cancelado da cliente Ana Lima
// ------------------------------------------------------

db.Pedidos.deleteOne({
    projeto: "TechStoreAV2",
    cliente: "Ana Lima",
    status: "Cancelado"
});


// ======================================================
// ETAPA 4 - INTELIGENCIA ANALITICA (AGGREGATION)
// ======================================================


// ------------------------------------------------------
// PIPELINE 1
// Relatorio de faturamento por categoria
//
// $match: seleciona pedidos concluidos
// $unwind: separa os itens do array
// $group: agrupa por categoria e soma os valores
// $sort: ordena do maior faturamento para o menor
// ------------------------------------------------------

db.Pedidos.aggregate([
    {
        $match: {
            projeto: "TechStoreAV2",
            status: "Concluido"
        }
    },

    {
        $unwind: "$itens"
    },

    {
        $group: {
            _id: "$itens.categoria",
            faturamentoTotal: {
                $sum: {
                    $multiply: [
                        "$itens.quantidade",
                        "$itens.preco"
                    ]
                }
            }
        }
    },

    {
        $sort: {
            faturamentoTotal: -1
        }
    }
]);


// ------------------------------------------------------
// PIPELINE 2
// Relatorio formatado de produtos mais vendidos
//
// $match: seleciona pedidos concluidos
// $unwind: separa os produtos dos pedidos
// $group: soma a quantidade vendida de cada produto
// $project: renomeia os campos e oculta _id
// $sort: ordena do mais vendido para o menos vendido
// ------------------------------------------------------

db.Pedidos.aggregate([
    {
        $match: {
            projeto: "TechStoreAV2",
            status: "Concluido"
        }
    },

    {
        $unwind: "$itens"
    },

    {
        $group: {
            _id: "$itens.produto",
            quantidadeTotal: {
                $sum: "$itens.quantidade"
            }
        }
    },

    {
        $project: {
            _id: 0,
            produto: "$_id",
            totalDeUnidadesVendidas: "$quantidadeTotal"
        }
    },

    {
        $sort: {
            totalDeUnidadesVendidas: -1
        }
    }
]);

