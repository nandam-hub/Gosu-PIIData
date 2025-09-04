@echo off
echo Scanning for PII data...
java -cp "gosu\gosu.jar" gw.lang.Gosu PIIScanner.gs
if %ERRORLEVEL% NEQ 0 (
    echo Error running PII scan. Trying alternative method...
    call gosu.bat PIIScanner.gs
)