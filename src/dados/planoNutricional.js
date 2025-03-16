export const planoNutricional = [
    {
        // SEMANA 1
        titulo: "Adaptação ao Déficit",
        descricao: "Início do protocolo de cutting com déficit calórico moderado",
        deficitCalorico: "15-20% abaixo da manutenção",
        calorias: 1800,
        macros: {
            proteina: 180,
            carboidratos: 160,
            gorduras: 55
        },
        refeicoes: [
            {
                titulo: "Refeição 1 - Café da manhã",
                alimentos: [
                    "2 fatias pão de caixa (ou 4 torradas ou 120g batata doce ou 100g cuscuz ou 1 pão francês ou 40g goma de tapioca)",
                    "3 ovos inteiros (ou 60g frango desfiado ou 80g peito de peru defumado)",
                    "30g queijo branco (ou 25g muçarela ou 35g requeijão light)",
                    "2 opções de fruta: 60g banana ou 120g mamão ou 120g uva roxa ou 90g abacaxi ou 160g morangos"
                ],
                dicas: ["Prefira ovos cozidos ou mexidos com pouco óleo"]
            },
            {
                titulo: "Refeição 2 - Almoço",
                alimentos: [
                    "120g peito de frango (ou 110g carne magra ou 140g filé de peixe)",
                    "Opcional: 110g feijão",
                    "220g arroz branco (ou 220g macarrão ou 320g batata doce ou 220g batata inglesa assada ou 320g purê de batata inglesa)",
                    "Salada à vontade com 1 colher de azeite extra virgem",
                    "Opcional: Legumes (máximo 200g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Tempere a salada com limão ou vinagre para reduzir a necessidade de mais azeite"]
            },
            {
                titulo: "Refeição 3 - Lanche da tarde",
                alimentos: [
                    "3 opções de fruta: 60g banana ou 120g mamão ou 50g abacate ou 160g morangos",
                    "15g leite integral em pó (ou 150ml leite integral)",
                    "15g pasta de amendoim (ou 30g doce de leite ou 35g leite condensado)",
                    "15g aveia em flocos (ou 15g granola diet)",
                    "35g whey protein",
                    "5g creatina"
                ],
                dicas: ["Misture o whey, creatina e leite para fazer um shake nutritivo"]
            },
            {
                titulo: "Refeição 4 - Jantar",
                alimentos: [
                    "120g peito de frango (ou 110g carne magra ou 140g filé de peixe)",
                    "240g cuscuz (ou 260g batata doce ou 200g macaxeira ou 5 fatias pão de caixa ou 250g inhame)",
                    "Opcional: Legumes (máximo 200g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Pode repetir o mesmo formato da refeição 2 (almoço) se preferir"]
            },
            {
                titulo: "Refeição 5 - Ceia (opcional)",
                alimentos: [
                    "150g iogurte natural (ou 220g corpus light ou 220g molico zero açúcar ou 110g iogurte grego)",
                    "5g chia",
                    "15g granola diet",
                    "2 opções de fruta: 60g banana ou 120g mamão ou 120g uva roxa ou 90g abacaxi ou 160g morangos"
                ],
                dicas: ["Evite consumir carboidratos complexos nesta refeição"]
            }
        ],
        refeicaoLivre: {
            titulo: "Refeição livre (1x na semana)",
            exemplos: [
                "3 hambúrgueres artesanais (1500kcal)",
                "30-40 peças de sushi (1500kcal)",
                "5-7 fatias de pizza (1500kcal)",
                "1 hambúrguer + 1 fatia de bolo de chocolate (1500kcal)"
            ],
            dicas: [
                "Prefira fazer em dia de treino",
                "Substitua 2 refeições do dia pela refeição livre",
                "Mantenha-se dentro do limite de 1500kcal"
            ]
        },
        equivalencias: [
            {
                titulo: "Equivalência de Carboidratos (28g)",
                itens: [
                    "100g de Arroz = 28g de carboidratos",
                    "140g Batata doce = 28g de carboidratos",
                    "200g de Feijão = 28g de carboidratos",
                    "240g Batata Inglesa = 28g de carboidratos",
                    "2 Fatias de Pão = 28g de carboidratos",
                    "120g de Cuscuz = 28g de carboidratos",
                    "50g de Tapioca = 28g de carboidratos"
                ]
            },
            {
                titulo: "Equivalência de Proteínas",
                itens: [
                    "80g de frango = 70g Patinho",
                    "80g de frango = 100g atum (sem óleo)",
                    "80g de frango = 5 claras + 1 gema",
                    "80g de frango = 30g Whey Concentrado",
                    "80g de frango = 100g Tilápia"
                ]
            }
        ]
    },
    {
        // SEMANA 2
        titulo: "Progressão do Déficit",
        descricao: "Intensificação do déficit calórico com ajuste nos carboidratos",
        deficitCalorico: "20-25% abaixo da manutenção",
        calorias: 1700,
        macros: {
            proteina: 185,
            carboidratos: 140,
            gorduras: 55
        },
        refeicoes: [
            {
                titulo: "Refeição 1 - Café da manhã",
                alimentos: [
                    "1 fatia pão de caixa (ou 2 torradas ou 100g batata doce ou 80g cuscuz)",
                    "4 ovos inteiros (ou 80g frango desfiado ou 100g peito de peru defumado)",
                    "25g queijo branco (ou 20g muçarela)",
                    "1 opção de fruta: 60g banana ou 120g mamão ou 120g uva roxa ou 160g morangos"
                ],
                dicas: ["Aumentar proteína e reduzir carboidratos nesta refeição"]
            },
            {
                titulo: "Refeição 2 - Almoço",
                alimentos: [
                    "140g peito de frango (ou 130g carne magra ou 160g filé de peixe)",
                    "180g arroz branco (ou 180g macarrão ou 280g batata doce ou 180g batata inglesa assada)",
                    "Salada à vontade com 1 colher de azeite extra virgem",
                    "Opcional: Legumes (máximo 200g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Aumente o volume de vegetais para compensar a redução de carboidratos"]
            },
            {
                titulo: "Refeição 3 - Lanche da tarde",
                alimentos: [
                    "2 opções de fruta: 60g banana ou 120g mamão ou 50g abacate ou 160g morangos",
                    "15g pasta de amendoim (ou 25g doce de leite)",
                    "10g aveia em flocos (ou 10g granola diet)",
                    "40g whey protein",
                    "5g creatina"
                ],
                dicas: ["Aumente a proteína e reduza ligeiramente as gorduras"]
            },
            {
                titulo: "Refeição 4 - Jantar",
                alimentos: [
                    "140g peito de frango (ou 130g carne magra ou 160g filé de peixe)",
                    "180g cuscuz (ou 200g batata doce ou 180g macaxeira ou 4 fatias pão de caixa)",
                    "Opcional: Legumes (máximo 200g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Reduza ligeiramente os carboidratos em relação à semana anterior"]
            },
            {
                titulo: "Refeição 5 - Ceia (opcional)",
                alimentos: [
                    "150g iogurte natural (ou 220g corpus light ou 220g molico zero açúcar ou 110g iogurte grego)",
                    "5g chia",
                    "10g granola diet",
                    "1 opção de fruta: 60g banana ou 120g mamão ou 90g abacaxi ou 160g morangos"
                ],
                dicas: ["Reduza a quantidade de carboidratos nesta refeição"]
            }
        ],
        refeicaoLivre: {
            titulo: "Refeição livre (1x na semana)",
            exemplos: [
                "2-3 hambúrgueres artesanais (1500kcal)",
                "25-35 peças de sushi (1500kcal)",
                "4-6 fatias de pizza (1500kcal)",
                "1 hambúrguer + 1 fatia de bolo de chocolate (1500kcal)"
            ],
            dicas: [
                "Prefira fazer em dia de treino",
                "Substitua 2 refeições do dia pela refeição livre",
                "Mantenha-se dentro do limite de 1500kcal"
            ]
        },
        equivalencias: [
            {
                titulo: "Equivalência de Carboidratos (28g)",
                itens: [
                    "100g de Arroz = 28g de carboidratos",
                    "140g Batata doce = 28g de carboidratos",
                    "200g de Feijão = 28g de carboidratos",
                    "240g Batata Inglesa = 28g de carboidratos",
                    "2 Fatias de Pão = 28g de carboidratos",
                    "120g de Cuscuz = 28g de carboidratos",
                    "50g de Tapioca = 28g de carboidratos"
                ]
            },
            {
                titulo: "Equivalência de Proteínas",
                itens: [
                    "80g de frango = 70g Patinho",
                    "80g de frango = 100g atum (sem óleo)",
                    "80g de frango = 5 claras + 1 gema",
                    "80g de frango = 30g Whey Concentrado",
                    "80g de frango = 100g Tilápia"
                ]
            }
        ]
    },
    {
        // SEMANA 3
        titulo: "Intensificação do Cutting",
        descricao: "Redução estratégica de carboidratos e aumento de proteína",
        deficitCalorico: "25-30% abaixo da manutenção",
        calorias: 1600,
        macros: {
            proteina: 190,
            carboidratos: 115,
            gorduras: 55
        },
        refeicoes: [
            {
                titulo: "Refeição 1 - Café da manhã",
                alimentos: [
                    "1 fatia pão de caixa (ou 2 torradas ou 80g batata doce)",
                    "5 claras + 1 gema (ou 90g frango desfiado ou 100g peito de peru defumado)",
                    "20g queijo branco (ou 15g muçarela)",
                    "1 opção de fruta baixo IG: 120g mamão ou 160g morangos"
                ],
                dicas: ["Diminuir carboidratos e aumentar proteínas para preservar massa muscular"]
            },
            {
                titulo: "Refeição 2 - Almoço",
                alimentos: [
                    "160g peito de frango (ou 140g carne magra ou 180g filé de peixe)",
                    "150g arroz branco (ou 150g macarrão ou 220g batata doce ou 150g batata inglesa assada)",
                    "Salada à vontade com 1 colher de azeite extra virgem",
                    "Opcional: Legumes (máximo 250g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Aumente ainda mais o volume de vegetais para maior saciedade"]
            },
            {
                titulo: "Refeição 3 - Lanche da tarde",
                alimentos: [
                    "1 opção de fruta: 60g banana ou 120g mamão ou 160g morangos",
                    "10g pasta de amendoim (ou 20g doce de leite)",
                    "10g aveia em flocos",
                    "45g whey protein",
                    "5g creatina"
                ],
                dicas: ["Foque em proteínas e reduza carboidratos"]
            },
            {
                titulo: "Refeição 4 - Jantar",
                alimentos: [
                    "160g peito de frango (ou 140g carne magra ou 180g filé de peixe)",
                    "120g cuscuz (ou 180g batata doce ou 3 fatias pão de caixa)",
                    "Legumes (máximo 250g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Aumentar proteínas e vegetais, reduzir carboidratos"]
            },
            {
                titulo: "Refeição 5 - Ceia (opcional)",
                alimentos: [
                    "200g iogurte natural (ou 250g corpus light ou 250g molico zero açúcar)",
                    "5g chia",
                    "5g granola diet",
                    "160g morangos ou 120g mamão (frutas com baixo IG)"
                ],
                dicas: ["Minimize carboidratos nesta refeição para melhor queima de gordura durante o sono"]
            }
        ],
        refeicaoLivre: {
            titulo: "Refeição livre (1x na semana)",
            exemplos: [
                "2 hambúrgueres artesanais (1200kcal)",
                "20-30 peças de sushi (1200kcal)",
                "3-5 fatias de pizza (1200kcal)",
                "1 hambúrguer médio + 1 sobremesa pequena (1200kcal)"
            ],
            dicas: [
                "Reduza para 1200kcal na refeição livre",
                "Prefira fazer em dia de treino",
                "Substitua 2 refeições do dia pela refeição livre"
            ]
        },
        equivalencias: [
            {
                titulo: "Equivalência de Carboidratos (28g)",
                itens: [
                    "100g de Arroz = 28g de carboidratos",
                    "140g Batata doce = 28g de carboidratos",
                    "200g de Feijão = 28g de carboidratos",
                    "240g Batata Inglesa = 28g de carboidratos",
                    "2 Fatias de Pão = 28g de carboidratos",
                    "120g de Cuscuz = 28g de carboidratos",
                    "50g de Tapioca = 28g de carboidratos"
                ]
            },
            {
                titulo: "Equivalência de Proteínas",
                itens: [
                    "80g de frango = 70g Patinho",
                    "80g de frango = 100g atum (sem óleo)",
                    "80g de frango = 5 claras + 1 gema",
                    "80g de frango = 30g Whey Concentrado",
                    "80g de frango = 100g Tilápia"
                ]
            }
        ]
    },
    {
        // SEMANA 4
        titulo: "Finalização do Cutting",
        descricao: "Ciclagem de carboidratos e foco máximo em proteínas",
        deficitCalorico: "25-30% com ciclagem de carboidratos",
        calorias: "1550-1750 (variável conforme o dia)",
        macros: {
            proteina: 200,
            carboidratos: "80-150 (ciclagem)",
            gorduras: 55
        },
        refeicoes: [
            {
                titulo: "Refeição 1 - Café da manhã",
                alimentos: [
                    "DIAS TREINO: 1 fatia pão de caixa (ou 2 torradas ou 80g batata doce)",
                    "DIAS SEM TREINO: Omitir carboidratos complexos",
                    "5 claras + 1 gema (ou 90g frango desfiado ou 100g peito de peru defumado)",
                    "20g queijo branco (ou 15g muçarela)",
                    "1 opção de fruta baixo IG: 120g mamão ou 160g morangos"
                ],
                dicas: ["Ciclagem de carboidratos: mais nos dias de treino, menos nos dias de descanso"]
            },
            {
                titulo: "Refeição 2 - Almoço",
                alimentos: [
                    "180g peito de frango (ou 160g carne magra ou 200g filé de peixe)",
                    "DIAS TREINO: 150g arroz branco (ou 150g macarrão ou 220g batata doce)",
                    "DIAS SEM TREINO: 100g arroz branco (ou 100g macarrão ou 150g batata doce)",
                    "Salada à vontade com 1 colher de azeite extra virgem",
                    "Legumes (máximo 300g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Volume máximo de vegetais para saciedade com menos calorias"]
            },
            {
                titulo: "Refeição 3 - Lanche da tarde",
                alimentos: [
                    "50g whey protein",
                    "5g creatina",
                    "DIAS TREINO: 1 opção de fruta: 60g banana ou 120g mamão",
                    "DIAS SEM TREINO: 160g morangos ou frutas com baixo IG",
                    "10g pasta de amendoim"
                ],
                dicas: ["Proteína elevada, carboidratos apenas nos dias de treino"]
            },
            {
                titulo: "Refeição 4 - Jantar",
                alimentos: [
                    "180g peito de frango (ou 160g carne magra ou 200g filé de peixe)",
                    "DIAS TREINO: 120g cuscuz (ou 180g batata doce)",
                    "DIAS SEM TREINO: Apenas proteínas e vegetais, sem carboidratos complexos",
                    "Legumes (máximo 300g - cenoura, jerimum, brócolis, chuchu ou abobrinha)"
                ],
                dicas: ["Em dias sem treino, substitua carboidratos por mais vegetais"]
            },
            {
                titulo: "Refeição 5 - Ceia (opcional)",
                alimentos: [
                    "200g iogurte natural (ou 250g corpus light ou 250g molico zero açúcar)",
                    "5g chia",
                    "160g morangos ou 120g mamão (frutas com baixo IG)"
                ],
                dicas: ["Elimine carboidratos à noite para melhor queima de gordura durante o sono"]
            }
        ],
        refeicaoLivre: {
            titulo: "Refeição livre (última semana)",
            exemplos: [
                "1-2 hambúrgueres artesanais (1000kcal)",
                "15-20 peças de sushi (1000kcal)",
                "2-4 fatias de pizza (1000kcal)",
                "1 prato moderado de comida livre (1000kcal)"
            ],
            dicas: [
                "Reduza para 1000kcal na refeição livre",
                "Prefira fazer após um treino intenso",
                "Substitua 2 refeições do dia pela refeição livre",
                "Esta é a última semana - mantenha o foco!"
            ]
        },
        equivalencias: [
            {
                titulo: "Equivalência de Carboidratos (28g)",
                itens: [
                    "100g de Arroz = 28g de carboidratos",
                    "140g Batata doce = 28g de carboidratos",
                    "200g de Feijão = 28g de carboidratos",
                    "240g Batata Inglesa = 28g de carboidratos",
                    "2 Fatias de Pão = 28g de carboidratos",
                    "120g de Cuscuz = 28g de carboidratos",
                    "50g de Tapioca = 28g de carboidratos"
                ]
            },
            {
                titulo: "Equivalência de Proteínas",
                itens: [
                    "80g de frango = 70g Patinho",
                    "80g de frango = 100g atum (sem óleo)",
                    "80g de frango = 5 claras + 1 gema",
                    "80g de frango = 30g Whey Concentrado",
                    "80g de frango = 100g Tilápia"
                ]
            }
        ]
    }
];