@echo off
echo PII Scan Report - %date% %time%
echo =================================================
echo.

for %%f in (*.gs) do (
    echo Scanning file: %%f
    rem findstr /R /C:"[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]*\.[a-zA-Z][a-zA-Z]*" "%%f" >nul && echo   Email: Found || echo   Email: None
    findstr /R /C:"[0-9][0-9][0-9][-.]?[0-9][0-9][0-9][-.]?[0-9][0-9][0-9][0-9]" "%%f" >nul && echo   Phone: Found || echo   Phone: None
    findstr /R /C:"[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]" "%%f" >nul && echo   SSN: Found || echo   SSN: None
    findstr /R /C:"[0-9][0-9][0-9][0-9][ -]?[0-9][0-9][0-9][0-9][ -]?[0-9][0-9][0-9][0-9][ -]?[0-9][0-9][0-9][0-9]" "%%f" >nul && echo   Credit Card: Found || echo   Credit Card: None
    echo.
)
