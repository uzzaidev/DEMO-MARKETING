const fs = require('fs');
const path = require('path');

// Dados dos posts
const posts = [
  // Janeiro 2026
  { id: 35, tipo: 'Carrossel', titulo: 'Quem somos - Conheça a Uzz.Ai', canal: 'Instagram', data: '2026-01-26', status: 'agendado', projeto: 'Quem Somos' },
  { id: 36, tipo: 'Carrossel', titulo: 'Quem somos - Conheça a Uzz.Ai', canal: 'LinkedIn', data: '2026-01-26', status: 'agendado', projeto: 'Quem Somos' },
  { id: 37, tipo: 'Carrossel', titulo: 'Quem somos - Conheça a Uzz.Ai', canal: 'Site', data: '2026-01-26', status: 'agendado', projeto: 'Quem Somos' },
  { id: 38, tipo: 'Carrossel', titulo: 'Serviços - Como funciona o Uzz.App', canal: 'Instagram', data: '2026-01-28', status: 'agendado', projeto: 'Uzz.App' },
  { id: 39, tipo: 'Carrossel', titulo: 'Serviços - Como funciona o Uzz.App', canal: 'LinkedIn', data: '2026-01-28', status: 'agendado', projeto: 'Uzz.App' },
  { id: 40, tipo: 'Carrossel', titulo: 'Serviços - Como funciona o Uzz.App', canal: 'Site', data: '2026-01-28', status: 'agendado', projeto: 'Uzz.App' },
  { id: 41, tipo: 'Feed', titulo: 'IA para empresas - Como usar IA na sua empresa', canal: 'Instagram', data: '2026-01-30', status: 'agendado', projeto: 'IA para Empresas' },
  { id: 42, tipo: 'Feed', titulo: 'IA para empresas - Como usar IA na sua empresa', canal: 'LinkedIn', data: '2026-01-30', status: 'agendado', projeto: 'IA para Empresas' },
  { id: 43, tipo: 'Feed', titulo: 'IA para empresas - Como usar IA na sua empresa', canal: 'Site', data: '2026-01-30', status: 'agendado', projeto: 'IA para Empresas' },
  { id: 20, tipo: 'Feed', titulo: 'Quem somos - Conheça Pedro Vitor', canal: 'Instagram', data: '2026-02-01', status: 'agendado', projeto: 'Quem Somos' },
  { id: 21, tipo: 'Feed', titulo: 'Quem somos - Conheça Pedro Vitor', canal: 'LinkedIn', data: '2026-02-01', status: 'agendado', projeto: 'Quem Somos' },
  { id: 31, tipo: 'Carrossel', titulo: 'Nossos serviços - Processos Implementação chatbot', canal: 'Instagram', data: '2026-02-02', status: 'agendado', projeto: 'Uzz.App' },
  { id: 32, tipo: 'Carrossel', titulo: 'Nossos serviços - Processos Implementação chatbot', canal: 'LinkedIn', data: '2026-02-02', status: 'agendado', projeto: 'Uzz.App' },
  { id: 33, tipo: 'Carrossel', titulo: 'Nossos serviços - Processos Implementação chatbot', canal: 'Site', data: '2026-02-02', status: 'agendado', projeto: 'Uzz.App' },
  { id: 16, tipo: 'Reels', titulo: 'Nossos serviços Uzz.Builder - Colocando seu negócio no Mundo Digital', canal: 'Instagram', data: '2026-02-04', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 17, tipo: 'Reels', titulo: 'Nossos serviços Uzz.Builder - Colocando seu negócio no Mundo Digital', canal: 'LinkedIn', data: '2026-02-04', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 18, tipo: 'Carrossel', titulo: 'Nossos serviços Uzz.Builder - Por que a Uzz.Builder?', canal: 'Instagram', data: '2026-02-06', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 19, tipo: 'Carrossel', titulo: 'Nossos serviços Uzz.Builder - Por que a Uzz.Builder?', canal: 'LinkedIn', data: '2026-02-06', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 22, tipo: 'Reels', titulo: 'Quem somos - Conheça Arthur', canal: 'Instagram', data: '2026-02-08', status: 'agendado', projeto: 'Quem Somos' },
  { id: 23, tipo: 'Reels', titulo: 'Quem somos - Conheça Arthur', canal: 'LinkedIn', data: '2026-02-08', status: 'agendado', projeto: 'Quem Somos' },
  { id: 12, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - Seja encontrado no Google', canal: 'LinkedIn', data: '2026-02-09', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 13, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - Seja encontrado no Google', canal: 'Instagram', data: '2026-02-09', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 7, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - Cansado de jogar sozinho?', canal: 'Instagram', data: '2026-02-11', status: 'agendado', projeto: 'Peladeiros' },
  { id: 8, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - Cansado de jogar sozinho?', canal: 'Site', data: '2026-02-11', status: 'agendado', projeto: 'Peladeiros' },
  { id: 9, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - O seu negócio na Internet', canal: 'Site', data: '2026-02-13', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 10, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - O seu negócio na Internet', canal: 'LinkedIn', data: '2026-02-13', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 11, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - O seu negócio na Internet', canal: 'Instagram', data: '2026-02-13', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 24, tipo: 'Reels', titulo: 'Quem somos - Conheça Luis', canal: 'Instagram', data: '2026-02-15', status: 'agendado', projeto: 'Quem Somos' },
  { id: 25, tipo: 'Reels', titulo: 'Quem somos - Conheça Luis', canal: 'LinkedIn', data: '2026-02-15', status: 'agendado', projeto: 'Quem Somos' },
  { id: 4, tipo: 'Feed', titulo: 'Mundo da IA - IA para ajudar, não atrapalhar', canal: 'Site', data: '2026-02-16', status: 'agendado', projeto: 'Mundo da IA' },
  { id: 5, tipo: 'Feed', titulo: 'Mundo da IA - IA para ajudar, não atrapalhar', canal: 'LinkedIn', data: '2026-02-16', status: 'agendado', projeto: 'Mundo da IA' },
  { id: 6, tipo: 'Feed', titulo: 'Mundo da IA - IA para ajudar, não atrapalhar', canal: 'Instagram', data: '2026-02-16', status: 'agendado', projeto: 'Mundo da IA' },
  { id: 14, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - A sua pelada organizada', canal: 'Site', data: '2026-02-18', status: 'agendado', projeto: 'Peladeiros' },
  { id: 15, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - A sua pelada organizada', canal: 'Instagram', data: '2026-02-18', status: 'agendado', projeto: 'Peladeiros' },
  { id: 34, tipo: 'Carrossel', titulo: 'Nossos serviços Uzz.App - Demo Uzz.App', canal: 'Instagram', data: '2026-02-20', status: 'agendado', projeto: 'Uzz.App' },
  { id: 26, tipo: 'Reels', titulo: 'Quem somos - Conheça Guilherme', canal: 'Instagram', data: '2026-02-22', status: 'agendado', projeto: 'Quem Somos' },
  { id: 27, tipo: 'Reels', titulo: 'Quem somos - Conheça Guilherme', canal: 'LinkedIn', data: '2026-02-22', status: 'agendado', projeto: 'Quem Somos' },
  { id: 1, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Você está perdendo dinheiro sem o Uzz.App', canal: 'LinkedIn', data: '2026-02-23', status: 'agendado', projeto: 'Uzz.App' },
  { id: 28, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Você está perdendo dinheiro sem o Uzz.App', canal: 'Instagram', data: '2026-02-23', status: 'agendado', projeto: 'Uzz.App' },
  { id: 2, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Depoimento Sports Training', canal: 'LinkedIn', data: '2026-02-25', status: 'agendado', projeto: 'Uzz.App' },
  { id: 29, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Depoimento Sports Training', canal: 'Instagram', data: '2026-02-25', status: 'agendado', projeto: 'Uzz.App' },
  { id: 3, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Lançamento do App', canal: 'LinkedIn', data: '2026-02-27', status: 'agendado', projeto: 'Uzz.App' },
  { id: 30, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Lançamento do App', canal: 'Instagram', data: '2026-02-27', status: 'agendado', projeto: 'Uzz.App' }
];

// Função para criar slug
function createSlug(titulo) {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

// Encontrar uma imagem existente para usar como placeholder
function findPlaceholderImage() {
  const possibleImages = [
    'public/08 - CARROSEL PRIMEIRO/slide_00_capa_1769596989406.png',
    'public/08 - CARROSEL PRIMEIRO/slide_01_intro_1769597082293.png',
    'assets/carrossel-quem-somos-uzzai/slide_v3_01_oi_sou_uzzai_1769603618421.png'
  ];

  for (const imgPath of possibleImages) {
    if (fs.existsSync(imgPath)) {
      return imgPath;
    }
  }

  return null;
}

console.log('🚀 Iniciando criação de estrutura de posts do calendário...\n');

const baseDir = path.join(__dirname, 'public', 'calendario-posts');

// Criar diretório base
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
  console.log('✅ Diretório base criado:', baseDir);
}

// Encontrar imagem placeholder
const placeholderImage = findPlaceholderImage();
if (!placeholderImage) {
  console.error('❌ Nenhuma imagem placeholder encontrada!');
  process.exit(1);
}
console.log('📷 Usando como placeholder:', placeholderImage, '\n');

let createdCount = 0;
let errorCount = 0;

// Criar pasta para cada post
posts.forEach(post => {
  try {
    const slug = createSlug(post.titulo);
    const folderName = `post-${post.id}-${slug}`;
    const folderPath = path.join(baseDir, folderName);

    // Criar pasta
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Copiar imagem placeholder
    const imageDest = path.join(folderPath, 'preview.jpg');
    if (!fs.existsSync(imageDest)) {
      fs.copyFileSync(placeholderImage, imageDest);
    }

    // Criar arquivo info.json com dados do post
    const infoPath = path.join(folderPath, 'info.json');
    fs.writeFileSync(infoPath, JSON.stringify(post, null, 2));

    createdCount++;
    console.log(`✅ [${post.id}] ${post.tipo} - ${post.titulo.substring(0, 50)}...`);
  } catch (error) {
    errorCount++;
    console.error(`❌ Erro ao criar post ${post.id}:`, error.message);
  }
});

console.log('\n' + '='.repeat(60));
console.log(`✨ Processo concluído!`);
console.log(`📁 Posts criados: ${createdCount}`);
console.log(`❌ Erros: ${errorCount}`);
console.log(`📂 Localização: ${baseDir}`);
console.log('='.repeat(60));
