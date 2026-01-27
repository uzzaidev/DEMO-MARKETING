@echo off
echo ========================================
echo   COPIANDO IMAGENS PARA PUBLIC/
echo ========================================
echo.

:: Criar pasta public
echo [1/5] Criando pasta public...
if not exist "public" mkdir "public"

:: Copiar imagens
echo [2/5] Copiando Carrossel 1...
xcopy "..\01 - CARROSEL QUEM SOMOS" "public\01 - CARROSEL QUEM SOMOS\" /E /I /Y /Q

echo [3/5] Copiando Carrossel 2...
xcopy "..\02 - Carrosel o que é o uzzapp" "public\02 - Carrosel o que é o uzzapp\" /E /I /Y /Q

echo [4/5] Copiando Carrossel 3...
xcopy "..\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA" "public\03 -  CARROSSEL 05 COMO USAR IA NA SUA EMPRESA\" /E /I /Y /Q

echo [5/5] Copiando Carrossel 4...
xcopy "..\04 - COMO USAR IA NA SUA EMPRESA" "public\04 - COMO USAR IA NA SUA EMPRESA\" /E /I /Y /Q

echo.
echo ========================================
echo   CONCLUIDO!
echo ========================================
echo.
echo Imagens copiadas para: public/
echo.
echo PROXIMOS PASSOS:
echo 1. Rodar: npm install
echo 2. Testar: npm run dev
echo 3. Commitar: git add . && git commit -m "..."
echo.
echo ========================================
pause
