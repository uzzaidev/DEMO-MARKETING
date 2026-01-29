// Dados dos posts do Calendário Editorial
// Extraído do calendário oficial CALENDARIO-EDITORIAL-VISUAL - R01.html
// Atualizado em 2026-01-29

export interface CalendarioPost {
  id: number;
  tipo: 'Reels' | 'Feed' | 'Carrossel' | 'Stories';
  titulo: string;
  canal: 'LinkedIn' | 'Instagram' | 'Site';
  data: string;
  status: 'agendado' | 'publicado' | 'arquivado';
  projeto?: string;
  folder?: string;
  imagePath?: string;
  slides?: string[];
}

export const calendarioPosts: CalendarioPost[] = [
  // 09/02/2026 (Segunda) - Primeira data
  {
    id: 35,
    tipo: 'Carrossel',
    titulo: 'Quem somos - Conheça a Uzz.Ai',
    canal: 'Instagram',
    data: '2026-02-09',
    status: 'agendado',
    projeto: 'Quem Somos',
    slides: [
      'quem_somos_01_capa_1769676912001.png',
      'quem_somos_02_problema_1769676308698.png',
      'quem_somos_03_pilar_dev_1769676359802.png',
      'quem_somos_04_pilar_design_1769676431827.png',
      'quem_somos_05_pilar_marketing_1769676502954.png',
      'quem_somos_06_diferencial_1769676637400.png',
      'quem_somos_07_cta_1769676741055.png'
    ]
  },
  { id: 36, tipo: 'Carrossel', titulo: 'Quem somos - Conheça a Uzz.Ai', canal: 'LinkedIn', data: '2026-02-09', status: 'agendado', projeto: 'Quem Somos' },
  { id: 37, tipo: 'Carrossel', titulo: 'Quem somos - Conheça a Uzz.Ai', canal: 'Site', data: '2026-02-09', status: 'agendado', projeto: 'Quem Somos' },
  { id: 12, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - Seja encontrado no Google', canal: 'LinkedIn', data: '2026-02-09', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 13, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - Seja encontrado no Google', canal: 'Instagram', data: '2026-02-09', status: 'agendado', projeto: 'Uzz.Builder' },

  // 11/02/2026 (Quarta) - +2 dias
  { id: 38, tipo: 'Carrossel', titulo: 'Serviços - Como funciona o Uzz.App', canal: 'Instagram', data: '2026-02-11', status: 'agendado', projeto: 'Uzz.App' },
  { id: 39, tipo: 'Carrossel', titulo: 'Serviços - Como funciona o Uzz.App', canal: 'LinkedIn', data: '2026-02-11', status: 'agendado', projeto: 'Uzz.App' },
  { id: 40, tipo: 'Carrossel', titulo: 'Serviços - Como funciona o Uzz.App', canal: 'Site', data: '2026-02-11', status: 'agendado', projeto: 'Uzz.App' },
  { id: 7, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - Cansado de jogar sozinho?', canal: 'Instagram', data: '2026-02-11', status: 'agendado', projeto: 'Peladeiros' },
  { id: 8, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - Cansado de jogar sozinho?', canal: 'Site', data: '2026-02-11', status: 'agendado', projeto: 'Peladeiros' },

  // 13/02/2026 (Sexta) - +2 dias
  { id: 41, tipo: 'Feed', titulo: 'IA para empresas - Como usar IA na sua empresa', canal: 'Instagram', data: '2026-02-13', status: 'agendado', projeto: 'IA para Empresas' },
  { id: 42, tipo: 'Feed', titulo: 'IA para empresas - Como usar IA na sua empresa', canal: 'LinkedIn', data: '2026-02-13', status: 'agendado', projeto: 'IA para Empresas' },
  { id: 43, tipo: 'Feed', titulo: 'IA para empresas - Como usar IA na sua empresa', canal: 'Site', data: '2026-02-13', status: 'agendado', projeto: 'IA para Empresas' },
  { id: 9, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - O seu negócio na Internet', canal: 'Site', data: '2026-02-13', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 10, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - O seu negócio na Internet', canal: 'LinkedIn', data: '2026-02-13', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 11, tipo: 'Feed', titulo: 'Nossos serviços Uzz.Builder - O seu negócio na Internet', canal: 'Instagram', data: '2026-02-13', status: 'agendado', projeto: 'Uzz.Builder' },

  // 15/02/2026 (Domingo) - +2 dias
  { id: 20, tipo: 'Feed', titulo: 'Quem somos - Conheça Pedro Vitor', canal: 'Instagram', data: '2026-02-15', status: 'agendado', projeto: 'Quem Somos' },
  { id: 21, tipo: 'Feed', titulo: 'Quem somos - Conheça Pedro Vitor', canal: 'LinkedIn', data: '2026-02-15', status: 'agendado', projeto: 'Quem Somos' },
  { id: 24, tipo: 'Reels', titulo: 'Quem somos - Conheça Luis', canal: 'Instagram', data: '2026-02-15', status: 'agendado', projeto: 'Quem Somos' },
  { id: 25, tipo: 'Reels', titulo: 'Quem somos - Conheça Luis', canal: 'LinkedIn', data: '2026-02-15', status: 'agendado', projeto: 'Quem Somos' },

  // 16/02/2026 (Segunda) - +1 dia
  { id: 4, tipo: 'Feed', titulo: 'Mundo da IA - IA para ajudar, não atrapalhar', canal: 'Site', data: '2026-02-16', status: 'agendado', projeto: 'Mundo da IA' },
  { id: 5, tipo: 'Feed', titulo: 'Mundo da IA - IA para ajudar, não atrapalhar', canal: 'LinkedIn', data: '2026-02-16', status: 'agendado', projeto: 'Mundo da IA' },
  { id: 6, tipo: 'Feed', titulo: 'Mundo da IA - IA para ajudar, não atrapalhar', canal: 'Instagram', data: '2026-02-16', status: 'agendado', projeto: 'Mundo da IA' },

  // 18/02/2026 (Quarta) - +2 dias
  { id: 14, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - A sua pelada organizada', canal: 'Site', data: '2026-02-18', status: 'agendado', projeto: 'Peladeiros' },
  { id: 15, tipo: 'Carrossel', titulo: 'Nossos serviços Peladeiros - A sua pelada organizada', canal: 'Instagram', data: '2026-02-18', status: 'agendado', projeto: 'Peladeiros' },
  { id: 16, tipo: 'Reels', titulo: 'Nossos serviços Uzz.Builder - Colocando seu negócio no Mundo Digital', canal: 'Instagram', data: '2026-02-18', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 17, tipo: 'Reels', titulo: 'Nossos serviços Uzz.Builder - Colocando seu negócio no Mundo Digital', canal: 'LinkedIn', data: '2026-02-18', status: 'agendado', projeto: 'Uzz.Builder' },

  // 20/02/2026 (Sexta) - +2 dias
  { id: 34, tipo: 'Carrossel', titulo: 'Nossos serviços Uzz.App - Demo Uzz.App', canal: 'Instagram', data: '2026-02-20', status: 'agendado', projeto: 'Uzz.App' },
  { id: 18, tipo: 'Carrossel', titulo: 'Nossos serviços Uzz.Builder - Por que a Uzz.Builder?', canal: 'Instagram', data: '2026-02-20', status: 'agendado', projeto: 'Uzz.Builder' },
  { id: 19, tipo: 'Carrossel', titulo: 'Nossos serviços Uzz.Builder - Por que a Uzz.Builder?', canal: 'LinkedIn', data: '2026-02-20', status: 'agendado', projeto: 'Uzz.Builder' },

  // 22/02/2026 (Domingo) - +2 dias
  { id: 22, tipo: 'Reels', titulo: 'Quem somos - Conheça Arthur', canal: 'Instagram', data: '2026-02-22', status: 'agendado', projeto: 'Quem Somos' },
  { id: 23, tipo: 'Reels', titulo: 'Quem somos - Conheça Arthur', canal: 'LinkedIn', data: '2026-02-22', status: 'agendado', projeto: 'Quem Somos' },
  { id: 26, tipo: 'Reels', titulo: 'Quem somos - Conheça Guilherme', canal: 'Instagram', data: '2026-02-22', status: 'agendado', projeto: 'Quem Somos' },
  { id: 27, tipo: 'Reels', titulo: 'Quem somos - Conheça Guilherme', canal: 'LinkedIn', data: '2026-02-22', status: 'agendado', projeto: 'Quem Somos' },

  // 23/02/2026 (Segunda) - +1 dia
  { id: 1, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Você está perdendo dinheiro sem o Uzz.App', canal: 'LinkedIn', data: '2026-02-23', status: 'agendado', projeto: 'Uzz.App' },
  { id: 28, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Você está perdendo dinheiro sem o Uzz.App', canal: 'Instagram', data: '2026-02-23', status: 'agendado', projeto: 'Uzz.App' },

  // 25/02/2026 (Quarta) - +2 dias
  { id: 2, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Depoimento Sports Training', canal: 'LinkedIn', data: '2026-02-25', status: 'agendado', projeto: 'Uzz.App' },
  { id: 29, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Depoimento Sports Training', canal: 'Instagram', data: '2026-02-25', status: 'agendado', projeto: 'Uzz.App' },

  // 27/02/2026 (Sexta) - +2 dias
  { id: 3, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Lançamento do App', canal: 'LinkedIn', data: '2026-02-27', status: 'agendado', projeto: 'Uzz.App' },
  { id: 30, tipo: 'Reels', titulo: 'Nossos Serviços Uzz.App - Lançamento do App', canal: 'Instagram', data: '2026-02-27', status: 'agendado', projeto: 'Uzz.App' },

  // 01/03/2026 (Domingo) - +2 dias
  { id: 31, tipo: 'Carrossel', titulo: 'Nossos serviços - Processos Implementação chatbot', canal: 'Instagram', data: '2026-03-01', status: 'agendado', projeto: 'Uzz.App' },
  { id: 32, tipo: 'Carrossel', titulo: 'Nossos serviços - Processos Implementação chatbot', canal: 'LinkedIn', data: '2026-03-01', status: 'agendado', projeto: 'Uzz.App' },
  { id: 33, tipo: 'Carrossel', titulo: 'Nossos serviços - Processos Implementação chatbot', canal: 'Site', data: '2026-03-01', status: 'agendado', projeto: 'Uzz.App' }
];

// Função helper para criar slug do título
export function createSlug(titulo: string): string {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

// Função para obter o caminho da pasta do post
export function getPostFolder(post: CalendarioPost): string {
  const slug = createSlug(post.titulo);
  return `calendario-posts/post-${post.id}-${slug}`;
}

// Função para obter o caminho da imagem do post (ou primeiro slide)
export function getPostImagePath(post: CalendarioPost, slideIndex: number = 0): string {
  const folder = getPostFolder(post);

  // Se tem slides definidos, retornar o caminho do slide específico
  if (post.slides && post.slides[slideIndex]) {
    return `/${folder}/${post.slides[slideIndex]}`;
  }

  // Caso contrário, retornar preview.jpg padrão
  return `/${folder}/preview.jpg`;
}

// Função para obter todos os slides de um post
export function getAllSlides(post: CalendarioPost): string[] {
  if (post.slides && post.slides.length > 0) {
    return post.slides.map((slide, index) => getPostImagePath(post, index));
  }
  return [getPostImagePath(post)];
}
