
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const comidasData = [
  // PRICIPAIS (1-10)
  { nome: "Filé Mignon ao Molho Madeira", tipo: "Principal", preco: 79.00, descricao: "Suculento filé mignon grelhado com molho de vinho e champignon." },
  { nome: "Salmão Grelhado com Alcaparras", tipo: "Principal", preco: 65.50, descricao: "Posta de salmão fresca grelhada com molho de manteiga e alcaparras." },
  { nome: "Frango com Batata Doce", tipo: "Principal", preco: 39.99, descricao: "Opção fitness de frango grelhado e batata doce cozida." },
  { nome: "Moqueca de Camarão", tipo: "Principal", preco: 89.00, descricao: "Prato típico baiano com camarões cozidos em azeite de dendê e leite de coco." },
  { nome: "Hambúrguer de Picanha Duplo", tipo: "Principal", preco: 54.90, descricao: "Dois hambúrgueres artesanais de picanha com queijo cheddar e bacon." },
  { nome: "Strogonoff de Carne", tipo: "Principal", preco: 48.50, descricao: "Clássico strogonoff de carne bovina, servido com arroz e batata palha." },
  { nome: "Lasanha Quatro Queijos", tipo: "Principal", preco: 42.00, descricao: "Lasanha gratinada com recheio cremoso de provolone, mussarela, parmesão e requeijão." },
  { nome: "Torta de Frango com Requeijão", tipo: "Principal", preco: 32.50, descricao: "Torta cremosa de frango desfiado com muito requeijão Catupiry." },
  { nome: "Feijoada Light", tipo: "Principal", preco: 58.00, descricao: "Feijoada feita com carnes magras e menos gordura, acompanha arroz e couve." },
  { nome: "Omelete de Legumes e Queijo", tipo: "Principal", preco: 28.90, descricao: "Omelete leve com abobrinha, tomate, cebola e queijo minas frescal." },
  
  // SOBREMESAS (11-20)
  { nome: "Brownie com Sorvete de Baunilha", tipo: "Sobremesa", preco: 24.00, descricao: "Brownie de chocolate quente com uma bola de sorvete de baunilha e calda de chocolate." },
  { nome: "Pudim de Leite Condensado", tipo: "Sobremesa", preco: 18.50, descricao: "O tradicional pudim de leite, liso e com calda de caramelo." },
  { nome: "Mousse de Maracujá", tipo: "Sobremesa", preco: 16.00, descricao: "Mousse aerada de maracujá, levemente ácida e doce." },
  { nome: "Torta de Limão Suíça", tipo: "Sobremesa", preco: 22.90, descricao: "Base crocante, recheio cítrico de limão e cobertura de merengue suíço." },
  { nome: "Cheesecake de Frutas Vermelhas", tipo: "Sobremesa", preco: 28.00, descricao: "Clássico cheesecake americano com cobertura de geleia de frutas vermelhas." },
  { nome: "Brigadeiro Gourmet", tipo: "Sobremesa", preco: 12.00, descricao: "Quatro unidades de brigadeiro gourmet com chocolate belga." },
  { nome: "Salada de Frutas", tipo: "Sobremesa", preco: 19.50, descricao: "Mix de frutas da estação picadas e frescas." },
  { nome: "Petit Gateau de Doce de Leite", tipo: "Sobremesa", preco: 26.90, descricao: "Bolo quente de doce de leite com centro cremoso, servido com sorvete." },
  { nome: "Açaí na Tigela (500ml)", tipo: "Sobremesa", preco: 25.00, descricao: "Açaí batido na tigela com granola e banana." },
  { nome: "Creme de Papaya com Cassis", tipo: "Sobremesa", preco: 21.00, descricao: "Creme de mamão papaia batido com licor de cassis." },

  // BEBIDAS (21-30)
  { nome: "Água Mineral com Gás", tipo: "Bebida", preco: 6.00, descricao: "Água mineral com gás, garrafa de 500ml." },
  { nome: "Suco de Laranja Natural (500ml)", tipo: "Bebida", preco: 14.00, descricao: "Suco de laranja espremido na hora, sem adição de açúcar." },
  { nome: "Limonada Suíça", tipo: "Bebida", preco: 15.50, descricao: "Bebida refrescante de limão, com casca, e leite condensado." },
  { nome: "Refrigerante Coca-Cola", tipo: "Bebida", preco: 8.00, descricao: "Lata de Coca-Cola gelada (350ml)." },
  { nome: "Cerveja Heineken (Long Neck)", tipo: "Bebida", preco: 16.00, descricao: "Cerveja premium holandesa, garrafa long neck (330ml)." },
  { nome: "Café Expresso Duplo", tipo: "Bebida", preco: 11.00, descricao: "Duas doses de café espresso de alta qualidade." },
  { nome: "Vinho Tinto Chileno (Taça)", tipo: "Bebida", preco: 35.00, descricao: "Taça de vinho tinto Cabernet Sauvignon." },
  { nome: "Chá Gelado de Pêssego", tipo: "Bebida", preco: 10.50, descricao: "Chá preto com sabor natural de pêssego, servido gelado." },
  { nome: "Smoothie de Morango e Manga", tipo: "Bebida", preco: 17.90, descricao: "Bebida cremosa à base de iogurte, morango e manga." },
  { nome: "Chocolate Quente Cremoso", tipo: "Bebida", preco: 19.00, descricao: "Bebida de chocolate quente, densa e cremosa (apenas no inverno)." },
  
  // APERITIVOS (31-40)
  { nome: "Batata Frita com Cheddar e Bacon", tipo: "Aperitivo", preco: 35.00, descricao: "Porção de batatas fritas cobertas com cheddar cremoso e cubos de bacon." },
  { nome: "Bolinho de Bacalhau", tipo: "Aperitivo", preco: 45.00, descricao: "8 unidades de bolinho de bacalhau, crocantes por fora e macios por dentro." },
  { nome: "Pão de Alho Recheado", tipo: "Aperitivo", preco: 29.90, descricao: "Pão de alho recheado com queijo mussarela, assado na hora." },
  { nome: "Tábuas de Frios Mista", tipo: "Aperitivo", preco: 95.00, descricao: "Mix de queijos, salames, presunto parma e azeitonas." },
  { nome: "Mini-Pastéis de Queijo", tipo: "Aperitivo", preco: 30.00, descricao: "10 unidades de mini-pastéis de queijo e orégano." },
  { nome: "Porção de Mandioca Frita", tipo: "Aperitivo", preco: 26.00, descricao: "Mandioca frita sequinha, acompanha maionese temperada." },
  { nome: "Azeitonas Marinadas", tipo: "Aperitivo", preco: 18.00, descricao: "Azeitonas pretas e verdes marinadas no azeite com ervas finas." },
  { nome: "Ceviche Clássico Peruano", tipo: "Aperitivo", preco: 49.90, descricao: "Peixe branco marinado em limão, cebola roxa e pimenta." },
  { nome: "Nachos com Guacamole", tipo: "Aperitivo", preco: 38.00, descricao: "Chips de milho crocantes servidos com guacamole fresco e sour cream." },
  { nome: "Caldinho de Feijão", tipo: "Aperitivo", preco: 21.00, descricao: "Caldinho de feijão temperado, servido com bacon e cheiro verde." },

  // VEGANOS (41-50)
  { nome: "Hambúrguer de Grão de Bico", tipo: "Vegano", preco: 42.00, descricao: "Hambúrguer de grão de bico caseiro com pão integral e vegetais." },
  { nome: "Salada de Quinoa com Legumes", tipo: "Vegano", preco: 38.50, descricao: "Salada nutritiva com quinoa, pepino, tomate, cenoura e molho de mostarda." },
  { nome: "Pizza de Abobrinha com Tomate Seco", tipo: "Vegano", preco: 55.00, descricao: "Pizza com massa integral, molho de tomate, abobrinha, tomate seco e azeite." },
  { nome: "Abará de Feijão Fradinho", tipo: "Vegano", preco: 15.00, descricao: "Massa de feijão-fradinho cozida no vapor, enrolada em folha de bananeira." },
  { nome: "Wrap de Vegetais Assados", tipo: "Vegano", preco: 34.90, descricao: "Massa de wrap recheada com pimentão, berinjela e brócolis assados." },
  { nome: "Tacos de Cogumelos e Pimenta", tipo: "Vegano", preco: 46.00, descricao: "Tortillas de milho recheadas com mix de cogumelos e temperos picantes." },
  { nome: "Sopa de Lentilha", tipo: "Vegano", preco: 29.00, descricao: "Sopa densa e nutritiva de lentilha com especiarias (ideal para o frio)." },
  { nome: "Mousse de Cacau com Abacate", tipo: "Vegano", preco: 23.00, descricao: "Sobremesa vegana cremosa feita com abacate, cacau e adoçante natural." },
  { nome: "Suco Verde Detox", tipo: "Vegano", preco: 16.50, descricao: "Suco de couve, limão, gengibre e maçã." },
  { nome: "Brownie Vegano de Nozes", tipo: "Vegano", preco: 25.00, descricao: "Brownie sem ingredientes de origem animal, com pedaços de nozes." }
];

async function main() {
  console.log('Iniciando o seeding de 50 comidas...');
  
  for (const food of comidasData) {
    await prisma.comida.create({
      data: food,
    });
  }

  console.log(`Seeding finalizado. ${comidasData.length} comidas criadas.`);
}

main()
  .catch(e => {
    console.error('Erro durante o seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });