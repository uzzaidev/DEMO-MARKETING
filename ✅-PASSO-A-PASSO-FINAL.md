---
created: 2026-01-27T19:55
updated: 2026-01-27T19:58
---
# ✅ PASSO A PASSO FINAL - 2 Minutos

## 🎯 AÇÃO 1: Git Push (1 minuto)

### **Opção A: Automático (CLIQUE AQUI)**

**Duplo clique em:** `🎯-EXECUTAR-AGORA.bat`

Vai executar tudo automaticamente:
- ✓ Copiar imagens
- ✓ Git init
- ✓ Git add
- ✓ Git commit
- ✓ Git push

### **Opção B: Manual (Se .bat não funcionar)**

Abra PowerShell/CMD NESTA PASTA e cole:

```bash
# Copiar imagens
mkdir public
xcopy "..\01 - CARROSEL QUEM SOMOS" "public\01 - CARROSEL QUEM SOMOS\" /E /I /Y
xcopy "..\02 - Carrosel o que é o uzzapp" "public\02 - Carrosel o que é o uzzapp\" /E /I /Y
xcopy "..\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA" "public\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA\" /E /I /Y
xcopy "..\04 - COMO USAR IA NA SUA EMPRESA" "public\04 - COMO USAR IA NA SUA EMPRESA\" /E /I /Y

# Git
git init
git add .
git commit -m "feat: Sistema de votação Next.js completo"
git branch -M main
git remote add origin https://github.com/uzzaidev/DEMO-MARKETING.git
git push -u origin main
```

---

## 🚀 AÇÃO 2: Deploy Vercel (1 minuto)

### **1. Acesse:**
```
https://vercel.com/new
```

### **2. Login:**
- Login com GitHub/Google

### **3. Import Repository:**
- Clique em **"Import Git Repository"**
- Ou clique em **"Add New..." → "Project"**

### **4. Selecione:**
- Procure: **"uzzaidev/DEMO-MARKETING"**
- Clique em **"Import"**

### **5. Configure (Automático):**
- Project Name: `demo-marketing` (deixe automático)
- Framework Preset: `Next.js` (detectado automaticamente)
- Root Directory: `./` (padrão)

### **6. Deploy:**
- Clique em **"Deploy"**
- Aguarde **~60 segundos**
- ✅ **PRONTO!**

### **7. Copie o Link:**
```
https://demo-marketing.vercel.app
```

---

## 📱 AÇÃO 3: Compartilhar (30 segundos)

### **Mensagem WhatsApp:**

```
🗳️ VOTAÇÃO UZZAI - POSTAGENS INSTAGRAM

Link: https://demo-marketing.vercel.app

Como votar:
1. Abra o link (celular ou PC)
2. Digite seu nome completo
3. Navegue pelos 4 carrosséis
4. Vote com estrelas ⭐ e comentários 💬
5. Clique em "Exportar JSON"
6. Me envie o arquivo JSON

⏰ Prazo: [DEFINA]

Funciona em qualquer dispositivo! 📱💻
```

---

## ✅ CHECKLIST:

- [ ] Executar `🎯-EXECUTAR-AGORA.bat` ou comandos manuais
- [ ] Verificar se apareceu "✓ Código no GitHub!"
- [ ] Abrir https://vercel.com/new
- [ ] Import repository "DEMO-MARKETING"
- [ ] Clicar em Deploy
- [ ] Copiar link gerado
- [ ] Enviar mensagem WhatsApp
- [ ] **CONCLUÍDO!** 🎉

---

## 🆘 PROBLEMAS?

### **"git não reconhecido"**
✅ Instale: https://git-scm.com/downloads

### **"Erro ao fazer push"**
✅ Verifique suas credenciais Git
✅ Rode: `git config --global user.name "Seu Nome"`
✅ Rode: `git config --global user.email "seu@email.com"`

### **"Imagens não aparecem no site"**
✅ Verifique se a pasta `public/` foi criada
✅ Rode `🎯-EXECUTAR-AGORA.bat` novamente

### **"Deploy falhou no Vercel"**
✅ Verifique os logs no Vercel Dashboard
✅ Rode `npm run build` localmente para testar

---

## 🎯 RESUMO:

1. **Duplo clique:** `🎯-EXECUTAR-AGORA.bat`
2. **Acesse:** https://vercel.com/new
3. **Import:** DEMO-MARKETING
4. **Deploy**
5. **Compartilhe o link**

**Total: ~2 minutos!** ⚡

---

**ESTÁ PRONTO! BOA SORTE!** 🚀🎉
