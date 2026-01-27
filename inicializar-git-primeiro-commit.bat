@echo off
chcp 65001 > nul
echo ========================================
echo   INICIALIZANDO GIT - PRIMEIRO COMMIT
echo ========================================
echo.

:: Verificar se já existe .git
if exist ".git" (
    echo [INFO] Repositorio Git ja inicializado
) else (
    echo [1/3] Inicializando repositorio Git...
    git init
    if errorlevel 1 (
        echo [ERRO] Falha ao inicializar Git
        pause
        exit /b 1
    )
)

:: Adicionar todos os arquivos
echo [2/3] Adicionando arquivos ao staging...
git add .
if errorlevel 1 (
    echo [ERRO] Falha ao adicionar arquivos
    pause
    exit /b 1
)

:: Fazer o primeiro commit
echo [3/3] Criando primeiro commit...
git commit -m "feat: commit inicial - Sistema de votacao UzzAI"
if errorlevel 1 (
    echo [ERRO] Falha ao criar commit
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Repositorio Git inicializado e primeiro commit criado!
echo.
echo PROXIMOS PASSOS:
echo.
echo 1. Criar repositorio no GitHub (se ainda nao criou)
echo 2. Adicionar remote:
echo    git remote add origin https://github.com/[SEU-USUARIO]/[NOME-REPO].git
echo 3. Fazer push:
echo    git branch -M main
echo    git push -u origin main
echo.
echo ========================================
pause

