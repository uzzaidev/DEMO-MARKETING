@echo off
echo ========================================
echo   PREPARANDO SISTEMA DE VOTACAO
echo ========================================
echo.

:: Criar pasta temporaria
echo [1/4] Criando pasta temporaria...
if exist "votacao-uzzai-share" rmdir /s /q "votacao-uzzai-share"
mkdir "votacao-uzzai-share"

:: Copiar HTML (renomeado)
echo [2/4] Copiando arquivo HTML...
copy "votacao-postagens.html" "votacao-uzzai-share\index.html" > nul

:: Copiar pastas de imagens
echo [3/4] Copiando imagens...
xcopy "01 - CARROSEL QUEM SOMOS" "votacao-uzzai-share\01 - CARROSEL QUEM SOMOS\" /E /I /Q > nul
xcopy "02 - Carrosel o que é o uzzapp" "votacao-uzzai-share\02 - Carrosel o que é o uzzapp\" /E /I /Q > nul
xcopy "03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA" "votacao-uzzai-share\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA\" /E /I /Q > nul
xcopy "04 - COMO USAR IA NA SUA EMPRESA" "votacao-uzzai-share\04 - COMO USAR IA NA SUA EMPRESA\" /E /I /Q > nul

:: Criar arquivo README
echo [4/4] Criando instrucoes...
echo VOTACAO UZZAI - POSTAGENS INSTAGRAM > "votacao-uzzai-share\LEIA-ME.txt"
echo. >> "votacao-uzzai-share\LEIA-ME.txt"
echo COMO USAR: >> "votacao-uzzai-share\LEIA-ME.txt"
echo 1. Abra o arquivo "index.html" no navegador >> "votacao-uzzai-share\LEIA-ME.txt"
echo 2. Digite seu nome completo >> "votacao-uzzai-share\LEIA-ME.txt"
echo 3. Navegue pelos 4 carrosseis >> "votacao-uzzai-share\LEIA-ME.txt"
echo 4. Vote com estrelas e comentarios >> "votacao-uzzai-share\LEIA-ME.txt"
echo 5. Clique em "Exportar Resultados (JSON)" >> "votacao-uzzai-share\LEIA-ME.txt"
echo 6. Envie o arquivo JSON gerado >> "votacao-uzzai-share\LEIA-ME.txt"

echo.
echo ========================================
echo   PRONTO!
echo ========================================
echo.
echo Pasta criada: votacao-uzzai-share
echo.
echo PROXIMOS PASSOS:
echo.
echo OPCAO A - Compartilhar por ZIP:
echo   1. Clique com botao direito em "votacao-uzzai-share"
echo   2. Enviar para ^> Pasta compactada
echo   3. Compartilhe o ZIP via WhatsApp/Telegram
echo.
echo OPCAO B - Deploy Vercel:
echo   1. Acesse vercel.com/new
echo   2. Arraste a pasta "votacao-uzzai-share"
echo   3. Clique em Deploy
echo   4. Copie o link e compartilhe
echo.
echo ========================================
pause
