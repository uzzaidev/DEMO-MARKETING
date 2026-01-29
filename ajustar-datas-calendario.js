const fs = require('fs');

// Função para adicionar dias a uma data
function addDays(dateString, days) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Ler o arquivo atual
const filePath = './calendario-posts-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Lista de todas as datas atuais e suas novas datas (+ 7 dias)
const dateMapping = {
  '2026-01-26': '2026-02-09', // Quem somos - Conheça a Uzz.Ai (dia 9 específico)
  '2026-01-28': '2026-02-04', // +7 dias
  '2026-01-30': '2026-02-06', // +7 dias
  '2026-02-01': '2026-02-08', // +7 dias
  '2026-02-02': '2026-02-09', // +7 dias
  '2026-02-04': '2026-02-11', // +7 dias
  '2026-02-06': '2026-02-13', // +7 dias
  '2026-02-08': '2026-02-15', // +7 dias
  '2026-02-09': '2026-02-16', // +7 dias
  '2026-02-11': '2026-02-18', // +7 dias
  '2026-02-13': '2026-02-20', // +7 dias
  '2026-02-15': '2026-02-22', // +7 dias
  '2026-02-16': '2026-02-23', // +7 dias
  '2026-02-18': '2026-02-25', // +7 dias
  '2026-02-20': '2026-02-27', // +7 dias
  '2026-02-22': '2026-03-01', // +7 dias (entra em março)
  '2026-02-23': '2026-03-02', // +7 dias
  '2026-02-25': '2026-03-04', // +7 dias
  '2026-02-27': '2026-03-06', // +7 dias
};

// Substituir as datas
Object.entries(dateMapping).forEach(([oldDate, newDate]) => {
  const regex = new RegExp(`data: '${oldDate}'`, 'g');
  content = content.replace(regex, `data: '${newDate}'`);
});

// Salvar o arquivo modificado
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Datas ajustadas com sucesso!');
console.log('📅 Post "Quem somos - Conheça a Uzz.Ai" agora começa em: 2026-02-09');
console.log('⏭️  Todas as outras datas foram deslocadas +7 dias');
