# 🚀 Como Usar a Galeria de Carrosséis

## Acesso Rápido

**URL Local:** http://localhost:3000  
**Servidor:** `npm run dev` (na pasta do projeto)

---

## 📸 Recursos Disponíveis

### ✅ Funcionalidades Implementadas

- **7 Carrosséis Completos** organizados por categoria
- **~140 Imagens** totalmente acessíveis
- **Filtros por Categoria:** Todos, Institucional, Produto, Educacional
- **Lightbox Interativo** com navegação
- **Thumbnails Clicáveis** para acesso rápido
- **Design Responsivo** (mobile, tablet, desktop)
- **Dark Theme Premium** com gradientes
- **Animações Suaves** e transições
- **Sistema de Qualidade** (1-5 estrelas)

---

## 🎯 Como Navegar

### 1. **Filtrar Carrosséis**
Clique nos botões no topo:
- **Todos** - Mostra os 7 carrosséis
- **Institucional** - Carrosséis 01, 06, 07
- **Produto** - Carrosséis 02, 05
- **Educacional** - Carrosséis 03, 04

### 2. **Ver Carrossel**
- Clique em qualquer card
- O lightbox abre com o primeiro slide

### 3. **Navegar pelos Slides**
- **Setas ‹ ›** nas laterais
- **Teclado:** ← e → 
- **Thumbnails:** Clique diretamente no slide desejado

### 4. **Fechar Lightbox**
- Botão **×** no canto superior direito
- Clique fora da imagem
- Tecla **ESC**

---

## 📁 Estrutura de Imagens

Todas as imagens estão em `public/`:

```
public/
├── 01 - CARROSEL QUEM SOMOS/           (32 imagens)
├── 02 - Carrosel o que é o uzzapp/     (17 imagens)
├── 03 - CARROSSEL 05.../               (22 imagens)
├── 04 - COMO USAR IA.../               (23 imagens)
├── 05 - Carrosel Processo UzzApp/      (23 imagens)
├── 06 - CAROUSEL-4-QUEM-E-UZZAI-VARB/  (6 imagens)
└── 07 - CAROUSEL-UZZAI-QUEM-SOMOS/     (10 imagens)
```

---

## 🎨 Informações por Carrossel

### ⭐⭐⭐⭐⭐ Carrossel 07 - Quem Somos (Completo)
- **Slides:** 10 (4 opções de capa + 6 slides)
- **Qualidade:** Excelente
- **Ideal para:** Instagram, Stories, Feed
- **Tamanho:** ~600 KB por imagem

### ⭐⭐⭐⭐⭐ Carrossel 06 - Variação B
- **Slides:** 6
- **Qualidade:** Excelente
- **Ideal para:** Instagram, Stories
- **Tamanho:** ~650 KB por imagem

### ⭐⭐⭐⭐ Carrossel 05 - Processo UzzApp
- **Slides:** 5
- **Qualidade:** Muito Bom
- **Ideal para:** Apresentações, Site
- **Tamanho:** 1-15 MB

### ⭐⭐⭐⭐ Carrossel 04 - Como Usar IA
- **Slides:** 6
- **Qualidade:** Muito Bom
- **Ideal para:** LinkedIn, Blog
- **Tamanho:** 1-15 MB

### ⭐⭐⭐⭐ Carrossel 03 - Como Usar IA (v5)
- **Slides:** 7
- **Qualidade:** Muito Bom
- **Ideal para:** LinkedIn, Apresentações
- **Tamanho:** 1.5-13 MB

### ⭐⭐⭐ Carrossel 02 - O que é UzzApp
- **Slides:** 6
- **Qualidade:** Bom
- **Ideal para:** Instagram, LinkedIn
- **Tamanho:** 1.6-9.5 MB

### ⭐⭐ Carrossel 01 - Quem Somos (Variações)
- **Slides:** 2+ variações
- **Qualidade:** Backup/Assets
- **Ideal para:** Backup, Referência
- **Tamanho:** Variado

---

## 💻 Comandos Úteis

### Iniciar Servidor
```bash
cd "c:\19 - Marketing\REPOSITÓRIO"
npm run dev
```

### Acessar
```
http://localhost:3000
```

### Parar Servidor
```
Ctrl + C no terminal
```

---

## 🔧 Editar Conteúdo

### Adicionar Novo Carrossel

1. Copie a pasta de imagens para `public/`
2. Edite `app/page.tsx`
3. Adicione no array `carousels`:

```typescript
{
  id: 8,
  name: "Nome do Carrossel",
  folder: "Nome da Pasta",
  description: "Descrição",
  slides: ["imagem1.png", "imagem2.png"],
  category: "Institucional", // ou Produto, Educacional
  quality: 5, // 1-5
  fileSize: "~500 KB",
  bestFor: ["Instagram", "LinkedIn"]
}
```

### Alterar Cores

Edite `app/globals.css`:
```css
:root {
  --primary: 280 100% 70%; /* Roxo */
  --secondary: 240 100% 70%; /* Azul */
}
```

---

## 📊 Performance

### Otimização Automática
- Next.js otimiza imagens automaticamente
- Lazy loading de imagens
- Compression automática

### Dicas
- Imagens < 1 MB carregam mais rápido
- Use versões otimizadas para web
- Para impressão, use as versões HD

---

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# 1. Instale Vercel CLI
npm i -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel
```

### Outros Hosts
- Netlify
- AWS Amplify
- GitHub Pages (com GitHub Actions)

---

## ❓ FAQ

**P: As imagens não aparecem**  
R: Verifique se a pasta está em `public/` e se o nome está correto em `page.tsx`

**P: Como adicionar mais filtros?**  
R: Adicione em `categories` no `page.tsx` e crie novas categorias nos carrosséis

**P: Posso exportar como site estático?**  
R: Sim! Use `npm run build` e depois `npm run start`

**P: As imagens ficam grandes demais**  
R: O Next.js otimiza automaticamente, mas você pode comprimir antes com TinyPNG

---

## 📞 Suporte

- **Documentação:** [README-CARROSEIS.md](file:///c:/19%20-%20Marketing/REPOSIT%C3%93RIO/README-CARROSEIS.md)
- **Índice Completo:** [INDICE-CARROSEIS.md](file:///c:/19%20-%20Marketing/REPOSIT%C3%93RIO/INDICE-CARROSEIS.md)
- **Guia Rápido:** [GUIA-RAPIDO-CARROSEIS.md](file:///c:/19%20-%20Marketing/REPOSIT%C3%93RIO/GUIA-RAPIDO-CARROSEIS.md)

---

**Criado em:** 27 de Janeiro de 2026  
**Versão:** 1.0  
**Status:** ✅ Totalmente Funcional
