---
created: 2026-01-27T19:07
updated: 2026-01-27T20:32
---
# 📖 Guia de Uso - Sistema de Votação UzzAI

## 🚀 Como Usar

### 1️⃣ Abrir o Sistema
- Localize o arquivo `votacao-postagens.html` na pasta `19 - Marketing`
- Clique duas vezes para abrir no navegador
- **Pronto!** Não precisa de instalação ou servidor

### 2️⃣ Identificação
1. Digite seu nome completo no campo
2. Clique em "Confirmar"
3. Seu nome ficará salvo (mesmo se fechar o navegador)

### 3️⃣ Votar
1. **Navegue pelos slides** usando:
   - Botões numerados no topo
   - Botões "Anterior" / "Próximo" na parte inferior

2. **Para cada postagem**:
   - ⭐ Dê uma nota de 1 a 5 estrelas (opcional)
   - 💬 Deixe um comentário/feedback (opcional)
   - 👍 Clique em "Votar" para confirmar

3. **Pode votar em múltiplas opções** do mesmo slide!

### 4️⃣ Visualizar Resultados
- **Estatísticas** aparecem no final da página:
  - Total de votos
  - Sócios participantes
  - Média de avaliação
  - Slides disponíveis

### 5️⃣ Exportar Dados
1. Role até o final da página
2. Clique em **"📥 Exportar Resultados (JSON)"**
3. Arquivo será baixado automaticamente
4. Envie o arquivo JSON para consolidar os resultados

---

## 🎯 Estrutura dos Carrosséis

O sistema está organizado em **4 carrosséis** principais:

### **Carrossel 1: Quem Somos UzzAI**
- **6 slides** organizados cronologicamente:
  - Slides 1-5: 3 opções cada
  - Slide 6: 2 opções
  - **17 opções totais** de designs Gemini

### **Carrossel 2: O que é UzzApp**
- **6 slides** com múltiplas opções cada:
  - Slide 1: 2 opções
  - Slide 2: 3 opções
  - Slide 3: 2 opções
  - Slide 4: 1 opção
  - Slide 5: 3 opções
  - Slide 6: 3 opções

### **Carrossel 3: Como Usar IA na Sua Empresa**
- **7 slides** com múltiplas opções cada:
  - Slides 1, 2, 5, 7: 3 opções cada
  - Slides 3, 4, 6: 2 opções cada

### **Carrossel 4: Como Usar IA (Versão 2)**
- **6 slides** com múltiplas opções cada:
  - Slide 1: 3 opções
  - Slides 2, 4, 6: 4 opções cada
  - Slides 3, 5: 3 opções cada

**📊 Total: 25 slides com 80+ opções para votar!**

**Breakdown por carrossel:**
- Carrossel 1: 17 opções (6 slides)
- Carrossel 2: 14 opções (6 slides)
- Carrossel 3: 18 opções (7 slides)
- Carrossel 4: 21 opções (6 slides)

---

## 📊 Estrutura do Arquivo JSON Exportado

```json
{
  "exportDate": "2026-01-27T...",
  "totalVotes": 15,
  "users": ["Pedro", "Maria", "João"],
  "votes": {
    "Pedro_0_0": {
      "user": "Pedro",
      "slide": "Carrossel 1 - Quem Somos UzzAI",
      "option": "Slide 1 - Opção 1: Liberdade",
      "rating": 5,
      "comment": "Gostei muito!",
      "timestamp": "2026-01-27T..."
    }
  },
  "summary": {
    "Carrossel 1 - Quem Somos UzzAI": {
      "Slide 1 - Opção 1: Liberdade": {
        "totalVotes": 3,
        "averageRating": "4.67",
        "ratings": [5, 4, 5],
        "comments": [...]
      }
    }
  }
}
```

---

## ✨ Recursos

✅ **Totalmente offline** - Não precisa de internet
✅ **Dados salvos** - Mesmo fechando o navegador
✅ **Múltiplos votos** - Vote em várias opções
✅ **Notas e comentários** - Feedback detalhado
✅ **Exportação JSON** - Fácil de consolidar
✅ **Visual moderno** - Interface intuitiva
✅ **Responsivo** - Funciona em celular/tablet

---

## 🔧 Trocar de Usuário

Se quiser votar como outro sócio:
1. Clique em **"Trocar Usuário"** (botão vermelho no topo)
2. Digite o novo nome
3. Confirme

---

## 💾 Onde os Dados Ficam Salvos?

Os votos ficam salvos no **localStorage** do navegador. Isso significa:
- ✅ Persistem mesmo fechando o navegador
- ✅ Privados (cada pessoa vota no seu computador)
- ⚠️ Para consolidar, **todos devem exportar o JSON e enviar**

---

## 📋 Checklist de Votação

- [ ] Abrir o arquivo HTML no navegador
- [ ] Identificar-se com nome completo
- [ ] Navegar pelos 4 carrosséis (25 slides no total)
- [ ] Votar nas postagens preferidas de cada carrossel
- [ ] Adicionar notas e comentários (opcional)
- [ ] Exportar resultados em JSON
- [ ] Enviar arquivo JSON para consolidação

---

## 🆘 Problemas Comuns

### Imagens não aparecem
**Solução:** Certifique-se de que o arquivo HTML está na pasta `19 - Marketing` (mesma pasta das imagens)

### Votos não salvam
**Solução:** Verifique se o navegador permite localStorage (não está em modo anônimo)

### Botão "Exportar" não funciona
**Solução:** Alguns navegadores bloqueiam downloads automáticos - permita downloads do arquivo local

---

## 📞 Dúvidas?

Entre em contato com o time de desenvolvimento UzzAI.

---

**Bom feedback!** 🎉
