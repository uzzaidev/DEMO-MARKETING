---
created: 2026-01-27T19:47
updated: 2026-01-27T19:47
---
# 🚀 Comandos Git - Prontos para Copiar e Colar

## ⚡ Setup Inicial (EXECUTE PRIMEIRO)

### 1. Copiar Imagens

```bash
cd "C:\Users\pedro\Área de Trabalho\Obsidian Empresa\19 - Marketing\REPOSITÓRIO"

mkdir public

xcopy "..\01 - CARROSEL QUEM SOMOS" "public\01 - CARROSEL QUEM SOMOS\" /E /I /Y
xcopy "..\02 - Carrosel o que é o uzzapp" "public\02 - Carrosel o que é o uzzapp\" /E /I /Y
xcopy "..\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA" "public\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA\" /E /I /Y
xcopy "..\04 - COMO USAR IA NA SUA EMPRESA" "public\04 - COMO USAR IA NA SUA EMPRESA\" /E /I /Y
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Testar Localmente

```bash
npm run dev
```

✅ Abra http://localhost:3000 e teste o sistema

---

## 📦 Git e GitHub

### 1. Criar Repositório no GitHub

1. Acesse: **https://github.com/new**
2. **Repository name:** `votacao-uzzai`
3. **Visibility:** Public ou Private
4. **NÃO marque:** "Add a README file"
5. Clique em **"Create repository"**

### 2. Inicializar Git Local

```bash
cd "C:\Users\pedro\Área de Trabalho\Obsidian Empresa\19 - Marketing\REPOSITÓRIO"

git init
git add .
git commit -m "feat: Sistema de votação Next.js completo

- 4 carrosséis organizados
- 25 slides com 70+ opções
- Sistema de avaliação por estrelas
- Comentários opcionais
- Export JSON
- Design responsivo
- Persistência localStorage"
```

### 3. Conectar ao GitHub

**⚠️ SUBSTITUA `SEU-USUARIO` pelo seu usuário do GitHub:**

```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/votacao-uzzai.git
git push -u origin main
```

---

## 🌐 Deploy no Vercel

### Opção A: Via GitHub (Recomendado)

1. Acesse: **https://vercel.com/new**
2. Login com GitHub
3. **Import Git Repository**
4. Selecione `votacao-uzzai`
5. **Project Name:** `votacao-uzzai`
6. **Framework Preset:** Next.js (automático)
7. Clique em **"Deploy"**
8. Aguarde 1-2 minutos
9. ✅ **Copie o link gerado!**

### Opção B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

---

## 🔄 Atualizações Futuras

Sempre que fizer mudanças:

```bash
git add .
git commit -m "feat: descrição da mudança"
git push
```

O Vercel fará deploy automático! 🚀

---

## 📋 Checklist Completo

- [ ] Copiar imagens para `public/`
- [ ] Rodar `npm install`
- [ ] Testar com `npm run dev`
- [ ] Criar repositório no GitHub
- [ ] `git init`
- [ ] `git add .`
- [ ] `git commit -m "..."`
- [ ] `git remote add origin ...`
- [ ] `git push -u origin main`
- [ ] Deploy no Vercel
- [ ] Copiar link
- [ ] Compartilhar com os sócios

---

## 🎯 Link Final

Após o deploy, seu link será algo como:

```
https://votacao-uzzai.vercel.app
```

Ou:

```
https://votacao-uzzai-[random].vercel.app
```

**Personalize em:** Vercel Dashboard → Settings → Domains

---

## 📱 Mensagem WhatsApp (Copie e Cole)

```
🗳️ VOTAÇÃO UZZAI - POSTAGENS INSTAGRAM

Link: https://[SEU-LINK].vercel.app

Como votar:
1. Abra o link
2. Digite seu nome
3. Navegue pelos 4 carrosséis (25 slides)
4. Vote com ⭐ e 💬
5. Exporte o JSON
6. Me envie o arquivo

Prazo: [DEFINA]

Funciona em qualquer dispositivo! 📱💻
```

---

**Pronto! Tudo configurado e pronto para uso!** 🎉
