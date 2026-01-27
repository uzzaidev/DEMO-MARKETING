'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Tipos
interface Option {
  title: string;
  image: string;
}

interface Slide {
  name: string;
  options: Option[];
}

interface Carousel {
  slides: Slide[];
}

interface Vote {
  user: string;
  carousel: string;
  slide: string;
  option: string;
  rating: number | null;
  comment: string;
  timestamp: string;
}

// Configuração dos carrosséis
const carousels: Record<string, Carousel> = {
  "Carrossel 1: Quem Somos UzzAI": {
    slides: [
      {
        name: "Slide 1",
        options: [
          { title: "Opção 1", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_uywalhuywalhuywa.png" },
          { title: "Opção 2", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_jl0g9hjl0g9hjl0g.png" },
          { title: "Opção 3", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_7a4w7c7a4w7c7a4w.png" },
        ]
      },
      {
        name: "Slide 2",
        options: [
          { title: "Opção 1", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_21cw2c21cw2c21cw.png" },
          { title: "Opção 2", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_2ifbap2ifbap2ifb.png" },
          { title: "Opção 3", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_vk4vxwvk4vxwvk4v.png" },
        ]
      },
      {
        name: "Slide 3",
        options: [
          { title: "Opção 1", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_g0m5zsg0m5zsg0m5.png" },
          { title: "Opção 2", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_njs70tnjs70tnjs7.png" },
          { title: "Opção 3", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_jl0g9hjl0g9hjl0g (1).png" },
        ]
      },
      {
        name: "Slide 4",
        options: [
          { title: "Opção 1", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_2ifbap2ifbap2ifb (1).png" },
          { title: "Opção 2", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_4oltpc4oltpc4olt.png" },
          { title: "Opção 3", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_ohj29mohj29mohj2.png" },
        ]
      },
      {
        name: "Slide 5",
        options: [
          { title: "Opção 1", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_maqnbxmaqnbxmaqn.png" },
          { title: "Opção 2", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_6qorla6qorla6qor.png" },
          { title: "Opção 3", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_nkbzhxnkbzhxnkbz.png" },
        ]
      },
      {
        name: "Slide 6",
        options: [
          { title: "Opção 1", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_vt2wirvt2wirvt2w.png" },
          { title: "Opção 2", image: "/01 - CARROSEL QUEM SOMOS/Gemini_Generated_Image_g0m5zsg0m5zsg0m5 (1).png" },
        ]
      }
    ]
  },
  "Carrossel 2: O que é UzzApp": {
    slides: [
      {
        name: "Slide 1",
        options: [
          { title: "Opção 1", image: "/02 - Carrosel o que é o uzzapp/1.png" },
          { title: "Opção 2", image: "/02 - Carrosel o que é o uzzapp/1 (2).png" },
        ]
      },
      {
        name: "Slide 2",
        options: [
          { title: "Opção 1", image: "/02 - Carrosel o que é o uzzapp/2.png" },
          { title: "Opção 2", image: "/02 - Carrosel o que é o uzzapp/2 (2).png" },
          { title: "Opção 3", image: "/02 - Carrosel o que é o uzzapp/2 (3).png" },
        ]
      },
      {
        name: "Slide 3",
        options: [
          { title: "Opção 1", image: "/02 - Carrosel o que é o uzzapp/3.png" },
          { title: "Opção 2", image: "/02 - Carrosel o que é o uzzapp/3 (2).png" },
        ]
      },
      {
        name: "Slide 4",
        options: [
          { title: "Opção 1", image: "/02 - Carrosel o que é o uzzapp/4.png" },
        ]
      },
      {
        name: "Slide 5",
        options: [
          { title: "Opção 1", image: "/02 - Carrosel o que é o uzzapp/5.png" },
          { title: "Opção 2", image: "/02 - Carrosel o que é o uzzapp/5 (2).png" },
          { title: "Opção 3", image: "/02 - Carrosel o que é o uzzapp/5 (3).png" },
        ]
      },
      {
        name: "Slide 6",
        options: [
          { title: "Opção 1", image: "/02 - Carrosel o que é o uzzapp/6.png" },
          { title: "Opção 2", image: "/02 - Carrosel o que é o uzzapp/6 (2).png" },
          { title: "Opção 3", image: "/02 - Carrosel o que é o uzzapp/6 (3).png" },
        ]
      }
    ]
  },
  "Carrossel 3: Como Usar IA na Sua Empresa": {
    slides: [
      {
        name: "Slide 1",
        options: [
          { title: "Opção 1", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/1 (1).png" },
          { title: "Opção 2", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/1 (2).png" },
          { title: "Opção 3", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/1 (3).png" },
        ]
      },
      {
        name: "Slide 2",
        options: [
          { title: "Opção 1", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/2 (1).png" },
          { title: "Opção 2", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/2 (2).png" },
          { title: "Opção 3", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/2 (3).png" },
        ]
      },
      {
        name: "Slide 3",
        options: [
          { title: "Opção 1", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/3 (1).png" },
          { title: "Opção 2", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/3 (2).png" },
        ]
      },
      {
        name: "Slide 4",
        options: [
          { title: "Opção 1", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/4 (1).png" },
          { title: "Opção 2", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/4 (2).png" },
        ]
      },
      {
        name: "Slide 5",
        options: [
          { title: "Opção 1", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/5 (1).png" },
          { title: "Opção 2", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/5 (2).png" },
          { title: "Opção 3", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/5 (3).png" },
        ]
      },
      {
        name: "Slide 6",
        options: [
          { title: "Opção 1", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/6 (1).png" },
          { title: "Opção 2", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/6 (2).png" },
        ]
      },
      {
        name: "Slide 7",
        options: [
          { title: "Opção 1", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/7 (1).png" },
          { title: "Opção 2", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/7 (2).png" },
          { title: "Opção 3", image: "/03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA/7 (3).png" },
        ]
      }
    ]
  },
  "Carrossel 4: Como Usar IA (Versão 2)": {
    slides: [
      {
        name: "Slide 1",
        options: [
          { title: "Opção 1", image: "/04 - COMO USAR IA NA SUA EMPRESA/1 (1).png" },
          { title: "Opção 2", image: "/04 - COMO USAR IA NA SUA EMPRESA/1 (2).png" },
          { title: "Opção 3", image: "/04 - COMO USAR IA NA SUA EMPRESA/1 (3).png" },
        ]
      },
      {
        name: "Slide 2",
        options: [
          { title: "Opção 1", image: "/04 - COMO USAR IA NA SUA EMPRESA/2 (1).png" },
          { title: "Opção 2", image: "/04 - COMO USAR IA NA SUA EMPRESA/2 (2).png" },
          { title: "Opção 3", image: "/04 - COMO USAR IA NA SUA EMPRESA/2 (3).png" },
          { title: "Opção 4", image: "/04 - COMO USAR IA NA SUA EMPRESA/2 (4).png" },
        ]
      },
      {
        name: "Slide 3",
        options: [
          { title: "Opção 1", image: "/04 - COMO USAR IA NA SUA EMPRESA/3 (1).png" },
          { title: "Opção 2", image: "/04 - COMO USAR IA NA SUA EMPRESA/3 (2).png" },
          { title: "Opção 3", image: "/04 - COMO USAR IA NA SUA EMPRESA/3 (3).png" },
        ]
      },
      {
        name: "Slide 4",
        options: [
          { title: "Opção 1", image: "/04 - COMO USAR IA NA SUA EMPRESA/4 (1).png" },
          { title: "Opção 2", image: "/04 - COMO USAR IA NA SUA EMPRESA/4 (2).png" },
          { title: "Opção 3", image: "/04 - COMO USAR IA NA SUA EMPRESA/4 (3).png" },
          { title: "Opção 4", image: "/04 - COMO USAR IA NA SUA EMPRESA/4 (4).png" },
        ]
      },
      {
        name: "Slide 5",
        options: [
          { title: "Opção 1", image: "/04 - COMO USAR IA NA SUA EMPRESA/5 (1).png" },
          { title: "Opção 2", image: "/04 - COMO USAR IA NA SUA EMPRESA/5 (2).png" },
          { title: "Opção 3", image: "/04 - COMO USAR IA NA SUA EMPRESA/5 (3).png" },
        ]
      },
      {
        name: "Slide 6",
        options: [
          { title: "Opção 1", image: "/04 - COMO USAR IA NA SUA EMPRESA/6 (1).png" },
          { title: "Opção 2", image: "/04 - COMO USAR IA NA SUA EMPRESA/6 (2).png" },
          { title: "Opção 3", image: "/04 - COMO USAR IA NA SUA EMPRESA/6 (3).png" },
          { title: "Opção 4", image: "/04 - COMO USAR IA NA SUA EMPRESA/6 (4).png" },
        ]
      }
    ]
  }
};

export default function VotingSystem() {
  const [currentUser, setCurrentUser] = useState('');
  const [userName, setUserName] = useState('');
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [votes, setVotes] = useState<Record<string, Vote>>({});
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [comments, setComments] = useState<Record<string, string>>({});
  const [showUserSelection, setShowUserSelection] = useState(true);

  const carouselNames = Object.keys(carousels);
  const currentCarouselData = carousels[carouselNames[currentCarousel]];

  // Load from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    const savedVotes = localStorage.getItem('votes');

    if (savedUser) {
      setCurrentUser(savedUser);
      setShowUserSelection(false);
    }

    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
  }, []);

  const handleSetUser = () => {
    if (!userName.trim()) {
      alert('Por favor, digite seu nome!');
      return;
    }

    setCurrentUser(userName);
    localStorage.setItem('currentUser', userName);
    setShowUserSelection(false);
  };

  const handleChangeUser = () => {
    setCurrentUser('');
    setUserName('');
    localStorage.removeItem('currentUser');
    setShowUserSelection(true);
  };

  const handleVote = (carouselIdx: number, slideIdx: number, optionIdx: number) => {
    const key = `${currentUser}_${carouselIdx}_${slideIdx}_${optionIdx}`;
    const carousel = carouselNames[carouselIdx];
    const slide = carousels[carousel].slides[slideIdx];
    const option = slide.options[optionIdx];

    const ratingKey = `${carouselIdx}_${slideIdx}_${optionIdx}`;
    const rating = ratings[ratingKey] || null;
    const comment = comments[ratingKey] || '';

    const newVote: Vote = {
      user: currentUser,
      carousel,
      slide: slide.name,
      option: option.title,
      rating,
      comment,
      timestamp: new Date().toISOString()
    };

    const updatedVotes = { ...votes, [key]: newVote };
    setVotes(updatedVotes);
    localStorage.setItem('votes', JSON.stringify(updatedVotes));

    alert('✅ Voto registrado com sucesso!');
  };

  const handleRating = (carouselIdx: number, slideIdx: number, optionIdx: number, rating: number) => {
    const key = `${carouselIdx}_${slideIdx}_${optionIdx}`;
    setRatings(prev => ({ ...prev, [key]: rating }));
  };

  const handleComment = (carouselIdx: number, slideIdx: number, optionIdx: number, comment: string) => {
    const key = `${carouselIdx}_${slideIdx}_${optionIdx}`;
    setComments(prev => ({ ...prev, [key]: comment }));
  };

  const hasVoted = (carouselIdx: number, slideIdx: number, optionIdx: number) => {
    const key = `${currentUser}_${carouselIdx}_${slideIdx}_${optionIdx}`;
    return !!votes[key];
  };

  const exportResults = () => {
    const results = {
      exportDate: new Date().toISOString(),
      totalVotes: Object.keys(votes).length,
      users: [...new Set(Object.values(votes).map(v => v.user))],
      votes,
      summary: {}
    };

    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `votacao-uzzai-${currentUser}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
    alert('✅ Resultados exportados com sucesso!');
  };

  const totalVotes = Object.keys(votes).length;
  const totalUsers = new Set(Object.values(votes).map(v => v.user)).size;
  const ratingsWithValue = Object.values(votes).filter(v => v.rating);
  const averageRating = ratingsWithValue.length > 0
    ? (ratingsWithValue.reduce((acc, v) => acc + (v.rating || 0), 0) / ratingsWithValue.length).toFixed(1)
    : '0';
  const totalSlides = Object.values(carousels).reduce((acc, c) => acc + c.slides.length, 0);

  if (showUserSelection) {
    return (
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">🗳️ Sistema de Votação</h1>
            <p className="text-gray-600">Vote nas melhores postagens para Instagram</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <p className="text-yellow-800 text-sm">⚠️ Por favor, identifique-se antes de votar</p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSetUser()}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
            />
            <button
              onClick={handleSetUser}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">🗳️ Sistema de Votação - UzzAI</h1>
          <p className="text-lg opacity-90">Vote nas melhores postagens para Instagram</p>
        </div>

        {/* User Info */}
        <div className="p-6 bg-gray-50 border-b-2 border-gray-200">
          <div className="flex items-center justify-between bg-white p-4 rounded-lg border-l-4 border-primary-500">
            <p className="text-gray-700">
              <strong className="text-primary-600">Votando como:</strong> {currentUser}
            </p>
            <button
              onClick={handleChangeUser}
              className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            >
              Trocar Usuário
            </button>
          </div>
        </div>

        {/* Carousel Tabs */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">📂 Selecione o Carrossel:</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {carouselNames.map((name, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentCarousel(idx);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  currentCarousel === idx
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Slide Navigation */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {currentCarouselData.slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`px-5 py-2 rounded-lg font-semibold transition min-w-[100px] ${
                  currentSlide === idx
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {slide.name}
              </button>
            ))}
          </div>

          {/* Current Slide */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {currentCarouselData.slides[currentSlide].name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCarouselData.slides[currentSlide].options.map((option, optionIdx) => {
                const voted = hasVoted(currentCarousel, currentSlide, optionIdx);
                const ratingKey = `${currentCarousel}_${currentSlide}_${optionIdx}`;
                const currentRating = ratings[ratingKey] || 0;

                return (
                  <div
                    key={optionIdx}
                    className={`bg-gray-50 rounded-xl p-5 transition shadow-md hover:shadow-xl hover:-translate-y-1 ${
                      voted ? 'border-4 border-green-500 bg-green-50' : 'border-2 border-transparent'
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 min-h-[2rem]">
                      {option.title}
                    </h3>

                    <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        className="object-contain cursor-pointer"
                        onClick={() => window.open(option.image, '_blank')}
                      />
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ⭐ Avaliação (opcional):
                      </label>
                      <div className="flex gap-1 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleRating(currentCarousel, currentSlide, optionIdx, star)}
                            className={`text-4xl transition ${
                              star <= currentRating ? 'text-yellow-400' : 'text-gray-300'
                            } hover:text-yellow-400 hover:scale-110`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Comment */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        💬 Comentário (opcional):
                      </label>
                      <textarea
                        value={comments[ratingKey] || ''}
                        onChange={(e) => handleComment(currentCarousel, currentSlide, optionIdx, e.target.value)}
                        rows={3}
                        placeholder="Deixe seu feedback..."
                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      />
                    </div>

                    {/* Vote Button */}
                    <button
                      onClick={() => handleVote(currentCarousel, currentSlide, optionIdx)}
                      className={`w-full py-3 rounded-lg font-semibold transition ${
                        voted
                          ? 'bg-gray-400 text-white cursor-not-allowed'
                          : 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5'
                      }`}
                    >
                      {voted ? '✓ Votado' : '👍 Votar'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary-600 transition"
            >
              ⬅️ Anterior
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(currentCarouselData.slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === currentCarouselData.slides.length - 1}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary-600 transition"
            >
              Próximo ➡️
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 bg-gray-50 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📊 Estatísticas da Votação</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">{totalVotes}</h3>
              <p className="text-gray-600 text-sm">Total de Votos</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">{totalUsers}</h3>
              <p className="text-gray-600 text-sm">Sócios Participantes</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">{averageRating}⭐</h3>
              <p className="text-gray-600 text-sm">Média de Avaliação</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">{totalSlides}</h3>
              <p className="text-gray-600 text-sm">Slides Disponíveis</p>
            </div>
          </div>

          <button
            onClick={exportResults}
            className="w-full bg-cyan-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 hover:shadow-lg transition"
          >
            📥 Exportar Resultados (JSON)
          </button>
        </div>
      </div>
    </div>
  );
}
