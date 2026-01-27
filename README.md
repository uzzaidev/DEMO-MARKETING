---
created: 2026-01-27T19:47
updated: 2026-01-27T19:47
---
# 🗳️ Sistema de Votação UzzAI

Sistema profissional de votação para postagens de Instagram desenvolvido com Next.js 14.

## 🚀 Setup Rápido (ANTES DE COMMITAR)

### 1️⃣ **IMPORTANTE: Copiar as Imagens**

Copie as pastas de imagens para dentro de `public/`:

```bash
# Estando na pasta REPOSITÓRIO
mkdir -p public
cp -r "../01 - CARROSEL QUEM SOMOS" public/
cp -r "../02 - Carrosel o que é o uzzapp" public/
cp -r "../03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA" public/
cp -r "../04 - COMO USAR IA NA SUA EMPRESA" public/
```

### 2️⃣ **Instalar Dependências**

```bash
npm install
```

### 3️⃣ **Testar Localmente**

```bash
npm run dev
```

Abra: http://localhost:3000

## 📦 Estrutura do Projeto

```
REPOSITÓRIO/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Sistema de votação
│   └── globals.css         # Estilos globais
├── public/
│   ├── 01 - CARROSEL QUEM SOMOS/
│   ├── 02 - Carrosel o que é o uzzapp/
│   ├── 03 - CARROSSEL 05 COMO USAR IA/
│   └── 04 - COMO USAR IA NA SUA EMPRESA/
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🔧 Comandos Disponíveis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Iniciar servidor de produção
npm run lint     # Verificar código
```

## 🌐 Deploy no Vercel

### Método 1: GitHub + Vercel (Recomendado)

1. **Crie o repositório no GitHub:**
   - Vá em: https://github.com/new
   - Nome: `votacao-uzzai`
   - Crie o repositório

2. **Faça o commit e push:**
   ```bash
   cd "19 - Marketing/REPOSITÓRIO"
   git init
   git add .
   git commit -m "feat: Sistema de votação Next.js completo"
   git branch -M main
   git remote add origin https://github.com/[SEU-USUARIO]/votacao-uzzai.git
   git push -u origin main
   ```

3. **No Vercel:**
   - Acesse: https://vercel.com/new
   - Import Git Repository
   - Selecione `votacao-uzzai`
   - Deploy!

### Método 2: Drag & Drop

1. Build local:
   ```bash
   npm run build
   ```

2. Arraste a pasta para: https://vercel.com/new

## 📊 Funcionalidades

- ✅ 4 Carrosséis organizados
- ✅ 25 Slides no total
- ✅ 70+ opções para votar
- ✅ Sistema de avaliação por estrelas (1-5)
- ✅ Comentários opcionais
- ✅ Múltiplos votos permitidos
- ✅ Export de resultados em JSON
- ✅ Persistência em localStorage
- ✅ Design responsivo (celular e desktop)
- ✅ Animações suaves
- ✅ Interface moderna com Tailwind CSS

## 🎨 Tecnologias

- **Next.js 14** - App Router
- **React 18** - Componentes
- **TypeScript** - Tipagem
- **Tailwind CSS** - Estilos
- **LocalStorage** - Persistência

## 📱 Uso

1. **Identificação**: Digite seu nome
2. **Navegação**: Escolha o carrossel e slide
3. **Votação**: Avalie com estrelas e comentários
4. **Export**: Baixe o JSON com seus votos

## 🔒 Dados

Os votos são salvos no `localStorage` do navegador. Para consolidar:
1. Cada sócio exporta seu JSON
2. Combine os JSONs para análise final

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe UzzAI.

---

**Desenvolvido com ❤️ pela UzzAI**
