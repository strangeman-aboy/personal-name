@echo off
cd /d "%~dp0"
echo 正在启动本地预览服务器...
echo 浏览器打开: http://localhost:3000
echo 按 Ctrl+C 停止服务器
npx serve . -p 3000
pause
