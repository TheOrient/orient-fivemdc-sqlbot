
title Bot Restart
@echo off
C:\Windows\System32\mode con cols=50 lines=6 >nul
set /a var=0
COLOR 0B
set EXE=Hello.exe    


:Start
title Orient Bot ( Simdiye kadarki restartlar %var% )
echo -------------------------------------------------
echo ------------- Yeniden Baslatiliyor ( %var% ) -------------
echo ---------------- Bot calistiriliyor -----------------
echo ---------------- Developement By Orient ----------------
echo -------------------------------------------------
set /a var+=1
start node index.js 
timeout /t 7200 >nul     
cls
goto Stop


:Stop
title Orient Bot ( Simdiye kadarki restartlar %var% )
echo -------------------------------------------------
echo ------------- Yeniden Baslatiliyor ( %var% ) -------------
echo ---------------- Bot calistiriliyor -----------------
echo ---------------- Developement By Orient ----------------
echo -------------------------------------------------
timeout /t 7200 >null
taskkill /f /im node.exe >nul
timeout /t 5 >null
cls
goto Start


