REM AI2C Local Development Server Starter
REM ================================================
REM 
REM This script launches a simple Python HTTP server to preview the AI2C site locally.
REM Perfect for quick testing without deploying to GitHub Pages.
REM 
REM QUICK START INSTRUCTIONS:
REM 1. Save this as 'start_server.bat' in your repo root (ai2c.github.io).
REM 2. Double-click the file to run it (or run via Command Prompt/PowerShell).
REM 3. Open your web browser and navigate to: http://localhost:8000/
REM 4. Browse your site! Changes to HTML/CSS/JS will auto-reload on refresh.
REM 5. To stop: Press Ctrl+C in the terminal window and close it.
REM 
REM TROUBLESHOOTING:
REM - Ensure Python 3+ is installed (download from python.org) and added to PATH.
REM - If the path below doesn't match your setup, edit the 'cd /d' line.
REM - For HTTPS or advanced serving, consider tools like 'live-server' via npm.
REM 
REM GitHub Note: Fork/Star this repo if you're exploring AI2C—contributions welcome!
REM ================================================


@echo off
title AI2C Local Server
echo Starting local server on port 8000...
cd /d "C:\Users\nikki\OneDrive\Documents\GitHub\ai2c.github.io"
if errorlevel 1 (
    echo Error: Could not change to directory. Check path.
    pause
    exit /b 1
)
python -m http.server 8000
if errorlevel 1 (
    echo Error: Python server failed to start. Ensure Python is installed.
    pause
)
pause