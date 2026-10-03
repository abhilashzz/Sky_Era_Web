@echo off
cd /d "%~dp0"
title SKYERA - Firebase Auto Deploy
color 0b
echo ========================================================
echo          SKYERA WEB - FIREBASE AUTO DEPLOY
echo ========================================================
echo.
echo [1/3] Opening Google Login in your browser...
echo       Please select: isaacify.info@gmail.com
echo.

call node_modules\.bin\firebase.cmd login:add

echo.
echo [2/3] Building production assets (Vite)...
call npm.cmd run build

echo.
echo [3/3] Deploying to Firebase Hosting (skyera-d3ec2)...
call node_modules\.bin\firebase.cmd deploy --only hosting --project skyera-d3ec2

echo.
echo ========================================================
echo          DEPLOYMENT FINISHED!
echo          Live URL: https://skyera-d3ec2.web.app
echo ========================================================
echo.
pause
