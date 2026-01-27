@echo off
chcp 65001 >nul
echo ========================================
echo   SETUP COMPLETO - GIT + VERCEL
echo ========================================
echo.

cd /d "%~dp0"

:: 1. Copiar imagens
echo [1/6] Copiando imagens para public/...
if not exist "public" mkdir "public"
xcopy "..\01 - CARROSEL QUEM SOMOS" "public\01 - CARROSEL QUEM SOMOS\" /E /I /Y /Q >nul 2>&1
xcopy "..\02 - Carrosel o que é o uzzapp" "public\02 - Carrosel o que é o uzzapp\" /E /I /Y /Q >nul 2>&1
xcopy "..\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA" "public\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA\" /E /I /Y /Q >nul 2>&1
xcopy "..\04 - COMO USAR IA NA SUA EMPRESA" "public\04 - COMO USAR IA NA SUA EMPRESA\" /E /I /Y /Q >nul 2>&1
echo ✓ Imagens copiadas!

:: 2. Git init
echo.
echo [2/6] Inicializando Git...
git init >nul 2>&1
echo ✓ Git inicializado!

:: 3. Git add
echo.
echo [3/6] Adicionando arquivos...
git add . >nul 2>&1
echo ✓ Arquivos adicionados!

:: 4. Git commit
echo.
echo [4/6] Criando commit...
git commit -m "feat: Sistema de votação Next.js completo" -m "- 4 carrosséis organizados" -m "- 25 slides com 70+ opções" -m "- Sistema de avaliação por estrelas" -m "- Comentários opcionais" -m "- Export JSON" -m "- Design responsivo" -m "- Persistência localStorage" >nul 2>&1
echo ✓ Commit criado!

:: 5. Git branch
echo.
echo [5/6] Configurando branch main...
git branch -M main >nul 2>&1
git remote add origin https://github.com/uzzaidev/DEMO-MARKETING.git >nul 2>&1
echo ✓ Remote configurado!

:: 6. Git push
echo.
echo [6/6] Fazendo push para GitHub...
echo.
echo EXECUTANDO: git push -u origin main
echo.
git push -u origin main

echo.
echo ========================================
echo   CONCLUÍDO!
echo ========================================
echo.
echo ✓ Código no GitHub!
echo ✓ Link: https://github.com/uzzaidev/DEMO-MARKETING
echo.
echo PRÓXIMO PASSO:
echo 1. Acesse: https://vercel.com/new
echo 2. Import from GitHub
echo 3. Selecione: DEMO-MARKETING
echo 4. Clique em Deploy
echo 5. Copie o link e compartilhe!
echo.
echo ========================================
pause
