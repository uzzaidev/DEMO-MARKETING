const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const folders = fs.readdirSync(publicDir)
  .filter(f => fs.statSync(path.join(publicDir, f)).isDirectory())
  .sort();

console.log('📁 Escaneando carrosséis...\n');

const carousels = folders.map((folder, index) => {
  const folderPath = path.join(publicDir, folder);
  const files = fs.readdirSync(folderPath)
    .filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .sort();

  // Determinar categoria baseado no nome da pasta
  let category = 'Geral';
  const folderLower = folder.toLowerCase();

  if (folderLower.includes('quem') || folderLower.includes('uzzai')) {
    category = 'Institucional';
  } else if (folderLower.includes('uzzapp') || folderLower.includes('processo')) {
    category = 'Produto';
  } else if (folderLower.includes('ia') || folderLower.includes('usar')) {
    category = 'Educacional';
  } else if (folderLower.includes('estilo')) {
    category = 'Design';
  }

  // Determinar qualidade (simplificado)
  const quality = files.length >= 10 ? 4 : files.length >= 5 ? 3 : 2;

  console.log(`✅ ${folder}`);
  console.log(`   📊 ${files.length} imagens | Categoria: ${category}\n`);

  return {
    id: index + 1,
    name: folder.replace(/^\d+\s*-\s*/, ''),  // Remove número inicial
    folder: folder,
    description: `Carrossel com ${files.length} slides`,
    slides: files,
    category: category,
    quality: quality,
    fileSize: 'Variado',
    bestFor: category === 'Institucional' ? ['Instagram', 'LinkedIn'] :
             category === 'Produto' ? ['Apresentações', 'Site'] :
             category === 'Educacional' ? ['LinkedIn', 'Blog'] :
             ['Instagram', 'Stories']
  };
});

console.log(`\n🎉 Total: ${carousels.length} carrosséis encontrados\n`);
console.log('📋 Array gerado:\n');
console.log(JSON.stringify(carousels, null, 2));
