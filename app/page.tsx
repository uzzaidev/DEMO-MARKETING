'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { carouselsData } from '../carousels-data';

// Interfaces
interface Feedback {
  carouselId: number;
  carouselName: string;
  slideIndex: number;
  slideName: string;
  rating: number;
  comment: string;
  userName: string;
  timestamp: string;
}

interface Carousel {
  id: number;
  name: string;
  folder: string;
  description: string;
  slides: string[];
  category: string;
  quality: number;
  fileSize: string;
  bestFor: string[];
}

interface PostCalendario {
  id: string;
  carouselId: number;
  carouselName: string;
  slideIndex: number;
  slideName: string;
  imagePath: string;
  tipo: 'Reels' | 'Feed' | 'Carrossel' | 'Stories';
  titulo: string;
  canal: 'LinkedIn' | 'Instagram' | 'Site';
  data: string; // YYYY-MM-DD
  status: 'agendado' | 'publicado' | 'arquivado';
  projeto: string;
  addedAt: string;
  rating?: number;
}


export default function CarouselGallery() {
  // Estados principais
  const [selectedCarousel, setSelectedCarousel] = useState<Carousel | null>(null);
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [filter, setFilter] = useState<string>("Todos");
  const [viewMode, setViewMode] = useState<'lightbox' | 'gallery'>('lightbox'); // Novo: modo de visualização

  // Estados do sistema de feedback
  const [feedbacks, setFeedbacks] = useState<Record<string, Feedback>>({});
  const [currentUserName, setCurrentUserName] = useState<string>('');
  const [tempRating, setTempRating] = useState<number>(0);
  const [tempComment, setTempComment] = useState<string>('');
  const [showExportModal, setShowExportModal] = useState(false);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [showCalendario, setShowCalendario] = useState(false);

  // Estados do Calendário Editorial
  const [postsCalendario, setPostsCalendario] = useState<PostCalendario[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [selectedPostForCalendar, setSelectedPostForCalendar] = useState<{carousel: Carousel, slideIndex: number} | null>(null);

  // Carregar nome do usuário e feedbacks do localStorage
  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setCurrentUserName(savedName);
    } else {
      setShowNamePrompt(true);
    }

    const savedFeedbacks = localStorage.getItem('carousel-feedbacks');
    if (savedFeedbacks) {
      try {
        setFeedbacks(JSON.parse(savedFeedbacks));
      } catch (e) {
        console.error('Erro ao carregar feedbacks:', e);
      }
    }
  }, []);

  // Salvar feedbacks no localStorage
  useEffect(() => {
    if (Object.keys(feedbacks).length > 0) {
      localStorage.setItem('carousel-feedbacks', JSON.stringify(feedbacks));
    }
  }, [feedbacks]);

  // Carregar posts do calendário do localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem('calendario-posts');
    if (savedPosts) {
      try {
        setPostsCalendario(JSON.parse(savedPosts));
      } catch (e) {
        console.error('Erro ao carregar posts do calendário:', e);
      }
    }
  }, []);

  // Salvar posts do calendário no localStorage
  useEffect(() => {
    if (postsCalendario.length > 0) {
      localStorage.setItem('calendario-posts', JSON.stringify(postsCalendario));
    }
  }, [postsCalendario]);

  // Salvar nome do usuário
  const saveUserName = (name: string) => {
    setCurrentUserName(name);
    localStorage.setItem('userName', name);
    setShowNamePrompt(false);
  };

  // Obter chave única para cada imagem
  const getImageKey = (carouselId: number, slideIndex: number) => {
    return `${carouselId}-${slideIndex}`;
  };

  // Obter feedback atual
  const getCurrentFeedback = () => {
    if (!selectedCarousel) return null;
    const key = getImageKey(selectedCarousel.id, selectedSlide);
    return feedbacks[key] || null;
  };

  // Atualizar feedback quando mudar de slide
  useEffect(() => {
    if (selectedCarousel) {
      const key = getImageKey(selectedCarousel.id, selectedSlide);
      const currentFeedback = feedbacks[key] || null;
      setTempRating(currentFeedback?.rating || 0);
      setTempComment(currentFeedback?.comment || '');
    }
  }, [selectedCarousel, selectedSlide, feedbacks]);

  // Salvar feedback
  const saveFeedback = () => {
    if (!selectedCarousel || tempRating === 0) return;

    const key = getImageKey(selectedCarousel.id, selectedSlide);
    const feedback: Feedback = {
      carouselId: selectedCarousel.id,
      carouselName: selectedCarousel.name,
      slideIndex: selectedSlide,
      slideName: selectedCarousel.slides[selectedSlide],
      rating: tempRating,
      comment: tempComment.trim(),
      userName: currentUserName || 'Anônimo',
      timestamp: new Date().toISOString()
    };

    setFeedbacks(prev => ({
      ...prev,
      [key]: feedback
    }));
  };

  // Auto-salvar ao mudar rating ou comentário
  useEffect(() => {
    if (tempRating > 0 && selectedCarousel) {
      const timer = setTimeout(() => {
        const key = getImageKey(selectedCarousel.id, selectedSlide);
        const feedback: Feedback = {
          carouselId: selectedCarousel.id,
          carouselName: selectedCarousel.name,
          slideIndex: selectedSlide,
          slideName: selectedCarousel.slides[selectedSlide],
          rating: tempRating,
          comment: tempComment.trim(),
          userName: currentUserName || 'Anônimo',
          timestamp: new Date().toISOString()
        };

        setFeedbacks(prev => ({
          ...prev,
          [key]: feedback
        }));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [tempRating, tempComment, selectedCarousel, selectedSlide, currentUserName]);

  // Dados dos carrosséis
  const carousels = carouselsData;

  // Estatísticas
  const stats = {
    total: Object.keys(feedbacks).length,
    avgRating: Object.keys(feedbacks).length > 0
      ? (Object.values(feedbacks).reduce((acc, f) => acc + f.rating, 0) / Object.keys(feedbacks).length).toFixed(1)
      : '0.0',
    withComments: Object.values(feedbacks).filter(f => f.comment.length > 0).length,
    totalImages: carousels.reduce((acc, c) => acc + c.slides.length, 0)
  };

  // Navegação
  const categories = ["Todos", "Institucional", "Produto", "Educacional", "Design", "Geral"];
  const filteredCarousels = filter === "Todos"
    ? carousels
    : carousels.filter(c => c.category === filter);

  const openLightbox = (carousel: Carousel, slideIndex: number = 0) => {
    setSelectedCarousel(carousel);
    setSelectedSlide(slideIndex);
    setViewMode('lightbox'); // Sempre abre no modo lightbox
  };

  const openGallery = (carousel: Carousel) => {
    setSelectedCarousel(carousel);
    setSelectedSlide(0);
    setViewMode('gallery'); // Abre no modo galeria
  };

  const closeLightbox = () => {
    setSelectedCarousel(null);
    setSelectedSlide(0);
    setTempRating(0);
    setTempComment('');
  };

  const nextSlide = () => {
    if (selectedCarousel) {
      setSelectedSlide((prev) => (prev + 1) % selectedCarousel.slides.length);
    }
  };

  const prevSlide = () => {
    if (selectedCarousel) {
      setSelectedSlide((prev) =>
        prev === 0 ? selectedCarousel.slides.length - 1 : prev - 1
      );
    }
  };

  // Exportação
  const exportAsJSON = () => {
    const data = {
      exportDate: new Date().toISOString(),
      userName: currentUserName,
      totalFeedbacks: Object.keys(feedbacks).length,
      averageRating: stats.avgRating,
      feedbacksWithComments: stats.withComments,
      feedbacks: Object.values(feedbacks).sort((a, b) => b.rating - a.rating)
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedbacks-${currentUserName || 'anonimo'}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowExportModal(false);
  };

  const exportAsCSV = () => {
    const headers = ['Carrossel', 'Slide', 'Nome do Arquivo', 'Nota', 'Comentário', 'Avaliador', 'Data/Hora'];
    const rows = Object.values(feedbacks).map(f => [
      `"${f.carouselName}"`,
      f.slideIndex + 1,
      `"${f.slideName}"`,
      f.rating,
      `"${f.comment.replace(/"/g, '""')}"`,
      `"${f.userName}"`,
      `"${new Date(f.timestamp).toLocaleString('pt-BR')}"`
    ]).sort((a, b) => Number(b[3]) - Number(a[3]));

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedbacks-${currentUserName || 'anonimo'}-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setShowExportModal(false);
  };

  const clearAllFeedbacks = () => {
    if (confirm('Tem certeza que deseja limpar TODOS os feedbacks? Esta ação não pode ser desfeita!')) {
      setFeedbacks({});
      localStorage.removeItem('carousel-feedbacks');
      alert('Todos os feedbacks foram removidos!');
      setShowExportModal(false);
    }
  };

  // Funções do Calendário Editorial
  const exportCalendarioJSON = () => {
    const data = {
      exportDate: new Date().toISOString(),
      userName: currentUserName,
      totalPosts: postsCalendario.length,
      posts: postsCalendario.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calendario-editorial-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importCalendarioJSON = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target?.result as string);
            if (data.posts && Array.isArray(data.posts)) {
              setPostsCalendario(data.posts);
              localStorage.setItem('calendario-posts', JSON.stringify(data.posts));
              alert(`✅ ${data.posts.length} posts importados com sucesso!`);
            } else {
              alert('❌ Arquivo JSON inválido!');
            }
          } catch (error) {
            alert('❌ Erro ao ler o arquivo JSON!');
            console.error(error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const clearCalendario = () => {
    if (confirm('Tem certeza que deseja limpar TODOS os posts do calendário? Esta ação não pode ser desfeita!')) {
      setPostsCalendario([]);
      localStorage.removeItem('calendario-posts');
      alert('Todos os posts foram removidos do calendário!');
    }
  };

  // Componentes auxiliares
  const renderStars = (quality: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < quality ? "text-yellow-400" : "text-gray-600"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const RatingStars = ({ value, onChange }: { value: number; onChange: (rating: number) => void }) => {
    const [hover, setHover] = useState(0);

    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="text-4xl transition-all hover:scale-125 focus:outline-none"
          >
            <span className={star <= (hover || value) ? "text-yellow-400" : "text-gray-600"}>
              ★
            </span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      {/* Prompt de Nome */}
      {showNamePrompt && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-purple-500/50">
            <h2 className="text-2xl font-bold mb-4">Bem-vindo!</h2>
            <p className="text-gray-300 mb-6">Para começar a avaliar, digite seu nome (opcional):</p>
            <input
              type="text"
              placeholder="Seu nome..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 mb-4"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  saveUserName((e.target as HTMLInputElement).value);
                }
              }}
            />
            <div className="flex gap-3">
              <button
                onClick={() => saveUserName('')}
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                Pular
              </button>
              <button
                onClick={(e) => {
                  const input = e.currentTarget.parentElement?.previousElementSibling as HTMLInputElement;
                  saveUserName(input?.value || '');
                }}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors font-semibold"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header com Stats e Exportar */}
      <header className="max-w-7xl mx-auto mb-12 relative">
        {/* Botões no canto superior direito */}
        <div className="absolute top-0 right-0 flex gap-3 items-start">
          {/* Stats Widget */}
          <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 text-sm border border-white/10 min-w-[180px]">
            <div className="font-bold mb-2 text-purple-400">📊 Estatísticas</div>
            <div className="space-y-1 text-gray-300 text-xs">
              <div>✅ Avaliadas: <strong className="text-white">{stats.total}</strong>/{stats.totalImages}</div>
              <div>⭐ Média: <strong className="text-yellow-400">{stats.avgRating}</strong>/5</div>
              <div>💬 Comentários: <strong className="text-white">{stats.withComments}</strong></div>
            </div>
          </div>

          {/* Botão Calendário Editorial */}
          <button
            onClick={() => setShowCalendario(true)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg px-4 py-3 shadow-lg shadow-blue-500/50 hover:scale-105 transition-transform flex items-center gap-2"
            title="Calendário Editorial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold hidden md:inline">📅 Calendário</span>
          </button>

          {/* Botão Exportar */}
          <button
            onClick={() => setShowExportModal(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-4 py-3 shadow-lg shadow-purple-500/50 hover:scale-105 transition-transform flex items-center gap-2"
            title="Exportar feedbacks"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-semibold hidden md:inline">Exportar</span>
          </button>
        </div>

        {/* Título centralizado */}
        <div className="text-center pr-0 lg:pr-[400px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Galeria de Carrosséis
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">UzzAi Marketing Assets</p>
          <p className="text-sm md:text-base text-gray-400">{carousels.length} carrosséis • {stats.totalImages} imagens • Sistema de Feedback Integrado</p>
          {currentUserName && (
            <p className="text-purple-400 mt-2 text-sm md:text-base">Avaliando como: <strong>{currentUserName}</strong></p>
          )}
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCarousels.map((carousel) => {
          const carouselFeedbackCount = Object.values(feedbacks).filter(
            f => f.carouselId === carousel.id
          ).length;

          return (
            <div
              key={carousel.id}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
            >
              {/* Quality Badge */}
              <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                {renderStars(carousel.quality)}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10 bg-purple-600/80 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-semibold">
                {carousel.category}
              </div>

              {/* Feedback Count Badge */}
              {carouselFeedbackCount > 0 && (
                <div className="absolute top-16 left-4 z-10 bg-green-600/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                  {carouselFeedbackCount} avaliações
                </div>
              )}

              {/* Preview Image */}
              <div
                className="aspect-square relative cursor-pointer overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20"
                onClick={() => openLightbox(carousel, 0)}
              >
                {carousel.slides[0] ? (
                  <Image
                    src={`/${carousel.folder}/${carousel.slides[0]}`}
                    alt={carousel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl text-purple-400/30">
                    {carousel.id}
                  </div>
                )}

                {/* Overlay com botões de visualização */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-6 gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); openLightbox(carousel, 0); }}
                    className="bg-white text-purple-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple-100 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Lightbox
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); openGallery(carousel); }}
                    className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-purple-700 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Galeria ({carousel.slides.length})
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{carousel.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{carousel.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{carousel.slides.length} slides</span>
                  <span>{carousel.fileSize}</span>
                </div>

                {/* Best For Tags */}
                <div className="flex flex-wrap gap-2">
                  {carousel.bestFor.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedCarousel && viewMode === 'lightbox' && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-purple-400 transition-colors z-50"
          >
            ×
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-purple-400 transition-colors z-50 hover:scale-125"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-purple-400 transition-colors z-50 hover:scale-125"
          >
            ›
          </button>

          {/* Content */}
          <div className="max-w-5xl w-full my-8" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="relative aspect-square w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={`/${selectedCarousel.folder}/${selectedCarousel.slides[selectedSlide]}`}
                alt={`Slide ${selectedSlide + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>

            {/* Info Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold mb-2">{selectedCarousel.name}</h3>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span>Slide {selectedSlide + 1} de {selectedCarousel.slides.length}</span>
                <span>•</span>
                <span className="max-w-md truncate">{selectedCarousel.slides[selectedSlide]}</span>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-lg p-6 border border-purple-500/30">
              <h4 className="text-lg font-bold mb-4 text-center">Avalie esta imagem</h4>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                <RatingStars value={tempRating} onChange={setTempRating} />
              </div>

              {/* Comment Box */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Comentário (opcional):</label>
                <textarea
                  value={tempComment}
                  onChange={(e) => setTempComment(e.target.value)}
                  placeholder="Deixe seu feedback sobre esta imagem..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                  rows={3}
                />
              </div>

              {/* Status */}
              {tempRating > 0 && (
                <div className="text-center text-sm text-green-400">
                  ✓ Feedback salvo automaticamente
                </div>
              )}

              {/* Botão Adicionar ao Calendário */}
              {tempRating >= 4 && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <button
                    onClick={() => {
                      setSelectedPostForCalendar({ carousel: selectedCarousel, slideIndex: selectedSlide });
                      setShowAddPostModal(true);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    📅 Adicionar ao Calendário Editorial
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {selectedCarousel.slides.map((slide, idx) => {
                const hasFeedback = feedbacks[getImageKey(selectedCarousel.id, idx)];

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedSlide(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === selectedSlide
                        ? 'border-purple-500 scale-110'
                        : 'border-white/20 hover:border-purple-400/50'
                    }`}
                  >
                    <Image
                      src={`/${selectedCarousel.folder}/${slide}`}
                      alt={`Thumbnail ${idx + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                    {hasFeedback && (
                      <div className="absolute top-0 right-0 bg-green-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Mode */}
      {selectedCarousel && viewMode === 'gallery' && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto p-4"
          onClick={closeLightbox}
        >
          {/* Header da Galeria */}
          <div className="max-w-7xl mx-auto mb-6 sticky top-0 bg-black/80 backdrop-blur-md rounded-lg p-4 z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">{selectedCarousel.name}</h2>
                <p className="text-gray-400 text-sm">{selectedCarousel.slides.length} imagens • Modo Comparação</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setViewMode('lightbox')}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Lightbox
                </button>
                <button
                  onClick={closeLightbox}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>

          {/* Grid de Imagens */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onClick={(e) => e.stopPropagation()}>
            {selectedCarousel.slides.map((slide, idx) => {
              const imageKey = getImageKey(selectedCarousel.id, idx);
              const feedback = feedbacks[imageKey];
              const isCurrentSlide = idx === selectedSlide;

              return (
                <div
                  key={idx}
                  className={`bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border-2 transition-all ${
                    isCurrentSlide
                      ? 'border-purple-500 ring-2 ring-purple-500/50'
                      : 'border-white/10 hover:border-purple-400/50'
                  }`}
                >
                  {/* Imagem */}
                  <div
                    className="relative aspect-square cursor-pointer group"
                    onClick={() => {
                      setSelectedSlide(idx);
                      setViewMode('lightbox');
                    }}
                  >
                    <Image
                      src={`/${selectedCarousel.folder}/${slide}`}
                      alt={`Slide ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay com número */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xl font-bold">Clique para avaliar</span>
                    </div>
                    {/* Badge de avaliação */}
                    {feedback && (
                      <div className="absolute top-2 right-2 bg-green-500 rounded-full px-3 py-1 flex items-center gap-1 text-sm font-semibold">
                        <span>✓</span>
                        <span>{feedback.rating}★</span>
                      </div>
                    )}
                    {/* Número do slide */}
                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Info e avaliação rápida */}
                  <div className="p-4">
                    <p className="text-xs text-gray-400 mb-3 truncate" title={slide}>
                      {slide}
                    </p>

                    {/* Mini rating */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            key={star}
                            onClick={() => {
                              setSelectedSlide(idx);
                              setTempRating(star);
                            }}
                            className="text-2xl transition-transform hover:scale-125"
                          >
                            <span className={star <= (feedback?.rating || 0) ? "text-yellow-400" : "text-gray-600"}>
                              ★
                            </span>
                          </button>
                        ))}
                      </div>
                      {feedback?.comment && (
                        <span className="text-purple-400 text-xs" title={feedback.comment}>
                          💬
                        </span>
                      )}
                    </div>

                    {/* Botão de avaliação completa */}
                    <button
                      onClick={() => {
                        setSelectedSlide(idx);
                        setViewMode('lightbox');
                      }}
                      className="w-full py-2 px-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold transition-colors"
                    >
                      {feedback ? 'Editar avaliação' : 'Avaliar imagem'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer com resumo */}
          <div className="max-w-7xl mx-auto mt-6 bg-black/80 backdrop-blur-md rounded-lg p-4 text-center">
            <p className="text-gray-400">
              Avaliadas: <strong className="text-white">{Object.values(feedbacks).filter(f => f.carouselId === selectedCarousel.id).length}</strong> de {selectedCarousel.slides.length}
            </p>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {showExportModal && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setShowExportModal(false)}
        >
          <div
            className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-purple-500/50"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Exportar Feedbacks</h2>

            <div className="bg-white/10 rounded-lg p-4 mb-6 space-y-2">
              <div>✅ Total avaliado: <strong>{stats.total} imagens</strong></div>
              <div>⭐ Nota média: <strong>{stats.avgRating}/5</strong></div>
              <div>💬 Com comentários: <strong>{stats.withComments}</strong></div>
              <div className="text-sm text-gray-400">📅 {new Date().toLocaleDateString('pt-BR')}</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                onClick={exportAsJSON}
                disabled={stats.total === 0}
                className="px-4 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                📥 JSON
              </button>
              <button
                onClick={exportAsCSV}
                disabled={stats.total === 0}
                className="px-4 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                📊 CSV
              </button>
            </div>

            <button
              onClick={clearAllFeedbacks}
              disabled={stats.total === 0}
              className="w-full px-4 py-3 bg-red-600/80 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🗑️ Limpar Tudo
            </button>

            <button
              onClick={() => setShowExportModal(false)}
              className="w-full px-4 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal: Adicionar Post ao Calendário */}
      {showAddPostModal && selectedPostForCalendar && (
        <div
          className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setShowAddPostModal(false)}
        >
          <div
            className="bg-gradient-to-br from-blue-900/90 to-cyan-900/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-blue-500/50 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">📅 Adicionar ao Calendário Editorial</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                const novoPost: PostCalendario = {
                  id: `${Date.now()}-${selectedPostForCalendar.carousel.id}-${selectedPostForCalendar.slideIndex}`,
                  carouselId: selectedPostForCalendar.carousel.id,
                  carouselName: selectedPostForCalendar.carousel.name,
                  slideIndex: selectedPostForCalendar.slideIndex,
                  slideName: selectedPostForCalendar.carousel.slides[selectedPostForCalendar.slideIndex],
                  imagePath: `/${selectedPostForCalendar.carousel.folder}/${selectedPostForCalendar.carousel.slides[selectedPostForCalendar.slideIndex]}`,
                  tipo: formData.get('tipo') as PostCalendario['tipo'],
                  titulo: formData.get('titulo') as string,
                  canal: formData.get('canal') as PostCalendario['canal'],
                  data: formData.get('data') as string,
                  status: 'agendado',
                  projeto: formData.get('projeto') as string,
                  addedAt: new Date().toISOString(),
                  rating: tempRating
                };

                setPostsCalendario(prev => [...prev, novoPost]);
                setShowAddPostModal(false);
                setSelectedPostForCalendar(null);
                alert('✅ Post adicionado ao calendário editorial!');
              }}
              className="space-y-4"
            >
              {/* Preview da imagem */}
              <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden mb-4">
                <Image
                  src={`/${selectedPostForCalendar.carousel.folder}/${selectedPostForCalendar.carousel.slides[selectedPostForCalendar.slideIndex]}`}
                  alt="Preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tipo */}
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Post *</label>
                  <select
                    name="tipo"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Reels">Reels</option>
                    <option value="Feed">Feed</option>
                    <option value="Carrossel" selected>Carrossel</option>
                    <option value="Stories">Stories</option>
                  </select>
                </div>

                {/* Canal */}
                <div>
                  <label className="block text-sm font-medium mb-2">Canal *</label>
                  <select
                    name="canal"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Site">Site</option>
                  </select>
                </div>
              </div>

              {/* Título */}
              <div>
                <label className="block text-sm font-medium mb-2">Título do Post *</label>
                <input
                  type="text"
                  name="titulo"
                  required
                  placeholder="Ex: Como usar IA na sua empresa"
                  defaultValue={selectedPostForCalendar.carousel.name}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Projeto */}
              <div>
                <label className="block text-sm font-medium mb-2">Projeto *</label>
                <select
                  name="projeto"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Uzz.App">🤖 Uzz.App (Chatbot)</option>
                  <option value="Uzz.Builder">🏗️ Uzz.Builder</option>
                  <option value="Peladeiros">⚽ Peladeiros</option>
                  <option value="Quem Somos">👥 Quem Somos</option>
                  <option value="IA para Empresas">💡 IA para Empresas</option>
                  <option value="Mundo da IA">🌐 Mundo da IA</option>
                </select>
              </div>

              {/* Data */}
              <div>
                <label className="block text-sm font-medium mb-2">Data de Publicação *</label>
                <input
                  type="date"
                  name="data"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Botões */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddPostModal(false);
                    setSelectedPostForCalendar(null);
                  }}
                  className="flex-1 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-colors font-semibold"
                >
                  ✅ Adicionar ao Calendário
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Calendário Editorial Modal */}
      {showCalendario && (
        <div className="fixed inset-0 z-[70] bg-slate-900 overflow-y-auto">
          <div className="min-h-screen p-4 md:p-8">
            {/* Header do Calendário */}
            <header className="max-w-7xl mx-auto mb-8 bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    📅 Calendário Editorial
                  </h1>
                  <p className="text-gray-400 mt-2">
                    {new Date().getFullYear()} | Posts aprovados para publicação
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={exportCalendarioJSON}
                    disabled={postsCalendario.length === 0}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Exportar JSON
                  </button>
                  <button
                    onClick={importCalendarioJSON}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Importar JSON
                  </button>
                  <button
                    onClick={clearCalendario}
                    disabled={postsCalendario.length === 0}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    🗑️ Limpar
                  </button>
                  <button
                    onClick={() => setShowCalendario(false)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    ← Voltar
                  </button>
                </div>
              </div>
            </header>

            {/* Estatísticas */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="text-3xl font-bold text-white">{postsCalendario.length}</div>
                <div className="text-sm text-gray-400">Total de Posts</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="text-3xl font-bold text-blue-400">
                  {postsCalendario.filter(p => p.status === 'agendado').length}
                </div>
                <div className="text-sm text-gray-400">Agendados</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="text-3xl font-bold text-green-400">
                  {postsCalendario.filter(p => p.status === 'publicado').length}
                </div>
                <div className="text-sm text-gray-400">Publicados</div>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="text-3xl font-bold text-gray-400">
                  {postsCalendario.filter(p => p.status === 'arquivado').length}
                </div>
                <div className="text-sm text-gray-400">Arquivados</div>
              </div>
            </div>

            {/* Gráficos de Distribuição */}
            {postsCalendario.length > 0 && (
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Distribuição por Canal */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold mb-4">📊 Por Canal</h3>
                  <div className="space-y-3">
                    {['LinkedIn', 'Instagram', 'Site'].map(canal => {
                      const count = postsCalendario.filter(p => p.canal === canal).length;
                      const percentage = postsCalendario.length > 0 ? (count / postsCalendario.length * 100).toFixed(1) : 0;
                      return (
                        <div key={canal}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{canal}</span>
                            <span className="font-semibold">{count} ({percentage}%)</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                canal === 'LinkedIn' ? 'bg-blue-500' :
                                canal === 'Instagram' ? 'bg-pink-500' :
                                'bg-gray-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Distribuição por Tipo */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold mb-4">📊 Por Tipo</h3>
                  <div className="space-y-3">
                    {['Reels', 'Feed', 'Carrossel', 'Stories'].map(tipo => {
                      const count = postsCalendario.filter(p => p.tipo === tipo).length;
                      const percentage = postsCalendario.length > 0 ? (count / postsCalendario.length * 100).toFixed(1) : 0;
                      return (
                        <div key={tipo}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{tipo}</span>
                            <span className="font-semibold">{count} ({percentage}%)</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                tipo === 'Reels' ? 'bg-blue-500' :
                                tipo === 'Feed' ? 'bg-purple-500' :
                                tipo === 'Carrossel' ? 'bg-green-500' :
                                'bg-yellow-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Distribuição por Projeto */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-bold mb-4">📊 Por Projeto</h3>
                  <div className="space-y-3 max-h-[200px] overflow-y-auto">
                    {Array.from(new Set(postsCalendario.map(p => p.projeto))).map(projeto => {
                      const count = postsCalendario.filter(p => p.projeto === projeto).length;
                      const percentage = postsCalendario.length > 0 ? (count / postsCalendario.length * 100).toFixed(1) : 0;
                      return (
                        <div key={projeto}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="truncate">{projeto}</span>
                            <span className="font-semibold">{count} ({percentage}%)</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Calendário */}
            <div className="max-w-7xl mx-auto bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {new Date(currentYear, currentMonth - 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (currentMonth === 1) {
                        setCurrentMonth(12);
                        setCurrentYear(currentYear - 1);
                      } else {
                        setCurrentMonth(currentMonth - 1);
                      }
                    }}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={() => {
                      if (currentMonth === 12) {
                        setCurrentMonth(1);
                        setCurrentYear(currentYear + 1);
                      } else {
                        setCurrentMonth(currentMonth + 1);
                      }
                    }}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    Próximo →
                  </button>
                </div>
              </div>

              {/* Grid do Calendário */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                  <div key={day} className="text-center py-2 text-sm font-semibold text-gray-400">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {(() => {
                  const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
                  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
                  const days = [];

                  // Dias vazios antes do primeiro dia
                  for (let i = 0; i < firstDay; i++) {
                    days.push(
                      <div key={`empty-${i}`} className="aspect-square bg-slate-900/50 rounded-lg" />
                    );
                  }

                  // Dias do mês
                  for (let day = 1; day <= daysInMonth; day++) {
                    const dateString = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const dayPosts = postsCalendario.filter(p => p.data === dateString);

                    days.push(
                      <div
                        key={day}
                        className="aspect-square bg-slate-700 rounded-lg p-2 overflow-hidden hover:bg-slate-600 transition-colors"
                      >
                        <div className="text-sm font-semibold text-gray-300 mb-1">{day}</div>
                        <div className="space-y-1">
                          {dayPosts.slice(0, 2).map((post, idx) => (
                            <div
                              key={idx}
                              className={`text-xs px-1 py-0.5 rounded truncate ${
                                post.tipo === 'Reels' ? 'bg-blue-500/20 text-blue-300' :
                                post.tipo === 'Feed' ? 'bg-purple-500/20 text-purple-300' :
                                post.tipo === 'Carrossel' ? 'bg-green-500/20 text-green-300' :
                                'bg-yellow-500/20 text-yellow-300'
                              }`}
                              title={post.titulo}
                            >
                              {post.tipo}
                            </div>
                          ))}
                          {dayPosts.length > 2 && (
                            <div className="text-xs text-gray-400">+{dayPosts.length - 2}</div>
                          )}
                        </div>
                      </div>
                    );
                  }

                  return days;
                })()}
              </div>
            </div>

            {/* Lista de Posts */}
            <div className="max-w-7xl mx-auto mt-8">
              <h3 className="text-2xl font-bold mb-4">Posts Cadastrados</h3>
              {postsCalendario.length === 0 ? (
                <div className="bg-slate-800 rounded-xl p-12 border border-slate-700 text-center">
                  <p className="text-gray-400 text-lg mb-4">Nenhum post adicionado ao calendário ainda.</p>
                  <p className="text-gray-500">Volte à galeria e clique em &quot;Adicionar ao Calendário&quot; nas imagens aprovadas.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {postsCalendario
                    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
                    .map(post => (
                      <div
                        key={post.id}
                        className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors"
                      >
                        <div className="relative aspect-square">
                          <Image
                            src={post.imagePath}
                            alt={post.titulo}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              post.tipo === 'Reels' ? 'bg-blue-500/20 text-blue-300' :
                              post.tipo === 'Feed' ? 'bg-purple-500/20 text-purple-300' :
                              post.tipo === 'Carrossel' ? 'bg-green-500/20 text-green-300' :
                              'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {post.tipo}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              post.canal === 'LinkedIn' ? 'bg-blue-600 text-white' :
                              post.canal === 'Instagram' ? 'bg-pink-600 text-white' :
                              'bg-slate-600 text-white'
                            }`}>
                              {post.canal}
                            </span>
                          </div>
                          <h4 className="font-semibold text-sm mb-2 line-clamp-2">{post.titulo}</h4>
                          <p className="text-xs text-gray-400 mb-2">📅 {new Date(post.data).toLocaleDateString('pt-BR')}</p>
                          <p className="text-xs text-gray-500">{post.carouselName}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-400">
        <p className="mb-2">UzzAi Marketing Assets • 2026</p>
        <p className="text-sm">
          Sistema de Feedback Integrado • {stats.total} avaliações realizadas
        </p>
      </footer>
    </div>
  );
}
