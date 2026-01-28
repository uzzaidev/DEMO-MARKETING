# 🌟 Como Usar o Sistema de Votação

## ✅ Acesso Automático

O sistema de votação agora carrega **automaticamente** quando você abre a galeria!

**URL:** http://localhost:3000

---

## 🎯 Como Votar

### 1. **Abra uma Imagem**
- Clique em qualquer card de carrossel
- O lightbox abre mostrando a imagem

### 2. **Vote com Estrelas**
- Na parte inferior da imagem, você verá **5 estrelas** ⭐⭐⭐⭐⭐
- Passe o mouse sobre elas (ficam douradas)
- Clique na estrela correspondente à sua nota (1-5)
- A votação é salva **automaticamente**

### 3. **Navegue e Continue Votando**
- Use as setas **‹ ›** para ver outros slides
- Vote em quantas imagens quiser
- Suas votações ficam salvas no navegador

---

## 📊 Acompanhar Progresso

### **Contador Flutuante**
No canto **inferior direito** você vê:
```
📊 Estatísticas
✅ Avaliadas: X
⭐ Média: X.X/5
```

Atualiza em **tempo real** conforme você vota!

---

## 📥 Exportar Resultados

### **Botão Flutuante Roxo**
- Localização: Canto **inferior direito**
- Ícone: 📥 com texto "Exportar"

### **Ao Clicar:**
Modal abre com 4 opções:

1. **📥 Exportar JSON** 
   - Arquivo estruturado com todas as votações
   - Inclui: caminho da imagem, nota, data/hora
   - Formato: `carousel-ratings-YYYY-MM-DD.json`

2. **📊 Exportar CSV**
   - Planilha compatível com Excel
   - Colunas: Caminho, Nota, Data/Hora
   - Formato: `carousel-ratings-YYYY-MM-DD.csv`

3. **🗑️ Limpar Tudo**
   - Remove TODAS as votações
   - Pede confirmação antes
   - **Ação irreversível!**

4. **✕ Fechar**
   - Fecha o modal sem fazer nada

---

## 💾 Armazenamento

### **LocalStorage**
- Suas votações ficam **salvas no navegador**
- Mesmo se fechar a aba/navegador
- Limpa apenas se você:
  - Clicar em "Limpar Tudo"
  - Limpar dados do navegador manualmente

### **Não Precisa de Login**
- Sistema totalmente **local**
- Não envia dados para servidor
- Privacidade total

---

## 📋 Exemplo de JSON Exportado

```json
{
  "exportDate": "2026-01-27T22:00:00.000Z",
  "totalRatings": 15,
  "averageRating": "4.2",
  "ratings": [
    {
      "imagePath": "07 - CAROUSEL-UZZAI-QUEM-SOMOS/slide_1_opcao_1_liberdade_1769546185824.png",
      "rating": 5,
      "timestamp": "2026-01-27T21:45:30.123Z"
    },
    {
      "imagePath": "06 - CAROUSEL-4-QUEM-E-UZZAI-VARB/uzzai_slide_1_capa_identidade_1769546750138.png",
      "rating": 4,
      "timestamp": "2026-01-27T21:46:15.456Z"
    }
  ]
}
```

---

## 📋 Exemplo de CSV Exportado

```
Caminho da Imagem,Nota,Data/Hora
07 - CAROUSEL-UZZAI-QUEM-SOMOS/slide_1_opcao_1_liberdade_1769546185824.png,5,27/01/2026 21:45:30
06 - CAROUSEL-4-QUEM-E-UZZAI-VARB/uzzai_slide_1_capa_identidade_1769546750138.png,4,27/01/2026 21:46:15
```

---

## 🎨 Visual do Sistema

### **Elementos na Tela:**

```
┌─────────────────────────────────────────┐
│  [Imagem do Carrossel]                  │
│                                          │
│                                          │
│         ⭐⭐⭐⭐⭐                        │
│      (Estrelas de Votação)              │
└─────────────────────────────────────────┘

                           ┌──────────────┐
                           │ 📊 Stats     │
                           │ ✅ X avaliadas│
                           │ ⭐ X.X média  │
                           └──────────────┘
                           
                           ┌──────────────┐
                           │   📥         │
                           │ Exportar    │
                           └──────────────┘
                           (Botão Flutuante)
```

---

## ⌨️ Atalhos

| Ação | Como Fazer |
|------|------------|
| **Abrir imagem** | Clique no card |
| **Votar** | Clique nas estrelas |
| **Próximo slide** | Seta → ou botão ‹ |
| **Slide anterior** | Seta ← ou botão › |
| **Fechar lightbox** | ESC ou botão × |
| **Exportar** | Clique no botão roxo |

---

## 🔧 Solução de Problemas

### **Estrelas não aparecem?**
1. Atualize a página (F5)
2. Limpe o cache (Ctrl+Shift+Delete)
3. Verifique se JavaScript está ativado

### **Votação não salva?**
- Verifique se o navegador permite localStorage
- Modo anônimo pode ter limitações
- Tente outro navegador

### **Botão de exportar não aparece?**
- Espere 2-3 segundos após carregar a página
- O botão aparece no canto inferior direito
- Scroll até o final se necessário

---

## 📈 Fluxo de Trabalho Sugerido

### **Para Avaliar Todos os Carrosséis:**

1. **Acesse a galeria** → http://localhost:3000
2. **Filtre por categoria** (ex: "Institucional")
3. **Abra o primeiro carrossel**
4. **Vote em cada slide** usando as setas →
5. **Feche o lightbox** (ESC ou ×)
6. **Repita** para os outros carrosséis
7. **Exporte os resultados** quando terminar

### **Tempo Estimado:**
- ~10-15 minutos para avaliar todos os carrosséis
- Depende de quantas imagens você quer avaliar

---

## 💡 Dicas

✨ **Vote enquanto navega** - Não precisa avaliar tudo de uma vez  
✨ **Média ajuda** - Veja a média geral para calibrar suas notas  
✨ **Exporte frequentemente** - Backup das suas avaliações  
✨ **Compare depois** - Use o CSV no Excel para análises  
✨ **Estrelas grandes** - Fácil de clicar até em mobile  

---

**Sistema 100% Funcional!** 🚀  
Basta abrir a página e começar a votar!
